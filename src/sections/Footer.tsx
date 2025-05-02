"use client";

import igLogo from "@/assets/instagram.svg";
import linkEdLogo from "@/assets/linkedin.svg";


import { Cover } from "../components/ui/cover";

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
            <div className="w-8 border rounded-full w-25 border-white/15 p-0.5">
             
            </div>
            <div className="mr-1 text-sm font-extrabold font-cinzel">
              RV
            </div>
          </div>
          <div>
            <nav className="flex flex-col gap-4 text-sm font-cinzel md:flex-row">
              <a className="transition text-white/50 hover:text-white" href="#">
                About
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Services
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Brand Elevation
              </a>
              <a className="transition text-white/50 hover:text-white" href="#">
                Contact Me
              </a>
              
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
