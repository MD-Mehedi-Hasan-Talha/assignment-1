import Image from "./Image";
import LeftTopIcon from "./LeftTopIcon";
import RightBottomIcon from "./RightBottomIcon";
import RightTopIcon from "./RightTopIcon";

export default function Gallery() {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
            <Image
              src="/assets/images/about/about-image-01.jpg"
              alt="about image"
            />
          </div>
        </div>

        <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
          <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
            <Image
              src="/assets/images/about/about-image-02.jpg"
              alt="about image"
            />
          </div>

          <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
            <div>
              <span className="block text-5xl font-extrabold text-white">
                09
              </span>
              <span className="block text-base font-semibold text-white">
                We have
              </span>
              <span className="block text-base font-medium text-white text-opacity-70">
                Years of experience
              </span>
            </div>
            <div>
              <span className="absolute left-0 top-0 -z-10">
                <LeftTopIcon />
              </span>
              <span className="absolute right-0 top-0 -z-10">
                <RightTopIcon />
              </span>
              <span className="absolute bottom-0 right-0 -z-10">
                <RightBottomIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
