import Image from "next/image";

const OurPartners = () => {
  return (
    <section className="relative text-center h-[400px] flex flex-col justify-start items-center px-6">
      <div className="text-[50px] font-bold  mb-[20px]">
        Our Partners
      </div>
      <div className="w-[80vw]">GreenOak and her Partners are a dynamic ecosystem of companies committed to powering Africa’s future through sustainable innovation. United by a shared vision for a cleaner, greener world, our subsidiaries specialize in renewable energy, eco-infrastructure, environmental consulting, and green technology. From solar power systems and energy-efficient construction to waste-to-energy solutions and policy advisory, GreenOak delivers integrated, impact-driven services that help communities, industries, and governments transition to a low-carbon future—sustainably and strategically.
      </div>
      <button className="bg-blue-600 cursor-pointer w-[15vw] h-[10vh] text-white flex items-center justify-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition mt-[30px]">
      Read More
      </button>
    </section>
  );
};

export default OurPartners;
