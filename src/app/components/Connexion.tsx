"use client";
import { useState } from "react";

export default function Connexion() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="px-6 py-3 bg-[var(--color-swb-main)] text-white rounded-xl hover:opacity-80 transition-opacity border-2 border-white"
        onClick={() => setShowModal(true)}
      >
        Connexion
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 text-white">
          <div className="bg-[var(--color-swb-main)] p-6 rounded-xl w-196  mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl ">Connexion</h2>
              <button
                className=" text-[var(--color-swb-second)]hover:text-white text-8xl"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium  mb-1">
                  pseudo
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="inscris ton pseudo ici"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="inscris ton mail ici"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="inscris ton mot de passe ici"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[var(--color-swb-second)] text-white py-2 px-4 rounded-md hover:bg-[var(--color-swb-main)] transition"
                >
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
