"use client";
import React from "react";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      className="from-primary to-primary-accent bg-gradient-to-r py-16 text-black md:py-24"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to Simplify Your Statement Reconciliation?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Join thousands of users who have streamlined their financial
          reconciliation process. Get started today and experience the
          difference.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <button className="rounded-full bg-black px-8 py-3 font-medium text-white transition-colors hover:bg-gray-800">
              Start Free Trial
            </button>
          </Link>
          <Link href="/signin">
            <button className="rounded-full border-2 border-black px-8 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
              Sign In
            </button>
          </Link>
        </div>
        <p className="mt-4 text-sm opacity-80">
          No credit card required • 100% free to start
        </p>
      </div>
    </section>
  );
};

export default CTA;
