import React from "react";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Trusted from "./components/Trusted";
function Home() {
  const data = {
    name: "Thapa Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Service />
      <Trusted />
    </>
  );
}

export default Home;
