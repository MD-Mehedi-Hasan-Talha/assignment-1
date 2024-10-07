import Input from "./Input";
import TextArea from "./TextArea";

export default function Form() {
  return (
    <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
      <div className=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
        <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
          Send us a Message
        </h3>
        <form>
          <Input
            label="Full Name*"
            type="text"
            name="fullName"
            placeholder="Adam Gelius"
          />
          <Input
            label="Email*"
            type="email"
            name="email"
            placeholder="example@yourmail.com"
          />
          <Input
            label="Phone*"
            type="text"
            name="phone"
            placeholder="+885 1254 5211 552"
          />

          <TextArea
            label="Message*"
            name="message"
            placeholder="type your message here"
          />

          <div className="mb-0">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
