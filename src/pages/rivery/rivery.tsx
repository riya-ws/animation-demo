import { useState } from "react";
import {
  Avatar,
  RiveryIcon,
  RiveryRightArrow,
  DownArrowIntegration,
} from "../../locals/icon";
import { RiveryCardsData } from "../../utils/constant";
import { Link } from "react-router-dom";

const Rivery = () => {
  const [activeCard, setActiveCard] = useState<number | null>(1);

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
      <div className="flex flex-col container mx-auto w-full my-10 transition-all duration-1000 ease-linear transform lg:hidden px-5">
        {RiveryCardsData.map((card) => (
          <div>
            {/* Header with title */}
            <div
              className="flex w-full justify-between items-center cursor-pointer"
              key={card.id}
              onClick={() =>
                setActiveCard(activeCard === card.id ? null : card.id)
              }
            >
              <h1 className="text-lg font-semibold py-3">
                Data {card.position}
              </h1>
              <div
                className={`transition-transform duration-1000 ${
                  activeCard === card.id ? "rotate-[-160deg]" : ""
                }`}
              >
                <DownArrowIntegration />
              </div>
            </div>

            {/* Card Content */}
            {activeCard === card.id && (
              <div
                className={`rounded-2xl border p-5 overflow-hidden transition-all duration-300 ease-in-out mb-5 ${card.bgColor}`}
              >
                <div className="flex justify-center items-center p-7">
                  <div className="w-full flex gap-5 items-center flex-col justify-center">
                    <h1 className="text-xl font-medium text-white">CITIZEN</h1>
                    <Avatar />
                    <div className="flex flex-col items-center justify-center">
                      <h4 className="text-lg font-medium text-white">
                        {card.person}
                      </h4>
                      <p className="text-base font-medium text-white">
                        Data {card.position}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-5 rounded-3xl flex gap-4 transition-all duration-1000 ease-linear transform">
                  <p className="text-base font-normal">
                    {card.extraSubDescription}
                  </p>
                </div>

                <h1 className="text-white font-medium text-2xl mb-3">
                  Data {card.position}
                </h1>
                {card.leaders.map((leader, index) => (
                  <div key={index} className="space-y-4 max-w-[725px]">
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
            )}

            {/* Divider */}
            <div className="h-0.5 w-full bg-[#75749c]"></div>
          </div>
        ))}
      </div>


      <div className="container mx-auto my-20 flex flex-col items-center">
        <h1 className="text-4xl max-md:text-xl text-center font-bold pb-3">
          Reference website :{" "}
          <Link
            target="_blank"
            to="https://rivery.io/"
          >
            Demo
          </Link>
        </h1>
        <h2 className="text-xl pb-3 text-center">
          Status: The section functions smoothly and is fully responsive.
        </h2>

      
      </div>
    </>
  );
};

export default Rivery;
