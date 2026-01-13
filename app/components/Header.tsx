import Image from "next/image";
import Connexion from "./Connexion";

export default function Header() {
  return (
    <div
      className="flex items-center p-4 text-white  
    "
    >
      <div className=" p-2 ">
        <Image
          src="/LOGO-SWB NB png.png"
          alt="Logo street workout bordeaux"
          width={100}
          height={100}
        />
      </div>
      <div className="flex items-center  text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl  p-2 flex-grow">
        <h1 className="title p-2 flex-grow">
          {/* <span className="rotword rot1">STREET</span>
          <span className="rotword rot2">WORKOUT</span>
          <span className="rotword rot3">BORDEAUX</span> */}
          <span></span>
        </h1>
      </div>
      {/* <div className=" p-2">
        <Connexion />
      </div> */}
    </div>
  );
}
