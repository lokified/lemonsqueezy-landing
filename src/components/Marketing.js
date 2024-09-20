import React from "react";

export const Marketing = () => {
  return (
    <section className="py-8">
      <div className="mx-4 md:mx-12 lg:mx-24 py-8 md:py-16">
        <p className="uppercase text-sm text-sky">marketing</p>

        <div className="grid grid-cols-12 py-4 items-center">
          <div className="col-span-full md:col-span-6">
            <p className="text-3xl md:text-3xl lg:text-5xl w-full md:w-3/4">
              Grow your business with integrated marketing tools
            </p>
          </div>
          <div className="col-span-full md:col-span-6 py-8 md:py-0">
            <p className="text-blue-4 w-full lg:w-3/4">
              Grow your audience, build long-lasting customer relationships, and
              make more sales with
              <span className="text-black">
                powerful, easy-to-use marketing tools{" "}
              </span>{" "}
              . Whether you need to offer discount codes or you want to build
              your email list, you can do it all with Lemon Squeezy.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 py-8 lg:py-16">
        <div className="col-span-full md:col-span-6">
          <img src="/images/mark-1.svg" alt="mark" />
        </div>
        <div className="col-span-full md:col-span-6">
          <img src="/images/mark-2.svg" alt="mark" />
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24 py-16">
        <div className="grid grid-cols-12 gap-5 space-y-5">
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-sky uppercase text-sm">m/1</p>
            <h1 className="text-3xl pt-8">Email marketing made easy</h1>
            <p className="text-blue-4 pt-4">
              Combining e-commerce and email marketing gives you context to
              finally{" "}
              <span className="text-black">
                {" "}
                send emails like you know your customers
              </span>{" "}
              — because you do.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-sky uppercase text-sm">m/2</p>
            <h1 className="text-3xl pt-8">Avoid the spam folders</h1>
            <p className="text-blue-4 pt-4">
              Leverage Lemon Squeezy’s glowing reputation and increase your
              delivery rates to{" "}
              <span className="text-black">
                {" "}
                land more emails in more inboxes
              </span>{" "}
              without the hassle.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-sky uppercase text-sm">m/3</p>
            <h1 className="text-3xl pt-8">Grow with lead magnets</h1>
            <p className="text-blue-4 pt-4">
              Gain attention with freebies and “Pay what you want” donations,
              and{" "}
              <span className="text-black">
                {" "}
                turn subscribers into customers
              </span>{" "}
              . Watch your email list grow overnight.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-sky uppercase text-sm">m/4</p>
            <h1 className="text-3xl pt-8">Create bundles + upsells</h1>
            <p className="text-blue-4 pt-4">
              Sell your products individually, or bundle them together in unique
              collections to{" "}
              <span className="text-black"> earn more expansion revenue</span>{" "}
              instantly.
            </p>
          </div>

          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-sky uppercase text-sm">m/5</p>
            <h1 className="text-3xl pt-8">Discounts + coupon codes</h1>
            <p className="text-blue-4 pt-4">
              Generate unique coupon codes to reward your customers and
              <span className="text-black">
                {" "}
                nudge visitors closer to purchasing
              </span>{" "}
              with one singular view to manage it all.
            </p>
          </div>

          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-sky uppercase text-sm">m/6</p>
            <h1 className="text-3xl pt-8">Segment your customers</h1>
            <p className="text-blue-4 pt-4">
              Gain powerful data and insights about your customers as your store
              grows, and
              <span className="text-black">
                {" "}
                target customers based on how they interact
              </span>{" "}
              with your brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
