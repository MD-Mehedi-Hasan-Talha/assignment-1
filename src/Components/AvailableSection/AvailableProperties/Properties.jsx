import SingleProperty from "./SingleProperty";

const propertyItems = [
  {
    id: 0,
    title: "Abode of Peace",
    imgUrl: "/assets/images/Property/image1.jpg",
    rent: 5500,
    bedroom: 3,
    bathroom: 2,
  },
  {
    id: 1,
    title: "Happy Spring",
    imgUrl: "/assets/images/Property/image2.jpg",
    rent: 3400,
    bedroom: 2,
    bathroom: 1,
  },
  {
    id: 2,
    title: "Colorful Light",
    imgUrl: "/assets/images/Property/image3.jpg",
    rent: 1700,
    bedroom: 1,
    bathroom: 1,
  },
  {
    id: 3,
    title: "Sweet Temple",
    imgUrl: "/assets/images/Property/image4.jpg",
    rent: 7500,
    bedroom: 4,
    bathroom: 2,
  },
  {
    id: 4,
    title: "House of Good Fortune",
    imgUrl: "/assets/images/Property/image5.jpg",
    rent: 5000,
    bedroom: 3,
    bathroom: 1,
  },
  {
    id: 5,
    title: "Golden Garden",
    imgUrl: "/assets/images/Property/image6.jpg",
    rent: 3500,
    bedroom: 2,
    bathroom: 2,
  },
];

export default function Propreties() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {propertyItems.map((item) => (
        <SingleProperty
          key={item.id}
          title={item.title}
          imgUrl={item.imgUrl}
          rent={item.rent}
          bedroom={item.bedroom}
          bathroom={item.bathroom}
        />
      ))}
    </div>
  );
}
