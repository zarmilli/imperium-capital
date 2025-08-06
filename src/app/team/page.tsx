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
import { BackgroundLines } from "@/components/background-lines";
import { Spotlight } from "@/components/spotlight-new";
import { Carousel, Card } from "@/components/apple-cards-carousel";

import React, { useState } from "react";
import Link from "next/link";

export default function TeamPage() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "/#about" },
    { name: "Team", link: "/team" },
    { name: "Projects", link: "/projects" },
  ];

  const teamCards = [
    {
      src: "/images/team1.png",
      title: "No, good looking!",
      category: "Looking good?",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Visionary. Strategist. Builder.
            </span>{" "}
            Thubelihle founded Imperium Capital with a mission to create future-forward investment ecosystems. With a background in property development and startup incubation, he leads with passion and purpose.
          </p>
          <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
      ),
    },
    {
      src: "/images/team2.png",
      title: "Should I model?",
      category: "Fashion",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Operations with precision.
            </span>{" "}
            Nonhle ensures smooth day-to-day functioning of all our ventures. From systems optimization to execution, her organizational skills keep Imperium’s engine running.
          </p>
          <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
      ),
    },
    {
      src: "/images/team3.png",
      title: "This is actually a prompted image",
      category: "AI Integration",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Turning designs into code.
            </span>{" "}
            Jason leads our software architecture and transforms business goals into scalable digital solutions. He’s the brain behind our platforms.
          </p>
          <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
      ),
    },
    {
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Zanele Mthembu",
      category: "Marketing Lead",
      content: (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Branding brilliance.
            </span>{" "}
            Zanele is the voice of Imperium Capital, building brand identity and leading marketing campaigns that convert audience into believers.
          </p>
          <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
        </div>
      ),
    },
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

      {/* Hero (BackgroundLines) */}
      <section id="team-hero">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 pt-20 pb-10">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl font-sans font-bold tracking-tight">
            Meet Our Team
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            A passionate group of innovators, builders, and visionaries behind Imperium Capital.
          </p>
        </BackgroundLines>
      </section>

      {/* Team Carousel Section */}
      <section className="relative z-10 py-10">
        <div className="w-full h-full py-10">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Click on card for more
          </h2>
          <Carousel
            items={teamCards.map((card, i) => (
              <Card key={i} index={i} card={card} layout />
            ))}
          />
        </div>
      </section>

      {/* Footer Spotlight */}
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
