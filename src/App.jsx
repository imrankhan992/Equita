import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Logistic from "./components/Logistic/Logistic";
import Cta from "./components/CTA/Cta";
import Quality from "./components/Quality/Quality";
import Companies from "./components/Companies/Companies";
import Articles from "./components/Articles/Articles";
import Plan from "./components/Plans/Plan";
import Trends from "./components/Trends/Trends";

function App() {
 

  return (
    <>
      <Header />
      <Hero />
      <Logistic />

     

      
          <Cta />
          {/* <Companies /> */}
          <Quality/>
          <Articles/>
<Plan/>
    <Trends/>
     
      
    
    </>
  );
}

export default App;
