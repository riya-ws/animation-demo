import { Link } from "react-router-dom";
import fashion from "../../assets/3/fashion.jpg";
import art from "../../assets/3/art.jpg";
import woman from "../../assets/3/woman.jpg";
import sunglasses from "../../assets/3/sunglasses.jpg";
import pockets from "../../assets/3/pockets.jpg";
import lights from "../../assets/3/lights.jpg";
import "./scroll-driven-demo-three.css";
import "../../assets/style/shared.css";


const ScrollDrivenDemoThree = () => {
  return (
    <div>
      {" "}
      <div
        className="min-h-screen relative flex flex-col overflow-clip"
        style={{
          timelineScope:
            "--scroller, --slide-1, --slide-2, --slide-3, --slide-4, --slide-5, --slide-6; --slides: 6; --item-aspect: 335/511",
        }}
      >
        <div
          className="absolute bg-[#C09E6F] -z-30 inset-0 h-full w-full animate-fade"
          style={{ animationTimeline: " --slide-2" }}
        ></div>
        <div
          className="absolute bg-[#B4806A] -z-30 inset-0 h-full w-full animate-fade"
          style={{ animationTimeline: "--slide-3" }}
        ></div>
        <div
          className="absolute bg-[#68432D] -z-30 inset-0 h-full w-full animate-fade"
          style={{ animationTimeline: "--slide-4" }}
        ></div>
        <div
          className="absolute bg-[#3B626E] -z-30 inset-0 h-full w-full animate-fade"
          style={{ animationTimeline: "--slide-5" }}
        ></div>
        <div
          className="absolute bg-[#2E423D] -z-30 inset-0 h-full w-full animate-fade"
          style={{ animationTimeline: "--slide-6" }}
        ></div>
        <header className="frame relative z-50 mx-7 flex max-lg:flex-col justify-between py-6 gap-2">
          <div className="whitespace-nowrap">
            <h1 className="font-bold inline align-middle">
              CSS-Only Carousels
            </h1>
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
            <Link to="/scroll-driven">Demo 1</Link>
            <Link to="/scroll-driven-demo-two">Demo 2</Link>
            <Link to="/scroll-driven-demo-three" aria-current="page">
              Demo 3
            </Link>
          </nav>
        </header>
        <div className="flex-1 hidden supports-sda:flex min-h-[300px] items-stretch">
          <div className="@container-[size] relative w-full">
            <div
              className="absolute inset-0 h-full w-full overflow-y-auto snap-mandatory scroll-smooth snap-x scrollbar-hidden"
              style={{
                scrollTimeline:
                  "--scroller x; --item-width: calc(min(100cqh, 1000px) * var(--item-aspect))",
              }}
            >
              <div
                className="grid grid-flow-col px-[--inset-x] auto-cols-[--item-width] h-full w-fit"
                style={
                  {
                    "--inset-x": "calc(50cqw - var(--item-width)/2)",
                  } as React.CSSProperties
                }
              >
                <div
                  role="none"
                  className="snap-center"
                  style={{
                    viewTimeline:
                      "--slide-1 x; view-timeline-inset: var(--inset-x)",
                  }}
                ></div>
                <div
                  role="none"
                  className="snap-center"
                  style={{
                    viewTimeline:
                      "--slide-2 x; view-timeline-inset: var(--inset-x)",
                  }}
                ></div>
                <div
                  role="none"
                  className="snap-center"
                  style={{
                    viewTimeline:
                      "--slide-3 x; view-timeline-inset: var(--inset-x)",
                  }}
                ></div>
                <div
                  role="none"
                  className="snap-center"
                  style={{
                    viewTimeline:
                      "--slide-4 x; view-timeline-inset: var(--inset-x)",
                  }}
                ></div>
                <div
                  role="none"
                  className="snap-center"
                  style={{
                    viewTimeline:
                      "--slide-5 x; view-timeline-inset: var(--inset-x)",
                  }}
                ></div>
                <div
                  role="none"
                  className="snap-center"
                  style={{
                    viewTimeline:
                      "--slide-6 x; view-timeline-inset: var(--inset-x)",
                  }}
                ></div>
              </div>
            </div>
            <div className="inset-x-0 inset-y-[7.5cqh] absolute overlap isolate items-center justify-center pointer-events-none">
              <img
                className="h-full gbgbgb max-h-[1000px]"
                style={{
                  animation:
                    "first auto linear both, fade-out auto linear both; animation-timeline: --slide-1; animation-composition: add, replace;",
                }}
                src={fashion}
                alt="fashion"
              />
              <img
                className="h-full max-h-[1000px] -z-[1]"
                style={{
                  animation:
                    "second auto linear both, first auto linear both, fade-out auto linear both; animation-timeline: --slide-1, --slide-2, --slide-2; animation-composition: add, add, replace;",
                }}
                src={art}
                alt="artwork"
              />
              <img
                className="h-full max-h-[1000px] -z-[2]"
                style={{
                  animation:
                    "third auto linear both, second auto linear both, first auto linear both, fade-out auto linear both; animation-timeline: --slide-1, --slide-2, --slide-3, --slide-3; animation-composition: add, add, add, replace;",
                }}
                src={woman}
                alt="photography"
              />
              <img
                className="h-full max-h-[1000px] -z-[3]"
                style={{
                  animation:
                    "fourth auto linear both, third auto linear both, second auto linear both, first auto linear both, fade-out auto linear both; animation-timeline: --slide-1, --slide-2, --slide-3, --slide-4, --slide-4; animation-composition: add, add, add, add, replace",
                }}
                src={sunglasses}
                alt="photography"
              />
              <img
                className="h-full max-h-[1000px] -z-[4]"
                style={{
                  animation:
                    "fifth auto linear both, fourth auto linear both, third auto linear both, second auto linear both, first auto linear both, fade-out auto linear both; animation-timeline: --slide-1, --slide-2, --slide-3, --slide-4, --slide-5, --slide-5; animation-composition: add, add, add, add, add, replace",
                }}
                src={pockets}
                alt="photography"
              />
              <img
                className="h-full max-h-[1000px] -z-[5]"
                style={{
                  animation:
                    "sixth auto linear both, fifth auto linear both, fourth auto linear both, third auto linear both, second auto linear both, first auto linear both; animation-timeline: --slide-1, --slide-2, --slide-3, --slide-4, --slide-5, --slide-6; animation-composition: add;",
                }}
                src={lights}
                alt="photography"
              />
            </div>
          </div>
          <div className="[@media(max-aspect-ratio:335/511)]:hidden flex flex-col gap-2 items-center font-medium absolute top-1/2 -translate-y-1/2 left-7">
            <span className="overflow-y-clip">
              <span
                className="animate-indicator overlap justify-items-center"
                aria-hidden="true"
                style={{ animationTimeline: "--scroller" }}
              >
                <span>01</span>
                <span className="translate-y-[100%]">02</span>
                <span className="translate-y-[200%]">03</span>
                <span className="translate-y-[300%]">04</span>
                <span className="translate-y-[400%]">05</span>
                <span className="translate-y-[500%]">06</span>
              </span>
            </span>
            <div className="bg-white/20">
              <div
                className="bg-white w-0.5 h-32 animate-progress origin-top"
                style={{ animationTimeline: " --scroller" }}
              ></div>
            </div>
            06
          </div>
          <a
            href="https://tympanus.net/Tutorials/Velvette/"
            className="max-lg:hidden [writing-mode:vertical-lr] absolute z-50 top-1/2 -translate-y-1/2 right-7 pointer-events-auto"
          >
            Previous Demo
          </a>
        </div>
        <div
          className="h-[0.65em] hidden supports-sda:block animate-scroll-pos [clip-path:inset(0.05em_0_0)] overflow-clip text-[min(15.625rem,20vh)]/[1.2] font-serif select-none"
          style={{ animationTimeline: "--scroller;" }}
        >
          <div
            className="flex flex-col whitespace-nowrap items-center opacity-50 w-fit translate-x-[calc(50vw-50%)] animate-captions *:scale-y-[calc(var(--scroll-velocity-abs)*2+1)] *:translate-y-[calc(var(--scroll-velocity)*-100%)]"
            style={{
              animationTimeline:
                " --scroller; animation-composition: add; transition: --scroll-position-delayed 0.15s linear; --scroll-velocity: calc(var(--scroll-position) - var(--scroll-position-delayed)); --scroll-velocity-abs: max(var(--scroll-velocity), -1*var(--scroll-velocity))",
            }}
          >
            <span>Fashion</span>
            <span>Artworks</span>
            <span>Portraits</span>
            <span>Still Life</span>
            <span>Lifestyle</span>
            <span>Wedding</span>
          </div>
        </div>
        <div className="supports-sda:hidden px-7 pb-7">
          Your browser does not support scroll-driven animations. See{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations">
            MDN
          </a>{" "}
          for browser compatibility tables.
        </div>
      </div>
    </div>
  );
};

export default ScrollDrivenDemoThree;
