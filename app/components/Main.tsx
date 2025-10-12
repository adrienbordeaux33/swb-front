import { useState } from "react";
import Card from "./Card";

export default function Main() {
  const [selectedMoves, setSelectedMoves] = useState<string[]>([]);

  const addMove = (newMove: string) => {
    setSelectedMoves([...selectedMoves, newMove]);
  };

  const removeMove = (moveToRemove: string) => {
    setSelectedMoves(selectedMoves.filter((move) => move !== moveToRemove));
  };

  const move = [
    {
      name: "muscle up",
      color: "red",
      difficulty: "hard",
    },
    {
      name: "pull up",
      color: "blue",
      difficulty: "medium",
    },
    {
      name: "dips",
      color: "yellow",
      difficulty: "medium",
    },
    {
      name: "push up",
      color: "green",
      difficulty: "easy",
    },
  ];

  const contenu = move.map((data, index) => (
    <Card
      key={index}
      name={data.name}
      color={data.color}
      difficulty={data.difficulty}
      addOneMove={addMove}
      removeAllMove={removeMove}
    />
  ));

  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-white  justify-center items-center">
        {contenu}
      </div>
      <div className="flex justify-center items-center text-white m-6 p-6 bg-gray-800 border-4 border-black rounded-lg">
        Liste des mouvements selectionnés : {selectedMoves.join(", ")}
      </div>
    </div>
  );
}
