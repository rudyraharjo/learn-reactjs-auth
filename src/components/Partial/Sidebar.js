import React, { useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import {
  AcademicCapIcon,
  AnnotationIcon,
  ChartBarIcon,
  ChartSquareBarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  CogIcon,
  CubeTransparentIcon,
  DesktopComputerIcon,
  InformationCircleIcon,
  LockClosedIcon,
  LogoutIcon,
  OfficeBuildingIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Logout } from "../../store/actions/authAction";
import { useDispatch } from "react-redux";

export default function Sidebar({ toggleMenu, showMenu }) {
  const dispatch = useDispatch();
  let isOpen = showMenu;
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <>
      {/* Sidebar Navigation Desktop */}
      <div className="flex">
        <aside className="w-72 border-r h-screen sticky top-0 overflow-y-scroll md:block hidden bg-white dark:bg-gray-800 px-6 py-4">
          <div className="flex items-center h-14 px-3 ">
            <svg
              aria-label="Home"
              id="logo"
              enableBackground="new 0 0 300 300"
              height={44}
              viewBox="0 0 300 300"
              width={43}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  fill="#4c51bf"
                  d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                />
              </g>
            </svg>
            <span className="text-md font-bold">App Station</span>
          </div>
          <div className="flex-grow">
            <ul className="flex flex-col py-2 space-y-1">
              <li className="px-3">
                <div className="flex flex-row items-center h-8">
                  <div className="text-md font-light text-gray-500 tracking-widest">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="dashboard"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <DesktopComputerIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="notification"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AnnotationIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Notifications
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                    1.2k
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="customer"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <UserGroupIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Customer
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <ClipboardListIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Project
                  </span>
                </Link>
              </li>
              {/* <li>
              <a
                href="#"
                className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <OfficeBuildingIcon className="h-5 w-5 group" />
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Company
                </span>
              </a>
            </li> */}
              <li>
                <Link
                  to="branch"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <CubeTransparentIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Branch
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="department"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <ChartSquareBarIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Department
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="job-position"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <AcademicCapIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Job Position
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="employee"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <UsersIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Employee
                  </span>
                </Link>
              </li>
              <li className="px-3">
                <div className="flex flex-row items-center h-8">
                  <div className="text-md font-light text-gray-500 tracking-widest">
                    Report
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <PresentationChartBarIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Attendances
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <ClipboardCheckIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Checklist Area
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <ChartBarIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Summary
                  </span>
                </a>
              </li>
              <li className="px-3">
                <div className="flex flex-row items-center h-8">
                  <div className="text-md font-light text-gray-500 tracking-widest">
                    Control Panel
                  </div>
                </div>
              </li>
              <li>
                <a
                  onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                  className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <CogIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-widerounded-full">
                    {isOpenDropdown ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </span>
                </a>
                {isOpenDropdown && (
                  <ul className="mt-1">
                    <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                      <a href="#" className="py-2 px-12 block mb-1">
                        Company
                      </a>
                    </li>
                    <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                      <a href="#" className="py-2 px-12 block mb-1">
                        Users
                      </a>
                    </li>
                    <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                      <a href="#" className="py-2 px-12 block mb-1">
                        Roles
                      </a>
                    </li>
                    {/* <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                    <a href="#" className="py-2 px-12 block mb-1">
                      Permissions
                    </a>
                  </li> */}
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <InformationCircleIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Help
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                  className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <LogoutIcon className="h-5 w-5 group" />
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* End Navigation Desktop */}

        {/* Sidebar Mobile Navigation */}
        <Transition show={isOpen}>
          <Dialog
            as="div"
            //   onClose={() => setIsOpen(false)}
            onClose={toggleMenu}
            className="fixed top-0 z-40 md-hidden h-screen overflow-y-auto"
          >
            <Transition.Child
              enter="transition ease-in-out duration-200 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="md:hidden relative z-10 h-full w-72 bg-gray-50 border-r border-gray-200 px-4 py-4">
                <button
                  type="button"
                  // onClick={() => setIsOpen(false)}
                  onClick={toggleMenu}
                  value="Close Sidebar"
                  className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none  focus:ring-gray-600 z-10"
                >
                  <XIcon className="h-5 w-5 text-gray-400" />
                </button>
                <div className="flex items-center h-14 px-3 ">
                  <svg
                    aria-label="Home"
                    id="logo"
                    enableBackground="new 0 0 300 300"
                    height={44}
                    viewBox="0 0 300 300"
                    width={43}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        fill="#4c51bf"
                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                      />
                    </g>
                  </svg>
                  <span className="text-md font-bold">App Station</span>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                  <ul className="flex flex-col py-2 space-y-1">
                    <li className="px-3">
                      <div className="flex flex-row items-center h-8">
                        <div className="text-md font-light text-gray-500 tracking-widest">
                          Menu
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="dashboard"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <DesktopComputerIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Dashboard
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="notification"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <AnnotationIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Notifications
                        </span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                          1.2k
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="customer"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <UserGroupIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Customer
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="project"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <ClipboardListIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Project
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="company"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <OfficeBuildingIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Company
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <CubeTransparentIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Branch
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <ChartSquareBarIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Department
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <AcademicCapIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Job Position
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <UsersIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Employee
                        </span>
                      </a>
                    </li>
                    <li className="px-3">
                      <div className="flex flex-row items-center h-8">
                        <div className="text-md font-light text-gray-500 tracking-widest">
                          Report
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <PresentationChartBarIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Attendances
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <ClipboardCheckIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Checklist Area
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <ChartBarIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Summary
                        </span>
                      </a>
                    </li>
                    <li className="px-3">
                      <div className="flex flex-row items-center h-8">
                        <div className="text-md font-light text-gray-500 tracking-widest">
                          Control Panel
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
                        className="cursor-pointer relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <CogIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Settings
                        </span>
                        <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-widerounded-full">
                          {isOpenDropdown ? (
                            <ChevronUpIcon className="h-5 w-5" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5" />
                          )}
                        </span>
                      </a>
                      {isOpenDropdown && (
                        <ul className="mt-1">
                          <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                            <a href="#" className="py-2 px-12 block mb-1">
                              Users
                            </a>
                          </li>
                          <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                            <a href="#" className="py-2 px-12 block mb-1">
                              Roles
                            </a>
                          </li>
                          {/* <li className="text-sm text-gray-600 hover:bg-blue-500 hover:text-white bg-gray-100 opacity-80 rounded-md transition-colors duration-300 transform ">
                          <a href="#" className="py-2 px-12 block mb-1">
                            Permissions
                          </a>
                        </li> */}
                        </ul>
                      )}
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <InformationCircleIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Help
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="relative flex flex-row items-center h-11 focus:outline-none text-gray-600 border-l-4 border-transparent pr-6 hover:bg-blue-400 hover:text-white transition-colors duration-300 transform rounded-md dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <LogoutIcon className="h-5 w-5 group" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Logout
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Transition.Child>

            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-50"></Dialog.Overlay>
            </Transition.Child>
          </Dialog>
        </Transition>
        {/* End Sidebar Mobile Navigation */}
      </div>
    </>
  );
}
