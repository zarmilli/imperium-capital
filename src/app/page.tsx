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
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { BackgroundLines } from "@/components/background-lines";
import { Spotlight } from "@/components/spotlight-new";

import React, { useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";

export default function Home() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Team", link: "/team" },
    { name: "Projects", link: "/projects" },
  ];

  const products = [
    { title: "Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Squarre", link: "https://zarmilli.github.io/squarre", thumbnail: "/images/squarre.png" },
    { title: "Zarmilli", link: "https://zarmilli.github.io/Zarmilli", thumbnail: "/images/zarmilli.png" },
    { title: "Square Gold Farms", link: "https://sgfarms.company.site", thumbnail: "/images/farm.png" },
    { title: "Zarmilli", link: "https://zarmilli.github.io/zarmilli", thumbnail: "/images/zarmilli.png" },
    { title: "Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
    { title: "Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
    { title: "Square Gold Farms", link: "https://sgfarms.company.site", thumbnail: "/images/farm.png" },
    { title: "Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Zarmilli", link: "https://zarmilli.github.io/Zarmilli", thumbnail: "/images/zarmilli.png" },
    { title: "Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
    { title: "Thube", link: "https://zarmilli.github.io/Thube", thumbnail: "/images/thube.png" },
    { title: "Square Gold Farms", link: "https://sgfarms.company.site", thumbnail: "/images/farm.png" },
    { title: "Squarre", link: "https://zarmilli.github.io/Squarre", thumbnail: "/images/squarre.png" },
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
          <Link href="/">
            <NavbarLogo />
          </Link>
          <NavItems items={navLinks} />
          <div className="ml-auto hidden lg:flex space-x-4">
            <NavbarButton
              href="https://zarmilli.github.io/Squarre"
              variant="secondary"
            >
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
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
              href="https://zarmilli.github.io/Squarre"
              variant="secondary"
            >
              Try Squarre
            </NavbarButton>
            <NavbarButton href="/contact" variant="primary">
              Contact
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
          description="Good design repeats itself, and so do good elements. Learning how to integrate components is advanced coding right there. Definitely will elevate my portfolio since this site will be used as my personal portfolio after the competition."
        />
      </div>

      {/* Sticky Scroll Reveal storytelling section */}
      <section id="story" className="bg-white dark:bg-black">
        <StickyScroll
          content={[
            {
              title: "Ohh hi there!",
              description:
                "You're probably wondering how can one website be so cool, I'm blushing! Here's some backstory. I actually started learning how to code when I was in my final year in 2024. No fancy equipment, no prior knowledge, just a curious 20 year old and a R2000 laptop I saved up for. It was terrible but it held up ahh shame yazi poor celeron was overheating.",
              content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                  My growth timeline
                </div>
              ),
            },
            {
              title: "The Beninging",
              description:
                "In the beni... the be..ninging! IN THE BENINGING! I used procedural learning to learn how to integrate reusable components, connect APIs, master databases, Github, Ngiyakhohlwa the English name but I learned, or is it learnt, that other thing also. All this was fun but I got no certificate for it, so I couldn't get a professional job with that experience. Shame man sad neh? No it's not, there's light mos at the end of the tunnel why you wanna cry?",
              content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                  How I started
                </div>
              ),
            },
            {
              title: "FNB & IT Varsity!",
              description:
                "Then came the heroes! FNB and IT Varsity with the FNB app acadamy. You guys came with the light at the end of the tunnel and offered the course for free, with certification! I signed up faster than my ex left me. Yes we didn't get the NQF thingy thingy but hey, atleast recruiters get to see i'm not lying! I just didn't participate in the other competitions because I didn't have a fancy looking setup, when I post I don't get views, you know all those confidence killing things... but I had to try this!",
              content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                  Justice league? No, IT league
                </div>
              ),
            },
            {
              title: "Please hire me, lol",
              description:
                "Here is not nice baba. Cost of living is 700 drillion, meanwhile I have 2 billion in my pocket. Job nyana?",
              content: (
                <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
                  Jokes, jokes.
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* Background lines */}
      <section id="background-lines">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            But Thube, <br /> Basic coding?
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            The reason why I vested into knowing how to integrate reusable tailwind components is because
            they make my coding experience smoother honestly, and they're more dynamic, attractive, and modern. Look at how visually appealing this website has been.
            I do, however, have websites I coded over the past few months using purely HTML, CSS, and JS. Click on the projects button on the navigation bar to see them.
            I spent a lot of time styling that bar, I will now force you to interact with it.
          </p>
        </BackgroundLines>
      </section>

      <footer className="relative bg-black overflow-hidden h-[200px]">
        <div className="relative z-10 text-center text-white pt-20 pb-40">
          <h2 className="text-3xl font-bold mb-4">Footers shouldn't be boring</h2>
          <p className="text-sm text-neutral-400">
            You've been here hey, I feel stalked. I don't blame you though, let's go grab some coffee now.
          </p>
        </div>

        <Spotlight />
      </footer>
    </>
  );
}
