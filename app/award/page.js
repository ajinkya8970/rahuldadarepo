"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const AWARDS = [
  {
    id: "baliraja",
    images: ["/images/award-baliraja-v2.jpeg"],
    title: "Baliraja Award (\u092a\u094d\u0930\u0925\u092e \u092a\u0941\u0930\u0938\u094d\u0915\u093e\u0930)",
    subtitle: "\u0924\u0939\u0938\u093f\u0932 \u0915\u093e\u0930\u094d\u092f\u093e\u0932\u092f, \u0918\u093e\u091f\u0928\u091c\u0940 | \u092c\u0933\u0940\u0930\u093e\u091c\u093e \u091a\u0947\u0924\u0928\u093e \u0905\u092d\u093f\u092f\u093e\u0928",
    year: "2017",
    category: "Farmer Welfare & Awareness",
    desc: "First Prize honour awarded by the District Administration (Tahsil Office, Ghatanji, Yavatmal) under the Baliraja Chetana Abhiyan for inspiring farmers through exceptional awareness street plays and suicide prevention efforts.",
  },
  {
    id: "krishithon-medal",
    images: ["/images/award-krishithon-medal-v2.jpeg"],
    title: "Krishithon",
    subtitle: "12th Krishithon Agricultural Expo, Nashik",
    year: "2017",
    category: "Ideal Water Conservation Organization 2017",
    desc: "Honoured as Adarsha Jalasamvardhak Sanstha 2017 (Model Water Conservation Organisation) at India\u2019s premier agricultural exhibition under the theme \u2018Jal Hai To Kal Hai\u2019 for transformative rural water harvesting and community impact.",
  },
  {
    id: "awrdrin2017",
    images: ["/images/awardrin2017.jpg", "/images/awardrin20172.jpg"],
    title: "Rin and Lokmat Water Summit",
    subtitle: "Rin & Lokmat Media | Mumbai",
    year: "2017",
    category: "Rin and Lokmat Water Summit 2017",
    desc: "Recognized at the Rin Water Summit 2017, organized in association with Lokmat, for the water conservation efforts of Navchaitanya Bahu Uddeshiy Vikas Sanstha, Shiroli, District Yavatmal.",
  },
  {
    id: "awardnelda2018",
    images: ["/images/certificate18.jpg"],
    title: "Certificate of Nomination",
    subtitle: "Nelda Foundation, Pune",
    year: "2018",
    category: "Environmental and Social Contribution Recognition",
    desc: "Awarded to Navchaitanya Bahuudeshiy Vikas Yuva Mandal on 24th June 2018 at Jawaharlal Nehru Memorial Hall, Camp, Pune. Presented by the Nelda Foundation to recognize the organization\u2019s contribution to environmental preservation, social betterment, and the protection of our common home, Earth.",
  },
  {
    id: "awarnelda2019",
    images: ["/images/certificate19.jpeg"],
    title: "Certificate of Recognition",
    subtitle: "Annual Nelda Recognitions, 2019",
    year: "2019",
    category: "Environmental Contribution Recognition",
    desc: "Recognized in the Environment category at the Annual Nelda Recognitions 2019. Awarded to Navchaitanya Bahuddeshiya Vikas Yuva Mandal on 23rd June 2019 at Jawaharlal Nehru Memorial Hall, Camp, Pune, by the Nelda Foundation for its contributions to environmental preservation, social betterment, and the protection of our common home, Earth.",
  },
];

