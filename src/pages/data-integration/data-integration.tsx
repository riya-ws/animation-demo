import { useState } from "react";
import { DataIntegrationData } from "../../utils/constant";
import "./data-integration.css";
import { DownArrowIntegration, SearchIntegration } from "../../locals/icon";
import { Link } from "react-router-dom";
const DataIntegration = () => {
  const [activeButton, setActiveButton] = useState("Database");
  const [inputValue, setInputValue] = useState("");
  const buttons = ["Database", "Marketing", "CRM", "Analytics"];

  return (
    <>
      <div className="bg-darkBlue-700 h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center flex-col items-center gap-10 py-16">
            <h1 className=" text-white text-5xl max-md:text-3xl font-bold text-center">
              Painless data integration
            </h1>
            <div className="flex gap-0.5 max-md:flex-col justify-center items-center w-full max-md:px-5">
              {buttons.map((button, index) => (
                <>
                  <button
                    key={button}
                    className={`text-white text-base font-medium px-4 py-4 border border-[#6234f7] rounded-xl max-md:w-full ${
                      activeButton === button ? " bg-[#ffd300]" : "bg-[#1d024f]"
                    }`}
                    onClick={() => setActiveButton(button)}
                  >
                    {button}
                  </button>
                  {index < buttons.length - 1 && (
                    <>
                      <div className="rounded-full border w-3 h-3 border-[#6234f7]"></div>
                      <div className="w-28 max-lg:w-16 h-[1px] border border-dashed border-[#6234f7]"></div>
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
        <div className="flex justify-center items-center w-full py-10 bg-darkBlue-700">
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

      <div className="container mx-auto my-20 flex flex-col items-center">
        <h1 className="text-4xl max-md:text-xl text-center font-bold pb-5">
          Reference website :{" "}
          <Link
            target="_blank"
            to="https://rivery.io/product/data-transformation/"
          >
            Demo
          </Link>
        </h1>
        <h2 className="text-xl text-center">
          Status: The section functions smoothly and is fully responsive.
          <p>
            <b>Note </b>: Please click on the demo to navigate to the reference demo.
          </p>
        </h2>
      </div>
    </>
  );
};

export default DataIntegration;
