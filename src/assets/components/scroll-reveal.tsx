import { useEffect, useRef, useState } from "react";
import { stickyRevealData } from "../../utils/constant";
import stickyReveal from "../../assets/linear.png";

const ScrollReveal = () => {
  // Set default to the "Collaborative" item
  const [currentItem, setCurrentItem] = useState(() => {
    return (
      stickyRevealData.find((item) => item.title === "Collaborative") ||
      stickyRevealData[0]
    );
  });

  const sectionRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [bgGradient, setBgGradient] = useState<string>(
    "linear-gradient(to bottom right, #FF007A, #6A00FF)"
  );

  const gradients: string[] = [
    "linear-gradient(to bottom right, #FF007A, #6A00FF)",
    "linear-gradient(to bottom right, #FFA500, #FFFF00)",
  ];

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      sectionRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top -
            scrollContainer.getBoundingClientRect().top;

          if (sectionTop < scrollContainer.clientHeight / 4

          ) {
            setCurrentItem(stickyRevealData[index]);
            setBgGradient(gradients[index % gradients.length]);
          }
        }
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [gradients]);

  return (
    <>
      <div
        className={`bg-black flex w-full gap-10 my-10 ${
          currentItem.title === "Real time changes"
            ? "bg-black"
            : "bg-[#0f172a]"
        }`}
      >
        <div
          className="overflow-y-auto flex justify-center flex-col space-x-10 p-10 rounded-md container mx-auto"
          ref={scrollContainerRef}
          style={{ height: "600px", overflowY: "scroll" }}
        >
          <div className="flex w-full">
            <div className="flex flex-col gap-10 items-start w-[60%] max-md:w-full mt-[900px] mb-[170px]">
              {stickyRevealData.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full"
                  ref={(el) => (sectionRef.current[index] = el)}
                >
                  <div
                    className={`flex flex-col gap-10 items-start w-[60%] max-md:w-full transition-all duration-500 ${
                      currentItem.title === item.title
                        ? "text-white opacity-100"
                        : "text-gray-400 opacity-50"
                    }`}
                  >
                    <h1 className="text-4xl font-bold">{item.title}</h1>
                    <p className="text-lg font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[40%] flex items-center justify-center max-md:hidden">
              <div
                className={`sticky top-28 w-80 h-80 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 z-10 ${
                  currentItem.title === "Real time changes" ? "" : "bg-gradient"
                }`}
                style={{
                  background:
                    currentItem.title === "Real time changes"
                      ? "none"
                      : bgGradient,
                }}
              >
                {currentItem.title === "Real time changes" && (
                  <img
                    src={stickyReveal}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover rounded-2xl"
                    alt="linear board demo"
                  />
                )}
                <h2 className="text-xl font-bold text-center text-white">
                  {currentItem.title !== "Real time changes" &&
                    currentItem.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollReveal;
