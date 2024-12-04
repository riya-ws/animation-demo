import { useEffect, useRef } from "react";
import { SpotagencyScrollData } from "../../utils/constant";
import "./spotagency-infinite-scroll.css";

const SpotagencyInfiniteScroll = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const inner = scroller.querySelector(".scroller__inner_agency");
    if (inner) {
      inner.innerHTML += inner.innerHTML;

      return () => {
        inner.innerHTML = inner.innerHTML.slice(0, inner.innerHTML.length / 2);
      };
    }
  }, []);
  return (
    <>
      <div className="bg-[#e6e6e6] h-screen">
        <div className="container mx-auto ">
          <h1 className="text-7xl max-md:text-4xl font-medium py-7 max-lg:text-center">How do we do it</h1>

          {/*Mobile screen*/}
          <div className="lg:hidden block bg-[#e6e6e6] ">
            <div className="flex flex-col gap-5 mx-5">
              {SpotagencyScrollData.business.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item.bgColor }}
                  className={`rounded-3xl p-5 w-full h-60 ${
                    item.bgColor === "#0d0d0d" ? "text-white" : "text-black"
                  }`}
                >
                  <p className="text-3xl font-medium max-w-60">
                    {item.description}
                  </p>
                </div>
              ))}
              {SpotagencyScrollData.brand.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item.bgColor }}
                  className={`rounded-3xl p-5 w-full h-60 ${
                    item.bgColor === "#ffffff" ? "text-black" : "text-white"
                  }`}
                >
                  <p className="text-3xl font-medium max-w-80">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="bg-[#bba9ff] rounded-3xl p-5 w-full h-60">
                <p className="text-3xl font-medium max-w-80">
                  With heart and love for your brand
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="scroller spot-agency-infinite flex max-md:hidden"
          ref={scrollerRef}
          data-animated="true"
          data-direction="left"
          data-speed="slow"
        >
          <div className="scroller__inner_agency">
            <div className="space-y-5">
              <div className="flex gap-[450px]">
                <div className="flex gap-6">
                  {SpotagencyScrollData.business.map((item, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: item.bgColor }}
                      className={`rounded-3xl p-5 w-[450px] h-60 ${
                        item.bgColor === "#0d0d0d" ? "text-white" : "text-black"
                      }`}
                    >
                      <p className="text-3xl font-medium max-w-80">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-[300px]">
                <div className="bg-[#bba9ff] rounded-3xl p-5 w-[450px] h-60">
                  <p className="text-3xl font-medium max-w-80">
                    With heart and love for your brand
                  </p>
                </div>
                <div className="mt-28 flex gap-5">
                  {SpotagencyScrollData.brand.map((item, index) => (
                    <div
                      key={index}
                      style={{ backgroundColor: item.bgColor }}
                      className={`rounded-3xl p-5 w-[450px] h-60 max-md:hidden ${
                        item.bgColor === "#ffffff" ? "text-black" : "text-white"
                      }`}
                    >
                      <p className="text-3xl font-medium max-w-80">
                        {item.description}
                      </p>
                    </div>
                  ))}
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
