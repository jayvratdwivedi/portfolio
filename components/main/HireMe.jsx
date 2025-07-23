import { slideInFromLeft } from "../../lib/motion";
import { motion } from "framer-motion";
const HireMe = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0f0f1b]/80  text-white rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.18)] max-w-md w-full px-6 py-8 sm:px-10 sm:py-10">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Hire Me!
        </h2>
        <p className="mt-2 text-base text-gray-400">Drop me a mail at:</p>
      </div>

      <div className="mt-6 break-words text-center">
        <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          jayvratdwivedi202@gmail.com
        </p>
      </div>

      <div className="mt-8 w-full">
        <a
          href="mailto:jayvratdwivedi202@gmail.com"
          className="py-2 button-primary block text-center text-white cursor-pointer rounded-lg px-6 "
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default HireMe;
