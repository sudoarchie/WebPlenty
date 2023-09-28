import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'

const data = [
  {
    department: 'Engineering',
    employees: [
      {
        id: 1,
        name: 'John Doe',
        address: '123 Main St',
        mobileNumber: '555-1234',
        dob: '1990-01-01',
        religion: 'Hindu',
        gender: 'Male',
        previousParty: 'None',
        mundalId: 1,
        sectorId: 2,
        poolingBoothId: 3,
        role: 'कार्यकर्ता',
      },
      {
        id: 2,
        name: 'John Doe',
        address: '123 Main St',
        mobileNumber: '555-1234',
        dob: '1990-01-01',
        religion: 'Hindu',
        gender: 'Male',
        previousParty: 'None',
        mundalId: 1,
        sectorId: 2,
        poolingBoothId: 3,
        role: 'कार्यकर्ता',
      },
    ],
  },
  {
    department: 'Marketing',
    employees: [
      {
        id: 1,
        name: 'Seb Cook',
        title: 'Social Media',
        department: 'Marketing',
        email: 'seb@devui.com',
        role: 'Social Media Manager',
        image:
          'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
      },
      {
        id: 2,
        name: 'John Doe',
        address: '123 Main St',
        mobileNumber: '555-1234',
        dob: '1990-01-01',
        religion: 'Hindu',
        gender: 'Male',
        previousParty: 'None',
        mundalId: 1,
        sectorId: 2,
        poolingBoothId: 3,
        role: 'कार्यकर्ता',
      },
    ],
  },
];

export function TableData() {
  return (
    <>
    <div>
      <button className='p-3 border-4 border-black m-5 rounded-lg'>PDF</button>
      <button className='p-3 border-4 border-black m-5 rounded-lg'>Excel</button>
      <button className='p-3 border-4 border-black m-5 rounded-lg'>Add new karyakarta </button>
    </div>
<table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr className='border-4'>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Mobile Number
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date of Birth
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Religion
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Gender
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Previous Party
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Mundal ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sector ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Pooling Booth ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Edit
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Delete
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {data.map((department) =>
            department.employees.map((person) => (
          <tr key={person.id} className=''>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.id}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.name}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.address}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.mobileNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.dob}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.religion}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.previousParty}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.mundalId}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.sectorId}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.poolingBoothId}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4">{person.role}</td>
            <td className="px-6 py-4 whitespace-nowrap border-4"><Pencil className="h-5 w-5" aria-hidden="true"></Pencil></td>
            <td className="px-6 py-4 whitespace-nowrap border-4"><Trash2 className="h-5 w-5" aria-hidden="true"></Trash2></td>
          </tr>
        )))}
      </tbody>
    </table>
    </>
  )
}
