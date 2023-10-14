import { useForm, SubmitHandler } from "react-hook-form";
import { api, baseURL } from "../pages/api";
import useSWR from "swr";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
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
  const fetcher = (...args: any) => fetch(args).then((res) => res.json());
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
          
        },
     
        );
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        
      }
      )
      .catch(function (error) {
        toast.error(error.response.data.message);
      });
  }
  const { data, error, isLoading } = useSWR(`${baseURL}/mundal`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
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
        {...register("mobileNumber", { required: true, maxLength:10  },)}
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

      <label className="block mb-2 font-bold text-gray-700">Religion:</label>
      <select
        {...register("religion", { required: true })}
        className="w-full p-2 mb-4 border rounded-md"
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
          data.data.map((info: any) => (
            <option value={info.id} key={info.id}>
              {info.name}
            </option>
          ))
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
