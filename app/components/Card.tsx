type CardProps = {
  name: string;
  color: string;
  difficulty: string;
  addOneMove: (newMove: string) => void;
  removeAllMove: (moveToRemove: string) => void;
};

export default function Card(props: CardProps) {
  return (
    <div className=" flex flex-col items-center m-4 p-4 border-4 border-black rounded-lg bg-gray-800">
      <div>name : {props.name}</div>
      <div>color : {props.color}</div>
      <div>difficulty : {props.difficulty}</div>
      <div>
        <button
          className="m-2 btn-swb-main text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            props.addOneMove(props.name);
            console.log("selected move : ", props.name);
          }}
        >
          Select
        </button>
        <button
          className="m-2 btn-swb-main text-white font-bold py-2 px-4 rounded"
          onClick={() => props.removeAllMove(props.name)}
        >
          UnSelect
        </button>
      </div>
    </div>
  );
}
