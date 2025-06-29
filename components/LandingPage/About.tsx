"use client";

import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div id="demo" className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="mb-10 w-full text-center">
            <h2 className="mb-6 text-5xl font-bold text-black lg:text-6xl xl:text-7xl dark:text-white">
              Automate Your Bank Statement
              <span className="before:bg-titlebg dark:before:bg-titlebgdark relative block before:absolute before:bottom-2.5 before:left-1/2 before:-z-1 before:h-3 before:w-full before:-translate-x-1/2">
                Reconciliation
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
              <Image
                src="/images/mockups/mockup-1.png"
                alt="Dashboard Mockup"
                className="shadow-solid-8 rounded-lg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="animate_right md:w-1/2">
              <span className="font-medium text-black uppercase dark:text-white">
                <span className="bg-meta text-metatitle mr-4 mb-4 inline-flex rounded-full px-4.5 py-1 text-white uppercase">
                  New
                </span>{" "}
                Financial Reconciliation Tool
              </span>
              <p>
                Stop spending hours manually matching transactions between your
                credit card and bank statements. Our intelligent tool
                automatically identifies matching transactions, highlights
                discrepancies, and provides detailed reports in seconds.
              </p>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Smart CSV Parsing & Matching
                  </h3>
                  <p>
                    Automatically detects transaction amounts, dates, and
                    descriptions across different bank formats.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Comprehensive Results & Export
                  </h3>
                  <p>
                    View matched pairs, unmatched transactions, and export
                    professional CSV/PDF reports instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="max-w-c-1235 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="mb-10 w-full text-center">
            <h2 className="mb-6 text-5xl font-bold text-black lg:text-6xl xl:text-7xl dark:text-white">
              Packed with Essential
              <span className="before:bg-titlebg2 dark:before:bg-titlebgdark relative block before:absolute before:bottom-2.5 before:left-1/2 before:-z-1 before:h-3 before:w-full before:-translate-x-1/2">
                Features
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_left md:w-1/2">
              <h4 className="font-medium text-black uppercase dark:text-white">
                Built for Financial Professionals
              </h4>
              <p>
                From small businesses to accounting firms, our tool handles
                complex reconciliation tasks with precision and speed. No more
                manual spreadsheet work or missed transactions.
              </p>
              <div>
                <Link
                  href="/signin"
                  className="group hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5 text-black dark:text-white"
                >
                  <span className="duration-300 group-hover:pr-2">
                    See How It Works
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
              <Image
                src="/images/mockups/mockup-3.png"
                alt="Transaction Matching Results"
                className="shadow-solid-8 rounded-lg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
