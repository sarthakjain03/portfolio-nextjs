"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function SlideTabsNav() {
  return (
    <div>
      <SlideTabs />
    </div>
  );
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    activeLeft: 0,
    width: 0,
    activeWidth: 0,
    opacity: 0,
  });
  const [activeTab, setActiveTab] = useState("hero-section");

  const handleSetActiveTab = (tabId, ref) => {
    setActiveTab(tabId);
    const { width } = ref.current.getBoundingClientRect();
    
    setPosition({
      left: ref.current.offsetLeft,
      activeLeft: ref.current.offsetLeft,
      width: width,
      activeWidth: width,
      opacity: 1,
    });

    const section = document.getElementById(tabId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sectionIds = [
      "hero-section",
      "aboutme",
      "experience",
      "work",
      "contact",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust this based on when you want the tab to activate
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
          const tabRef = document.getElementById(`tab-${entry.target.id}`);
          if (tabRef) {
            const { width } = tabRef.getBoundingClientRect();
            setPosition({
              left: tabRef.offsetLeft,
              activeLeft: tabRef.offsetLeft,
              width,
              activeWidth: width,
              opacity: 1,
            });
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return (
    <ul
      onMouseLeave={() => {
        if (activeTab === null) {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }
      }}
      className="relative mx-auto flex w-fit rounded-full font-poppins"
    >
      <Tab
        id="hero-section"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Home
      </Tab>
      <Tab
        id="aboutme"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        About
      </Tab>
      <Tab
        id="experience"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Experience
      </Tab>
      <Tab
        id="work"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Work
      </Tab>
      <Tab
        id="contact"
        setPosition={setPosition}
        activeTab={activeTab}
        onClick={handleSetActiveTab}
        position={position}
      >
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, activeTab, onClick, id, position }) => {
  const ref = useRef(null);

  const handleMouseEnter = () => {
    if (!ref?.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition((prev) => ({
      ...prev,
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    }));
  };

  return (
    <li
      ref={ref}
      id={`tab-${id}`}
      onClick={() => onClick(id, ref)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setPosition((prev) => ({
            ...prev,
            left: position.activeLeft,
            width: position.activeWidth,
        }));
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base`}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};
