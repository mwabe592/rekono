import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo({ width, height }) {
  return (
    <div>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo/rekon-high-resolution-logo-transparent.png"
          alt="logo"
          width={width}
          height={height}
          className="w-full dark:hidden"
        />
        <span className="manrope text-foreground cursor-pointer text-4xl font-semibold">
          Rekono
        </span>
      </Link>
    </div>
  );
}
