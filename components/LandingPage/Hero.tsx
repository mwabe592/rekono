"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center px-5 pt-32 pb-0 md:pt-40"
    >
      <div className="absolute top-0 bottom-0 left-0 -z-10 w-full">
        <div className="bg-hero-background absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] bg-[size:40px_40px]"></div>
      </div>

      <div className="absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]"></div>

      <div className="text-center">
        <h1 className="text-foreground mx-auto max-w-lg text-4xl font-bold md:max-w-2xl md:text-6xl md:leading-tight">
          Smart, Secure, Simple Statement Matching
        </h1>
        <p className="text-foreground mx-auto mt-4 max-w-lg">
          From effortless reconciliation to real-time transaction insights,
          Rekon puts you in control of your financial data like never before
        </p>
        <div className="mx-auto mt-6 flex w-fit flex-col items-center sm:flex-row sm:gap-4">
          <Link href="/signin">
            <button className="bg-primary hover:bg-primary-accent rounded-full px-8 py-3 font-medium text-white transition-colors">
              Get Started
            </button>
          </Link>
          <Link href="/signup">
            <button className="border-primary text-primary hover:bg-primary rounded-full border px-8 py-3 font-medium transition-colors hover:text-white">
              Sign Up Free
            </button>
          </Link>
        </div>
        <Image
          src="/images/hero-mockup.webp"
          width={384}
          height={340}
          quality={100}
          sizes="(max-width: 768px) 100vw, 384px"
          priority={true}
          unoptimized={true}
          alt="statement matching mockup"
          className="relative z-10 mx-auto mt-12 md:mt-16"
        />
      </div>
    </section>
  );
};

export default Hero;
