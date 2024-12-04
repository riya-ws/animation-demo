import { useEffect, useRef, useState } from "react";
import { SunsetData } from "../../utils/constant";
import "./sunset-ui.css"
const SunsetAi = () => {
  const [currentItem, setCurrentItem] = useState(SunsetData[0]); // Initialize with the first item
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // Array to store section refs
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      let activeIndex = 0;

      // Check each section's position relative to the container
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top -
            scrollContainer.getBoundingClientRect().top;

          // Check if the section is in view (adjust threshold as needed)
          if (sectionTop <= scrollContainer.clientHeight / 2) {
            activeIndex = index;
          }
        }
      });

      // Update the current item if it changes
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
    <div
      ref={scrollContainerRef}
      className="container mx-auto overflow-y-auto h-screen"
    >
      <div className="flex justify-center items-center flex-col py-10">
        <h1 className="text-3xl font-semibold mb-4">Why BeforeSunset AI?</h1>
        <p className="text-base font-medium text-[#222718A3] max-w-96 text-center">
          Stay organized, focused, and in control with features tailored to your
          needs.
        </p>

        <div className="container mx-auto overflow-hidden h-screen flex">
          {/* Right Section: Scrolling Content */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto h-screen scrollbar-hidden"
          >
            <div className="flex flex-col items-start px-10">
              {SunsetData.map((item, index) => {
                const isActive = currentItem.title === item.title;

                return (
                  <div
                    key={index}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className={`mb-16 transition-opacity duration-300 mt-32 ${
                      isActive ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <div className="bg-[#e6f3f4] text-[#48b3ba] p-2 rounded-lg text-sm font-semibold w-24 mb-3">
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
              className="w-[780px] h-[468px] rounded-3xl transition-transform duration-500"
              src={currentItem.image}
              alt="sunset-ai"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunsetAi;
