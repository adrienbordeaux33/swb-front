"use client";
import Image from "next/image";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import Main from "./components/Main";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <div
        className="h-screen flex items-center justify-center overscroll-none
        bg-gradient-to-br from-[var(--color-swb-main)] from-20% to-[var(--color-swb-second)] to-80% "
        onClick={() => setEntered(true)}
      >
        <Image
          src="/logo-swb-png.png"
          alt="Logo street workout bordeaux"
          width={800}
          height={800}
          
        />
      </div>
    );
  }

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  return (
    <Provider store={store}>
      <div className="h-screen flex items-center justify-center flex  bg-gradient-to-br from-[var(--color-swb-main)] from-20% to-[var(--color-swb-second)] to-80% overscroll-none  ">
        <div className=" ">
          <div className="">
            <Main />
          </div>
        </div>
      </div>
    </Provider>
  );
}
