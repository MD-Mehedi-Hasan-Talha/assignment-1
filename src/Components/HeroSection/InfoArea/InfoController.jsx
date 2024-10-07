import Button from "../../Common/Button";

const controllerItems = [
  {
    id: 0,
    className:
      "inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color",
    href: "https://links.tailgrids.com/play-download",
    terget: "",
    text: "Book Now",
  },
  {
    id: 1,
    className:
      "flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark",
    href: "https://github.com/tailgrids/play-tailwind",
    terget: "_blank",
    text: "Contact Us",
  },
];

export default function InfoController() {
  return (
    <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
      {controllerItems.map((item) => (
        <li key={item.id}>
          <Button
            href={item.href}
            target={item.target}
            className={item.className}
          >
            {item.text}
          </Button>
        </li>
      ))}
    </ul>
  );
}
