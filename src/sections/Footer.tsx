"use client";

import igLogo from "@/assets/instagram.svg";
import linkEdLogo from "@/assets/linkedin.svg";
import Link from "next/link";

const sociaLogo = [igLogo, linkEdLogo];

const socialLogos = [
  
  { component: igLogo, name: "Instagram Logo" },
  { component: linkEdLogo, name: "LinkedIn Logo" },
];

export const Footer = () => {
  return (
    <footer>
      <section className="py-20 w-[90%] m-auto md:container">
        <div className="container flex flex-col gap-5 md:items-center md:flex-row md:justify-between">
          <div className="flex flex-row items-center gap-1 ">
            
            <div className="mr-1 text-xl font-extrabold font-cinzel">
            <Link href={"/"}>RD</Link>
            </div>
          </div>
          <div>
            <nav className="flex flex-col gap-4 text-sm font-cinzel md:flex-row">
            <Link className="transition text-white/50 hover:text-white" href="/about">
                About
              </Link>
              <Link className="transition text-white/50 hover:text-white" href="/services">
                Services
              </Link>
              <Link className="transition text-white/50 hover:text-white" href="/brand-elevation">
                Brand Elevation
              </Link>
              <Link className="transition text-white/50 hover:text-white" href="/contacts">
                Contact Me
              </Link>              
            </nav>
          </div>
          <div className="flex gap-3">
            {socialLogos.map((social, index) => {
              const IconComponent = social.component;
              return (
                <div key={index} className="">
                  <IconComponent className="w-6" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};
