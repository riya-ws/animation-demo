import { useState } from "react";
import { Avatar, GradientStar } from "../../locals/icon";
const testimonials = [
  {
    id: 1,
    name: "Melina",
    desc: "Greek tutor",
    comment:
      "Melina is an excellent teacher. I’ve wanted to improve my Greek for a long time however I’ve always been a little scared to take the plunge, however Melina instantly put me at ease. I believe that I will learn a lot from her, which",
    rating: "Kshi",
  },
  {
    id: 2,
    name: "Greta",
    desc: "Violin tutor",
    comment:
      "I was really impressed with Greta's approach. She knows what needs to be achieved, but the 'how' is tailored to my own current strengths, weaknesses, and goals. She's also really encouraging and pays attention to detail which I",
    rating: "Gerasimos",
  },
  {
    id: 3,
    name: "Alex",
    desc: "Singing teacher",
    comment:
      "Alex is gifted, creative, and fun, and messaged me withe several exercises to continue with, which were greatly appreciated. High energy and encouraging.",
    rating: "Bonnie",
  },
  {
    id: 4,
    name: "Rula",
    desc: "Greek tutor",
    comment:
      "It’s been great taking sessions with Rula. She is helpful, professional and really enjoy my lessons with her. Highly recommend!",
    rating: "Laura",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = testimonials.length; // Total number of items

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems); // Go forward, loop at the end
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex: any) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1) // Go backward, loop at the beginning
    );
  };

  // Dynamic style for each li based on index
  const getStyleForLi = (index: any) => {
    const diff = (index - currentIndex + totalItems) % totalItems; // Relative position

    const itemWidth = 496; // Width of each item
    const baseScale = 1; // Base scale for the active item
    const scaleStep = 0.12; // Step to decrease scale
    const maxTranslateX = itemWidth * (totalItems - 1); // Max translation

    const translateX = itemWidth * diff; // Calculate translateX based on diff
    const scale = baseScale - scaleStep * diff; // Decrease scale with distance from the active item
    const zIndex = totalItems - diff; // zIndex decreases as diff increases

    // Ensure minimum scale
    const minScale = 0.36;
    const finalScale = Math.max(scale, minScale);

    return {
      transform: `translateX(${translateX}px) scale(${finalScale})`,
      zIndex: zIndex,
    };
  };
  return (
    <div>
      {" "}
      <div className="testimonial-container">
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
        <ul className="testimonial-list ">
          {testimonials.map((testimonial, index) => (
            <li
              key={testimonial.id}
              className="testimonial-card "
              style={getStyleForLi(index)} // Apply dynamic style
            >
              <div className="review space-y-4">
                <div className="details flex gap-5">
                  <div className="avatar">
                    <Avatar />
                  </div>
                  <div className="infos">
                    <p className="name">{testimonial.name}</p>
                    <p className="desc">{testimonial.desc}</p>
                  </div>
                </div>
                <p className="comment">{testimonial.comment}</p>
                <div className="rating-container ">
                  <div className="rating flex gap-5">
                    <p className="flex items-center gap-1.5 bg-white rounded-xl p-2 mt-5">
                      {testimonial.rating} <GradientStar />
                      <GradientStar />
                      <GradientStar />
                      <GradientStar />
                      <GradientStar />
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="arrows">
          <button className="text-4xl" onClick={prevTestimonial}>←</button>
          <button className="text-4xl" onClick={nextTestimonial}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
