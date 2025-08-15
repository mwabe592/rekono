"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/rekon-high-resolution-logo-transparent.png"
              alt={`${siteDetails.siteName} logo`}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority={false}
            />
            <h3 className="manrope cursor-pointer text-lg font-semibold md:text-xl">
              {siteDetails.siteName}
            </h3>
          </Link>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>

          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="text-foreground-accent hover:text-foreground block"
            >
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="text-foreground-accent hover:text-foreground block"
            >
              Phone: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex flex-wrap items-center gap-5">
              {Object.keys(footerDetails.socials).map((platformName) => {
                const socialUrl = footerDetails.socials[platformName];
                if (platformName && socialUrl) {
                  return (
                    <Link
                      href={socialUrl}
                      key={platformName}
                      aria-label={platformName}
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div> */}
      </div>
      <div className="text-foreground-accent mt-8 px-6 md:text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            {siteDetails.siteName}.
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
