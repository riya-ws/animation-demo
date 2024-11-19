import { useState } from "react";
import { SpotLock, TopArrow } from "../../locals/icon";
import { AgencyDoingData } from "../../utils/constant";
const SpotagencyDoing = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  // const [animateArrow, setAnimateArrow] = useState(false);

  const handleCardClick = (index: any) => {
    setActiveCardIndex((prev) => (prev === index ? null : index)); // Toggle card open/close
  };
  // useEffect(() => {
  //   if (dataIndex !== AgencyDoingData.length - 1) {
  //     setAnimateArrow(true);
  //   }
  // }, [dataIndex]);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-6xl font-medium my-10">
          What we are doing
        </h1>
        {AgencyDoingData.map((dataItem, dataIndex) => (
          <div
            key={dataIndex}
            className={`flex flex-col md:flex-row justify-between w-full p-16 rounded-3xl transition-transform duration-300 ease-in-out  ${
              activeCardIndex === dataIndex
                ? "h-auto"
                : "h-[170px] overflow-hidden "
            }`}
            style={{
              backgroundColor: dataItem.bgColor,
              // zIndex: AgencyDoingData.length - dataIndex, // Higher index for cards at the top
              marginTop: dataIndex === 0 ? 0 : "-40px", // Adjust overlap amount
              position: "relative", // To allow stacking
            }}
            onClick={() => handleCardClick(dataIndex)}
          >
            <div className="w-full md:w-[30%]">
              <h2 className="text-[40px] font-medium text-black">
                {dataItem.title}
              </h2>
            </div>
            <div className="flex flex-col gap-5 w-full md:w-[60%]">
              <p className="text-xl font-normal">{dataItem.description}</p>
              {dataIndex !== AgencyDoingData.length - 1 && (
                <div className="max-w-sm flex flex-wrap gap-3">
                  {dataItem.button.map((btn, btnIndex) => (
                    <span
                      key={btnIndex}
                      className="border-2 border-black rounded-3xl text-sm font-normal p-2"
                    >
                      {btn.text}
                    </span>
                  ))}
                </div>
              )}
              {dataIndex !== AgencyDoingData.length - 1 && (
                <div className="flex cursor-pointer">
                  <div className="bg-white text-[17px] font-normal p-3 rounded-3xl flex justify-center items-center gap-3">
                    See more
                    <TopArrow width={12} height={12} />
                  </div>
                </div>
              )}
            </div>

            <div className="w-[10%] flex justify-end">
              {dataIndex === AgencyDoingData.length - 1 ? (
                <SpotLock />
              ) : (
                // <div className={animateArrow ? "arrow-up-animation" : ""}>
                <TopArrow width={46} height={46} />
                // </div>
              )}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button className="bg-black text-white text-base font-medium p-4 rounded-3xl">
            In progress...
          </button>
        </div>
      </div>
    </>
  );
};

export default SpotagencyDoing;
