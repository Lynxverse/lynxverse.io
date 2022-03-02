import { Section } from "components/layout/Section";

const Subscribe = () => {
  return (
    <Section size={false}>
      <div className="h-100 py-10 md:px-0 lg:px-0">
        <div className="x-10 mx-auto h-full">
          <div className="flex h-full flex-col items-center justify-center space-y-8">
            <h2 className="mx-auto w-full text-left font-title text-title text-4xl font-extrabold leading-none text-white sm:text-5xl md:text-5xl">
              Get Updated News
            </h2>
            <p className="mx-auto w-full text-left font-mono text-xl text-gray-300 md:text-2xl">
              Want to know more about Lynxverse?
            </p>
            <div className="mx-auto flex w-full flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
              <input
                type="text"
                className="w-full flex-1 rounded-lg border border-gray-300 bg-gray-200 px-5 py-5 text-2xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                placeholder="Email Address"
              />
              <a
                href="#_"
                className="flex items-center justify-center  rounded-lg bg-gradient-to-t from-[#794DF6] to-[#4CDFFF] p-3 px-8 font-title text-xl text-white shadow-lg shadow-[#794DF6]/50 hover:to-[#20a6c4]"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Subscribe };
