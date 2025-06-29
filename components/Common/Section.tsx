import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  description?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  title,
  description,
  className = "",
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {(title || description) && (
        <div className="mb-16 text-center">
          {title && (
            <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-foreground-accent mx-auto max-w-2xl text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
