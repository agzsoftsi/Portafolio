/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState, Suspense, useMemo } from "react";
const Home = React.lazy(() => import("./home.section"));
const About = React.lazy(() => import("./About.section"));
const Skills = React.lazy(() => import("./Skills.section"));
const Projects = React.lazy(() => import("./Projects.section"));
const Jobs = React.lazy(() => import("./Jobs.section"));
const Education = React.lazy(() => import("./Education.section"));
const Contact = React.lazy(() => import("./Contact.section"));
import { TbUserHexagon } from "react-icons/tb";
import { IoHomeOutline, IoCodeSlash } from "react-icons/io5";
import { MdOutlineRocketLaunch, MdOutlineWorkOutline } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { LuMailPlus } from "react-icons/lu";
import { Icon } from "@chakra-ui/react";

const sections = [
  <Suspense fallback={<div>Cargando...</div>}>
    <Home />
  </Suspense>,
  <Suspense fallback={<div>Cargando...</div>}>
    <About />
  </Suspense>,
  <Suspense fallback={<div>Cargando...</div>}>
    <Skills />
  </Suspense>,
  <Suspense fallback={<div>Cargando...</div>}>
    <Projects />
  </Suspense>,
  <Suspense fallback={<div>Cargando...</div>}>
    <Jobs />
  </Suspense>,
  <Suspense fallback={<div>Cargando...</div>}>
    <Education />
  </Suspense>,
  <Suspense fallback={<div>Cargando...</div>}>
    <Contact />
  </Suspense>,
];

export default function SectionContainer() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const isScrolling = useRef(false);
  const [navVisible, setNavVisible] = useState(true); // menú lateral visible

  // Touch control
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const sectionIcons = useMemo(
    () => [
      IoHomeOutline,
      TbUserHexagon,
      MdOutlineRocketLaunch,
      IoCodeSlash,
      MdOutlineWorkOutline,
      PiCertificate,
      LuMailPlus,
    ],
    []
  );

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
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        width: "100vw",
      }}
    >
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
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: i === current ? "#3182ce" : "#e2e8f0",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={sections[i]}
            >
              {" "}
              <Icon as={sectionIcons[i]} h="15px" w="15px" />
            </button>
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
