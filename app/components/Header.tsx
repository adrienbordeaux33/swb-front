import Image from "next/image";
import Connexion from "./Connexion";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 text-white ">
      <div className="">
        <Image
          src="/swbLogo.png"
          alt="Logo street workout bordeaux"
          width={100}
          height={100}
        />
      </div>
      <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl ">
        <h1>STREET WORKOUT BORDEAUX</h1>
      </div>
      <div>
        <Connexion />
      </div>
    </div>
  );
}
