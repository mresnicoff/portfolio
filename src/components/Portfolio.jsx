import React from "react";
import weather from "../assets/portfolio/weather.png";
import memory from "../assets/portfolio/memory.png";
import dino from "../assets/portfolio/dino.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { FaDiceOne } from "react-icons/fa";

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

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
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
                <button onClick={openURL} value={URL}className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={openURL} value={URL2} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
