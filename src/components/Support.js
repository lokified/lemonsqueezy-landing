import React from "react";
import { IoArrowDownOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export const Support = () => {
  return (
    <section className="pt-8">
      <div className="mx-4 md:mx-12 lg:mx-24 md:py-16">
        <p className="uppercase text-sm text-purple">Support</p>

        <div className="grid grid-cols-12 py-4 items-center">
          <div className="col-span-full md:col-span-6">
            <p className="text-3xl md:text-3xl lg:text-5xl md:mr-24 ">
              Whatever stage of your journey, we’re here to help
            </p>
          </div>
          <div className="col-span-full md:col-span-6 py-8 md:py-0 md:pl-14 space-y-4">
            <p className="text-blue-4 w-full lg:w-4/5">
              No matter the stage of your company, we stand behind our promise
              to provide{" "}
              <span className="text-black">exceptional customer support, </span>
              from initial setups to massive migrations and everything in
              between.
            </p>
            <p className="text-blue-4">
              <span className="text-black">
                Invest in your business with peace of mind{" "}
              </span>
              that we're here for you whether you need technical help or
              business advice.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 pt-12 items-center">
        <div className="col-span-full lg:col-span-6">
          <img src="/images/sup-1.svg" alt="support" />
        </div>
        <div className="col-span-full lg:col-span-6 py-8 lg:py-0 px-4 md:px-16 lg:px-24">
          <p className="text-purple uppercase text-sm">s/1</p>
          <h1 className="text-3xl pt-8">Creator Guide</h1>
          <p className="text-blue-4 pt-4 w-4/5">
            Looking for some advice on how to sell and market your digital
            products? Download the creator’s guide to dive deep into getting
            your idea off the ground.
          </p>
          <button className="mt-6 px-5 py-2 text-black bg-white rounded-full flex gap-2 items-center">
            <IoArrowDownOutline /> Download
            <IoArrowDownOutline />
          </button>
        </div>
        <div className="col-span-full lg:col-span-6">
          <img src="/images/sup-2.svg" alt="support" />
        </div>
        <div className="col-span-full lg:col-span-6 py-8 lg:py-0 px-4 md:px-16 lg:px-24">
          <p className="text-purple uppercase text-sm">s/2</p>
          <h1 className="text-3xl pt-8">Merchant of Record Guide</h1>
          <p className="text-blue-4 pt-4 w-4/5">
            Free guide for all entrepreneurs and organizations explaining why
            partnering with a Merchant of Record is more important than you
            might realize.
          </p>
          <button className="mt-6 px-5 py-2 text-black bg-white rounded-full flex gap-2 items-center">
            <IoArrowDownOutline /> Download
            <IoArrowDownOutline />
          </button>
        </div>
        <div className="col-span-full lg:col-span-6">
          <img src="/images/sup-3.svg" alt="support" />
        </div>
        <div className="col-span-full lg:col-span-6 py-8 lg:py-0 px-4 md:px-16 lg:px-24">
          <p className="text-purple uppercase text-sm">s/3</p>

          <h1 className="text-3xl pt-8">Want merch?</h1>
          <p className="text-blue-4 pt-4 w-4/5">
            Want some fresh Lemon Squeezy swag with all the lemon puns you could
            ever imagine? The wait is almost over as we’re gearing up for a
            limited-time merch drop.
          </p>
          <button className="mt-6 px-5 py-2 text-black bg-white rounded-full flex gap-2 items-center">
            <IoArrowDownOutline /> Download
            <IoArrowDownOutline />
          </button>
        </div>
        <div className="col-span-full lg:col-span-6">
          <img src="/images/sup-4.svg" alt="support" />
        </div>
        <div className="col-span-full lg:col-span-6 py-8 lg:py-0 px-4 md:px-16 lg:px-24 bg-purple-2 h-full lg:pt-32">
          <p className="text-purple uppercase text-sm">s/4</p>

          <h1 className="text-3xl pt-8">
            Book a demo today and get your own personal guided tour of
            Lemon Squeezy
          </h1>
          <p className="text-blue-4 pt-4 w-4/5">
            Still have questions about Lemon Squeezy?{" "}
            <span className="text-black">
              Book a call with our sales team today
            </span>{" "}
            swag with all the lemon puns you could and we’ll show exactly how we
            can revolutionize the way your business handles global payments and
            sales tax forever.
          </p>
          <button className="mt-6 px-5 py-2 text-white bg-purple-1 rounded-full flex gap-2 items-center">
            Book a product tour <FaArrowRight />
          </button>
        </div>
        <div className="col-span-full lg:col-span-6">
          <img src="/images/sup-5.svg" alt="support" />
        </div>
        <div className="col-span-full lg:col-span-6 py-8 lg:py-0 px-4 md:px-16 lg:px-24">
          <p className="text-purple uppercase text-sm">s/5</p>

          <h1 className="text-3xl pt-8">Need help?</h1>
          <p className="text-blue-4 pt-4 w-4/5">
            If you’re looking to get in touch with support, talk to the
            founders, or just say hello, we’re all ears.
          </p>
          <button className="mt-6 pr-5 py-2 text-black font-bold bg-white rounded-full flex gap-2 items-center">
            Help center
            <FaArrowRight />
          </button>
          <button className="pr-5 py-2 text-black font-bold bg-white rounded-full flex gap-2 items-center">
            Documentation
            <FaArrowRight />
          </button>
          <button className="pr-5 py-2 text-black font-bold bg-white rounded-full flex gap-2 items-center">
            API documentation
            <FaArrowRight />
          </button>
          <button className="pr-5 py-2 text-black font-bold bg-white rounded-full flex gap-2 items-center">
            Product roadmap
            <FaArrowRight />
          </button>
          <button className="pr-5 py-2 text-black font-bold bg-white rounded-full flex gap-2 items-center">
            Changelog
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
