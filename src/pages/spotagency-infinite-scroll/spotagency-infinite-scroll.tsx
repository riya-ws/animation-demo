import { SpotagencyScrollData } from "../../utils/constant";
import "./spotagency-infinite-scroll.css";

const SpotagencyInfiniteScroll = () => {
  return (
    <>
      <div className="bg-[#e6e6e6] h-screen">
        <div className="container mx-auto ">
          <h1 className="text-7xl font-medium py-7">How do we do it</h1>
        </div>
        <div
          className="scroller spot-agency-infinite flex"
          data-animated="true"
          data-direction="left"
          data-speed="slow"
        >
          <div className="scroller__inner_agency">
            <div className="space-y-5">
              <div className="flex gap-[450px]">
                <div className="flex gap-6">
                  {SpotagencyScrollData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{ backgroundColor: item.bgColor }}
                        className={`rounded-3xl p-5 w-[450px] h-60 ${
                          item.bgColor === "#0d0d0d"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        <p className="text-3xl font-medium max-w-80">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-[300px]">
                <div className="bg-[#bba9ff] rounded-3xl p-5 w-[450px] h-60">
                  <p className="text-3xl font-medium max-w-80">
                    With heart and love for your brand
                  </p>
                </div>
                <div className="mt-28 flex gap-5">
                  <div className="bg-[#ff611d] rounded-3xl p-5 w-[450px] h-60 ">
                    <p className="text-3xl font-medium max-w-80 text-white">
                      At the intersection of technology, research and wow
                    </p>
                  </div>
                  <div className="bg-[#ffffff] rounded-3xl p-5 w-[450px] h-60">
                    <p className="text-3xl font-medium max-w-80">
                      Transparent work process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroller__inner_agency">
            <div className="space-y-5">
              <div className="flex gap-[450px]">
                <div className="flex gap-6">
                  {SpotagencyScrollData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{ backgroundColor: item.bgColor }}
                        className={`rounded-3xl p-5 w-[450px] h-60 ${
                          item.bgColor === "#0d0d0d"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        <p className="text-3xl font-medium max-w-80">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-[300px]">
                <div className="bg-[#bba9ff] rounded-3xl p-5 w-[450px] h-60">
                  <p className="text-3xl font-medium max-w-80">
                    With heart and love for your brand
                  </p>
                </div>
                <div className="mt-28 flex gap-5">
                  <div className="bg-[#ff611d] rounded-3xl p-5 w-[450px] h-60 ">
                    <p className="text-3xl font-medium max-w-80 text-white">
                      At the intersection of technology, research and wow
                    </p>
                  </div>
                  <div className="bg-[#ffffff] rounded-3xl p-5 w-[450px] h-60">
                    <p className="text-3xl font-medium max-w-80">
                      Transparent work process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpotagencyInfiniteScroll;
