"use client";
import React from "react";
import clsx from "clsx";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";

interface PricingTier {
  name: string;
  subtitle: string;
  description: string;
  price: number | string;
  color: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Free",
    description: "For occasional users who need a quick match here and there.",
    price: 0,
    color: "green",
    features: [
      { text: "20 statement matches/month", included: true },
      { text: "Upload 2 CSV files per match", included: true },
      { text: "Smart matching algorithm", included: true },
      { text: "PDF + CSV export", included: true },
      { text: "Match history", included: false },
      { text: "Tolerance settings", included: false },
      { text: "Support", included: false },
    ],
  },
  {
    name: "Power Matcher",
    subtitle: "Standard",
    description: "Ideal for regular users who want power and flexibility.",
    price: 5,
    color: "blue",
    popular: true,
    features: [
      { text: "Unlimited statement matches", included: true },
      { text: "All Free features", included: true },
      { text: "Access to match history (locally stored)", included: true },
      { text: "Adjustable match tolerance", included: true },
      { text: "Batch upload & matching", included: true },
      { text: "Description/amount filters", included: true },
      { text: "Early access to features", included: true },
      { text: "Priority support", included: true },
    ],
  },
  {
    name: "Team Reconcile",
    subtitle: "Pro",
    description:
      "For power users, freelancers or small teams who reconcile frequently.",
    price: 12,
    color: "yellow",
    features: [
      { text: "All Standard features", included: true },
      { text: "Manage up to 5 profiles or accounts", included: true },
      { text: "Upload multiple file sets at once", included: true },
      { text: "Advanced filters (custom rules, tags, notes)", included: true },
      { text: "Shareable reports (PDF/CSV with branding)", included: true },
      { text: "Email summaries of matches", included: true },
      { text: "Dedicated support inbox", included: true },
    ],
  },
];

const PricingColumn: React.FC<{ tier: PricingTier; highlight?: boolean }> = ({
  tier,
  highlight,
}) => {
  const { name, subtitle, description, price, color, features, popular } = tier;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "text-green-600";
      case "blue":
        return "text-blue-600";
      case "yellow":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-800";
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={clsx(
        "relative mx-auto w-full max-w-sm rounded-xl border border-gray-200 bg-white lg:max-w-full",
        { "ring-primary ring-opacity-50 shadow-lg ring-2": highlight },
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
          <span className="bg-primary rounded-full px-4 py-1 text-sm font-medium text-white">
            Most Popular
          </span>
        </div>
      )}

      <div className="rounded-t-xl border-b border-gray-200 p-6">
        <div className="mb-2 flex items-center gap-2">
          <span
            className={clsx(
              "rounded px-2 py-1 text-sm font-medium",
              getBadgeColor(color),
            )}
          >
            {subtitle}
          </span>
        </div>
        <h3 className="mb-2 text-2xl font-semibold">{name}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <p className="mb-6 text-3xl font-bold md:text-5xl">
          <span className={clsx({ "text-primary": highlight })}>
            {typeof price === "number" ? `$${price}` : price}
          </span>
          {typeof price === "number" && (
            <span className="text-lg font-normal text-gray-600">/mo</span>
          )}
        </p>
        <button
          className={clsx(
            "w-full rounded-full px-4 py-3 font-medium transition-colors",
            {
              "bg-primary hover:bg-primary-accent text-white": highlight,
              "hover:bg-primary-accent bg-white text-gray-900 hover:text-white":
                !highlight,
            },
          )}
        >
          Get Started
        </button>
      </div>

      <div className="p-6">
        <p className="mb-2 font-bold">FEATURES</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <BsFillCheckCircleFill className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
              ) : (
                <BsXCircleFill className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-gray-400" />
              )}
              <span
                className={clsx(
                  "text-sm",
                  feature.included
                    ? "text-gray-900"
                    : "text-gray-500 line-through",
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <PricingColumn key={tier.name} tier={tier} highlight={tier.popular} />
      ))}
    </div>
  );
};

export default Pricing;
