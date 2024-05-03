import { Carousel } from "flowbite-react";
import bg1 from "../assets/photo-1.jpg";
import bg2 from "../assets/photo-2.jpg";
import bg3 from "../assets/photo-3.jpg";

const SliderComp = () => {
  return (
    <div className=" h-56 sm:h-64 xl:h-80 2xl:h-96 container mx-auto md:px-10">
      <Carousel pauseOnHover>
        <div>
          <img src={bg3} className="w-full mx-auto lg:w-11/12 h-full" alt="" />
        </div>
        <div className="relative overflow-hidden rounded-lg text-center">
          <img src={bg1} className="w-full" alt="" />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#00000099] overflow-hidden bg-fixed">
            <div className="flex h-full  items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-lg md:text-xl font-semibold">
                  Why do people donate?
                </h2>
                <h2 className="hidden md:text-sm md:block mb-6 xl:text-xl font-semibold">
                  Everyone has their own reasons for donating blood, but a few
                  common ones include:
                </h2>
                <h2 className="mb-6 md:text-sm xl:text-xl font-semibold">
                  Donating is a generous thing to do. It helps people in need,
                  and it helps people in your community. When you give, others
                  live.
                </h2>
                <div className="hidden  md:block ">
                  <h4 className="mb-6 md:text-sm xl:text-xl font-semibold">
                    There is no substitute for blood. Donors provide the only
                    supply of life-saving blood for those in need.
                  </h4>
                  <h4 className="mb-6 md:text-sm xl:text-xl font-semibold">
                    Donating is simple, fast, and convenient. The donation
                    process can take as little as 45 minutes of your time, but
                    can make a lifelong difference for someone else.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg text-center">
          <img src={bg2} className="w-full" alt="" />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#00000099] overflow-hidden bg-fixed">
            <div className="flex h-full  items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 md:mb-8 text-xl md:text-2xl font-semibold">
                  If there are two blood donors present, the pregnant mothers
                  life will be assured.
                </h2>
                <h2 className="mb-2md:text-sm lg:text-xl font-semibold">
                  A pregnant mother might need blood, and you know this from
                  nine months before the delivery date. Therefore, consider
                  finding two blood donors in advance.
                </h2>
                <h2 className="mb-2md:text-sm lg:text-xl font-semibold">
                  Always encourage friends and acquaintances who are blood
                  donors to be ready so that they can come forward first in case
                  of any physical complications the pregnant woman might face.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderComp;
