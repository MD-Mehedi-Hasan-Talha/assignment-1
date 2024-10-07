import InfoArea from "./InfoArea/InfoArea";
import LatestBlog from "./LatestBlogArea/LatestBlog";
import LinksArea from "./LinksArea/LinksArea";

export default function FooterSection() {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <InfoArea />

          <LinksArea
            className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12"
            heading="About Us"
            linkList={["Home", "Features", "About"]}
          />
          <LinksArea
            className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12"
            heading="Features"
            linkList={[
              "How it works",
              "Privacy policy",
              "Terms of Service",
              "Refund policy",
            ]}
          />

          <LatestBlog />
        </div>
      </div>
    </footer>
  );
}
