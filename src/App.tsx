import { Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import type { Itechnologies } from "./components/technologies";

const technologiesFetch = async (): Promise<Itechnologies[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Banner />
      <Suspense fallback={<h2 className="primary-font text-base text-[#7C3AED] text-center py-10 font-semibold">Loading......</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;