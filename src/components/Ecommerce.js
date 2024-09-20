import React from "react";

export const Ecommerce = () => {
  return (
    <section className="py-8">
      <div className="mx-4 md:mx-12 lg:mx-24 py-8 md:py-16">
        <p className="uppercase text-sm text-pink">ecommerce</p>

        <div className="grid grid-cols-12 py-4 items-center">
          <div className="col-span-full md:col-span-6">
            <p className="text-3xl md:text-3xl lg:text-5xl w-full md:w-3/4">
              Create the perfect buying experience for your customers
            </p>
          </div>
          <div className="col-span-full md:col-span-6 py-8 md:py-0">
            <p className="text-blue-4 w-full lg:w-3/4">
              Launch your secure ecommerce website and start selling software,
              subscriptions and digital downloads anywhere in minutes.
              <span className="text-black">
                Utilize no-code checkout links{" "}
              </span>{" "}
              without worrying about design, mobile optimization, or payment
              integrations. It really is easy-peasy.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 py-8 lg:py-16">
        <div className="col-span-full md:col-span-6">
          <img src="/images/ecom-1.svg" alt="ecom" />
        </div>
        <div className="col-span-full md:col-span-6">
          <img src="/images/ecom-2.svg" alt="ecom" />
        </div>
      </div>
      <div className="mx-4 md:mx-12 lg:mx-24 py-16">
        <div className="grid grid-cols-12 gap-5 space-y-5">
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-pink uppercase text-sm">E/1</p>
            <h1 className="text-3xl pt-8">Accept online payments</h1>
            <p className="text-blue-4 pt-4">
              Don't worry about merchant accounts and billing logic.{" "}
              <span className="text-black">
                {" "}
                Choose per seat, usage-based and more .
              </span>{" "}
              Customize as little or as much as you like.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-pink uppercase text-sm">E/2</p>
            <h1 className="text-3xl pt-8">Recurring billing + subscriptions</h1>
            <p className="text-blue-4 pt-4">
              Charge customers on a weekly, monthly, or yearly basis.{" "}
              <span className="text-black">
                {" "}
                Manage upgrades, downgrades, and cancels
              </span>{" "}
              Offer free trials, discounts, and more.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-pink uppercase text-sm">E/3</p>
            <h1 className="text-3xl pt-8">License key management</h1>
            <p className="text-blue-4 pt-4">
              Automatically issue license keys for your software and apps after
              each sale.{" "}
              <span className="text-black">
                {" "}
                Deactivate, re-issue, and have full control
              </span>{" "}
              over license management.
            </p>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-pink uppercase text-sm">E/4</p>
            <h1 className="text-3xl pt-8">Sell digital downloads</h1>
            <p className="text-blue-4 pt-4">
              Anyone can provide download links, but what about security and
              abuse? Your{" "}
              <span className="text-black">
                {" "}
                download links are securely signed
              </span>{" "}
              , throttled, and more.
            </p>
          </div>

          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-pink uppercase text-sm">E/5</p>
            <h1 className="text-3xl pt-8">No-code checkout forms</h1>
            <p className="text-blue-4 pt-4">
              No matter what you use for your website, you can
              <span className="text-black">
              {" "}embed your checkout or share your unique checkout links
              </span>{" "}
              and sell anywhere.
            </p>
          </div>

          <div className="col-span-full md:col-span-6 lg:col-span-4 w-full md:w-3/4">
            <p className="text-pink uppercase text-sm">E/6</p>
            <h1 className="text-3xl pt-8">Launch your ecommerce store</h1>
            <p className="text-blue-4 pt-4">
              Build an ecommerce website in minutes
              <span className="text-black">
              {" "}without coding or design skills
              </span>{" "}
              . Customizable, SSL secured and mobile-optimized as standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
