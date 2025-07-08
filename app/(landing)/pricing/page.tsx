"use client";
import React from "react";
import Pricing from "@/components/LandingPage/Pricing";
import Container from "@/components/Common/Container";
import Header from "@/components/Header/Header";

const PricingPage = () => {
  return (
    <>
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="mb-4 max-w-2xl text-4xl leading-tight font-bold md:text-5xl">
            A simple plan for every company
          </h1>
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="relative inline-block h-6 w-10 rounded-full bg-blue-100">
              <span
                className="absolute top-1 left-1 h-4 w-4 rounded-full bg-blue-500 transition-transform"
                style={{ transform: "translateX(0)" }}
              ></span>
            </span>
            <span className="text-sm text-gray-600">Billed annually</span>
            <span className="ml-2 rounded bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600">
              20% off
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <Pricing />
        </div>
      </Container>
    </>
  );
};

export default PricingPage;
