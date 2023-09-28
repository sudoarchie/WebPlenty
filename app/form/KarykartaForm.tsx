// components/KarykartaForm.tsx

import { useState } from "react";

interface KarykartaFormProps {
  onSubmit: (formData: KarykartaFormData) => void;
}

export interface KarykartaFormData {
  name: string;
  address: string;
  mobileNumber: string;
  dob: string;
  religion: string;
  gender: string;
  previousParty?: string;
  mundalId?: number | null;
  sectorId?: number | null;
  poolingBoothId?: number | null;
  role: string;
}

const KarykartaForm: React.FC<KarykartaFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<KarykartaFormData>({
    name: "",
    address: "",
    mobileNumber: "",
    dob: "",
    religion: "",
    gender: "",
    previousParty: "None",
    mundalId: null,
    sectorId: null,
    poolingBoothId: null,
    role: "karyakarta", // Default role
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData); 
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md"
    >
      <label className="block mb-2 font-bold text-gray-700">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">
        Mobile Number:
      </label>
      <input
        type="text"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">
        Date of Birth:
      </label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">Religion:</label>
      <select
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="hindu">Hindu</option>
        <option value="muslim">Muslim</option>
        <option value="christian">Christian</option>
        <option value="other">Other</option>
      </select>

      <label className="block mb-2 font-bold text-gray-700">
        Previous Party:
      </label>
      <input
        type="text"
        name="previousParty"
        value={formData.previousParty}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">Mundal:</label>
      <select
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="बाँसडीह">बाँसडीह</option>
        <option value="बेरुआरबारी">बेरुआरबारी</option>
        <option value="मनियर">मनियर</option>
        <option value="सहतवार">सहतवार</option>
        <option value="रेवती">रेवती</option>
      </select>

      <label className="block mb-2 font-bold text-gray-700">Sector:</label>
      <select
        name="sector"
        value={formData.religion}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="s1">sector 1</option>
        <option value="s2">sector 2</option>
        <option value="s3">sector 3</option>
        <option value="s4">sector 4</option>
      </select>

      <label className="block mb-2 font-bold text-gray-700">
        Pooling Booth:
      </label>
      <select
        name="religion"
        value={formData.religion}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="poolingbooth1">Pooling Booth1 </option>
        <option value="poolingbooth2">Pooling Booth2 </option>
        <option value="poolingbooth3">Pooling Booth3 </option>
        <option value="poolingbooth4">Pooling Booth4 </option>
        <option value="poolingbooth5">Pooling Booth5 </option>
      </select>

      <label className="block mb-2 font-bold text-gray-700">Role:</label>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
          >
            <option value="कार्यकर्ता">कार्यकर्ता</option>
            <option value="अध्यक्ष">अध्यक्ष</option>
            <option value="उपाध्यक्ष">उपाध्यक्ष</option>
            <option value="महामन्त्री">महामन्त्री</option>
            <option value="मंत्री">मंत्री</option>
            <option value="कोषाध्यक्ष">कोषाध्यक्ष</option>
            <option value="कार्य समिति सदस्य">कार्य समिति सदस्य</option>
            <option value="शक्ति केंद्र संयोजक">शक्ति केंद्र संयोजक</option>
            <option value="शक्ति केंद्र प्रभारी">शक्ति केंद्र प्रभारी</option>
            <option value="बूथ अध्यक्ष">बूथ अध्यक्ष</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default KarykartaForm;
