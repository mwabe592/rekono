"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";
import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiFileText,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

interface BenefitBullet {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Benefit {
  title: string;
  description: string;
  bullets: BenefitBullet[];
  imageSrc: string;
}

interface BenefitSectionProps {
  benefit: Benefit;
  imageAtRight: boolean;
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const BenefitSection: React.FC<BenefitSectionProps> = ({
  benefit,
  imageAtRight,
}) => {
  const { title, description, imageSrc, bullets } = benefit;

  return (
    <section className="benefit-section">
      <motion.div
        className="mb-24 flex flex-col flex-wrap items-center justify-center gap-2 lg:flex-row lg:flex-nowrap lg:gap-20"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <div
          className={clsx("flex w-full max-w-lg flex-wrap items-center", {
            "justify-start": imageAtRight,
            "justify-end lg:order-1": !imageAtRight,
          })}
        >
          <div className="w-full text-center lg:text-left">
            <motion.div
              className="flex w-full flex-col"
              variants={childVariants}
            >
              <h3 className="text-foreground text-3xl font-bold md:text-4xl lg:max-w-2xl">
                {title}
              </h3>

              <p className="text-foreground-accent mx-auto mt-1.5 leading-normal lg:ml-0">
                {description}
              </p>
            </motion.div>

            <div className="mx-auto w-full lg:ml-0">
              {bullets.map((item, index) => (
                <motion.div
                  key={index}
                  className="mt-6 flex items-start gap-4"
                  variants={childVariants}
                >
                  <div className="bg-primary/10 text-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-foreground-accent">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
          <div
            className={clsx("flex w-fit", {
              "justify-start": imageAtRight,
              "justify-end": !imageAtRight,
            })}
          >
            <Image
              src={imageSrc}
              alt={title}
              width={384}
              height={762}
              quality={100}
              className="lg:ml-0"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const benefits: Benefit[] = [
  {
    title: "Smart Transaction Matching",
    description:
      "Take the guesswork out of reconciling your statements. Our AI-powered matching tool identifies transactions with precision and speed.",
    bullets: [
      {
        title: "Intelligent Matching",
        description:
          "Automatically pairs transactions between credit card and bank statements with high accuracy.",
        icon: <FiCheckCircle size={26} />,
      },
      {
        title: "Customizable Rules",
        description:
          "Set your own matching criteria and preferences for different transaction types.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Instant Results",
        description:
          "Get matched and unmatched transaction reports in seconds, not hours.",
        icon: <FiZap size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Secure & Private Processing",
    description:
      "Your financial data never leaves your device. Process statements locally with bank-grade security measures.",
    bullets: [
      {
        title: "Local Processing",
        description:
          "All data processing happens on your device - no cloud uploads or third-party access.",
        icon: <FiLock size={26} />,
      },
      {
        title: "No Data Storage",
        description:
          "We don't store, transmit, or access your financial information in any way.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Offline Capability",
        description:
          "Work completely offline - no internet connection required for statement processing.",
        icon: <FiUser size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Get detailed insights into your financial transactions with clear, actionable reports and visualizations.",
    bullets: [
      {
        title: "Detailed Analysis",
        description:
          "View matched pairs, unmatched transactions, and reconciliation summaries.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Export Options",
        description:
          "Download results as CSV, PDF, or Excel files for further analysis.",
        icon: <FiFileText size={26} />,
      },
      {
        title: "Visual Insights",
        description:
          "Understand your spending patterns with clear charts and graphs.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
];

const Benefits: React.FC = () => {
  return (
    <div id="features">
      <h2 className="sr-only">Features</h2>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
