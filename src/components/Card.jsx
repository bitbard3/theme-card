import cardProfile from "../assets/CustomStyle.png";
import cardBg from "../assets/background.jpeg";
import { SunIcon } from "@heroicons/react/16/solid";

export const Card = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen">
        <div className="w-2/3 h-2/3 md:w-2/5 md:h-3/4 lg:w-1/3 lg:h-2/5 xl:h-2/3 xl:w-1/4 border border-gray-900 rounded-2xl relative bg-light dark:bg-dark">
          <div className="flex flex-col items-center ">
            <div className="h-32 w-full">
              <img
                src={cardBg}
                alt=""
                className="object-cover w-full h-full rounded-t-2xl"
              />
            </div>
            <div className="ml-auto mr-3 mt-3">
              <button>
                <SunIcon className="h-8 w-8 text-accent" />
              </button>
            </div>
            <p className="mt-8 text-3xl  dark:text-light text-dark">
              Ansh Arora
            </p>
            <p className=" text-sm dark:text-light text-dark opacity-55">
              UI developer
            </p>
            <div className="flex pt-12 justify-around w-3/4">
              <div className="flex flex-col items-center">
                <p className="text-2xl text-accent">263</p>
                <p className="text-xs opacity-50 text-dark dark:text-light">
                  Design
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-2xl text-accent">8</p>
                <p className="text-xs opacity-50  text-dark dark:text-light">
                  Projects
                </p>
              </div>
            </div>
            <div className="mt-7 w-3/4">
              <button className="w-full border text-dark border-accent hover:border-dark hover:bg-accent hover:bg-opacity-70 hover:text-light py-3 rounded-3xl ">
                Contact
              </button>
            </div>
          </div>
          <div className="absolute w-1/4 left-[40%] md:w-1/3 md:left-1/3  top-20 bg-light dark:bg-dark rounded-full">
            <img src={cardProfile} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
