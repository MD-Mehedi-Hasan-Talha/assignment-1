import Logo from "../../Common/Logo";
import { Facebook, Instagram, Linkedin, Twitter } from "../Icons/Icons";

export default function InfoArea() {
  return (
    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
      <div className="mb-10 w-full">
        <a href="" className="mb-6 inline-block max-h-[100px]">
          <Logo className="max-w-full" />
        </a>
        <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
          We create digital experiences for brands and companies by using
          technology.
        </p>
        <div className="-mx-3 flex items-center">
          <a href="" className="px-3 text-gray-7 hover:text-white">
            <Facebook />
          </a>
          <a href="" className="px-3 text-gray-7 hover:text-white">
            <Instagram />
          </a>
          <a href="" className="px-3 text-gray-7 hover:text-white">
            <Twitter />
          </a>
          <a href="" className="px-3 text-gray-7 hover:text-white">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
