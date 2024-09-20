import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="py-8 bg-blue">
      <div className="mx-4 md:mx-12 lg:mx-24 md:py-16">
        <p className="uppercase text-sm text-yellow">elevate your business</p>

        <div className="grid grid-cols-12 py-4 pt-12">
          <div className="col-span-full md:col-span-6">
            <p className="text-3xl md:text-3xl text-white lg:text-5xl md:mr-24 ">
              Take your business to the next level with Lemon Squeezy
            </p>
          </div>
          <div className="col-span-full md:col-span-6 relative">
            <button className="lg:absolute bottom-0 right-0 mt-6 px-5 py-2 text-black bg-white rounded-full flex gap-2 items-center">
              Get started for free <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="py-8">
          <img src="/images/pad.svg" alt="pad" />
        </div>
        <div className="grid grid-cols-12 py-4">
          <div className="col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-white pt-4 lg:pt-0">Resources</h1>

              <a href="#Help center" className="text-white-1 pt-6">
                Help center
              </a>
              <a href="#Help docs" className="text-white-1">
                Help docs
              </a>
              <a href="#Developer docs" className="text-white-1">
                Developer docs
              </a>
              <a href="#Guide to MoR" className="text-white-1">
                Guide to MoR
              </a>
              <a href="#Creators' Guide" className="text-white-1">
                Creators' Guide
              </a>
              <h1 className="font-bold text-white pt-4 ">Compare</h1>
              <a href="#Stripe Alternative" className="text-white-1 pt-6">
                Stripe Alternative
              </a>
              <a href="#Gumroad Alternative" className="text-white-1">
                Gumroad Alternative
              </a>
              <a href="#Paddle Alternative" className="text-white-1">
                Paddle Alternative
              </a>
            </div>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-white pt-4 lg:pt-0">Features</h1>

              <a href="#Affiliates" className="text-white-1 pt-6">
                Affiliates
              </a>
              <a href="#PayPal Subscriptions" className="text-white-1">
                PayPal Subscriptions
              </a>
              <a href="#Usage-based Billing" className="text-white-1">
                Usage-based Billing
              </a>
              <a href="#Customer Portal" className="text-white-1">
                Customer Portal
              </a>
              <a href="#Discount Codes" className="text-white-1">
                Discount Codes
              </a>
              <a href="#Lead Magnets" className="text-white-1">
                Lead Magnets
              </a>
              <a href="#PWYW Pricing" className="text-white-1">
                PWYW Pricing
              </a>
              <a href="#Roadmap" className="text-white-1">
                Roadmap
              </a>
              <a href="#Changelog" className="text-white-1">
                Changelog
              </a>
              <a href="#Suggest features" className="text-white-1">
                Suggest features
              </a>
            </div>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-white pt-4 lg:pt-0">Platform</h1>

              <a href="#Merchant of Record" className="text-white-1 pt-6">
                Merchant of Record
              </a>
              <a href="#Subscriptions" className="text-white-1">
                Subscriptions
              </a>
              <a href="#Payments" className="text-white-1">
                Payments
              </a>
              <a href="#Online Storefront" className="text-white-1">
                Online Storefront
              </a>
              <a href="#Digital Products" className="text-white-1">
                Digital Products
              </a>
              <a href="#Checkout Overlays" className="text-white-1">
                Checkout Overlays
              </a>
              <a href="#Hosted Checkouts" className="text-white-1">
                Hosted Checkouts
              </a>
              <a href="#Fraud Prevention" className="text-white-1">
                Fraud Prevention
              </a>
              <a href="#Customer Management" className="text-white-1">
                Customer Management
              </a>
            </div>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-3">
            <div className="flex flex-col space-y-3">
              <h1 className="font-bold text-white pt-4 lg:pt-0">Company</h1>

              <a href="#About" className="text-white-1 pt-6">
                About
              </a>
              <a href="#Pricing" className="text-white-1">
                Pricing
              </a>
              <a href="#Case Studies" className="text-white-1">
                Case Studies
              </a>
              <a href="#Wall of Love" className="text-white-1">
                Wall of Love
              </a>
              <a href="#Blog" className="text-white-1">
                Blog
              </a>
              <a href="#Brand Assets" className="text-white-1">
                Brand Assets
              </a>
              <a href="#Migration Offer" className="text-white-1">
                Migration Offer
              </a>
              <a href="#@lmsqueezy" className="text-white-1">
                @lmsqueezy
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row item-center justify-center gap-2">
          <p className=" text-white-1 text-center">&copy; 2024 Lemon Squeezy, LLC</p>
          <div className="flex item-center justify-center gap-2 text-white-1">
            <li>Privacy</li>
            <li>Terms</li>
            <li>DPA</li>
          </div>
        </div>
      </div>
    </section>
  );
};
