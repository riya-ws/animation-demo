import { SpotLock, TopArrow } from "../../locals/icon";
import { AgencyDoingData } from "../../utils/constant";

const SpotagencyDoing = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-6xl font-medium my-10">
          What we are doing
        </h1>
        {AgencyDoingData.map((dataItem, dataIndex) => (
          <div
            key={dataIndex}
            className="flex justify-between w-full p-5 rounded-3xl"
            style={{ backgroundColor: dataItem.bgColor
              // marginTop: dataIndex !== 0 ? '-40px' : '0'
              // zIndex: AgencyDoingData.length - dataIndex,
             }}
          >
            <div className="w-[30%]">
              <h2 className="text-[40px] font-medium text-black max-w-60">
                {dataItem.title}
              </h2>
            </div>
            <div className="flex flex-col gap-5 w-[60%]">
              <p className="text-xl font-normal max-w-4xl">
                {dataItem.description}
              </p>
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
                <TopArrow width={46} height={46} />
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
