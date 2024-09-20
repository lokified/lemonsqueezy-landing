import React from "react";

export const About = () => {
  return (
    <div className="mx-4 md:mx-12 lg:mx-24 py-12 lg:py-24">
      <p className="text-blue-1 text-sm uppercase">why lemon squeezy?</p>

      <p className="text-xl md:text-2xl lg:text-4xl py-5" style={{lineHeight: "3.3rem"}}>
        Lemon Squeezy is the all-in-one platform for running your SaaS business.
        Payments, subscriptions, global tax compliance, fraud prevention,
        multi-currency support, failed payment recovery, PayPal integration and
        more. We make running your software business easy peasy.
      </p>
    </div>

  );
};
