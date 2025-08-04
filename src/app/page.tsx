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
import { HeroParallax } from "@/components/hero-parallax";
import { GoogleGeminiEffect } from "@/components/google-gemini-effect";
import { Timeline } from "@/components/timeline";

import React, { useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "Features", link: "#features" },
    { name: "Team", link: "#team" },
    { name: "Compare", link: "#compare" },
  ];

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengths = Array.from({ length: 5 }, () =>
    useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
      stiffness: 400,
      damping: 90,
    })
  );

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <div className="ml-auto hidden lg:flex space-x-4">
            <NavbarButton
              href="https://zarmilli.github.io/Squarre/login.html"
              variant="secondary"
            >
              Login
            </NavbarButton>
            <NavbarButton href="/download" variant="primary">
              Get Started
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
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
            <NavbarButton
              href="https://zarmilli.github.io/Squarre/login.html"
              variant="secondary"
            >
              Login
            </NavbarButton>
            <NavbarButton href="/download" variant="primary">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <HeroParallax products={products} />

      {/* Sticky scroll section with animation */}
      <div ref={ref} className="relative h-[400vh]">
        <GoogleGeminiEffect
          pathLengths={pathLengths}
          title="Built to win competitions"
          description="This is a really cool ui component I imported. Learning how to integrate components is advanced coding right there. Definitely will elevate my portfolio."
        />
      </div>

      {/* Features section — spaced down to avoid overlapping */}
      <section id="features" className="bg-white dark:bg-black pt-0 mt-[-2px] relative z-10">
        <Timeline
          data={[
            {
              title: "2024",
              content: (
                <div>
                  <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
                    Expanded our real estate holdings and launched new advisory services.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="/images/thumb1.png" className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow" alt="" />
                    <img src="/images/thumb2.png" className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow" alt="" />
                    <img src="/images/thumb3.png" className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow" alt="" />
                    <img src="/images/thumb1.png" className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow" alt="" />
                  </div>
                </div>
              ),
            },
            {
              title: "2023",
              content: (
                <div>
                  <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
                    We launched our venture capital branch and opened two new offices.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <img src="/images/thumb2.png" className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow" alt="" />
                    <img src="/images/thumb3.png" className="h-20 md:h-44 lg:h-60 w-full rounded-lg object-cover shadow" alt="" />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>


      <section
        id="team"
        className="min-h-screen bg-gray-50 dark:bg-neutral-900"
      ></section>

      <section
        id="compare"
        className="min-h-screen bg-white dark:bg-black"
      ></section>
    </>
  );
}
