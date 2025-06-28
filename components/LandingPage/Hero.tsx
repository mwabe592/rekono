"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Split text into words for word-by-word animation
  const headlineWords =
    "Reconcile Your Bank Statements in Minutes — Not Hours".split(" ");
  const descriptionWords =
    "Ditch the manual spreadsheet screening. Get instant matches, clear reports, and peace of mind. No third-party connections. No cloud syncing. Just upload your bank and credit card statements, and let our offline tool reconcile them with precision—right on your device.".split(
      " ",
    );

  // Word animation variants - this is the key code for the reading effect
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Container variants for staggered word appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This controls the speed - lower = faster typing
        delayChildren: 0.2,
      },
    },
  };

  // Headline container with different timing
  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Slightly faster for headline
        delayChildren: 0.8, // Starts after tagline
      },
    },
  };

  // Description container - long paragraph
  const descriptionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Much slower for longer text - increase this value to make it slower
        delayChildren: 1.8, // Starts after headline
      },
    },
  };

  // CTA animation
  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 7.7, // Appears after all text is "typed"
      },
    },
  };

  return (
    <>
      <section
        id="hero"
        className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25"
      >
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              {/* Headline with word-by-word animation */}
              <motion.div
                className="mb-6 pr-16 text-5xl font-bold text-black dark:text-white"
                variants={headlineContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-2 inline-block"
                  >
                    {word === "Minutes" ? (
                      <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.div>

              {/* Description with word-by-word animation */}
              <motion.div
                className="text-body-color dark:text-body-color-dark mb-6 text-lg"
                variants={descriptionContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {descriptionWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-1 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className="mt-10"
                variants={ctaVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-wrap gap-5">
                  <Link href="/signin">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="try it free button"
                      className="bg-primary hover:bg-primaryho dark:bg-btndark dark:hover:bg-blackho flex rounded-full px-7.5 py-3 font-medium text-white duration-300 ease-in-out hover:cursor-pointer"
                    >
                      Try it Free
                    </motion.button>
                  </Link>
                </div>

                <motion.p
                  className="text-body-color dark:text-body-color-dark mt-5 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.2, duration: 0.8 }}
                >
                  Try for free • No credit card required • 100% secure & private
                </motion.p>
              </motion.div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute top-0 -left-11.5"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-0 bottom-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="shadow-solid-l hidden dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
