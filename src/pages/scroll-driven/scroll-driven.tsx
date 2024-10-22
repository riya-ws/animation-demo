import { useEffect } from "react";
import biker from "../../assets/1/biker.jpg";
import bottle from "../../assets/1/bottle.jpg";
import helmet from "../../assets/1/helmet.jpg";

const ScrollDriven = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
    
          // Example: Update an element based on scroll position
          const slide1 = document.querySelector("#slide-1") as HTMLElement;
          if (slide1) {
            slide1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
          }
    
          // Repeat this for other slides as necessary
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
  return (
    <div
      className="@container min-h-screen relative isolate flex flex-col gap-8 supports-sda:pointer-events-none overflow-clip"
      style={{ timelineScope: "--scroller, --slide-1, --slide-2, --slide-3" }} // Only valid CSS property
      data-slides="3"
    >
      <img
        className="absolute hidden supports-sda:block -z-20 inset-0 h-full w-full object-cover animate-grow"
        style={{ animationTimeline: "--slide-1" }}
        src={biker}
      />
      <img
        className="absolute hidden supports-sda:block -z-20 inset-0 h-full w-full object-cover animate-grow"
        style={{ animationTimeline: "--slide-2" }}
        src={bottle}
      />
      <img
        className="absolute hidden supports-sda:block -z-20 inset-0 h-full w-full object-cover animate-grow"
        style={{ animationTimeline: "--slide-3" }}
        src={helmet}
      />
      <div
        className="absolute hidden supports-sda:block -z-10 inset-0 h-full w-full overflow-x-auto snap-mandatory scroll-smooth snap-x scrollbar-hidden pointer-events-auto"
        style={{ scrollTimeline: "--scroller x" }}
      >
        <div className="grid grid-flow-col auto-cols-[70cqw] pr-[30cqw] h-full w-fit">
          <div
            role="none"
            id="slide-1"
            className="snap-start"
            style={{ viewTimeline: "--slide-1 x" }}
          ></div>
          <div
            role="none"
            id="slide-2"
            className="snap-start"
            style={{ viewTimeline: "--slide-2 x" }}
          ></div>
          <div
            role="none"
            id="slide-3"
            className="snap-start"
            style={{ viewTimeline: "--slide-3 x" }}
          ></div>
        </div>
      </div>
      <header className="frame relative z-50 mx-7 flex max-lg:flex-col justify-between py-6 border-b gap-2 border-white/60 pointer-events-auto">
        <div className="whitespace-nowrap">
          <h1 className="font-bold inline align-middle">CSS-Only Carousels</h1>
          <a
            title="Read the article"
            href="https://tympanus.net/codrops/?p=75188"
          >
            <svg
              className="h-3 ml-0.5 inline-block align-middle"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.00006 0.25H11.7501V11H10.2501V2.81066L1.53039 11.5303L0.469727 10.4697L9.1894 1.75H1.00006V0.25Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <nav className="flex items-center gap-10">
          <a href="/scroll-driven" aria-current="page">
            Demo 1
          </a>
          <a href="/scroll-driven-demo-two">Demo 2</a>
          <a href="index3.html">Demo 3</a>
        </nav>
      </header>
      <div className="flex-1 px-7 relative hidden supports-sda:flex flex-col gap-[inherit]">
        <div className="overlap w-[17rem]">
          <p
            className="animate-text translate-y-[50%] skew-y-[1.5deg]"
            style={{
              animationTimeline: "--slide-1",
              animationRangeStart: "30cqw",
            }}
          >
            Move around your city safely and comfortably, while reducing your
            carbon footprint and helping to keep the air we breathe clean.
          </p>
          <p
            className="animate-text translate-y-[50%] skew-y-[1.5deg]"
            style={{
              animationTimeline: "--slide-2",
              animationRangeStart: "30cqw",
            }}
          >
            Let’s do it responsibly and avoid having more plastic in the sea
            than fish. Take your refillable bottle with you and say no to
            plastic when drinking water.
          </p>
          <p
            className="animate-text translate-y-[50%] skew-y-[1.5deg]"
            style={{
              animationTimeline: "--slide-3",
              animationRangeStart: "30cqw",
            }}
          >
            The Reflective Helmet seamlessly integrates reflective technology,
            ensuring visibility without drawing unnecessary attention. The
            perfect choice for the mindful cyclist.
          </p>
        </div>
        <div className="w-60 my-auto">
          <nav className="flex font-medium text-sm gap-5">
            <a
              href="#slide-1"
              className="animate-page !text-white pointer-events-auto"
              style={{
                animationTimeline: "--slide-1",
                animationRangeStart: "30cqw",
              }}
            >
              01
            </a>
            <a
              href="#slide-2"
              className="animate-page !text-white pointer-events-auto"
              style={{
                animationTimeline: "--slide-2",
                animationRangeStart: "30cqw",
              }}
            >
              02
            </a>
            <a
              href="#slide-3"
              className="animate-page !text-white pointer-events-auto"
              style={{
                animationTimeline: "--slide-3",
                animationRangeStart: "30cqw",
              }}
            >
              03
            </a>
          </nav>
          <div className="bg-white/60 mt-2">
            <div
              className="bg-white h-0.5 animate-progress origin-left"
              style={{ scrollTimeline: "--scroller x" }}
            ></div>
          </div>
        </div>
        <div className="overlap items-end w-[31rem]">
          <div>
            <span className="block overflow-clip">
              <span
                className="block uppercase font-medium tracking-widest mb-4 animate-text-up"
                style={{
                  animationTimeline: "--slide-1",
                  animationRangeStart: "30cqw",
                }}
              >
                Commuter Helmet
              </span>
            </span>
            <p
              className="pb-7 font-serif text-8xl animate-text translate-y-[205%] skew-y-6"
              style={{
                animationTimeline: "--slide-1",
                animationRangeStart: "30cqw",
              }}
            >
              Perfect for urban <em>riders</em>
            </p>
          </div>
          <div>
            <span className="block overflow-clip">
              <span
                className="block uppercase font-medium tracking-widest mb-4 animate-text-up"
                style={{
                  animationTimeline: "--slide-2",
                  animationRangeStart: "30cqw",
                }}
              >
                Smart bottle
              </span>
            </span>
            <p
              className="pb-7 font-serif text-8xl animate-text translate-y-[205%] skew-y-6"
              style={{
                animationTimeline: "--slide-2",
                animationRangeStart: "30cqw",
              }}
            >
              We're all <em>connected</em>
            </p>
          </div>
          <div>
            <span className="block overflow-clip">
              <span
                className="block uppercase font-medium tracking-widest mb-4 animate-text-up"
                style={{
                  animationTimeline: "--slide-2",
                  animationRangeStart: "30cqw",
                }}
              >
                Reflective Helmet
              </span>
            </span>
            <p
              className="pb-7 font-serif text-8xl animate-text translate-y-[205%] skew-y-6"
              style={{
                animationTimeline: "--slide-3",
                animationRangeStart: "30cqw",
              }}
            >
              Ready for <em>late nights</em>
            </p>
          </div>
        </div>
        <a
          href="https://tympanus.net/Tutorials/Velvette/"
          className="max-lg:hidden absolute z-50 bottom-7 right-7 pointer-events-auto"
        >
          Previous Demo
        </a>
      </div>
      <div className="supports-sda:hidden px-7 pb-7">
        Your browser does not support scroll-driven animations. See{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations">
          MDN
        </a>{" "}
        for browser compatibility tables.
      </div>
    </div>
  );
};

export default ScrollDriven;
