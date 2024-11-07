import { TopArrow } from "../../locals/icon";
import { AgencyDoingData } from "../../utils/constant";

const SpotagencyDoing = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-6xl font-medium">What we are doing</h1>
        {AgencyDoingData.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex justify-between w-full p-5 rounded-3xl`}
            >
              <div className="w-[30%]">
                <h1 className="text-[40px] font-medium text-black max-w-44">
                  {item.title}
                </h1>
              </div>
              <div className="flex flex-col gap-5 w-[60%]">
                <p className="text-xl font-normal max-w-4xl">
                  {item.description}
                </p>
                <div className="max-w-sm flex flex-wrap gap-3">
                  {AgencyDoingData[0].button.map((btn, index) => (
                    <span
                      key={index}
                      className="border-2 border-black rounded-3xl text-sm font-normal p-2"
                    >
                      {btn.text}
                    </span>
                  ))}
                </div>
                <div className="flex cursor-pointer">
                  <div className="bg-white text-[17px] font-normal p-3 rounded-3xl flex justify-center items-center gap-3">
                    See more
                    <TopArrow width={12} height={12} />
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex justify-end">
                <TopArrow width={46} height={46} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SpotagencyDoing;
