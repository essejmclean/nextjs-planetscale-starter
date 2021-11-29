import { signOut } from "next-auth/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";

const navigation = [
  { name: "Users", href: "#", current: true },
  { name: "Help", href: "#", current: false },
];

const AdminLayout = (props) => {
  return (
    <>
      <div className="min-h-full">
        <div className="flex flex-col flex-1">
          <div className="border-b">
            <div className="relative flex flex-shrink-0 h-16 bg-white">
              <div className="sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 flex justify-between flex-1 px-4">
                <button
                  type="button"
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 px-4 text-gray-400"
                  onClick={() => true}
                >
                  <img
                    className="w-8 h-8 mx-auto"
                    src="/assets/planet-scale.svg"
                    alt="PlanetScale Logo"
                  />
                </button>
                <div className="flex flex-1"></div>
                <div className="md:ml-6 flex items-center ml-4">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:rounded-md lg:hover:bg-gray-50 flex items-center max-w-xs p-2 text-sm bg-gray-100 rounded-full">
                        <UserIcon className="w-6 h-6 rounded-full" />
                        <span className="lg:block hidden text-sm font-medium text-gray-700">
                          <span className="sr-only">Open user menu for </span>
                          {/* {user.name ?? user.email} */}
                        </span>
                        <ChevronDownIcon
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => signOut()}
                              className={clsx(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Logout
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <div className="relative flex flex-shrink-0 h-16 bg-white">
              <div className="sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 flex justify-between flex-1 px-4">
                <div className=" flex flex-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={clsx(
                          item.current
                            ? "border-b text-black"
                            : " hover:border-b  hover:border-gray-200 text-gray-600 ",
                          "group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <main className="flex-1 pb-8">
            <div className=" bg-white">
              <div className="sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 px-4">
                <div className="md:flex md:items-center md:justify-between pt-6 pb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          <h1 className="sm:leading-9 sm:truncate text-xl font-bold leading-7 text-gray-900">
                            {props.title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">{props.children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
