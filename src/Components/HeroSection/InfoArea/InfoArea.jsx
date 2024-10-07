import InfoController from "./InfoController";
import InfoText from "./InfoText";

export default function InfoArea() {
  return (
    <div className="w-full px-4">
      <div className="hero-content  mx-auto max-w-[780px] text-center">
        <InfoText />

        <InfoController />
      </div>
    </div>
  );
}
