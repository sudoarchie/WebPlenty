import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
<table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
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
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {data.map((department) =>
            department.employees.map((person) => (
          <tr key={person.id}>
            <td className="px-6 py-4 whitespace-nowrap">{person.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.address}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.mobileNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.dob}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.religion}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.previousParty}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.mundalId}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.sectorId}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.poolingBoothId}</td>
            <td className="px-6 py-4 whitespace-nowrap">{person.role}</td>
          </tr>
        )))}
      </tbody>
    </table>
    </>
  )
}
