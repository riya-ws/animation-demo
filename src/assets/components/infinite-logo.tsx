import { useEffect } from "react";
import "../../assets/style/infinite-logo.css";

const InfiniteLogo = () => {
  // const scrollers = document.querySelectorAll(".scroller");

  // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //   addAnimation();
  // }

  // function addAnimation() {
  //   scrollers.forEach((scroller) => {
  //     scroller.setAttribute("data-animated", true);

  //     const scrollerInner = scroller.querySelector(".scroller__inner");
  //     const scrollerContent = Array.from(scrollerInner.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       duplicatedItem.setAttribute("aria-hidden", true);
  //       scrollerInner.appendChild(duplicatedItem);
  //     });
  //   });
  // }
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    // Check for reduced motion preference
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
            <li>
              <img
                className="w-40 h-40"
                src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://www.svgrepo.com/show/303123/bmw-logo.svg"
                alt=""
              />
            </li>{" "}
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
                alt=""
              />
            </li>
            <li>
              {" "}
              <img
                className="w-40 h-40"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfiniteLogo;
{
  /* <div className="main-Scrolling">
        <div className="main-wrapper-scrolling">
          {" "}
          <h1 className="scroll-title">Our Partners</h1>
          <div className="slider">
            <div className="slider-items">
              <img
                src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
              <img
                src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
              <img
                src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/303123/bmw-logo.svg"
                alt=""
              />
              <img
                src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
                alt=""
              />
              <img
                src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
              <img
                src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
              <img
                src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
                alt=""
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/303123/bmw-logo.svg"
                alt=""
              />
              <img
                src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div> */
}
