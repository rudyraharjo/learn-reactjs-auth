import {
  ChevronRightIcon,
  DesktopComputerIcon,
  EyeIcon,
  PencilAltIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      {/* Page Heading */}
      <div className="py-4 px-6 shadow-sm">
        <h2 className="text-lg text-gray-900 sm:text-3xl sm:truncate">
          Customers
        </h2>
        <div className="flex justify-between">
          <div className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <DesktopComputerIcon className="mr-2 w-4 h-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  <Link
                    to="/"
                    onClick={(event) => event.preventDefault()}
                    className="ml-1 text-sm text-gray-400 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Customer
                  </Link>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* End Page Heading */}

      {/* Content */}
      <div className="bg-white shadow-lg rounded-lg border border-slate-200 my-6 mx-6">
        {/* <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Customers</h2>
        </header> */}

        <div className="flex justify-between">
          <div className="px-5 py-4 border-b border-slate-100">
            <div className="flex flex-col mt-3 sm:flex-row">
              <div className="flex">
                <div className="relative">
                  <select className="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-500 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                  </select>
                </div>
                <div className="relative">
                  <select className="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-500 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div className="relative block mt-2 sm:mt-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-500 fill-current"
                  >
                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                  </svg>
                </span>
                <input
                  placeholder="Search"
                  className="block w-full py-2 pl-8 pr-6 text-sm text-gray-500 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-4 sm:py-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PencilAltIcon
                className="-ml-1 mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Add New
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Branch
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Group
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Status
                </th>
                <th scope="col" className="relative py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  {/* <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a> */}
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110 cursor-pointer">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110 cursor-pointer">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110 cursor-pointer">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Jakarta III
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  F & B
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Bensu
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  bensu@su.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  55775744
                </td>
                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                  Active
                </td>
                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-blue-600 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* End Content */}
    </>
  );
}
