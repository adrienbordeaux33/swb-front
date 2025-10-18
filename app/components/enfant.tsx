import React from "react";
type Props = {
  day: string;
  move: string;
  daytoadd: (newDay: string) => void;
  daytoremove: (dayToRemove: string) => void;
};

export default function Enfant(props: Props) {
  return (
    <div className="flex flex-col border-4 border-black m-2 p-2 rounded-lg bg-gray-400 text-black">
      <div>jour : {props.day}</div>
      <div>mouvement : {props.move}</div>
      <div className="flex flex-row">
        <button
          onClick={() => props.daytoadd(props.day)}
          className="bg-green-900 hover:bg-green-700 text-white font-bold py-1 px-2 rounded m-2 p-2"
        >
          ajouter
        </button>
        <button
          onClick={() => props.daytoremove(props.day)}
          className="bg-red-900 hover:bg-red-700 text-white font-bold py-1 px-2 rounded m-2 p-2"
        >
          supprimer
        </button>
      </div>
    </div>
  );
}
