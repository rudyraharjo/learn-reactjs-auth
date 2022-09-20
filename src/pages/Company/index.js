import React from "react";
import PageTitle from "../../components/Partial/PageTitle";

export default function Index() {
  return (
    <>
      <PageTitle title="Company"  />
      <div className="container my-6 px-6 w-full rounded">
        <div className="flex flex-col mx-auto">
          <div className="overflow-x-auto shadow sm:rounded-lg">
            <div className="inline-block min-w-full align-middle dark:bg-gray-800">
              <div className="flex justify-between p-4">
                <div className="relative mt-1">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <div className="mt-6 lg:mt-0">
                  <button className="transition duration-150 ease-in-out hover:bg-sky-600 focus:outline-none border bg-sky-700 rounded text-white px-8 py-2 text-sm">
                    <p className="capitalize">Add New</p>
                  </button>
                </div>
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      {/* <th className="p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-search-all"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="checkbox-search-all"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </th> */}
                      <th className="py-3 px-6 text-sm font-medium text-gray-900 text-left uppercase dark:text-gray-400">
                        Code
                      </th>
                      <th className="py-3 px-6 text-sm font-medium text-gray-900 text-left uppercase dark:text-gray-400">
                        Name
                      </th>
                      <th className="py-3 px-6 text-sm font-medium text-gray-900 text-left uppercase dark:text-gray-400">
                        Description
                      </th>
                      <th className="p-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {/* <td className="p-4 w-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-search-1" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td> */}
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        PIDI
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        Penaindie
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        Owner
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {/* <td className="p-4 w-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-search-2"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-search-2" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td> */}
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        ECO
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        PT Ecocare
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        Jasa Pengharum Ruangan
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {/* <td className="p-4 w-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-search-3"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-search-3" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td> */}
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        TBI
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        PT Tukang Bersih Indonesia
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        Jasa Bersih Bersih
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      {/* <td className="p-4 w-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-search-4"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-search-4" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td> */}
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        PEST
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        PT Pestcare
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap dark:text-white">
                        Pest Control
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
