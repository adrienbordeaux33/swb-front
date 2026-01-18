"use client";

import { useState } from "react";
import Audio from "./Audio";
import Horloge from "./Horloge";
import Connexion from "./Connexion";
import Join from "./Join";
import Contact from "./Contact";
import Agenda from "./Agenda";
import Media from "./Media";
import Adhesion from "./Adhesion";

export default function Main() {
  const [JoinUs, setJoinUs] = useState(false);
  const handleClickJoin = () => setJoinUs((prev) => !prev);
  const [ContactUs, setContactUs] = useState(false);
  const handleClickContact = () => setContactUs((prev) => !prev);
  const [OurAgenda, setOurAgenda] = useState(false);
  const handleClickOurAgenda = () => setOurAgenda((prev) => !prev);
  const [TheMedia, setTheMedia] = useState(false);
  const handleClickTheMedia = () => setTheMedia((prev) => !prev);
  const [TheAdhesion, setTheAdhesion] = useState(false);
  const handleClickTheAdhesion = () => setTheAdhesion((prev) => !prev);

  return (
    <div className="main flex justify-center items-center  text-white ">
      <div className=" background absolute inset-0 bg-[url('/logo-swb-png.png')] bg-center bg-cover opacity-10  " />
      <div className="flex flex-col items-center justify-center  min-h-screen">
        {/* <div className=" p-2">
          <Connexion />
        </div> */}

        <div className="menuonhover flex flex-col md:flex-row align-center gap-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          <div className="itemmenu flex-1 text-center w-full md:w-1/4">
            <button onClick={handleClickTheMedia}>Médias</button>
            {TheMedia && <Media />}
          </div>
          <div className="itemmenu flex-1 text-center w-full md:w-1/4">
            <button onClick={handleClickJoin}>Nous rejoindre</button>
            {JoinUs && <Join />}
          </div>
          <div className="itemmenu flex-1  text-center w-full md:w-1/4">
            <button onClick={handleClickTheAdhesion}>Adhésion</button>
            {TheAdhesion && <Adhesion />}
          </div>
          <div className="itemmenu flex-1  text-center w-full md:w-1/4">
            <button onClick={handleClickContact}>Nous Contacter</button>
            {ContactUs && <Contact />}
          </div>

          <div className="itemmenu flex-1  text-center w-full md:w-1/4">
            <button onClick={handleClickOurAgenda}>Agenda</button>
            {OurAgenda && <Agenda />}
          </div>
        </div>
        <div className="flex-1"></div>
        <div className="footer flex flex-row justify-between items-center w-full ">
          {/* <div>
            <Horloge />
          </div> */}
          <div className=" text-white items-center justify-center text-center opacity-80 flex-1 ">
            2014 SWB, Association Sportive loi 1901
          </div>
          {/* <div className="flex items-center justify-end flex-none border-6 border-red-500">
            <Audio />
          </div> */}
        </div>
      </div>
    </div>
  );
}
