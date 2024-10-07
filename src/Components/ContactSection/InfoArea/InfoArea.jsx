import { Envelope, Location } from "../Icons/Icons";
import BesicInfo from "./BesicInfo";

export default function InfoArea() {
  return (
    <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
      <div className="ud-contact-content-wrapper">
        <div className="ud-contact-title mb-12 lg:mb-[150px]">
          <span className="mb-6 block text-base font-medium text-dark dark:text-white">
            CONTACT US
          </span>
          <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
            Let&apos;s talk about your problem.
          </h2>
        </div>
        <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
          <BesicInfo icon={<Location />} heading="Our Location">
            <p className="text-base text-body-color dark:text-dark-6">
              401 Broadway, 24th Floor, Orchard Cloud View, London
            </p>
          </BesicInfo>

          <BesicInfo icon={<Envelope />} heading="How Can We Help?">
            <p className="text-base text-body-color dark:text-dark-6">
              info@yourdomain.com
            </p>
            <p className="mt-1 text-base text-body-color dark:text-dark-6">
              contact@yourdomain.com
            </p>
          </BesicInfo>
        </div>
      </div>
    </div>
  );
}
