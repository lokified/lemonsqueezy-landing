import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Features = () => {
  const featImages = ["feat-1.jpg", "feat-2.jpg", "feat-3.jpg", "feat-4.jpg", "feat-5.jpg", "feat-6.jpg"];

  const [featImage, setFeatImage] = useState(featImages[0]);
  const [selectedIndex, setSelectedIndex]  = useState(1)

  const onChangeImage = (index) => {
    setFeatImage(featImages[index - 1]);
    setSelectedIndex(index)
  };

  return (
    <div className="mx-4 md:mx-12 lg:mx-24 py-8">
      <div className="grid grid-cols-12">
        <div className="col-span-full lg:col-span-6 mr-8">
          <div
            className="border-b border-b-black-1 p-5 cursor-pointer hover:bg-secondary"
            onClick={() => onChangeImage(1)}
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="pr-5 text-blue-1">01</span>{" "}
                <span className="text-2xl hover:text-blue">
                  Global tax compliance
                </span>
              </p>
              <FiArrowRight className={`${ selectedIndex === 1 ? "inline-block" : "hidden"}`} />
            </div>

            <div className={`py-3 transform ${ selectedIndex === 1 ? "inline-block translate-y-0" : "hidden translate-y-full"} transition-transform duration-500 ease-in-out`}>
              <span className="text-blue-1">
                We’re your merchant of record. That means
              </span>{" "}
              we handle the legal side of processing payments,{" "}
              <span className="text-blue-1">
                merchant fees, fraud, and taxes for you without you lifting a
                finger.
              </span>
            </div>
          </div>

          <div
            className="border-b border-b-black-1 p-5 cursor-pointer hover:bg-secondary"
            onClick={() => onChangeImage(2)}
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="pr-5 text-blue-1">02</span>{" "}
                <span className="text-2xl hover:text-blue">
                  Borderless SaaS payments
                </span>
              </p>
              <FiArrowRight className={`${ selectedIndex === 2 ? "inline-block" : "hidden"}`} />
            </div>

            <div className={`py-3 ${ selectedIndex === 2 ? "inline-block" : "hidden"}`}>
              <span className="text-blue-1">
                We’re your merchant of record. That means
              </span>{" "}
              we handle the legal side of processing payments,{" "}
              <span className="text-blue-1">
                merchant fees, fraud, and taxes for you without you lifting a
                finger.
              </span>
            </div>
          </div>

          <div
            className="border-b border-b-black-1 p-5 cursor-pointer hover:bg-secondary"
            onClick={() => onChangeImage(3)}
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="pr-5 text-blue-1">03</span>{" "}
                <span className="text-2xl hover:text-blue">
                  Instant payment methods
                </span>
              </p>
              <FiArrowRight className={`${ selectedIndex === 3 ? "inline-block " : "hidden"}`} />
            </div>

            <div className={`py-3 ${ selectedIndex === 3 ? "inline-block" : "hidden"}`}>
              <span className="text-blue-1">
                We’re your merchant of record. That means
              </span>{" "}
              we handle the legal side of processing payments,{" "}
              <span className="text-blue-1">
                merchant fees, fraud, and taxes for you without you lifting a
                finger.
              </span>
            </div>
          </div>

          <div
            className="border-b border-b-black-1 p-5 cursor-pointer hover:bg-secondary"
            onClick={() => onChangeImage(4)}
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="pr-5 text-blue-1">04</span>{" "}
                <span className="text-2xl hover:text-blue">
                  Local currency support
                </span>
              </p>
              <FiArrowRight className={`${ selectedIndex === 4 ? "inline-block" : "hidden"}`} />
            </div>

            <div className={`py-3 ${ selectedIndex === 4 ? "inline-block" : "hidden"}`}>
              <span className="text-blue-1">
                We’re your merchant of record. That means
              </span>{" "}
              we handle the legal side of processing payments,{" "}
              <span className="text-blue-1">
                merchant fees, fraud, and taxes for you without you lifting a
                finger.
              </span>
            </div>
          </div>

          <div
            className="border-b border-b-black-1 p-5 cursor-pointer hover:bg-secondary"
            onClick={() => onChangeImage(5)}
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="pr-5 text-blue-1">05</span>{" "}
                <span className="text-2xl hover:text-blue">
                  A.I. fraud prevention
                </span>
              </p>
              <FiArrowRight className={`${ selectedIndex === 5 ? "inline-block" : "hidden"}`} />
            </div>

            <div className={`py-3 ${ selectedIndex === 5 ? "inline-block" : "hidden"}`}>
              <span className="text-blue-1">
                We’re your merchant of record. That means
              </span>{" "}
              we handle the legal side of processing payments,{" "}
              <span className="text-blue-1">
                merchant fees, fraud, and taxes for you without you lifting a
                finger.
              </span>
            </div>
          </div>

          <div
            className="border-b border-b-black-1 p-5 cursor-pointer hover:bg-secondary"
            onClick={() => onChangeImage(6)}
          >
            <div className="flex justify-between items-center">
              <p>
                <span className="pr-5 text-blue-1">06</span>{" "}
                <span className="text-2xl hover:text-blue">
                  Failed payment recovery
                </span>
              </p>
              <FiArrowRight className={` ${ selectedIndex === 6 ? "inline-block" : "hidden"}`} />
            </div>

            <div className={`py-3 ${ selectedIndex === 6 ? "inline-block" : "hidden"}`}>
              <span className="text-blue-1">
                We’re your merchant of record. That means
              </span>{" "}
              we handle the legal side of processing payments,{" "}
              <span className="text-blue-1">
                merchant fees, fraud, and taxes for you without you lifting a
                finger.
              </span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-6">
          <img src={`/images/${featImage}`} alt="feature" />
        </div>
      </div>
    </div>
  );
};
