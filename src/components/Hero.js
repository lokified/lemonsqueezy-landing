import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="bg-blue min-h-screen overflow-x-hidden">
      <div className="mx-4 md:mx-12 lg:mx-24 pt-24 pb-12">
        <div className="grid grid-cols-12 items-center pt-12">
          <div className="col-span-full lg:col-span-6 md:mr-40">
            <h1 className="text-white font-bold-600 text-4xl md:text-6xl ">
              Payments, tax & subscriptions for software companies
            </h1>

            <p className="text-light pt-8">
              As your merchant of record, we handle the tax compliance burden so
              you can focus on more revenue and less headache.
            </p>

            <button
              href="#getstarted"
              className="bg-white rounded-full px-4 py-2 mt-6 flex gap-1 items-center"
            >
              Get started for free
              <FaArrowRight color="#121217" />
            </button>
          </div>

          <div className="col-span-full py-12 lg:col-span-6 lg:-mr-96">
            <img
              src="https://cdn.prod.website-files.com/6347244ba8d63489ba51c08e/635255305f947356c42dc073_Graphic.jpg"
              alt="hero"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-12">
          <p className="uppercase text-light lg:w-60 text-sm">
            trusted by thousands of companies in 100+ countries
          </p>

          <div className="flex flex-wrap md:flex-no-wrap gap-4 lg:gap-8">
            <img src="/images/typeheist.svg" className="w-24" alt="company" />
            <img src="/images/landify.svg" className="w-24" alt="company" />
            <img src="/images/academy.svg" className="w-24" alt="company" />
            <img src="/images/box.svg" className="w-7" alt="company" />
            <img src="/images/iconic.svg" className="w-24" alt="company" />
          </div>
        </div>
      </div>
    </section>
  );
};
