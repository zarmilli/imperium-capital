"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          My Growth Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          You're probably wondering how can one website be so cool, I'm blushing! Here's some backstory. I actually started learning how to code when I was in my final year
          in 2024. No fancy equipment, no prior knowledge, just a curious 20 year old and a R2000 laptop I saved up for. It was terrible but it held up ahh shame
          yazi poor celeron was overheating.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Sticky title column */}
            <div className="sticky top-40 z-40 self-start w-full md:w-auto pl-4 md:pl-0">
            <div className="flex items-center gap-4">
                {/* Circle */}
                <div className="h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center relative">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-4xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
                </h3>
            </div>
            </div>

            {/* Content column */}
            <div className="pl-10 pr-4 w-full md:pl-4">
              {item.content}
            </div>
          </div>
        ))}

        {/* Scroll gradient track */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
