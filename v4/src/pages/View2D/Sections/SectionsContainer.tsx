import React, { useEffect, useRef, useState } from "react";
import About from "./About.section";
import Skills from "./Skills.section";
import Projects from "./Projects.section";
import Jobs from "./Jobs.section";
import Education from "./Education.section";
import Contact from "./Contact.section";
import Home from "./home.section";

const sections = [
  <Home />,
  <About />,
  <Skills />,
  <Projects />,
  <Jobs />,
  <Education />,
  <Contact />,
];

export default function SectionContainer() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const sectionEl = (containerRef.current as HTMLElement).children[
        index
      ] as HTMLElement;
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
        setCurrent(index);
      }
    }
  };

  const handleScroll = (e: WheelEvent) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0 && current < sections.length - 1) {
      setCurrent((prev) => {
        const next = prev + 1;
        scrollToSection(next);
        return next;
      });
    } else if (e.deltaY < 0 && current > 0) {
      setCurrent((prev) => {
        const next = prev - 1;
        scrollToSection(next);
        return next;
      });
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // tiempo para evitar doble scroll
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleScroll);
    };
  }, [current]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {sections.map((Section, index) => (
        <div
          key={index}
          style={{
            height: "100vh",
            transition: "transform 1s ease",
            scrollSnapAlign: "start",
          }}
        >
          {Section}
        </div>
      ))}
    </div>
  );
}
