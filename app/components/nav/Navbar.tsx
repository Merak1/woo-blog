import Image from "next/image";
import wooLogo from "../../../public/woo-logosvg.svg";
import SearchBar from "../search/SearchBar";

const NavBar = () => {
  return (
    <div
      className="w-full bg-teal-600 flex justify-between 
      py-7 text-center
    "
    >
      <div className="w-1/6 flex">
        <Image priority src={wooLogo} alt="Woo logo" />
      </div>
      <div className="w-5/6 ">
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
