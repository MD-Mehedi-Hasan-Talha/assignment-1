import SingleMember from "./SingleMember";

const teamMembers = [
  {
    id: 0,
    name: "Melissa Tatcher",
    lastName: "Marketing Expert",
    imgUrl: "./assets/images/team/team-01.png",
  },
  {
    id: 1,
    name: "Stuard Ferrel",
    lastName: "Digital Marketer",
    imgUrl:
      "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png",
  },
  {
    id: 2,
    name: "Eva Hudson",
    lastName: "Creative Designer",
    imgUrl:
      "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
  },
  {
    id: 3,
    name: "Jackie Sanders",
    lastName: "Founder of Facebook",
    imgUrl:
      "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png",
  },
];

export default function TeamMember() {
  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      {teamMembers.map((member) => (
        <SingleMember
          key={member.id}
          name={member.name}
          lastName={member.lastName}
          imgUrl={member.imgUrl}
        />
      ))}
    </div>
  );
}
