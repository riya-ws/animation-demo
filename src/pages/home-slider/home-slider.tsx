import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Avatar, GradientStar } from "../../locals/icon";
import { useState } from "react";
import "./home-slider.css";

const SimpleSlider = () => {
  interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  const PreviousArrow: React.FC<ArrowProps> = ({
    className,
    style,
    onClick,
  }) => (
    <div
      className={`${className} bg-black rounded-full`}
      style={{ ...style, display: "block", left: "10px" }}
      onClick={onClick}
    >
      <p>Prev</p>
    </div>
  );

  const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
      className={`${className} bg-black rounded-full`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    >
      <p>Next</p>
    </div>
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const handleAfterChange = (current: number) => {
    console.log("Active slide index:", current);
    setActiveIndex(current); // Update active index
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    afterChange: handleAfterChange,
  };

  const reviews = [
    {
      name: "Georrge",
      role: "Piano tutor",
      feedback:
        "His communication, patience and time management was v good and explains everything in details so I’m v happy so far.",
      bgColor: "#FFE192",
    },
    {
      name: "Georrge",
      role: "Piano tutor",
      feedback:
        "Great first lesson with my son. Putting a plan together for future lessons and learning styles.",
      bgColor: "#D7F1DF",
    },
    {
      name: "Georrge",
      role: "Piano tutor",
      feedback:
        "I need to thank you Lucas, for being so patient with my son. Was his first time playing an instrument and he could play a song in 3 weeks.",
      bgColor: "#FFE192",
    },
    {
      name: "Georrge",
      role: "Piano tutor",
      feedback:
        "My daughter had 4 hours of lessons so far with Anish. And he helped my child become more confident in the topics she found difficult.",
      bgColor: "#D7F1DF",
    },
  ];

  console.log("activeIndex", activeIndex);

  return (
    <div className="w-full flex items-center my-8 max-lg:flex-col max-lg:gap-10">
      <div className="w-full lg:w-1/2 lg:ml-60">
        <div className="title-section space-y-3">
          <div className="flex">
            <GradientStar />
            <GradientStar />
            <GradientStar />
            <GradientStar />
            <GradientStar />
          </div>
          <h1 className="text-4xl font-bold whitespace-pre-line max-w-md">
            The Perfect Match
          </h1>
          <p className="text-lg font-medium max-w-96">
            Over one million students have a{" "}
            <span className="font-semibold"> 5-star review to the tutor </span>
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute left-[-15px] w-full top-0 h-[300px] rounded-[40px] p-5 transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? "transform translate-x-2" : ""
                }
                ${
                  activeIndex === index
                    ? review.bgColor === "#FFE192"
                      ? "bg-[#D7F1DF]"
                      : `bg-[#FFE192]`
                    : ""
                }
                `}
                style={{ zIndex: -1 }}
              />
              <div
                className={`h-[300px] rounded-[40px] p-5 space-y-3 transition-all duration-300 ease-in-out max-md:w-full `}
                style={{ backgroundColor: review.bgColor }}
              >
                <div className="flex justify-start items-center gap-5">
                  <div>
                    <Avatar />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{review.name}</p>
                    <p className="text-lg font-bold">{review.role}</p>
                  </div>
                </div>
                <p className="text-black text-lg font-medium max-w-md h-32">
                  {review.feedback}
                </p>
                <button className="rounded-3xl bg-white p-2 flex gap-5 items-center">
                  <p className="text-black text-lg">Fawcett</p>
                  <div className="flex gap-2">
                    <GradientStar />
                    <GradientStar />
                    <GradientStar />
                    <GradientStar />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
