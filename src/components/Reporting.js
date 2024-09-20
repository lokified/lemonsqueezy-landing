import React from "react";

export const Reporting = () => {
  return (
    <section className="py-8">
      <div className="mx-4 md:mx-12 lg:mx-24 py-8 md:py-16">
        <p className="uppercase text-sm text-green">reporting</p>

        <div className="grid grid-cols-12 py-4 items-center">
          <div className="col-span-full md:col-span-6">
            <p className="text-3xl md:text-3xl lg:text-5xl w-full md:w-3/4">
              Understand your business and customers
            </p>
          </div>
          <div className="col-span-full md:col-span-6 py-8 md:py-0">
            <p className="text-blue-4 w-full lg:w-3/4">
              Running a software company requires its own unique set of insights
              — free trial conversion rates, MRR, churn rate, and more{" "}
              <span className="text-black">Get to know your customers </span> so
              you can understand your business needs, up your marketing and
              <span className="text-black">
                {" "}
                take your business to new heights.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 py-8 lg:py-16">
        <div className="col-span-full md:col-span-6">
          <img src="/images/rep-1.svg" alt="rep" />
        </div>
        <div className="col-span-full md:col-span-6">
          <img src="/images/rep-2.svg" alt="rep" />
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24 py-16">
        <div className="grid grid-cols-12 gap-5 space-y-5">
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-green uppercase text-sm">r/1</p>
            <h1 className="text-3xl pt-8">Understand your revenue</h1>
            <p className="text-blue-4 pt-4">
              Like your business, accurate metrics are serious.{" "}
              <span className="text-black">
                {" "}
                Lead your business with confidence
              </span>{" "}
              . There’s nothing more frustrating than cloudy metrics.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-green uppercase text-sm">r/2</p>
            <h1 className="text-3xl pt-8">All-in-one revenue reconciliation</h1>
            <p className="text-blue-4 pt-4">
              With Lemon Squeezy, you can{" "}
              <span className="text-black">
                {" "}
                accept up to 21 payment methods
              </span>{" "}
              , including PayPal, all under one roof. We also shoulder the
              burden of VAT / taxes.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-green uppercase text-sm">r/3</p>
            <h1 className="text-3xl pt-8">Real-time revenue insights</h1>
            <p className="text-blue-4 pt-4">
              Have peace of mind{" "}
              <span className="text-black">
                {" "}
                monitoring your most valuable metrics
              </span>{" "}
              relating to your business. From MRR, refunds, average order value,
              and more.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-green uppercase text-sm">r/4</p>
            <h1 className="text-3xl pt-8">Understand your audience</h1>
            <p className="text-blue-4 pt-4">
              By having your ecommerce and customer data in one central
              location, you can{" "}
              <span className="text-black"> connect with your audience</span> in
              a whole new way. Context matters.
            </p>
          </div>

          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-green uppercase text-sm">r/5</p>
            <h1 className="text-3xl pt-8">Recover lost payments</h1>
            <p className="text-blue-4 pt-4">
              More than just card retries. From abandoned carts to failed
              payment recovery,
              <span className="text-black">
                {" "}
                understand where your leaky buckets are
              </span>{" "}
              and how to fix them.
            </p>
          </div>

          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-green uppercase text-sm">r/6</p>
            <h1 className="text-3xl pt-8">Track email performance</h1>
            <p className="text-blue-4 pt-4">
              Frequently communicating with your audience is half the battle.
              <span className="text-black">
                {" "}
                Learn how your message is being received
              </span>{" "}
              so you can course correct quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
