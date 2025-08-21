"use client"; // keep client so Navbar (client) can import it

import Image from "next/image";

export default function LogoImg({
  size = 32,
  src = "/logo-rda.svg",
  alt = "Logo PT Rimbun Daur Alam",
}: {
  size?: number;
  src?: string;
  alt?: string;
}) {
  return (
    <Image
      src={src} // ensure this exists in /public
      alt={alt}
      width={size}
      height={0}
      className="h-auto object-contain"
      priority
    />
  );
}
