import Image from "next/image";
import wooLogo from "../../../public/woo-logosvg.svg";

const NavBar = () => {
  return (
    <div
      className="w-full bg-teal-600 flex justify-evenly 
      py-7 text-center
    "
    >
      <div className="w-1/6">
        <Image priority src={wooLogo} alt="Woo logo" />
      </div>
      <div className="w-5/6 ">{/* <p>Small Internet Blog</p> */}</div>
    </div>
  );
};

export default NavBar;
