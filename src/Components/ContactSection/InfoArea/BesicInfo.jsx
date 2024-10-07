export default function BesicInfo({ icon, heading, children }) {
  return (
    <div className="mb-8 flex w-[330px] max-w-full">
      <div className="mr-6 text-[32px] text-primary">{icon}</div>
      <div>
        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
          {heading}
        </h5>
        {children}
      </div>
    </div>
  );
}
