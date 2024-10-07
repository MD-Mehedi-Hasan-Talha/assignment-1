import Gallery from "./GalleryArea/Gallery";
import InfoArea from "./InfoArea/InfoArea";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <InfoArea />
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}
