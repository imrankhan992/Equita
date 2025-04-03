import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Logistic from "./components/Logistic/Logistic";
import Cta from "./components/CTA/Cta";
import Quality from "./components/Quality/Quality";
import Articles from "./components/Articles/Articles";
import Plan from "./components/Plans/Plan";
import RecentArticles from "./components/Recent Articles/RecentArticles";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Logistic />

      <Cta />
      {/* <Companies /> */}
      <Quality />
      <Articles />
      <Plan />
     
      <RecentArticles />
      <Map/>
      <Footer/>
    </>
  );
}

export default App;
