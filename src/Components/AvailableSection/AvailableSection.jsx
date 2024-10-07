import Properties from "./AvailableProperties/Properties";
import InfoArea from "./InfoArea/InfoArea";

export default function AvailableSection() {
  return (
    <section>
      <div className="container">
        <InfoArea />
        <Properties />
      </div>
    </section>
  );
}
