import { useState } from "react";
import { Avatar, RiveryIcon, RiveryRightArrow } from "../../locals/icon";
import { RiveryCardsData } from "../../utils/constant";

const Rivery = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center my-10">
        Made by data pros for data pros
      </h1>

      <div
        className={`grid container mx-auto w-full gap-4 my-10 transition-all duration-1000 ease-linear transform max-lg:hidden`}
        style={{
          gridTemplateColumns: RiveryCardsData.map((card) =>
            activeCard === card.id ? "2fr" : "1fr"
          ).join(" "),
        }}
      >
        {RiveryCardsData.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveCard(card.id)}
            className={`rounded-2xl border p-5 h-[550px] overflow-hidden ${card.bgColor}`}
          >
            <div
              className={`${
                activeCard !== card.id ? "" : "hidden"
              } flex justify-between items-center`}
            >
              <div>
                <h4 className="text-xl font-light text-white">Data</h4>
                <h2 className="text-3xl font-semibold text-white">
                  {card.title}
                </h2>
              </div>
              <RiveryRightArrow />
            </div>

            <div
              className={`${
                activeCard !== card.id ? "invisible" : ""
              } flex justify-center items-center max-w-[800px]`}
            >
              <div className="w-full flex gap-5 items-center">
                <Avatar />
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-white">
                    {card.person}
                  </h4>
                  <p className=" text-base font-medium text-white">
                    Data {card.position}
                  </p>
                </div>
              </div>
              <h1 className="text-xl font-medium text-white">CITIZEN</h1>
            </div>
            {activeCard !== card.id ? (
              <div className={`flex flex-col items-center`}>
                <RiveryIcon />
                <h1 className="text-xl font-semibold text-white pt-10">
                  {card.person}
                </h1>
                <p className="text-xl font-medium text-white">
                  Data Engineer Team Lead
                </p>
                <h1 className="text-5xl font-medium text-white pt-12">
                  CITIZEN
                </h1>
              </div>
            ) : (
              <>
                <div
                  className={`my-10 rounded-3xl flex gap-4 transition-all duration-1000 ease-linear transform w-[800px] ${
                    activeCard !== card.id ? "invisible" : ""
                  }`}
                >
                  {/* <TextRiverIcon width={46} height={46} />  */}
                  <p className="text-base font-normal">
                    {card.extraSubDescription}
                  </p>
                </div>
                <div
                  className={`flex flex-col items-center ${
                    activeCard !== card.id ? "" : "hidden"
                  } `}
                >
                  <RiveryIcon />
                  <h1 className="text-xl font-semibold text-white">
                    {card.person}
                  </h1>
                  <p className="text-xl font-medium text-white">
                    Data {card.position}
                  </p>
                </div>
                <div className=" w-[800px]">
                  <h1 className="text-white font-medium text-2xl mb-3">
                    Data {card.position}
                  </h1>
                  {card.leaders.map((leader, index) => (
                    <div key={index} className="space-y-4 ">
                      <p className="text-white font-medium text-lg">
                        {leader.para}
                      </p>
                      <p className="text-white font-medium text-lg">
                        {leader.description}
                      </p>
                      <p className="text-white font-medium text-lg">
                        {leader.subDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/*Mobile screen*/}

      <div
        className={`flex flex-col container mx-auto w-full gap-4 my-10 transition-all duration-1000 ease-linear transform lg:hidden px-5`}
      >
        {/* {RiveryCardsData.map((card) => (
          <h1>Data {card.position}</h1>
        ))} */}
        {RiveryCardsData.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveCard(card.id)}
            className={`rounded-2xl border p-5  overflow-hidden ${card.bgColor}`}
          >
            <div className={` flex justify-center items-center p-7`}>
              <div className="w-full flex gap-5 items-center flex-col justify-center">
                <h1 className="text-xl font-medium text-white">CITIZEN</h1>
                <Avatar />
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-lg font-medium text-white">
                    {card.person}
                  </h4>
                  <p className=" text-base font-medium text-white">
                    Data {card.position}
                  </p>
                </div>
              </div>
            </div>

            {/* <> */}
            <div
              className={`mb-5 rounded-3xl flex gap-4 transition-all duration-1000 ease-linear transform `}
            >
              <p className="text-base font-normal">
                {card.extraSubDescription}
              </p>
            </div>
            {/* <div className={`flex flex-col items-center `}></div> */}
            {/* <div className=""> */}
            <h1 className="text-white font-medium text-2xl mb-3">
              Data {card.position}
            </h1>
            {card.leaders.map((leader, index) => (
              <div key={index} className="space-y-4 max-w-[725px]">
                <p className="text-white font-medium text-lg">{leader.para}</p>
                <p className="text-white font-medium text-lg">
                  {leader.description}
                </p>
                <p className="text-white font-medium text-lg">
                  {leader.subDescription}
                </p>
              </div>
            ))}
            {/* </div> */}
            {/* </> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Rivery;
