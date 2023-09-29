import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'


export function TableData({data}:any) {
 
  return (
    <>
    <div>
      <button className='px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-black'>PDF</button>
      <button className='px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-black'>Excel</button>
      <button className='px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-black'>Add new karyakarta </button>
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
            Role
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Edit
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Delet
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
            <td className="px-6 py-4 whitespace-nowrap border-4"><Pencil className="h-5 w-5" aria-hidden="true"></Pencil></td>
            <td className="px-6 py-4 whitespace-nowrap border-4"><Trash2 className="h-5 w-5" aria-hidden="true"></Trash2></td>
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