function AwardCard({ award, onOpenLightbox }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = Array.isArray(award.images) && award.images.length > 0 ? award.images : [award.src];
  const currentImg = images[activeIdx] || images[0];
  const hasMultiple = images.length > 1;

  return (
    <article
      className="award-card"
      onClick={() => onOpenLightbox(award, activeIdx)}
      tabIndex={0}
      role="button"
      aria-label={`View full certificate for ${award.title}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpenLightbox(award, activeIdx); } }}
    >
      <div className="award-card__mat">
        <div className="award-card__img-wrap">
          <Image src={currentImg} alt={`${award.title} certificate preview ${activeIdx + 1}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px" quality={92} className="award-card__img" priority />
          <div className="award-card__overlay">
            <span className="award-card__zoom-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
              View Full Size
            </span>
          </div>
        </div>
        {hasMultiple && (
          <>
            <span className="award-card__count-badge">📷 {activeIdx + 1}/{images.length}</span>
            <button type="button" className="award-card__arrow award-card__arrow--prev" onClick={(e) => { e.stopPropagation(); setActiveIdx((p) => (p - 1 + images.length) % images.length); }} aria-label="Previous photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button type="button" className="award-card__arrow award-card__arrow--next" onClick={(e) => { e.stopPropagation(); setActiveIdx((p) => (p + 1) % images.length); }} aria-label="Next photo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <div className="award-card__dots">
              {images.map((_, i) => (
                <button type="button" key={i} className={`award-card__dot ${i === activeIdx ? "is-active" : ""}`} onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }} aria-label={`View photo ${i + 1}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="award-card__info">
        <div className="award-card__meta">
          <span className="award-chip award-chip--year">{award.year}</span>
          <span className="award-chip award-chip--cat">{award.category}</span>
        </div>
        <h2 className="award-card__title">{award.title}</h2>
        {award.subtitle && <p className="award-card__subtitle">{award.subtitle}</p>}
        <p className="award-card__desc">{award.desc}</p>
      </div>
    </article>
  );
}

export default function AwardPage() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox) return;
      const images = lightbox.award.images || [lightbox.award.src];
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft" && images.length > 1)
        setLightbox((p) => ({ ...p, imageIdx: (p.imageIdx - 1 + images.length) % images.length }));
      if (e.key === "ArrowRight" && images.length > 1)
        setLightbox((p) => ({ ...p, imageIdx: (p.imageIdx + 1) % images.length }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openLightbox = (award, imageIdx = 0) => setLightbox({ award, imageIdx });

  return (
    <main className="award-page">
      <section className="award-hero">
        <div className="wrap">
          <div className="award-hero__badge">Recognition &amp; Honours</div>
          <h1 className="award-hero__title">Awards &amp; Felicitations</h1>
          <p className="award-hero__sub">
            Milestones and honours acknowledging Navchaitanya&apos;s tireless grassroots impact in water conservation, farmer support, and community welfare.
          </p>
        </div>
      </section>

      <section className="award-gallery-section">
        <div className="wrap">
          <div className="award-toolbar">
            <span className="award-toolbar__count">Showing <strong>{AWARDS.length}</strong> Honours</span>
          </div>
          <div className="award-grid-container">
            <div className="award-grid">
              {AWARDS.map((award) => (
                <AwardCard key={award.id} award={award} onOpenLightbox={openLightbox} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (() => {
        const images = lightbox.award.images || [lightbox.award.src];
        const currentImg = images[lightbox.imageIdx] || images[0];
        const hasMultiple = images.length > 1;
        const goPrev = (e) => { e.stopPropagation(); setLightbox((p) => ({ ...p, imageIdx: (p.imageIdx - 1 + images.length) % images.length })); };
        const goNext = (e) => { e.stopPropagation(); setLightbox((p) => ({ ...p, imageIdx: (p.imageIdx + 1) % images.length })); };

        return (
          <div className="lb-backdrop" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={lightbox.award.title}>
            <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close lightbox">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>

            <div className="lb-dialog" onClick={(e) => e.stopPropagation()}>
              {/* LEFT — Image Viewer */}
              <div className="lb-viewer">
                <div className="lb-stage">
                  {hasMultiple && (
                    <button className="lb-nav lb-nav--prev" onClick={goPrev} aria-label="Previous photo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                  )}
                  <div className="lb-img-frame">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={currentImg} alt={`${lightbox.award.title} — photo ${lightbox.imageIdx + 1}`} className="lb-img" />
                  </div>
                  {hasMultiple && (
                    <button className="lb-nav lb-nav--next" onClick={goNext} aria-label="Next photo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                  )}
                </div>

                {hasMultiple && (
                  <div className="lb-thumbs">
                    {images.map((src, idx) => (
                      <button key={idx} className={`lb-thumb ${idx === lightbox.imageIdx ? "is-active" : ""}`} onClick={() => setLightbox((p) => ({ ...p, imageIdx: idx }))} aria-label={`View photo ${idx + 1}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt="" />
                        <span className="lb-thumb__num">{idx + 1}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT — Details */}
              <div className="lb-details">
                <div className="lb-chips">
                  <span className="award-chip award-chip--year">{lightbox.award.year}</span>
                  <span className="award-chip award-chip--cat">{lightbox.award.category}</span>
                  {hasMultiple && <span className="award-chip award-chip--photo">{lightbox.imageIdx + 1} / {images.length}</span>}
                </div>
                <h3 className="lb-title">{lightbox.award.title}</h3>
                {lightbox.award.subtitle && <p className="lb-subtitle">{lightbox.award.subtitle}</p>}
                <p className="lb-desc">{lightbox.award.desc}</p>
                <button className="lb-close-btn" onClick={() => setLightbox(null)}>Close Preview</button>
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
}
