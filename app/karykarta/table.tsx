import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'


export function TableData({data}:any) {
 
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
            Role
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {
          data.map((info:any)=>(
            <tr key={info.id}>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.address}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.mobileNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.dob}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.religion}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.gender}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.previousParty}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.mundalId}</td>
            <td className="px-6 py-4 whitespace-nowrap text-xs">{info.role}</td>
          </tr>
          ))
        }
      {/* {data?data.map((info:any) =>
            department.employees.map((person:any) => (
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
        ))):""} */}
      </tbody>
    </table>
    </>
  )
}
