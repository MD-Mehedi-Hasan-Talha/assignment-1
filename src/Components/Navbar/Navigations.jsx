import NavigationItem from "./NavigationItem";

const navigations = [
  {
    id: 0,
    name: "Home",
    href: "#home",
  },
  {
    id: 1,
    name: "About",
    href: "#about",
  },
  {
    id: 2,
    name: "Pricing",
    href: "#pricing",
  },
  {
    id: 3,
    name: "Blog",
    href: "blog-grids.html",
  },
];

export default function Navigations() {
  return (
    <ul className="hidden lg:flex ">
      {navigations.map((item) => (
        <NavigationItem name={item.name} href={item.href} key={item.id} />
      ))}
    </ul>
  );
}
