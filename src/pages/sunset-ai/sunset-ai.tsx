import { useEffect, useRef, useState } from "react";
import { SunsetData } from "../../utils/constant";

const SunsetAi = () => {
  const [currentItem, setCurrentItem] = useState(SunsetData[0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      let activeIndex = 0;
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top -
            scrollContainer.getBoundingClientRect().top;

          if (sectionTop <= scrollContainer.clientHeight / 2) {
            activeIndex = index;
          }
        }
      });

      if (currentItem !== SunsetData[activeIndex]) {
        setCurrentItem(SunsetData[activeIndex]);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [currentItem]);

  return (
    <div className="container mx-auto flex justify-center items-center flex-col py-10">
      <h1 className="text-3xl font-semibold mb-4">Why BeforeSunset AI?</h1>
      <p className="text-base font-medium text-[#222718A3] max-w-96 text-center">
        Stay organized, focused, and in control with features tailored to your
        needs.
      </p>
      <div className="flex lg:overflow-hidden h-screen max-lg:flex-col">
        {/* Right Section: Scrolling Content */}
        <div
          ref={scrollContainerRef}
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="flex-1 lg:overflow-y-auto h-screen py-10"
        >
          <div className="flex flex-col items-start px-10">
            {SunsetData.map((item, index) => {
              const isActive = currentItem.title === item.title;

              return (
                <div
                  key={index}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`mb-72 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-50`"
                  } ${index === 0 ? "pt-44" : ""} ${
                    index === length - 1 ? "pb-96" : ""
                  }`}
                >
                  <div className="bg-[#e6f3f4] text-[#48b3ba] p-2 rounded-lg text-sm font-semibold max-w-32 mb-3">
                    {item.subtitle}
                  </div>
                  <h1
                    className={`text-4xl font-semibold mb-6 ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h1>
                  <p className="text-base font-medium max-w-96">
                    {item.paragraph}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Left Section: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            className="w-[880px] h-[468px] rounded-3xl transition-transform duration-500"
            src={currentItem.image}
            alt="sunset-ai"
          />
        </div>
      </div>
    </div>
  );
};
export default SunsetAi;
