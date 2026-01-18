export default function Contact() {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl w-full text-black text-xs md:text-sm lg:text-base">
      <div>Par Téléphone au 06 18 32 21 49 </div>
      <div>Par Mail : streetworkoutbordeaux@hotmail.com </div>
      <div className="flex flex-col">
        <a
          href="https://www.instagram.com/streetworkoutbordeaux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border-6 border-[var(--color-swb-main)] bg-[var(--color-swb-second)] rounded-lg px-6 py-2 mt-6 text-white hover:scale-120 transition-transform">
            Sur Instagram
          </button>
        </a>
      </div>
    </div>
  );
}
