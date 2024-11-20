// import { useState } from "react";

import { useState } from "react";
import homeIntegration from "../../assets/data-integration/17-yt-home.webp";

const DataIntegration = () => {
  const [activeButton, setActiveButton] = useState("Database");
  const buttons = ["Database", "Marketing", "CRM", "Analytics"];
  return (
    <>
      <div className="bg-darkBlue-700 h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center flex-col items-center gap-10 py-10">
            <h1 className=" text-white text-5xl font-bold">
              Painless data integration
            </h1>
            <div className="flex gap-0.5 justify-center items-center">
              {buttons.map((button, index) => (
                <>
                  <button
                    key={button}
                    className={`text-white text-base font-medium px-4 py-4 border border-[#6234f7] rounded-xl ${
                      activeButton === button ? " bg-[#ffd300]" : "bg-[#1d024f]"
                    }`}
                    onClick={() => setActiveButton(button)}
                  >
                    {button}
                  </button>
                  {index < buttons.length - 1 && (
                    <>
                      <div className="rounded-full border w-3 h-3 border-[#6234f7]"></div>
                      <div className="w-28 h-[1px] border border-dashed border-[#6234f7]"></div>
                      <div className="rounded-full border w-3 h-3 border-[#6234f7]"></div>
                    </>
                  )}
                  
                </>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="flex gap-3">
          {DataIntegration.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full w-16 h-16 flex justify-center items-center"
            >
              <img src={item.img} alt="homeIntegration" />
            </div>
          ))}
        </div> */}
        <div className="flex gap-3">
          <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
            <img src={homeIntegration} alt="homeIntegration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataIntegration;
