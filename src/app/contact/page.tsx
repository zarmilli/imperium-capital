"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { Spotlight } from "@/components/spotlight-new";
import { HeroParallax } from "@/components/hero-parallax";

// Dummy images for hero parallax
const products = [
    { title: "Real Estate Growth", link: "#features", thumbnail: "/images/thumb1.png" },
    { title: "Private Equity", link: "#team", thumbnail: "/images/thumb2.png" },
    { title: "Diversified Assets", link: "#compare", thumbnail: "/images/thumb3.png" },
    { title: "Wealth Planning", link: "#features", thumbnail: "/images/thumb1.png" },
    { title: "Capital Preservation", link: "#team", thumbnail: "/images/thumb2.png" },
    { title: "Fixed Income", link: "#compare", thumbnail: "/images/thumb3.png" },
    { title: "Global Strategy", link: "#features", thumbnail: "/images/thumb1.png" },
    { title: "ESG Investments", link: "#team", thumbnail: "/images/thumb2.png" },
    { title: "Startup Advisory", link: "#compare", thumbnail: "/images/thumb3.png" },
    { title: "Alternative Assets", link: "#features", thumbnail: "/images/thumb1.png" },
    { title: "Pension Planning", link: "#team", thumbnail: "/images/thumb2.png" },
    { title: "Smart Portfolio", link: "#compare", thumbnail: "/images/thumb3.png" },
    { title: "Risk Management", link: "#features", thumbnail: "/images/thumb1.png" },
    { title: "Liquidity Services", link: "#team", thumbnail: "/images/thumb2.png" },
    { title: "Venture Capital", link: "#compare", thumbnail: "/images/thumb3.png" },
  ];

export default function ContactPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "/#about" },
    { name: "Team", link: "/team" },
    { name: "Projects", link: "/projects" },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <NavBody>
          <Link href="/">
            <NavbarLogo />
          </Link>
          <NavItems items={navLinks} />
          <div className="ml-auto hidden lg:flex space-x-4">
            <NavbarButton href="https://zarmilli.github.io/Squarre" variant="secondary">
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <Link href="/">
              <NavbarLogo />
            </Link>
            <MobileNavToggle
              isOpen={isMobileOpen}
              onClick={() => setIsMobileOpen((prev) => !prev)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileOpen}
            onClose={() => setIsMobileOpen(false)}
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-neutral-700 dark:text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="https://zarmilli.github.io/Squarre" variant="secondary">
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* HeroParallax */}
      <HeroParallax products={products} />

      {/* Footer */}
      <footer className="relative bg-black overflow-hidden h-[200px]">
        <div className="relative z-10 text-center text-white pt-20 pb-40">
          <h2 className="text-3xl font-bold mb-4">Let’s connect</h2>
          <p className="text-sm text-neutral-400">
            Whether it's a project idea, collaboration, or feedback — we're here for it.
          </p>
        </div>
        <Spotlight />
      </footer>
    </>
  );
}
