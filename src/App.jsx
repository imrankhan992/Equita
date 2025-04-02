import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Logistic from "./components/Logistic/Logistic";
import Cta from "./components/CTA/Cta";
import Quality from "./components/Quality/Quality";
import Companies from "./components/Companies/Companies";

function App() {
 

  return (
    <>
      <Header />
      <Hero />
      <Logistic />

     

      
          <Cta />
          {/* <Companies /> */}
          <Quality/>

    
     
      
    
    </>
  );
}

export default App;
