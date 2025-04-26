"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailSubmit = async () => {
    if (!email) return;

    try {
      const response = await axios.post("/api/save-email", { email });
      setStatus("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setStatus("Subscription failed. Try again.");
      console.error("Error saving email:", error);
    }
  };

  return (
    <footer className="flex justify-around bg-[#043873] items-center bg-Black text-Silver w-full h-[328px]">
      <div className=" h-[200px] flex justify-center gap-[5px]">
        <div className=" border border-white w-[50px] h-[50px]  text-[#ffffff] font-extrabold text-[1.5rem] flex items-center justify-center rounded-full">
          C
        </div>
        <div className="text-[#ffffff] pt-[10px] font-extrabold text-[1.5rem]">
          GraceFM SEDA
        </div>
      </div>
      <div className="flex justify-between w-[635px] h-[200px]">
        <ul className="first-ul flex flex-col justify-between w-[160px] h-[200px]">
          <h3 className="font-semibold text-[#ffffff] text-[1.5rem] text-lg">
            Company
          </h3>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            Products
          </li>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            About Us
          </li>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            R&D
          </li>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            Contact Us
          </li>
        </ul>
        <ul className=" flex flex-col justify-between w-[300px] h-[200px]">
          <h3 className="font-semibold text-[#ffffff] text-[1.5rem] text-lg">
            Partners
          </h3>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            GraceFM Seda Services Limited
          </li>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            GreenOAK Business Support
          </li>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            Dibs & Co. Enterprises
          </li>
          <li className="cursor-pointer text-[14px] text-[#ffffff] hover:text-[#4472ab]">
            Green OAK AgriBusiness
          </li>
        </ul>
        <div className="w-[300px] h-[100px]">
          <h1 className="font-semibold text-[1.5rem] text-[#ffffff] text-lg">
            Stay up to date
          </h1>
          <div className="flex gap-2 mt-2">
            <input
              className="w-full h-[50px] bg-[#c9e3ff] pl-2.5 rounded-lg text-black text-[13px] font-bold"
              placeholder="Your Email Address"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleEmailSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
          {status && (
            <p className="text-white mt-2 text-[12px]">{status}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
