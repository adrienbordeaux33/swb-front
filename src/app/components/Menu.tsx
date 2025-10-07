export default function Menu() {
  return (
    <div className="flex flex-col text-white border-4 border-yellow-500 p-4 justify-center ">
      <div className="flex flex gap-8 items-center text-2xl">Menu</div>
      <div className=" flex flex-col gap-6  text-xl pt-8">
        <div>Médias</div>
        <div>Nous Rejoindre</div>
        <div>Nous Contacter</div>
        <div>Agenda</div>
      </div>
    </div>
  );
}
