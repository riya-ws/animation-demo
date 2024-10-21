import { useEffect } from "react";
import "../../assets/style/infinite-logo.css";
import { InfiniteLogoData } from "../../utils/constant";

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
        if (!scrollerInner) return; // Ensure scrollerInner is not null

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
            <li className="flex gap-5">
              {InfiniteLogoData.map((item,index)=>{
                return(
                  <div key={index}>{item.icon}</div>
                )
              })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfiniteLogo;
