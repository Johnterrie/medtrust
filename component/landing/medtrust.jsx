import Image from "next/image";

const MedTrust = () => {
  return (
    <section className="relative h-[400px] bg-[url(/Element.png)] bg-[#043873] flex justify-center items-center px-6">
      <div className="z-20 w-[550px] mr-[30px]">
        <h1 className="text-[2.5rem] font-semibold text-[#ffffff]">
            GreenOAK {" "} <span className="text-[#4F9CF9]"> MedTrust:</span>
        </h1>
        <p className="text-[#ffffff] mt-2">
        Redefining How Medicines Reach Communities <br /> 
        </p>
        <button className="mt-6 w-[180px] h-12 bg-[#4F9CF9] text-white rounded-md flex justify-center items-center cursor-pointer">
          Go to Dashboard
        </button>
      </div>
      <Image src="/dashboard001.png" alt="drugs" width={350} height={350}/>
    </section>
  );
};

export default MedTrust;
