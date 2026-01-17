"use client";

import { useState } from "react";
import Audio from "./Audio";
import Horloge from "./Horloge";
import Nousrejoindre from "./Nousrejoindre";
import Connexion from "./Connexion";

export default function Main() {
  const [showNousRejoindre, setShowNousRejoindre] = useState(false);
  const handleClick = () => setShowNousRejoindre((prev) => !prev);

  return (
    <div className="main relative flex h-screen justify-center items-center space-between text-white overflow-hidden">
      <div className=" background absolute inset-0 bg-[url('/logo-swb-png.png')] bg-center bg-cover opacity-10  " />
      <div className="flex flex-col w-screen items-center justify-center p-4 rounded-xl ">
        {/* <div className=" p-2">
          <Connexion />
        </div> */}

        <div className="menuonhover flex flex-row align-center justify-between gap-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl w-full">
          <div className="itemmenu flex-1 text-center">Médias</div>
          <div className="itemmenu flex-1 text-center">
            <button onClick={handleClick}>Nous rejoindre</button>
            {showNousRejoindre && <Nousrejoindre />}
          </div>
          <div className="itemmenu flex-1  text-center">Nous Contacter</div>
          <div className="itemmenu flex-1  text-center">Agenda</div>
        </div>
        <div className="footer flex flex-row justify-between">
          {/* <div>
            <Horloge />
          </div> */}
          <div className="flex text-white items-center justify-center opacity-80">
            2014 SWB, Association Sportive loi 1901
          </div>
          <div>
            <Audio />
          </div>
        </div>
      </div>
    </div>
  );
}
