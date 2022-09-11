import React, { FunctionComponent } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const GeneralTemplate: FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col justify-between aling-items-center h-screen">
      <header className="md:px-8">
        <Header />
      </header>

      <main className="mt-4 mb-8 max-w-screen-2xl w-full px-2 sm:px-8 mx-auto">
        {children}
      </main>

      <footer className="bg-brand-200 px-8">
        <Footer />
      </footer>
    </div>
  );
};
