import { useState } from "react";
import { DataIntegrationData } from "../../utils/constant";
import "./data-integration.css";
import { DownArrowIntegration, SearchIntegration } from "../../locals/icon";
const DataIntegration = () => {
  const [activeButton, setActiveButton] = useState("Database");
  const [inputValue, setInputValue] = useState("");
  const buttons = ["Database", "Marketing", "CRM", "Analytics"];

  return (
    <>
      <div className="bg-darkBlue-700 h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center flex-col items-center gap-10 py-16">
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

        <div
          className="scroller data-integration"
          data-animated="true"
          data-direction="left"
          data-speed="slow"
        >
          <div className="scroller__inner_integration">
            {DataIntegrationData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-full w-16 h-16 flex justify-center items-center"
              >
                <img src={item.image} alt={`Integration ${index}`} />
              </div>
            ))}
            {DataIntegrationData.map((item, index) => (
              <div
                key={`duplicate-${index}`}
                className="bg-white rounded-full w-16 h-16 flex justify-center items-center"
              >
                <img src={item.image} alt={`Duplicate Integration ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full mt-10">
          <div className="bg-transparent flex justify-center items-center gap-4 py-4 px-4 border rounded-2xl border-[#6234f7] outline-none ">
            <SearchIntegration />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Find your integration"
              className="text-white bg-transparent outline-none"
            />
            <DownArrowIntegration />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataIntegration;
