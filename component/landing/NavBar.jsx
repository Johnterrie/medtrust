import Image from "next/image"

const NavBar = () => {
  return (
    <nav className="h-[92px] z-20 bg-[#043873] flex justify-between items-center px-24 shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/Icon.png" alt="Logo" width={24} height={24} />
        <div className="text-[#ffffff] font-bold text-2xl">GraceFm SEDA</div>
      </div>
      <ul className="flex justify-between items-center w-[40vw] h-[10vh] text-[#FFFFFF] font-bold">
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">R&D</li>
        <li className="cursor-pointer">Partners</li>
        <li className="cursor-pointer">About Us</li>
      </ul>
    </nav>
  )
}

export default NavBar
