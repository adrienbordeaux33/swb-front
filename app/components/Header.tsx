import Image from "next/image";
import Connexion from "./Connexion";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-6 text-white border-4 border-gray-500 ">
      <div className="">
        <Image
          src="/LOGO-SWB NB png.png"
          alt="Logo street workout bordeaux"
          width={100}
          height={100}
        />
      </div>
      <div className="text-8xl ">
        <h1>STREET WORKOUT BORDEAUX</h1>
      </div>
      <div>
        <Connexion />
      </div>
    </div>
  );
}
