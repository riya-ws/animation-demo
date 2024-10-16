import { useEffect, useRef, useState } from "react";
import { Avatar, GradientStar } from "../../locals/icon";

const tempTestimonials = [
  {
    id: 1,
    name: "Melina",
    desc: "Greek tutor",
    comment:
      "Melina is an excellent teacher. I’ve wanted to improve my Greek for a long time however I’ve always been a little scared to take the plunge, however Melina instantly put me at ease. I believe that I will learn a lot from her, which",
    rating: "Kshi",
    style: null,
    bgColor: "#FFE192",
  },
  {
    id: 2,
    name: "Greta",
    desc: "Violin tutor",
    comment:
      "I was really impressed with Greta's approach. She knows what needs to be achieved, but the 'how' is tailored to my own current strengths, weaknesses, and goals. She's also really encouraging and pays attention to detail which I",
    rating: "Gerasimos",
    style: null,
    bgColor: "#D7F1DF",
  },
  {
    id: 3,
    name: "Alex",
    desc: "Singing teacher",
    comment:
      "Alex is gifted, creative, and fun, and messaged me withe several exercises to continue with, which were greatly appreciated. High energy and encouraging.",
    rating: "Bonnie",
    style: null,
    bgColor: "#FFE192",
  },
  {
    id: 4,
    name: "Rula",
    desc: "Greek tutor",
    comment:
      "It’s been great taking sessions with Rula. She is helpful, professional and really enjoy my lessons with her. Highly recommend!",
    rating: "Laura",
    style: null,
    bgColor: "#D7F1DF",
  },
  {
    id: 5,
    name: "Agnes",
    desc: "Maths tutor",
    comment:
      "Agnes is well organised & explains maths concepts in a clear concise manner. Overall an excellent tutor.",
    rating: "Bonnie",
    style: null,
    bgColor: "#FFE192",
  },
];

const ThirdTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liWidth, setLiWidth] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const scalePattern = [0.96, 0.84, 0.64, 0.36];

  const [testimonials, setTestimonials] = useState(tempTestimonials);

  useEffect(() => {
    if (listRef.current) {
      const liElement = listRef.current.querySelector("li");
      if (liElement) {
        setLiWidth(liElement.offsetWidth);
      }
    }
  }, [listRef]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };
  const getUlStyle = () => {
    return {
      // zIndex: -1,
      transform: `translateX(-${currentIndex * 496}px)`,
    };
  };
  useEffect(() => {
    if (currentIndex !== undefined) {
      const list = [...testimonials];
      let cardWidth = 496;

      const tempList: any = [];

      list.forEach((item: any, index: number) => {
        let obj = { ...item };
        let scale = 1;
        if (index < currentIndex) {
          scale = scalePattern[index] || 0;
        }
        scale = Math.max(scale, 0);
        if (index + 1 <= currentIndex) {
          obj = {
            ...item,
            style: {
              transform: `translateX(${cardWidth}px) scale(${scale})`,
              zIndex: "-1",
            },
          };
          tempList.unshift(obj);
          cardWidth += 496;
        } else {
          obj.style = { zIndex: obj.style?.zIndex || "initial" };
          tempList.push(obj);
        }
      });
      setTestimonials(
        tempList.map((item: any, index: number) => {
          item.bgColor = (index + 1) % 2 == 0 ? "#FFE192" : "#D7F1DF";
          return item;
        })
      );
    }
  }, [currentIndex]);
  return (
    <div className="main-testimonial">
      <div className="testimonial-container">
        <div className="testimonial-wrapper flex overflow-hidden">
          <div className="title-section space-y-3 ">
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
              <span className="font-semibold">
                {" "}
                5-star review to the tutor{" "}
              </span>
            </p>
          </div>
          <div className="arrows display flex gap-5 justify-between w-24">
            <button
              className={`text-3xl bg-[#f7f7f7] rounded-3xl flex justify-center items-center w-14 h-14  ${
                currentIndex == 0 && "bg-red-500"
              } `}
              onClick={prevTestimonial}
              disabled={currentIndex == 0}
            >
              ←
            </button>
            <button
              className={`text-3xl bg-[#f7f7f7] rounded-3xl flex justify-center items-center w-14 h-14 next-card ${
                currentIndex == 4 && "bg-red-500"
              }`}
              onClick={nextTestimonial}
              disabled={currentIndex == 4}
            >
              →
            </button>
          </div>
        </div>
        <div className="w-[496px] flex gap-6 ring-offset-2">
          <ul
            className="flex transform translate-x-0 gap-5 card-container"
            style={getUlStyle()}
            ref={listRef}
          >
            {testimonials.map((testimonial, index: number) => (
              <li
                key={index}
                className={`testimonial-card rounded-[35px] bg-[${testimonial.bgColor}]`}
                style={{
                  ...(testimonial.style ? testimonial.style : {}),
                }}
              >
                <div className="review text-left space-y-7">
                  <div className="details flex items-center gap-1.5">
                    <div className="avatar">
                      <Avatar />
                    </div>
                    <div className="infos">
                      <p className="name text-2xl font-bold">
                        {testimonial.name}
                      </p>
                      <p className="desc text-lg font-bold">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                  <p className="comment text-3xl font-semibold ">
                    {testimonial.comment}
                  </p>
                  <div className="rating-container w-[60%]">
                    <div className="rating text-black text-lg bg-white rounded-2xl p-2.5">
                      <p className="flex items-center gap-4">
                        {testimonial.rating}{" "}
                        <div className="flex gap-2">
                          <GradientStar />
                          <GradientStar />
                          <GradientStar />
                          <GradientStar />
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdTestimonials;
