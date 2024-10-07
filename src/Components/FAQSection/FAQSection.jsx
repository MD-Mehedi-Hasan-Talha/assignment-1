import { BottomRightIcon, LeftTopIcon } from "./Icons/BackgroundIcon";
import InfoArea from "./InfoArea/InfoArea";
import SingleFAQ from "./SingleFAQ";

export default function FAQSection() {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <InfoArea />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFAQ />
            <SingleFAQ />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SingleFAQ />
            <SingleFAQ />
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <LeftTopIcon />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <BottomRightIcon />
        </span>
      </div>
    </section>
  );
}
