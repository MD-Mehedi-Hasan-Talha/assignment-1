import InfoArea from "./InfoArea/InfoArea";
import TeamMember from "./TeamMember/TeamMember";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <InfoArea />

        <TeamMember />
      </div>
    </section>
  );
}
