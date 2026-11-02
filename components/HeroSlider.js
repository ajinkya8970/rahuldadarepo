"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import ArcDivider from "@/components/ArcDivider";

const SLIDES = [
  {
    id: "slide-1",
    image: "/images/heroone.jpeg",
    tag: "Water Conservation & Land Revitalisation",
    alt: "Navchaitanya Ground Action - Barren Land for Water Conservation",
    title: "Breathing life into barren land",
    desc: "Repurposing dry, unutilised land for water treatment to capture every drop of rain.",
  },
  {
    id: "slide-2",
    image: "/images/herotwo.jpeg",
    tag: "Farm Pond Excavation & Groundwork",
    alt: "Navchaitanya Ground Action - Farm Pond Excavation and Construction",
    title: "Laying the groundwork",
    desc: "Excavation of a farm pond to harvest rainwater and replenish groundwater levels.",
  },
  {
    id: "slide-3",
    image: "/images/herothree.jpeg",
    tag: "Rainwater Harvesting & Farm Ponds",
    alt: "Navchaitanya Ground Action - Farm Pond Filled with Harvested Rainwater",
    title: "Water conservation in action",
    desc: "A completed farm pond during the year 2025–2026 brimmed with harvested rainwater, storing 188,070.795 litres of water and revitalising the surrounding agricultural fields..",
  },
  {
    id: "slide-4",
    image: "/images/herofour.jpeg",
    tag: "Paanpoi & Wildlife Hydration",
    alt: "Navchaitanya Ground Action - Clay Water Bowl for Birds and Wildlife",
    title: "A lifeline during the dry season",
    desc: "Birds and lizard enjoying to earthen water during 2025–2026.",
  },
  {
    id: "slide-5",
    image: "/images/herofive.jpeg",
    tag: "Upcycling & Wildlife Support",
    alt: "Navchaitanya Ground Action - Upcycled Bottle Bird Feeder",
    title: "Supporting local wildlife",
    desc: "An reuse  for plastic bottle repurposed into a feeding station for birds during 2025–2026.",
  },
  {
    id: "slide-6",
    image: "/images/herosix.jpeg",
    tag: "Youth & Campus Tree Plantation",
    alt: "Navchaitanya Ground Action - School Girls Tree Plantation Drive",
    title: "Sowing seeds for a greener tomorrow",
    desc: "Schoolgirls actively participating in a campus tree plantation drive on 20 August 2024–2025..",
  },
  {
    id: "slide-7",
    image: "/images/heroseven.jpeg",
    tag: "Community Awareness & Street Play",
    alt: "Navchaitanya Ground Action - Street Play for Social and Government Schemes Awareness",
    title: "Raising awareness through art",
    desc: "Folk artists performed a street play to educate the community, supported by the Song and Drama Division, Ministry of Information and Broadcasting, during 2026–2027.",
  },
  {
    id: "slide-8",
    image: "/images/water188.jpeg",
    tag: "Water Conservation & Rainwater Harvesting",
    alt: "Water storage and conservation in a rain-fed water harvesting structure in 2018",
    title: "Conserved water, securing the future",
    desc: "Community-led water conservation efforts during 2018–2019 focused on storing rainwater in wasteland areas, with a total water storage of 581,900 litres, improving water availability and supporting groundwater recharge for local communities and the environment.."
  },
  {
    id: "slide-9",
    image: "/images/hero8.jpeg",
    tag: "Matinala Bandhh Construction & Water Conservation",
    alt: "Matinala Bandhh construction through deepening and widening work",
    title: "Strengthening water storage capacity",
    desc: "Deepening and widening work  was carried out at Matinala Bandhh during 2026–2027, creating a water storage capacity of 86,216 litres."
  }, {
    id: "slide-10",
    image: "/images/hero9.jpg",
    tag: "Cement Plug Repair & Water Conservation",
    alt: "Cement plug repair and water storage development",
    title: "Restoring water conservation structures",
    desc: "Cement plug repair, deepening, and widening  work was undertaken during 2017–2018, achieving a water storage capacity of 1,98,240 litres."
  },
  {
    id: "slide-11",
    image: "/images/hero10.jpg",
    tag: "Water Conservation & Farm Pond Development",
    alt: "Water storage structure benefiting local farmers and livestock",
    title: "Water conservation for community welfare",
    desc: "The benefits of water conservation structures during 2017–2018 included improved water availability for livestock, agricultural activities, and groundwater recharge."
  }

];

