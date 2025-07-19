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
  const [navVisible, setNavVisible] = useState(true); // menú lateral visible

  // Touch control
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const scrollToSection = (index: number) => {
    if (containerRef.current) {
      const sectionEl = containerRef.current.children[index] as HTMLElement;
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
        setCurrent(index);
      }
    }
  };

  const changeSection = (direction: "up" | "down") => {
    if (isScrolling.current || !navVisible) return;
    isScrolling.current = true;

    setCurrent((prev) => {
      let next = prev;
      if (direction === "down" && prev < sections.length - 1) {
        next = prev + 1;
      } else if (direction === "up" && prev > 0) {
        next = prev - 1;
      }
      scrollToSection(next);
      return next;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  // Wheel and Keyboard
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!navVisible) return;
      e.preventDefault();
      changeSection(e.deltaY > 0 ? "down" : "up");
    };

    const handleKey = (e: KeyboardEvent) => {
      if (!navVisible) return;
      if (e.key === "ArrowDown") changeSection("down");
      if (e.key === "ArrowUp") changeSection("up");
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      container?.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [current, navVisible]);

  // Touch events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      touchEndY.current = e.changedTouches[0].clientY;
      const delta = touchStartY.current - touchEndY.current;
      if (Math.abs(delta) > 50 && navVisible) {
        if (delta > 0) changeSection("down");
        else changeSection("up");
      }
    };

    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, navVisible]);
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* NAVIGATION DOTS */}
      {navVisible && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {sections.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollToSection(i);
              }}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: i === current ? "#555" : "#ccc",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}

      {/* FULLPAGE SECTIONS */}
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
              scrollSnapAlign: "start",
            }}
          >
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
}
