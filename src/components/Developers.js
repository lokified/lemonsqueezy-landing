import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Developers = () => {
  return (
    <section className="py-8">
      <div className="mx-4 md:mx-12 lg:mx-24 md:py-16">
        <p className="uppercase text-sm text-magenta">Developers</p>

        <div className="grid grid-cols-12 py-4 items-center">
          <div className="col-span-full md:col-span-6">
            <p className="text-3xl md:text-3xl lg:text-5xl md:mr-24 ">
              Built for developers, by developers
            </p>
          </div>
          <div className="col-span-full md:col-span-6 py-8 md:py-0 md:pl-14">
            <p className="text-blue-4 w-full lg:w-3/4">
              Lemon Squeezy was born out of frustration with existing solutions
              on the market. As beautiful as it looks,{" "}
              <span className="text-black">
                the platform is just as flexible with you, the developer, in
                mind
              </span>
              . We spend an unfathomable amount of time making the platform a
              joy to work with.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 pt-4 md:pt-16 items-center">
        <div className="col-span-full md:col-span-6">
          <img src="/images/dev-1.svg" alt="dev" />
        </div>
        <div className="col-span-full md:col-span-6 px-4 md:pl-16 pt-8 md:pt-0 w-full md:pr-12 lg:w-2/3">
          <p className="text-magenta uppercase text-sm">d/1</p>
          <h1 className="text-3xl pt-8">Powerful, flexible API + Webhooks</h1>
          <p className="text-blue-4 pt-4">
            A <span className="text-black"> full REST API</span> that has
            predictable URLs and valid responses, uses standard codes,
            authentication, and verbs. Plus{" "}
            <span className="text-black">
              {" "}
              webhooks for asynchronous events.{" "}
            </span>{" "}
            Voilà.
          </p>
          <button className="mt-6 px-5 py-2 text-white bg-magenta rounded-full flex gap-2 items-center">
            Explore the API <FaArrowRight color="white" />{" "}
          </button>
        </div>

        <div className="col-span-full md:col-span-6 py-12 md:py-12 px-4 md:pl-16 lg:pl-24 w-full md:pr-8 lg:w-3/4">
          <p className="text-magenta uppercase text-sm">d/2</p>
          <h1 className="text-3xl pt-8 w-full lg:w-2/3">
            Documentation so good you’ll cry
          </h1>
          <p className="text-blue-4 pt-4">
            We invest our time into fully abstracting our API so your team can
            focus on building a cohesive system.{" "}
            <span className="text-black">
              {" "}
              Integrate with Lemon Squeezy in minutes{" "}
            </span>{" "}
            , not months.
          </p>
          <button className="mt-6 px-5 py-2 text-white bg-magenta rounded-full flex gap-2 items-center">
            Read the docs <FaArrowRight color="white" />{" "}
          </button>
        </div>

        <div className="col-span-full md:col-span-6">
          <img src="/images/dev-2.svg" alt="dev" />
        </div>
      </div>
    </section>
  );
};
