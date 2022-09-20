import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  BellIcon,
  CogIcon,
  InformationCircleIcon,
  LogoutIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Navbar(props) {
    // console.log(toggleMenu)
//   let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Header Navigation */}
      {/* flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600 */}
      <div className="flex sticky top-0 justify-between py-3 px-3 md:px-6 space-x-3 md:space-x-6 bg-white border-b z-20">
        <div className="flex items-center flex-1">
          <button
            // onClick={() => setIsOpen(true)}
            onClick={props.onClick}
            type="button"
            value="Open Sidebar"
            className="mr-3 md:hidden flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-gray-600"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>

        <Menu as="div" clasname="relative flex-shrink-0">
          <Menu.Button className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 rounded-full mt-2">
            <BellIcon className="h-6 w-6 rounded-full" aria-hidden="true" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-75"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="absolute right-20 z-20 mt-4 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
              <div>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  <img
                    className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="mx-2 text-sm text-gray-600 dark:text-white">
                    <span className="font-bold" href="#">
                      Sara Salah
                    </span>{" "}
                    replied on the{" "}
                    <span className="font-bold text-blue-500" href="#">
                      Upload Image
                    </span>{" "}
                    artical . 2m
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  <img
                    className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt="avatar"
                  />
                  <p className="mx-2 text-sm text-gray-600 dark:text-white">
                    <span className="font-bold" href="#">
                      Slick Net
                    </span>{" "}
                    start following you . 45m
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                >
                  <img
                    className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                    src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="avatar"
                  />
                  <p className="mx-2 text-sm text-gray-600 dark:text-white">
                    <span className="font-bold" href="#">
                      Jane Doe
                    </span>{" "}
                    Like Your reply on{" "}
                    <span className="font-bold text-blue-500" href="#">
                      Test with TDD
                    </span>{" "}
                    artical . 1h
                  </p>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-100 dark:hover:bg-gray-700 hover:py-3"
                >
                  <img
                    className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                    alt="avatar"
                  />
                  <p className="mx-2 text-sm text-gray-600 dark:text-white">
                    <span className="font-bold" href="#">
                      Abigail Bennett
                    </span>{" "}
                    start following you . 3h
                  </p>
                </a>
              </div>
              <a
                href="#"
                className="block py-2 font-bold text-center text-white bg-blue-500 dark:bg-gray-700 transition-colors duration-300 transform hover:bg-blue-400 hover:underline"
              >
                See all notifications
              </a>
            </div>
          </Transition>
        </Menu>
        <Menu as="div" clasname="relative flex-shrink-0">
          <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-full">
            <img
              className="w-10 h-10 inline rounded-full"
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-75"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="mt-2 focus:outline-none absolute right-5 bg-white rounded-md shadow-lg border w-48">
              <Menu.Item>
                <a
                  href="#"
                  className="flex px-4 py-2 text-sm text-gray-700 transition-colors duration-300 transform hover:bg-blue-400 hover:text-white hover:rounded-tl-md hover:rounded-tr-md"
                >
                  <span className="text-left">
                    <UserIcon className="h-5 w-5" />
                  </span>
                  <span className="mx-2 text-md font-normal">My profile</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="flex px-4 py-2 text-sm text-gray-700 transition-colors duration-300 transform hover:bg-blue-400 hover:text-white"
                >
                  <span className="text-left">
                    <CogIcon className="h-5 w-5" />
                  </span>
                  <span className="mx-2 text-md font-normal">Settings</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="flex px-4 py-2 text-sm text-gray-700 transition-colors duration-300 transform hover:bg-blue-400 hover:text-white"
                >
                  <span className="text-left">
                    <InformationCircleIcon className="h-5 w-5" />
                  </span>
                  <span className="mx-2 text-md font-normal">Help</span>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="#"
                  className="flex px-4 py-2 text-sm text-gray-700 transition-colors duration-300 transform hover:bg-red-400 hover:text-white hover:rounded-bl-md hover:rounded-br-md"
                >
                  <span className="text-left">
                    <LogoutIcon className="h-5 w-5" />
                  </span>
                  <span className="mx-2 text-md font-normal">Logout</span>
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {/* End Header Navigation */}
    </>
  );
}
