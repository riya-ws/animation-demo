import { Avatar, RiveryIcon, RiveryRightArrow, TextRiverIcon } from "../../locals/icon";

const Rivery = () => {
  return (
    <>
      <div className="w-[30%]">
        <div className="bg-[#32046d] rounded-2xl border p-5 space-y-5">
          <div className="flex justify-between items-center mb-20">
            <div>
              <h4 className="text-xl font-light text-white">Data</h4>
              <h2 className="text-3xl font-semibold text-white">Engineers</h2>
            </div>
            <RiveryRightArrow />
            {/* <Avatar /> */}
          </div>
          <div className="bg-yellow-400 p-4 rounded-3xl flex gap-4">
            {/* <TextRiverIcon /> */}
            <TextRiverIcon width={46} height={46} />
            <p className="">
              Rivery’s{" "}
              <span className="text-[#6234f7]">
                {" "}
                out-of-the-box starter kits{" "}
              </span>{" "}
              are amazing. They helped us build our initial data pipelines
              really fast and meet our objectives right out of the gate.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <RiveryIcon />
            {/* <RiveryIcon
              width={46}
              height={46}
              className={`transition-transform duration-1000 ${
                activeCardIndex === dataIndex ? "rotate-[-80deg]" : ""
              }`}
            /> */}
            <h1 className="text-xl font-semibold text-white">Romilly Hills</h1>
            <p className="text-xl font-medium text-white">
              Data Engineer Team Lead
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-white font-medium text-2xl">Data Leaders</h1>
            <p className="text-white font-medium text-lg">
              Cut hours of dev, maintenance, and upkeep with automated and
              pre-built solutions.
            </p>
            <p className="text-white font-medium text-lg">
              Gain total control over your spend with full visibility into your
              team’s consumption – based on value, not rows.
            </p>
            <p className="text-white font-medium text-lg">
              Govern with RBAC. Align your ETL tool with the same seamless
              experience you expect from your cloud data warehouse.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rivery;
