"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { api, baseURL } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
interface KarykartaFormProps {
  onSubmit: (formData: KarykartaFormData) => void;
}

interface KarykartaFormData {
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
type FormValue = {
  name: string;
  address: string;
  mobileNumber: string;
  dob: string;
  religion: string;
  gender: string;
  previousParty?: string;
  mundalId: number;
  role: string;
};

async function PostKarykarta(data: KarykartaFormData) {
  return api
    .post("/karykarta", {
      ...data,
    })
    .then(function (response) {})
    .catch(function (error) {
      toast.error(error.response.data.message);

      console.log(error.response.data.message);
    });
}

const KarykartaForm: React.FC<KarykartaFormProps> = (props) => {
  const [info, setInfo] = useState<KarykartaData>();
  const [load, setLoad] = useState(true);
  const searchParams = useSearchParams();
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(dataParam);
      setInfo(JSON.parse(dataParam));
      setLoad(false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmit: SubmitHandler<FormValue> = (data: any) => {
    postKarykarta(data);
  };
  async function postKarykarta(data: KarykartaFormData) {
    console.log(data);
    return api
      .put(`/karykarta/${info ? info.id : ""}`, {
        ...data,
      })
      .then(function (response) {
        toast(response.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  }
  if (load) return <div> Load...</div>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 p-4 bg-gray-300 rounded-md"
    >
      <label className="block mb-2 font-bold text-gray-700">Name:</label>
      <input
        type="text"
        {...register("name", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.name : ""}
      />

      <label className="block mb-2 font-bold text-gray-700">Address:</label>
      <input
        type="text"
        {...register("address", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.address : ""}
      />

      <label className="block mb-2 font-bold text-gray-700">
        Mobile Number:
      </label>
      <input
        type="text"
        {...register("mobileNumber", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.mobileNumber : ""}
      />

      <label className="block mb-2 font-bold text-gray-700">
        Date of Birth:
      </label>
      <input
        type="date"
        {...register("dob", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.dob : ""}
      />

      <label className="block mb-2 font-bold text-gray-700">Religion:</label>
      <select
        {...register("religion", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.religion : ""}
      >
        <option value="hindu">Hindu</option>
        <option value="muslim">Muslim</option>
        <option value="christian">Christian</option>
        <option value="christian">Skih</option>
        <option value="christian">Jain</option>
        <option value="christian">Jews</option>
        <option value="other">Other</option>
      </select>
      <label className="block mb-2 font-bold text-gray-700">Gender:</label>
      <select
        {...register("gender", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.gender : ""}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <label className="block mb-2 font-bold text-gray-700">
        Previous Party:
      </label>
      <input
        type="text"
        {...register("previousParty")}
        className="w-full p-2 mb-4 border rounded-md"
        defaultValue={info ? info.previousParty : ""}
      />

      <button
        type="submit"
        className="mt-4 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Edit
      </button>
      <Toaster />
    </form>
  );
};

export default KarykartaForm;

interface KarykartaData {
  id: number;
  name: string;
  address: string;
  mobileNumber: string;
  dob: string;
  religion: string;
  gender: string;
  previousParty: string;
  mundalId: number;
  sectorId: number;
  poolingBoothid: number | null;
  role: string;
  mundal: {
    id: number;
    name: string;
  };
  sector: {
    id: number;
    name: string;
    mundalId: number;
  };
  poolingBooth: null; // Assuming 'poolingBooth' is always null in this data
}
