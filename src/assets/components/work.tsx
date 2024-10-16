import { useEffect, useState, CSSProperties } from "react";
import workSection from "../work.png";

const workData = [
  {
    title: "Create Your Account",
    description:
      "Sign up in minutes and start your journey to smarter financial management with Fintro.",
    image: workSection,
  },
  {
    title: "Link Your Bank Accounts",
    description:
      "Securely connect all your bank accounts and credit cards for a complete financial overview.",
    image: workSection,
  },
  {
    title: "Begin Tracking Your Spending",
    description:
      "Automatically track your expenses and stay on top of your finances effortlessly.",
    image: workSection,
  },
  {
    title: "Analyse Your Spends",
    description:
      "Create custom budgets, monitor spending, and get alerts when limits are near.",
    image: workSection,
  },
  {
    title: "Explore with Smart Search",
    description:
      "Quickly find any transaction or insight with Fintro’s AI-powered smart search.",
    image: workSection,
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  // const [flexDirection, setFlexDirection] = useState("row");
  const [flexDirection, setFlexDirection] =
    useState<CSSProperties["flexDirection"]>("row");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );
    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardElements.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  useEffect(() => {
    const updateFlexDirection = () => {
      if (window.innerWidth < 768) {
        setFlexDirection("column");
      } else {
        setFlexDirection("row");
      }
    };

    updateFlexDirection(); // Set initial value

    window.addEventListener("resize", updateFlexDirection);
    return () => window.removeEventListener("resize", updateFlexDirection);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col my-28">
      <h1 className="text-3xl font-bold text-black">How it Works</h1>
      <p className="text-[#6b6875] text-xl font-medium max-md:text-center">
        Experience personalised insights and effortless financial management.
      </p>
      <div className="flex flex-col mt-16">
        {workData.map((item, index: number) => {
          const isActive = activeIndex === index;
          const scaleVal = isActive ? 1.0 : 0.8;
          const translateY = isActive ? `-20px` : `0`;

          // Define styles for each card
          const stickyStyle: CSSProperties = {
            alignItems: "center",
            borderRadius: "40px",
            display: "flex",
            flex: "none",
            flexDirection: "row",
            gap: "60px",
            height: "min-content",
            justifyContent: "center",
            maxWidth: "1280px",
            minHeight: "75vh",
            padding: "40px",
            position: "sticky",
            top: "80px",
            width: "100%",
            willChange: "transform",
            zIndex: 1,
          };
          const topValue = 40 + index * 5;

          return (
            <div
              key={index}
              className={`h-[500px] mb-14 flex justify-center items-center gap-60 max-md:flex-col account-wrapper`}
              style={{
                ...stickyStyle,
                flexDirection,
                transform: `scale(${scaleVal}) translateY(${translateY})`,
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: isActive ? 1 : 0.8,
                top: `${topValue}px`,
              }}
              data-index={index}
            >
              <img
                className="border-[2px] rounded-3xl border-black"
                src={item.image}
                alt="workSection"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold max-w-[500px]">
                  {item.title}
                </h1>
                <p className="text-lg font-normal max-w-60">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
