import React from "react";

const Logos: React.FC = () => {
  const logos = [
    { name: "Bank of America", logo: "🏦" },
    { name: "Chase", logo: "🏛️" },
    { name: "Wells Fargo", logo: "🏦" },
    { name: "Citibank", logo: "🏛️" },
    { name: "American Express", logo: "💳" },
    { name: "Visa", logo: "💳" },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-foreground-accent text-sm font-medium">
            Compatible with major banks and credit cards
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="text-foreground-accent hover:text-foreground flex items-center gap-2 transition-colors"
            >
              <span className="text-2xl">{logo.logo}</span>
              <span className="font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
