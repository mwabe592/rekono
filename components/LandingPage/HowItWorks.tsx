"use client";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      phase: "Ready",
      title: "Upload Your Statements",
      description:
        "Drag and drop your credit card and bank account CSV statements. Our smart parser automatically detects dates, amounts, and descriptions across different bank formats.",
      icon: "📄",
      color: "from-blue-500 to-blue-600",
    },
    {
      phase: "Set",
      title: "Smart Matching Algorithm",
      description:
        "Our intelligent system matches transactions by amount, handles different date formats, normalizes currencies, and ensures one-to-one matching with no duplicates.",
      icon: "🔍",
      color: "from-purple-500 to-purple-600",
    },
    {
      phase: "Go",
      title: "Get Detailed Results",
      description:
        "View matched pairs, unmatched transactions, and export professional CSV/PDF reports. See match rates, totals, and comprehensive reconciliation summaries.",
      icon: "📊",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <>
      {/* <!-- ===== How It Works Start ===== --> */}
      <section
        id="how-it-works"
        className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0"
      >
        <div className="max-w-c-1390 mx-auto">
          {/* Section Header */}
          <div className="animate_top mb-15 text-center">
            <h2 className="mb-4 text-6xl font-bold text-black lg:text-6xl xl:text-6xl dark:text-white">
              Ready. Set. Go.
            </h2>
            <p className="text-body-color dark:text-body-color-dark text-lg">
              Finally a reconciliation tool that actually saves more time than
              it takes.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="animate_top text-center">
                {/* Step Number */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`bg-gradient-to-r ${step.color} flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Phase */}
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                  {step.phase}
                </h3>

                {/* Icon */}
                <div className="mb-4 text-4xl">{step.icon}</div>

                {/* Title */}
                <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="animate_top mt-12 text-center">
            <p className="text-body-color dark:text-body-color-dark mb-6 text-lg">
              No more manual spreadsheet screening. Get instant matches, clear
              reports, and peace of mind.
            </p>
            <Link href="/signin">
              <button className="bg-primary hover:bg-primaryho rounded-full px-8 py-3 font-medium text-white transition-all duration-300 hover:cursor-pointer">
                Try It Free
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ===== How It Works End ===== --> */}
    </>
  );
};

export default HowItWorks;
