import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const data = [
  {
    department: 'Engineering',
    employess: [
      {
        name: 'John Doe',
        title: 'Front-end Developer',
        department: 'Engineering',
        email: 'john@devui.com',
        role: 'Developer',
        image:
          'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      },
      {
        name: 'Jane Doe',
        title: 'Back-end Developer',
        department: 'Engineering',
        email: 'jane@devui.com',
        role: 'CTO',
        image:
          'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
    ],
  },
  {
    department: 'Marketing',
    employess: [
      {
        name: 'Mark Doe',
        title: 'Digital Marketing',
        department: 'Marketing',
        email: 'mark@devui.com',
        role: 'SEO Manager',
        image:
          'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      },
      {
        name: 'Seb Cook',
        title: 'Social Media',
        department: 'Marketing',
        email: 'seb@devui.com',
        role: 'Social Media Manager',
        image:
          'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      },
    ],
  },
]

export function TableData() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-black">Employees</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit or delete existing
              ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Employee</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Title
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Role
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((dept) => (
                      <React.Fragment key={dept.department}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="col"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                          >
                            {dept.department}
                          </th>
                        </tr>
                        {dept.employess.map((employee) => (
                          <tr key={employee.name}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={employee.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 ">
                                    {employee.name}
                                  </div>
                                  <div className="text-sm text-gray-500">{employee.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900">{employee.title}</div>
                              <div className="text-sm text-gray-500">{employee.department}</div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                              {employee.role}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <a href="#" className="text-gray-500">
                                Edit
                              </a>
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>previous</span>
          </a>

          <div className="hidden items-center gap-x-3 md:flex">
            <a href="#" className="rounded-md bg-gray-100 px-2 py-1 text-sm">
              1
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              2
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              3
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              ...
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              12
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              13
            </a>
            <a href="#" className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100">
              14
            </a>
          </div>
          <a
            href="#"
            className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  )
}
