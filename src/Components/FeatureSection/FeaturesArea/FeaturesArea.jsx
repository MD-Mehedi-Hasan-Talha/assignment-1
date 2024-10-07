import { GiftSvg, GridSvg, LayerSvg, LayoutSvg } from "../Icons/Icons";
import SingleFeature from "./SingleFeature";

const featureItems = [
  {
    id: 0,
    heading: "Premium Property Listings",
    description:
      "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
    svg: <GiftSvg />,
  },
  {
    id: 1,
    heading: "Personalized Property Matching",
    description:
      "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
    svg: <LayoutSvg />,
  },
  {
    id: 2,
    heading: "Expert Guidance and Support",
    description:
      "Benefit from the expertise of our dedicated team of real estate professionals.",
    svg: <LayerSvg />,
  },
  {
    id: 3,
    heading: "Virtual Tours",
    description:
      "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
    svg: <GridSvg />,
  },
];

export default function FeaturesArea() {
  return (
    <div className="-mx-4 flex flex-wrap">
      {featureItems.map((item) => (
        <SingleFeature
          heading={item.heading}
          description={item.description}
          key={item.id}
        >
          {item.svg}
        </SingleFeature>
      ))}
    </div>
  );
}
