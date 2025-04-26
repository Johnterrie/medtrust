


const DataPage = () => {
    return (
      <main className="flex flex-col md:flex-row justify-around items-center px-6 py-12 md:px-20 md:py-24 ">
        {/* Left Section */}
        <div className="w-[600px] text-center md:text-left">
          <h1 className="text-3xl w-[40vw] md:text-5xl font-bold leading-tight text-gray-900">
          Helping Communities 
          <div className="text-blue-600"> access Trusted Medicine</div>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">Every Life deserves access to Safe, Reliable, and Genuine Healthcare.</p>
        </div>
        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6 mt-10 md:mt-0 md:ml-12">
          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img src="./Vector.png" alt="Vector" className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">33,768</h1>
              <p className="text-gray-600">Registered</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img src="./Icon (6).png" alt="Clubs" className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">900+</h1>
              <p className="text-gray-600">Communities</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img src="./Icon (5).png" alt="Event Bookings" className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">82,867</h1>
              <p className="text-gray-600">Distribution Channels</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img src="./Icon (4).png" alt="Payments" className="w-10 h-10" />
            <div>
              <h1 className="text-2xl font-bold">102,678</h1>
              <p className="text-gray-600">Farmers/Household</p>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default DataPage;
  