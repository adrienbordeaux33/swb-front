type CardProps = {
  name: string;
  color: string;
  difficulty: string;
};

export default function Card(props: CardProps) {
  return (
    <div className=" flex flex-col m-4 p-4 border-4 border-black rounded-lg bg-gray-800">
      <div>name : {props.name}</div>
      <div>color : {props.color}</div>
      <div>difficulty : {props.difficulty}</div>
    </div>
  );
}
