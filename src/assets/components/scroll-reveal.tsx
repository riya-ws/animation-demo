import { stickyRevealData } from "../../utils/constant";

const ScrollReveal = () => {
  //   const [backgroundGradient, setBackgroundGradient] = useState(
  //     linearGradients[0]
  //   );

  //   useEffect(() => {
  //     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  //   }, [activeCard]);
  //   const backgroundColors = [
  //     "var(--slate-900)",
  //     "var(--black)",
  //     "var(--neutral-900)",
  //   ];
  //   const linearGradients = [
  //     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  //     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  //   ];
  return (
    <>
      {/* <div className="bg-[#000000] flex w-full gap-10 my-10">
        <div className="h-[30rem] overflow-y-auto flex justify-center flex-col relative space-x-10 rounded-md ">
          {stickyRevealData.map((item, index) => {
            return (
              <>
                <div className="flex w-full">
                  <div className="flex flex-col gap-10 items-start w-[60%]">
                    <h1 key={index} className="text-2xl font-medium">
                      {item.title}
                    </h1>
                    <p className="text-4xl font-bold">{item.content}</p>
                    <p className="text-lg font-normal text-white">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-[40%] flex items-center justify-center">
                    <div className="w-80 h-80 bg-slate-200 rounded-2xl"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div> */}
      <div className="bg-[#000000] flex w-full gap-10 my-10">
        <div className="h-[30rem] overflow-y-auto flex justify-center flex-col relative space-x-10 rounded-md container mx-auto ">
          <div className="flex w-full ">
            <div className="flex flex-col gap-10 items-start w-[60%]">
              {stickyRevealData.map((item, index) => {
                return (
                  <>
                    <div className="flex w-full">
                      <div className="flex flex-col gap-10 items-start w-[60%]">
                        <h1 key={index} className="text-2xl font-medium">
                          {item.title}
                        </h1>
                        <p className="text-4xl font-bold">{item.content}</p>
                        <p className="text-lg font-normal text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="w-[40%] flex items-center justify-center">
              <div className="w-80 h-80 bg-slate-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollReveal;
