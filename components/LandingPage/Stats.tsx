import React from "react";

const Stats: React.FC = () => {
  const stats = [
    {
      number: "99.9%",
      label: "Accuracy Rate",
      description: "Transaction matching precision",
    },
    {
      number: "10x",
      label: "Faster",
      description: "Than manual reconciliation",
    },
    {
      number: "100%",
      label: "Secure",
      description: "Local processing only",
    },
    {
      number: "24/7",
      label: "Available",
      description: "Work anytime, anywhere",
    },
  ];

  return (
    <section className="bg-primary py-16 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold md:text-4xl">
                {stat.number}
              </div>
              <div className="mb-1 text-lg font-semibold">{stat.label}</div>
              <div className="text-sm opacity-80">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
