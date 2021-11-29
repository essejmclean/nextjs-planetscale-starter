import { useQuery } from "react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { GetServerSidePropsContext } from "next";
import clsx from "clsx";
import AdminLayout from "@components/Layouts/AdminLayout";
import { getSession } from "@utils/auth/session";
import superagent from "superagent";

const statusStyles = {
  true: "bg-green-100 text-green-800",
  false: "bg-gray-100 text-gray-800",
};

function Page() {
  const router = useRouter();
  const {
    status,
    data: { session },
  } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/", "/", {});
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  const usersQuery = useQuery(["users"], async () => {
    const data = await superagent.get("/api/users").send({
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        emailVerified: true,
        accounts: {
          select: {
            type: true,
            provider: true,
          },
        },
      },
    });

    return data.body;
  });

  if (usersQuery.isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <AdminLayout title="Users">
        {/* {/* Activity list (smallest breakpoint only) */}
        <div className=" sm:hidden">
          <ul
            role="list"
            className="sm:hidden mt-2 overflow-hidden divide-y divide-gray-200"
          >
            {usersQuery?.data &&
              usersQuery.data.map((user) => {
                return (
                  <li key={user.email}>
                    <a className="hover:bg-gray-50 block px-4 py-4 bg-white">
                      <span className="flex items-center space-x-4">
                        <span className="flex flex-1 space-x-2 truncate">
                          <span className="flex flex-col text-sm text-gray-500 truncate">
                            <span className="truncate">{user.email}</span>
                            <span>{user.name}</span>
                            <span
                              className={clsx(
                                statusStyles[
                                  user.emailVerified ? "true" : "false"
                                ],
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                              )}
                            >
                              {user.emailVerified ? "Verified" : "Not Verified"}
                            </span>
                          </span>
                        </span>
                        <ChevronRightIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        {/* Activity table (small breakpoint and up) */}
        <div className="sm:block hidden">
          <div className="sm:px-6 lg:px-8 max-w-6xl px-4 mx-auto">
            <div className="flex flex-col mt-2">
              <div className=" min-w-full overflow-hidden overflow-x-auto align-middle">
                <table className="min-w-full">
                  <thead className="border rounded-md">
                    <tr className="border rounded-md">
                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Email
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                        Name
                      </th>
                      <th className="bg-gray-50 md:block hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                        Providers
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" bg-white">
                    {usersQuery?.data &&
                      usersQuery.data.map((user) => {
                        return (
                          <tr key={user.email} className="bg-white">
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              <div className="flex">
                                <a className="group inline-flex space-x-2 text-sm truncate">
                                  <p className="group-hover:text-gray-900 text-gray-500 truncate">
                                    {user.email}
                                  </p>
                                </a>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-right text-gray-500">
                              {user.name}
                            </td>
                            <td className="whitespace-nowrap md:block hidden px-6 py-4 text-sm text-gray-500">
                              <span
                                className={clsx(
                                  statusStyles[
                                    user.emailVerified ? "true" : "false"
                                  ],
                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                                )}
                              >
                                {user.emailVerified
                                  ? "Verified"
                                  : "Not Verified"}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-right text-gray-500">
                              {user?.accounts && user?.accounts?.length > 0 ? (
                                user.accounts.map((account) => {
                                  return <p>{account.provider}</p>;
                                })
                              ) : (
                                <p>credentials</p>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

// Page.auth = true

export default Page;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session || session?.user?.role !== "admin") {
    return { redirect: { permanent: false, destination: "/" } };
  }

  return {
    props: { session: session },
  };
}