const AUTOPLAY_DELAY = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((curr) => {
      setPrevIndex(curr);
      return (curr + 1) % SLIDES.length;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((curr) => {
      setPrevIndex(curr);
      return (curr - 1 + SLIDES.length) % SLIDES.length;
    });
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPlaying, isHovered]);

  return (
    <section
      className="hero-slider-wrap"
      aria-label="Grassroots Action Slideshow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Slides (Top 70% Height) */}
      <div className="hero-slides">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === current;
          const isPrev = idx === prevIndex && prevIndex !== current;
          return (
            <div
              key={slide.id}
              className={`hero-slide ${isActive ? "is-active" : ""} ${isPrev ? "is-prev" : ""}`}
              aria-hidden={!isActive}
            >
              <div className="hero-slide__img-box">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  quality={78}
                  className="hero-slide__img"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero-slide__gradient-veil" aria-hidden="true" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Accessible SEO H1 */}
      <h1 className="sr-only">
        Navchaitanya Bahuuddeshiya Vikas Yuva Mandal — Water Conservation, Wildlife & Rural Impact
      </h1>

      {/* Caption & Controls Overlay (Inside Hero Images at the Bottom) */}
      <div className="hero-caption-overlay">
        <div className="wrap hero-caption-flex">
          {/* Slide Caption Box */}
          <div className="hero-captions-box">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <div
                  key={`caption-${slide.id}`}
                  className={`hero-pure-caption ${isActive ? "is-active" : ""}`}
                  aria-hidden={!isActive}
                >

                  <h2 className="hero-caption-title">{slide.title}</h2>
                  <p className="hero-caption-desc">{slide.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Controls & Counter Cluster */}
          <div className="hero-ctrl-group">
            <div className="hero-counter" aria-label={`Slide ${current + 1} of ${SLIDES.length}`}>
              <span className="hero-counter__curr">{String(current + 1).padStart(2, "0")}</span>
              <span className="hero-counter__sep">/</span>
              <span className="hero-counter__total">{String(SLIDES.length).padStart(2, "0")}</span>
            </div>

            <div className="hero-mini-ctrl" aria-label="Slideshow Controls">
              <button
                type="button"
                className="hero-mini-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
                title="Previous slide"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                className={`hero-mini-btn hero-mini-btn--toggle ${!isPlaying ? "is-stopped" : ""}`}
                onClick={togglePlay}
                aria-label={isPlaying ? "Stop automatic rotation" : "Start automatic rotation"}
                title={isPlaying ? "Stop auto-rotation" : "Start auto-rotation"}
              >
                {isPlaying ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" rx="1.5" />
                    <rect x="14" y="4" width="4" height="16" rx="1.5" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="6 4 20 12 6 20 6 4" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                className="hero-mini-btn"
                onClick={nextSlide}
                aria-label="Next slide"
                title="Next slide"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Bottom Transition Divider into White Stats Section */}
      <div className="hero-bottom-arc">
        <ArcDivider color="var(--white)" />
      </div>

      <style jsx>{`
        .hero-slider-wrap {
          position: relative;
          width: 100%;
          height: 62vh;
          min-height: 480px;
          max-height: 640px;
          overflow: hidden;
          background: #110c22;
          user-select: none;
        }

        @media (max-width: 900px) {
          .hero-slider-wrap {
            height: 66vh;
            min-height: 480px;
          }
        }

        /* ---- Background Slides ---- */
        .hero-slides {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          z-index: 0;
          transition: opacity 1.4s cubic-bezier(0.25, 1, 0.5, 1),
                      visibility 1.4s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: opacity;
        }

        .hero-slide.is-prev {
          opacity: 1;
          visibility: visible;
          z-index: 1;
        }

        .hero-slide.is-active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        /* Full Image Box (image height is the only height present) */
        .hero-slide__img-box {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #0f0b1d;
        }

        .hero-slide__img {
          transform: scale(1);
          filter: contrast(1.02) saturate(1.05);
          transition: transform 7.5s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        .hero-slide.is-active .hero-slide__img,
        .hero-slide.is-prev .hero-slide__img {
          transform: scale(1.05);
        }

        /* Subtle gradient veil on image ensuring high readability */
        .hero-slide__gradient-veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            transparent 40%,
            rgba(0, 0, 0, 0.15) 70%,
            rgba(0, 0, 0, 0.4) 100%
          );
          pointer-events: none;
        }

        /* ---- Caption & Controls Overlay (Inside Hero Image at the Bottom) ---- */
        .hero-caption-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 4;
          padding: 42px 0 38px 0;
          background: none;
          display: flex;
          align-items: flex-end;
          pointer-events: none;
        }

        .hero-caption-flex {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          width: 100%;
        }

        .hero-captions-box {
          position: relative;
          flex: 1;
          min-width: 0;
          pointer-events: auto;
        }

        .hero-pure-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                      visibility 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .hero-pure-caption.is-active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
          position: relative;
          bottom: auto;
        }

        /* Slide Tag Pill */
        .hero-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          background: rgba(16, 185, 129, 0.22);
          border: 1px solid rgba(52, 211, 153, 0.55);
          color: #6EE7B7;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34D399;
          box-shadow: 0 0 8px #34D399;
        }

        /* Slide Title */
        .hero-caption-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.1vw, 1.85rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.22;
          margin: 0;
          letter-spacing: -0.015em;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.85);
        }

        /* Slide Description */
        .hero-caption-desc {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.05vw, 15px);
          font-weight: 450;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.5;
          margin: 6px 0 0;
          max-width: 680px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
        }

        /* ---- Controls & Counter Cluster ---- */
        .hero-ctrl-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          pointer-events: auto;
        }

        .hero-counter {
          font-family: var(--font-display);
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          letter-spacing: 0.04em;
          background: rgba(10, 8, 22, 0.55);
          padding: 6px 13px;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }

        .hero-counter__curr {
          color: #34D399;
          font-weight: 800;
          font-size: 15px;
        }

        .hero-counter__sep {
          margin: 0 3px;
          color: rgba(255, 255, 255, 0.35);
        }

        .hero-counter__total {
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }

        .hero-mini-ctrl {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(10, 8, 22, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: var(--radius-pill);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
          pointer-events: auto;
        }

        .hero-mini-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .hero-mini-btn:hover {
          background: rgba(52, 211, 153, 0.28);
          color: #34d399;
          transform: scale(1.08);
        }

        .hero-mini-btn:active {
          transform: scale(0.92);
        }

        .hero-mini-btn--toggle.is-stopped {
          color: #f59e0b;
        }

        /* Screen reader only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* ---- Gentle Arc Divider ---- */
        .hero-bottom-arc {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          z-index: 5;
          line-height: 0;
          pointer-events: none;
          height: 36px;
          overflow: hidden;
        }

        .hero-bottom-arc :global(.arc-divider) {
          height: 36px;
          display: block;
          width: 100%;
        }

        /* ---- Tablet & Mobile Responsiveness ---- */
        @media (max-width: 768px) {
          .hero-slider-wrap {
            height: 72vh;
            min-height: 480px;
          }

          .hero-caption-overlay {
            padding-bottom: 34px;
          }

          .hero-caption-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }

          .hero-caption-title {
            font-size: 1.25rem;
          }

          .hero-caption-desc {
            font-size: 13px;
          }

          .hero-ctrl-group {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
