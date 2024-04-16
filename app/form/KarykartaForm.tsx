import { SubmitHandler, useForm } from "react-hook-form";
import { api, baseURL } from "../pages/api";
import useSWR from "swr";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Spinner from "../components/spinner";
import Oops from "../components/error";
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
function getAuthToken() {
  return localStorage.getItem("accessToken");
}
async function postKarykarta(data: KarykartaFormData) {
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

const KarykartaForm: React.FC<KarykartaFormProps> = () => {
  const [info, setInfo] = useState(false);
  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        authorization: `${getAuthToken()}`, // Include the token here
      },
    }).then((res) => res.json());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onSubmit: SubmitHandler<FormValue> = (data: any) => {
    postKarykarta(data);
  };
  async function postKarykarta(data: KarykartaFormData) {
    return api
      .post("/karykarta", {
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
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  }
  const { data, error, isLoading } = useSWR(`${baseURL}/mundal`, fetcher);

  if (error)
    return (
      <div>
        <Oops></Oops>
      </div>
    );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  // console.log(data.data[0].name);

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
      />

      <label className="block mb-2 font-bold text-gray-700">Address:</label>
      <input
        type="text"
        {...register("address", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">
        Mobile Number:
      </label>
      <input
        type="text"
        {...register("mobileNumber", { required: true, maxLength: 10 })}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">
        Date of Birth:
      </label>
      <input
        type="date"
        {...register("dob", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <label className="block mb-2 font-bold text-gray-700">Category:</label>
      <select
        {...register("religion", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="General">General</option>
        <option value="Other Backward Class">
          Other Backward Class (O.B.C)
        </option>
        <option value="Scheduled Castes">Scheduled Castes (S.C)</option>
        <option value="Scheduled Tribes">Scheduled Tribes (S.T)</option>
      </select>
      <label className="block mb-2 font-bold text-gray-700">Gender:</label>
      <select
        {...register("gender", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
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
      />

      <label className="block mb-2 font-bold text-gray-700">Mundal:</label>
      <select
        {...register("mundalId", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
      >
        {!isLoading ? (
          data && data.data ? (
            data.data.map((info: any) => (
              <option value={info.id} key={info.id}>
                {info.name}
              </option>
            ))
          ) : (
            <option value="" key="no-data">
              No data available
            </option>
          )
        ) : (
          <option value="" key="loading">
            Loading...
          </option>
        )}
      </select>

      <label className="block mb-2 font-bold text-gray-700">Role:</label>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <select
            {...register("role", { required: true })}
            className="w-full p-2 mb-4 border rounded-md"
          >
            <option value="karyakarta">कार्यकर्ता</option>
            <option value="adhyaksha">अध्यक्ष</option>
            <option value="upaadhyaksha">उपाध्यक्ष</option>
            <option value="mahamantri">महामन्त्री</option>
            <option value="mantri">मंत्री</option>
            <option value="koshadhyaksha">कोषाध्यक्ष</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 p-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
      <Toaster />
    </form>
  );
};

export default KarykartaForm;
