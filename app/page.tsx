"use client";
import Image from "next/image";
import { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <div
        className="h-screen   flex  items-center justify-center overscroll-none
        bg-gradient-to-br from-[var(--color-swb-main)] from-20% to-[var(--color-swb-second)] to-80%"
        onClick={() => setEntered(true)}
      >
        <Image
          src="/LOGO-SWB NB png.png"
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
      <div className="grid grid-cols-12 grid-rows-12 min-h-screen bg-gradient-to-br from-[var(--color-swb-main)] from-20% to-[var(--color-swb-second)] to-80% overscroll-none">
        <div className="col-start-1 col-end-13 row-start-1 row-end-3 ">
          <Header />
        </div>

        <div className="col-start-1 col-end-13 row-start-3 row-end-12">
          <Main />
        </div>
        <div className="  col-start-1 col-end-13 row-start-12 row-end-13">
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
