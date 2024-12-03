import { useEffect } from "react";
import "./infinite-logo.css";
import { InfiniteLogoData } from "../../utils/constant";
import { Link } from "react-router-dom";
import Referencevideo from "../../video/infinite-logo.webm"

const InfiniteLogo = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner =
          scroller.querySelector<HTMLElement>(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <>
      <div className="main-scroll-slider">
        <div className="scroller" data-speed="fast">
          <ul className="tag-list scroller__inner">
            <li className="flex gap-16">
              {InfiniteLogoData.map((item, index) => {
                return <div key={index}>{item.icon}</div>;
              })}
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto my-20 flex flex-col items-center">
        <h1 className="text-4xl max-md:text-xl text-center font-bold pb-3">
          Reference website :{" "}
          <Link
            target="_blank"
            to="/"
          >
            Demo
          </Link>
        </h1>
        <h2 className="text-xl pb-3">
          Status: The section functions smoothly and is fully responsive.
        </h2>

        <video width="750" height="500" controls>
          <source src={Referencevideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default InfiniteLogo;
