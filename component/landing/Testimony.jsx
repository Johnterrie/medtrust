import Image from 'next/image';

const Testimony = () => {
  return (
    <main className="w-full h-[100vh] flex flex-col justify-center items-center mb-[100px]">
      {/* Top Section */}
      <div className="flex flex-col items-center text-center py-12">
        <div className="text-[50px] font-semibold text-gray-800 max-w-2xl">
         Testimony
        </div>
        <p className="text-lg text-gray-600 mt-4">
         Hear what our Satisfied Customers have to say!!
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80">
          <Image
            src="/richard.jpg"
            alt="Membership Organisations"
            width={64}
            height={64}
            className='rounded-full'
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Oluwole Akanni
          </h2>
          <p className="text-gray-600 text-center text-[0.8rem] mt-2">
          Using GreenOak’s organic fertilizer completely transformed my farm. Within just one season, I saw a 40% increase in my crop yield, and the soil is healthier than it’s ever been. The best part? I’m saving money and producing food that’s truly chemical-free. This isn’t just fertilizer—it’s a long-term investment in my land and my legacy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80">
          <Image
            src="/richard.jpg"
            alt="National Associations"
            width={64}
            height={64}
            className='rounded-full'
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Ayomide Smith
          </h2>
          <p className="text-gray-600 text-[0.8rem] text-center mt-2">
          I used to struggle with poor soil and low harvests, but ever since I switched to GreenOak’s organic fertilizer, everything changed. My vegetables are thriving, my customers love the natural taste, and I spend less on chemical inputs. It’s affordable, effective, and eco-friendly. I honestly wish I made the switch earlier.”
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-80">
          <Image
            src="/richard.jpg"
            alt="Clubs And Groups"
            width={64}
            height={64}
            className='rounded-full'
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Lara Ogunbanjo
          </h2>
          <p className="text-gray-600 text-[0.8rem] text-center mt-2">
          GreenOak’s organic fertilizer has been a total game changer for our women’s farming group. Not only did it improve our soil quality and harvest sizes, but it also gave us a strong selling point at local markets—people want organic! We’ve increased our profits and built trust in our produce. It’s more than just farming now—it’s empowerment
          </p>
        </div>
      </div>
    </main>
  );
};

export default Testimony;
