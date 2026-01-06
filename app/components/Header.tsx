import Image from "next/image";
import Connexion from "./Connexion";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 text-white bg-gradient-to-r from-[var(--color-swb-main)] to-[var(--color-swb-secondary)]">
      <div className="">
        <Image
          src="/swbLogo.png"
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
