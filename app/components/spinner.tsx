import Image from "next/image";

export default function Spinner() {
  return (
    <>
      <div className="w-full h-[100vh]  flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
        <Image
                  src="https://webplentybackend.s3.ap-south-1.amazonaws.com/bjplogo.jpg"
                  
                  alt="BJP"
                  width={80}
                  height={80}
                />
      </div>
    </>
  );
}
