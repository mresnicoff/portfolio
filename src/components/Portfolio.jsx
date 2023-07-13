import React from "react";
import weather from "../assets/portfolio/weather.png";
import memory from "../assets/portfolio/memory.png";
import dino from "../assets/portfolio/dino.png";
import rick from "../assets/portfolio/rick.png";
import countries from "../assets/portfolio/countries.png";
import flightDeck from "../assets/portfolio/flightDeck.png";
import excel from "../assets/portfolio/excel.png";
import gridStatus from "../assets/portfolio/gridstatus.png";


const Portfolio = () => {
  const openURL=(e)=>{window.open(e.target.value, '_blank').focus();}

  const portfolios = [
    {
      id: 1,
      src: weather,
      URL:"https://mresnicoff.github.io/weather",
      URL2:"https://github.com/mresnicoff/weather"
    },
    {
      id: 2,
      src: memory,
      URL:"https://mresnicoff.github.io/memory",
      URL2:"https://github.com/mresnicoff/memory"
    },
    {
      id: 3,
      src: dino,
      URL:"https://mresnicoff.github.io/dinosaurio_chrome",
      URL2:"https://github.com/mresnicoff/dinosaurio_chrome"
    },
    {
      id: 4,
      src: rick,
      URL:"https://mresnicoff.github.io/rickfront",
      URL2:"https://github.com/mresnicoff/rickfront"
    },
        {  id: 5,
      src: countries,
      URL2:"https://github.com/mresnicoff/countriesfront",
    
    },
            {  id: 6,
      src: flightDeck,
      URL:"https://github.com/mresnicoff/FLIGHT-DECK",
      URL2:"https://flight-deck-ten.vercel.app/"
    
    },
                {  id: 7,
      src: excel,
      URL2:"https://github.com/mresnicoff/excelfront",
  
    
    },
  {  id: 8,
src: gridStatus,
URL:"https://github.com/mresnicoff/gridstatus",


},



  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white"
    >
      <div className="max-w-screen-lg py-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-1">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, URL, URL2 }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              {URL &&  <button onClick={openURL} value={URL}className=" w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                  Demo
                </button>}
               {URL2 && <button onClick={openURL} value={URL2} className="px-6 py-1 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
