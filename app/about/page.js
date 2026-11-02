import ArcDivider from "@/components/ArcDivider";
import { org } from "@/lib/siteData";
import CommitteeSection from "@/components/CommitteeSection";

export const metadata = {
  title: "About Us — " + org.name,
  description:
    "Learn about Navchaitanya Bahuuddeshiya Vikas Yuva Mandal's mission, vision, and grassroots leadership committee in Shiroli, Ghatanji, Yavatmal.",
};

export default function AboutPage() {
  return (
    <>
      {/* ============================================================
          HERO SECTION (Luxury Light Aurora Theme)
      ============================================================ */}
      <section className="about-hero">
        <div className="wrap about-hero__inner">
          <div className="about-hero__header">
            <span className="eyebrow anim-hero-1">About Us · आमचा परिचय</span>
            <h1 className="about-hero__title anim-hero-2">
              Twenty Years of Showing Up,{" "}
              <span className="text-gradient">Village by Village</span>
            </h1>
            <p className="kicker about-hero__kicker anim-hero-3">
              <strong>{org.name}</strong> is a grassroots NGO founded in Shiroli,
              Ghatanji Taluka, Yavatmal District — organised and run by village youth,
              farmers, and students who grew up in the soil they now work to preserve.
            </p>
          </div>

          {/* Highlights Meta Strip */}
          <div className="about-hero__meta anim-hero-4">
            <div className="about-hero__meta-item">
              <span className="about-hero__meta-value">2003</span>
              <span className="about-hero__meta-label">Established</span>
              <span className="about-hero__meta-sub">Reg. Maha/284/03</span>
            </div>
            <div className="about-hero__meta-divider" />
            <div className="about-hero__meta-item">
              <span className="about-hero__meta-value">2005</span>
              <span className="about-hero__meta-label">Field Active</span>
              <span className="about-hero__meta-sub">20+ Yrs On Ground</span>
            </div>
            <div className="about-hero__meta-divider" />
            <div className="about-hero__meta-item">
              <span className="about-hero__meta-value">86k+ L</span>
              <span className="about-hero__meta-label">Water Stored</span>
              <span className="about-hero__meta-sub">Per Year via Bunds</span>
            </div>
            <div className="about-hero__meta-divider" />
            <div className="about-hero__meta-item">
              <span className="about-hero__meta-value">3 Awards</span>
              <span className="about-hero__meta-label">Recognised</span>
              <span className="about-hero__meta-sub">Govt &amp; State Level</span>
            </div>
          </div>
        </div>
      </section>

      <ArcDivider color="var(--white)" />

      {/* ============================================================
          MISSION & VISION SECTION
      ============================================================ */}
      <section className="section section--white about-mv" id="mission-vision">
        <div className="wrap">
          {/* Section Heading */}
          <div className="mv-intro">
            <span className="eyebrow">Our Purpose · आमचे ध्येय आणि दृष्टी</span>
            <h2>Mission &amp; Vision</h2>
            <p className="mv-kicker">
              Guided by ecological stewardship, community shramdaan, and sustainable rural transformation.
            </p>
          </div>

          <div className="mv-grid">
            {/* Mission Card */}
            <div className="mv-card mv-card--mission">
              <div className="mv-card__header">
                <div className="mv-card__icon-wrap">
                  <span className="mv-card__icon" role="img" aria-label="Target">🎯</span>
                </div>
                <div>
                  <span className="tag-pill tag-pill--purple">Our Mission</span>
                  <span className="mv-card__mr mr">आमचे ध्येय</span>
                </div>
              </div>

              <p className="mv-card__text">
                Creating awareness among rural communities regarding conservation and judicious use
                of natural resources, while promoting sustainable livelihoods through appropriate,
                optimised technologies.
              </p>

              <div className="mv-card__pillars">
                <div className="mv-pillar">
                  <span className="mv-check">✓</span>
                  <span>Water recharge through community-built Mati Nala Bandh structures</span>
                </div>
                <div className="mv-pillar">
                  <span className="mv-check">✓</span>
                  <span>Native tree plantation with recycled packaging nurseries</span>
                </div>
                <div className="mv-pillar">
                  <span className="mv-check">✓</span>
                  <span>Lifesaving bird water (Paanpoi) distribution during peak summer</span>
                </div>
                <div className="mv-pillar">
                  <span className="mv-check">✓</span>
                  <span>Street plays for rural health, hygiene, and disease awareness</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="mv-card mv-card--vision">
              <div className="mv-card__header">
                <div className="mv-card__icon-wrap mv-card__icon-wrap--green">
                  <span className="mv-card__icon" role="img" aria-label="Telescope">🔭</span>
                </div>
                <div>
                  <span className="tag-pill tag-pill--green">Our Vision</span>
                  <span className="mv-card__mr mr">आमची दृष्टी</span>
                </div>
              </div>

              <p className="mv-card__text">
                To reduce poverty and environmental vulnerability among rural communities through
                the restoration, conservation and sustainable management of natural resources.
              </p>

              <div className="mv-card__pillars">
                <div className="mv-pillar">
                  <span className="mv-check mv-check--green">✓</span>
                  <span>Drought-resilient villages with self-replenishing groundwater levels</span>
                </div>
                <div className="mv-pillar">
                  <span className="mv-check mv-check--green">✓</span>
                  <span>Biodiverse rural corridors where birds and wildlife thrive safely</span>
                </div>
                <div className="mv-pillar">
                  <span className="mv-check mv-check--green">✓</span>
                  <span>Self-reliant youth leaders equipped with ecological knowledge</span>
                </div>
                <div className="mv-pillar">
                  <span className="mv-check mv-check--green">✓</span>
                  <span>Prosperous farmers supported by year-round water harvesting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArcDivider color="var(--parchment)" />

      <CommitteeSection />

      <ArcDivider color="var(--white)" />

      {/* ============================================================
          STYLES (Scoped for /about)
      ============================================================ */}
      <style>{`
        /* ---- About Hero ---- */
        .about-hero {
          background: #FAF8FE;
          padding-top: 140px;
          padding-bottom: 84px;
          position: relative;
        }
        .about-hero__header { max-width: 860px; }
        .about-hero__title {
          color: var(--charcoal);
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          line-height: 1.15;
          margin-top: 10px;
          letter-spacing: -0.025em;
        }
        .text-gradient {
          background: linear-gradient(135deg, #7C3AED 0%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-hero__kicker {
          font-size: clamp(17px, 1.8vw, 19.5px);
          color: var(--muted);
          line-height: 1.7;
          margin-top: 20px;
          max-width: 780px;
        }
        .about-hero__kicker strong {
          color: var(--charcoal);
        }

        /* Highlights Meta Strip */
        .about-hero__meta {
          display: flex;
          align-items: center;
          gap: 0;
          margin-top: 48px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(124, 58, 237, 0.14);
          border-radius: 22px;
          padding: 22px 28px;
          width: fit-content;
          max-width: 100%;
          backdrop-filter: blur(14px);
          box-shadow: 0 10px 30px -4px rgba(124, 58, 237, 0.08), 0 4px 12px rgba(16, 185, 129, 0.06);
        }
        .about-hero__meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 32px;
          text-align: center;
        }
        .about-hero__meta-value {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.1;
        }
        .about-hero__meta-label {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--charcoal);
          margin-top: 4px;
        }
        .about-hero__meta-sub {
          font-size: 11.5px;
          color: var(--muted-light);
          margin-top: 2px;
        }
        .about-hero__meta-divider {
          width: 1px;
          height: 48px;
          background: rgba(124, 58, 237, 0.16);
          flex-shrink: 0;
        }

        @media (max-width: 820px) {
          .about-hero { padding-top: 115px; padding-bottom: 60px; }
          .about-hero__meta {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px 0;
            width: 100%;
            padding: 24px 16px;
          }
          .about-hero__meta-divider { display: none; }
          .about-hero__meta-item { padding: 0 12px; }
        }
        @media (max-width: 480px) {
          .about-hero__meta { grid-template-columns: 1fr; gap: 16px; }
        }

        /* ---- Mission / Vision ---- */
        .mv-intro {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
        }
        .mv-intro h2 {
          font-size: clamp(2rem, 3.4vw, 2.7rem);
          margin-top: 8px;
          color: var(--charcoal);
        }
        .mv-kicker {
          margin: 14px auto 0;
          font-size: 17px;
          color: var(--muted);
          line-height: 1.6;
        }
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
        }
        @media (max-width: 860px) {
          .mv-grid { grid-template-columns: 1fr; gap: 28px; }
        }

        .mv-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.12);
          border-radius: var(--radius-lg);
          padding: 44px 38px;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border-top: 6px solid var(--purple);
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s ease, border-color 0.28s ease;
          display: flex;
          flex-direction: column;
        }
        .mv-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -6px rgba(124, 58, 237, 0.12), 0 6px 14px rgba(16, 185, 129, 0.08);
          border-color: rgba(124, 58, 237, 0.25);
        }
        .mv-card--vision {
          border-top-color: var(--green);
        }
        .mv-card--vision:hover {
          border-color: rgba(16, 185, 129, 0.3);
        }
        .mv-card__header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .mv-card__icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: var(--purple-pale);
          border: 1px solid rgba(124, 58, 237, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.12);
        }
        .mv-card__icon-wrap--green {
          background: var(--green-pale);
          border-color: rgba(16, 185, 129, 0.25);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.12);
        }
        .mv-card__icon {
          font-size: 28px;
          line-height: 1;
        }
        .mv-card__mr {
          display: block;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--purple);
          margin-top: 4px;
        }
        .mv-card--vision .mv-card__mr {
          color: var(--green-deep);
        }
        .mv-card__text {
          font-family: var(--font-display);
          font-size: 21px;
          font-weight: 600;
          color: var(--charcoal);
          line-height: 1.55;
          margin-bottom: 28px;
        }
        .mv-card__pillars {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px dashed rgba(124, 58, 237, 0.15);
        }
        .mv-pillar {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14.5px;
          color: var(--ink);
          line-height: 1.5;
        }
        .mv-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--purple-tint);
          color: var(--purple-dark);
          font-size: 12px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .mv-check--green {
          background: var(--green-tint);
          color: var(--green-deep);
        }



      `}</style>
    </>
  );
}
