import React from "react";
import Enfant from "./enfant";
import { useState } from "react";

export default function Parent() {
  const [days, setDays] = useState<string[]>([]);
  const addDay = (newDay: string) => {
    setDays((day) => [...day, newDay]);
  };
  const removeDay = (dayToRemove: string) => {
    setDays((day) => day.filter((day) => day !== dayToRemove));
  };

  const training = [
    { day: "lundi", move: "muscle up" },
    { day: "mercredi", move: "pull up" },
    { day: "vendredi", move: "dips" },
    { day: "dimanche", move: "push up" },
  ];

  const traininglist = training.map((train, index) => (
    <Enfant
      key={index}
      day={train.day}
      move={train.move}
      daytoadd={addDay}
      daytoremove={removeDay}
    />
  ));

  return (
    <div>
      <div className="flex items-center justify-center border-4 border-black p-4 m-4 rounded-lg bg-gray-600 text-white">
        {traininglist}
      </div>
      <div>trainings souhaités : {days.join(", ")}</div>
    </div>
  );
}
