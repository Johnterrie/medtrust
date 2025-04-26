import Image from "next/image";

const  GreenEnergy = () => {
  return (
    <section className="relative h-[500px] w-full bg-[#043873] flex justify-end gap-[50px] items-center">
      <Image className="" src='/green-energy.png' width={300} height={300} alt="green energy" />
      <div className="relative w-[750px] flex flex-col justify-center items-start">
        <h1 className="text-[3.5rem] z-1 font-semibold text-[#ffffff]">
          GreenOak Green Energy
        </h1>
        <Image
          src="/Vector.png"
          width={400}
          height={29}
          alt="Vector"
          className="absolute top-[50px] right-[5vw] z-[0]"
        />
        <p className="text-[#ffffff]  w-[50vw] text-[0.8rem] mt-2">Driven by a passion for sustainability and guided by science, we help individuals and organizations transition to renewable energy with ease, efficiency, and integrity. Whether you're reducing your carbon footprint, lowering energy costs, or building a more resilient future, GreenOAK is your trusted partner in the clean energy revolution.</p>
        <button className="mt-6 w-[180px] h-12 bg-[#4F9CF9] text-white rounded-md flex justify-center items-center cursor-pointer">
          Read More
        </button>
      </div>
    </section>
  );
};

export default GreenEnergy;
