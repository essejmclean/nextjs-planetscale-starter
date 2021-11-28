import { getCsrfToken, signIn } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import superagent from "superagent";

import prisma from "@prisma";

const MINIMUM_ACTIVITY_TIMEOUT = 850;
type LoginFormValues = {
  csrfToken: string;
  email: string;
  password: string;
};

export default function Page({ csrfToken }) {
  const [isSubmitting, setSubmitting] = React.useState(false);

  const { register, handleSubmit } = useForm();

  const createAdminAccountHandler = async (data: LoginFormValues) => {
    const response = await superagent
      .post("/api/auth/administrator/create")
      .send({
        csrfToken: data.csrfToken,
        email: data.email,
        password: data.password,
      });

    return response.body;
  };
  const onSubmit = async (data: LoginFormValues) => {
    setSubmitting(true);
    try {
      createAdminAccountHandler(data)
        .then((response) => {
          signIn("admin-login", {
            callbackUrl: "/admin",
            email: data.email,
            password: data.password,
          });
        })
        .catch((error) => {});

      setTimeout(() => {
        setSubmitting(false);
      }, MINIMUM_ACTIVITY_TIMEOUT);
    } catch (error) {
      console.error(error);
      //   setError(error)
      setSubmitting(false);
    }
  };

  return (
    <div className="sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen py-12">
      <Head>
        <title>Setup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md py-12 text-center">
        <img
          className="h-16 mx-auto"
          src="/assets/planet-scale.svg"
          alt="PlanetScale Logo"
        />
      </div>
      <div className=" sm:px-6 lg:px-8 flex flex-col justify-center py-12 mt-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md  text-center">
          <p>Welcome to the PlanetScale Next.js Starter App</p>
          <p>Get started by creating an administrative account to setup.</p>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md mt-8">
          <div className="sm:px-10 px-4 py-8 mx-2 rounded-sm">
            <form className=" text-center" onSubmit={handleSubmit(onSubmit)}>
              <input
                name="csrfToken"
                {...register("csrfToken")}
                type="hidden"
                defaultValue={csrfToken}
                hidden
              />
              <div className="">
                <label
                  htmlFor="email"
                  className="text-neutral-400 block text-sm font-medium"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    {...register("email")}
                    className="focus:outline-none focus:placeholder-gray-400 w-full py-3 text-xl font-medium leading-6 text-center placeholder-gray-500 transition duration-150 ease-in-out bg-transparent border-t-0 border-b border-l-0 border-r-0 border-dashed outline-none appearance-none"
                  />
                </div>
              </div>

              <div>
                <div className="mt-8">
                  <label
                    htmlFor="password"
                    className="text-neutral-400 block text-sm font-medium"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    minLength={12}
                    required
                    {...register("password")}
                    className="focus:outline-none focus:placeholder-gray-400 w-full py-3 text-xl font-medium leading-6 text-center placeholder-gray-500 transition duration-150 ease-in-out bg-transparent border-t-0 border-b border-l-0 border-r-0 border-dashed outline-none appearance-none"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-16 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button button__round button__md button__primary w-full"
                >
                  {isSubmitting ? (
                    <img src="/assets/loading.svg" />
                  ) : (
                    <p>Create Account</p>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const maybeAdministrator = await prisma.user.findFirst({
    where: {
      role: "admin",
    },
  });

  if (maybeAdministrator) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { csrfToken: await getCsrfToken({ req: context.req }) },
  };
}
