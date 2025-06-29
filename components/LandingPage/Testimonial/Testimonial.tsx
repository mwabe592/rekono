"use client";
import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <span className="font-medium text-black uppercase dark:text-white">
            TESTIMONIALS
          </span>
          <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
            Client's
            <span className="before:bg-titlebg2 dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
              Testimonials
            </span>
          </h2>
          <p className="text-para2 text-waterloo dark:text-manatee">
            See what our users say about Rekon's transaction reconciliation
            capabilities.
          </p>
        </div>
      </div>

      <div className="max-w-c-1235 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="mx-auto grid w-full max-w-lg gap-14 lg:max-w-full lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="">
              <div className="mb-4 flex w-full items-center justify-center lg:justify-start">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  width={50}
                  height={50}
                  className="rounded-full shadow-md"
                />
                <div className="ml-4">
                  <h3 className="text-primary text-lg font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-waterloo dark:text-manatee text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-waterloo dark:text-manatee text-center lg:text-left">
                &quot;{testimonial.message}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
