import Image from "next/image";

const Organicfertilizer = () => {
  return (
    <section className="relative h-[500px] bg-[url(/Element.png)] flex justify-center items-center gap-[40px]">
      <div className="relative z-20 w-[550px]">
        <div className="w-[40vw] font-bold text-[3rem] m-0 p-0 text-gray-900">
          Organic{" "}
          <span className="text-blue-600 m-0 p-0 text-[3rem] font-bold">
            {" "}
            Fertilizer
          </span>
        </div>
        <Image
          src="/Vector.png"
          width={500}
          height={29}
          alt="Vector"
          className="absolute top-[40px] z-[-1]"
        />
        <p className="text-[#000000] text-[0.8rem] mt-2">
        As the demand for sustainable agriculture rises, organic fertilizer has become more than just a greener choice—it’s a game-changing opportunity. At GreenOAK, we champion the use of organic fertilizers to restore soil health, increase crop yields, and reduce environmental harm caused by synthetic chemicals. Our solutions empower farmers and agribusinesses to boost productivity, cut long-term costs, and tap into the premium organic market—turning natural waste into wealth, and farms into thriving, eco-friendly enterprises.
        </p>
        <button className="mt-6 w-[180px] h-14 bg-[#4F9CF9] text-white rounded-md flex justify-center items-center cursor-pointer">
          Read More
        </button>
      </div>
      <Image
        className="w-[400px] h-[300px] bg-[#C4DEFD]"
        src="/fertilizer.png"
        width={400}
        height={300}
        alt="fertilizer"
      />
    </section>
  );
};

export default Organicfertilizer;
