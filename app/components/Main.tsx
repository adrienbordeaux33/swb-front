import { useState } from "react";
import Card from "./Card";

export default function Main() {
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
    />
  ));

  return (
    <div className="flex flex-row text-white border-4 border-black justify-center items-center">
      {contenu}
    </div>
  );
}
