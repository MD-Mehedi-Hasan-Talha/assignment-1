import ImageArea from "./ImageArea/ImageArea";
import InfoArea from "./InfoArea/InfoArea";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <InfoArea />

          <ImageArea />
        </div>
      </div>
    </div>
  );
}
