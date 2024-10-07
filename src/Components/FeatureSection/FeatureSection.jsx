import FeaturesArea from "./FeaturesArea/FeaturesArea";
import InfoArea from "./InfoArea/InfoArea";

export default function FeatureSection() {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <InfoArea />
        <FeaturesArea />
      </div>
    </section>
  );
}
