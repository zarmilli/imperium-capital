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
import { BackgroundLines } from "@/components/background-lines";

import React, { useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#About" },
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
      <section id="About" className="bg-white dark:bg-black pt-0 mt-[-2px] relative z-10">
        <Timeline
          data={[
            {
              title: "Beninging",
              content: (
                <div>
                  <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
                    In the beni... the be..ninging! THE BENINGING! I used procedural learning to learn how to integrate reusable
                    components, connect APIs, master databases, Github, Ngiyakhohlwa the English name but I learned, or is it learnt, that other thing
                    also. All this was fun but I got no certificate for it, so I couldn't get a professional job with that
                    experience. Shame man sad neh? No it's not, there's light mos at the end of the tunnel why you wanna cry?
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
              title: "FNB!",
              content: (
                <div>
                  <p className="mb-8 text-sm text-neutral-800 dark:text-neutral-200">
                    Then came the hero! FNB and IT Varsity with the FNB app acadamy. You guys came with the light at the end of the
                    tunnel and offered the course for free, with certification! I signed up faster than my ex left me. Yes we didn't
                    get the NQF thingy thingy but hey, atleast recruiters get to see i'm not lying! I just didn't participate in the
                    other competitions because I didn't have a fancy looking setup, when I post I don't get views, you know all those 
                    confidence killing things... but I had to try this!
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

      {/* 👇 Add BackgroundLines directly after */}
      <section id="background-lines">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        But Thube, <br /> Basic coding?
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        The reason why I vested into knowing how to integrate reusable tailwind components is because
        they make my coding experience smoother honestly, and they're more dynamic, attractive, and modern. Look at how visually appealing this website has been.
        I do, however, have websites I coded over the months using basic HTML, CSS, and JS. Click on the projects button on the navigation bar to see them.
        I spent a lot of time styling that bar, I will now force you to interact with it.
      </p>
    </BackgroundLines>
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
