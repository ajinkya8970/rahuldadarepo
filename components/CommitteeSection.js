"use client";

import { useState } from "react";

const committee = [
  {
    name: "Gulab Sisale",
    role: "President",
    roleMr: "अध्यक्ष",
    initials: "GS",
    note: "Respected ZP Teacher and President of Navchaitanya. Leads the organization with visionary guidance, combining his background in public education with a strong commitment to rural upliftment, youth guidance, and environmental conservation.",
    tags: ["President", "ZP Teacher", "Community Leadership", "Youth Mentorship"],
  },
  {
    name: "Subhash Mankar",
    role: "Vice President",
    roleMr: "उपाध्यक्ष",
    initials: "SM",
    location: "Maharashtra, India",
    note: "An experienced development professional with a strong background in finance, administration, and community development. Has gained expertise in preparation of financial and narrative reports, writing concept notes and writing.",
    tags: ["Vice President", "Community Development", "Finance & Administration"],
    workExperience: [
      {
        org: "ASSEFA",
        role: "Junior Accountant → Sr. Accountant",
        period: "Jan 1984 – Jun 1996",
        detail:
          "Started as Junior Accountant (1984–1989), then promoted to Sr. Accountant monitoring accounts at state level (1990–1996).",
      },
      {
        org: "Sarva Jana Seva Kosh",
        role: "Development Officer",
        period: "Jun 1996 – Sep 1997",
        detail: "Served as Development Officer contributing to community welfare programmes.",
      },
      {
        org: "Dharamitra",
        role: "Part-time Accountant",
        period: "Oct 1997 – Jun 2007",
        detail: "Monitored accounts of Dharamitra on a part-time basis.",
      },
      {
        org: "Dilasa Sanstha, Yavatmal",
        role: "Accountant → Director Finance & Administration",
        period: "2007 – 2019",
        detail:
          "Initially monitored accounts on part-time basis, then served as Director Finance and Administration.",
      },
    ],
    projects: [
      {
        title: "NABARD-supported NHWDP Project",
        org: "Dharamitra",
        role: "Project Manager",
        period: "2007 – 2013",
      },
    ],
    associations: [
      { org: "Dharamitra, Wardha", role: "GB Member & Asst. Director", period: "2012 – 2014" },
      { org: "Prerna Gram Vikas Sanstha, Ralegaon", role: "Member of EC", period: "" },
      { org: "ART Organization, Mohda", role: "Vice-President", period: "" },
      { org: "SARITA Sanstha, Amravati", role: "Member of EC", period: "" },
      { org: "Jijau Gram Vikas Sanstha, Ghatanji", role: "Secretary", period: "" },
      { org: "Navchaitanya Vikas Yuva Mandal, Shiroli", role: "Vice-President", period: "" },
    ],
  },
  {
    name: "Rahul Jiwane",
    role: "Secretary & Operational Head",
    roleMr: "सचिव व कार्यकारी प्रमुख",
    initials: "RJ",
    note: "With over 10 years of dedicated grassroots experience, serves as the Secretary and Operational Head, actively managing and overseeing all organizational operations, community initiatives, and field projects. Spearheads the summer bird paanpoi network across three state routes, check dam construction, and roadside plantation drives; felicitated  Ghatanji by the Tahsildar's  on Independence Day  2024-2025.",
    tags: ["Secretary & Operational Head", "10+ Years Experience", "Field Operations Lead", "Tahsildar Awardee"],
  },
  {
    name: "Sandip Raut",
    role: "Treasurer",
    roleMr: "कोषाध्यक्ष",
    initials: "SR",
    note: "Oversees financial management, accounting transparency, and resource planning across all Navchaitanya projects. Ensures prudent budgeting and ethical stewardship of community funds for our water conservation and environmental initiatives.",
    tags: ["Treasurer", "Financial Management", "Budget Planning", "Resource Accountability"],
  },
  {
    name: "Amol Dhote",
    role: "Executive Member",
    roleMr: "कार्यकारिणी सदस्य",
    initials: "AD",
    note: "Serving government officer associated with the Panchayat Samiti (BDO Administration). Brings valuable administrative insight and public governance experience to strengthen Navchaitanya's rural development programs and grassroots community outreach.",
    tags: ["Executive Member", "Panchayat Samiti / BDO", "Rural Governance", "Public Administration"],
  },
  {
    name: "Durga Dhote",
    role: "Executive Member",
    roleMr: "कार्यकारिणी सदस्या",
    initials: "DD",
    note: "Committed committee member fostering women's active participation in rural development, leading community outreach, and supporting local health and environmental awareness campaigns.",
    tags: ["Executive Member", "Women's Participation", "Community Outreach"],
  },
  {
    name: "Anita Sisale",
    role: "Executive Member",
    roleMr: "कार्यकारिणी सदस्या",
    initials: "AS",
    note: "Dedicated committee member contributing to community welfare initiatives, village-level outreach, and coordinating seasonal bird care, nest distribution, and greening programs.",
    tags: ["Executive Member", "Community Welfare", "Village Outreach"],
  },
];

function ProfileDetail({ member }) {
  return (
    <div className="profile-detail">
      {/* Location Badge */}
      {member.location && (
        <div className="profile-location">
          <span className="profile-location__icon">📍</span>
          <span>{member.location}</span>
        </div>
      )}

      {/* Work Experience Timeline */}
      {member.workExperience && (
        <div className="profile-section">
          <div className="profile-section__header">
            <span className="profile-section__icon">💼</span>
            <h4 className="profile-section__title">Work Experience</h4>
          </div>
          <div className="timeline">
            {member.workExperience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-org">{exp.org}</span>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <span className="timeline-role">{exp.role}</span>
                  <p className="timeline-detail">{exp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Handled */}
      {member.projects && (
        <div className="profile-section">
          <div className="profile-section__header">
            <span className="profile-section__icon">🏗️</span>
            <h4 className="profile-section__title">Projects Handled</h4>
          </div>
          <div className="projects-list">
            {member.projects.map((proj, i) => (
              <div key={i} className="project-item">
                <div className="project-item__badge">
                  <span className="project-item__badge-icon">📋</span>
                </div>
                <div className="project-item__info">
                  <span className="project-item__title">{proj.title}</span>
                  <span className="project-item__meta">
                    {proj.role} at {proj.org} · {proj.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Associations */}
      {member.associations && (
        <div className="profile-section">
          <div className="profile-section__header">
            <span className="profile-section__icon">🤝</span>
            <h4 className="profile-section__title">Association with Other Organizations</h4>
          </div>
          <div className="assoc-grid">
            {member.associations.map((a, i) => (
              <div key={i} className="assoc-item">
                <span className="assoc-org">{a.org}</span>
                <span className="assoc-role">{a.role}</span>
                {a.period && <span className="assoc-period">{a.period}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CommitteeSection() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const hasDetail = (c) => c.workExperience || c.projects || c.associations;

  return (
    <>
      <section className="section section--parchment about-committee" id="committee">
        <div className="wrap">
          {/* Section Heading */}
          <div className="committee-intro">
            <h2>Our Trustees &amp; Leadership Team</h2>
          </div>

          <div className="committee-grid">
            {committee.map((c, idx) => {
              const isExpanded = expandedIdx === idx;
              const expandable = hasDetail(c);

              return (
                <div
                  key={c.name}
                  className={`committee-card ${isExpanded ? "committee-card--expanded" : ""} ${expandable ? "committee-card--expandable" : ""}`}
                >
                  <div className="committee-card__top">
                    <div className="committee-card__avatar">{c.initials}</div>
                    <div className="committee-card__identity">
                      <h3 className="committee-card__name">{c.name}</h3>
                      <div className="committee-card__role-wrap">
                        <span className="committee-card__role">{c.role}</span>
                        <span className="committee-card__role-mr mr">{c.roleMr}</span>
                      </div>
                    </div>
                  </div>

                  <p className="committee-card__note">{c.note}</p>

                  {/* <div className="committee-card__tags">
                    {c.tags.map((t) => (
                      <span key={t} className="committee-tag">
                        {t}
                      </span>
                    ))}
                  </div> */}

                  {/* Expandable Detail Section */}
                  {expandable && (
                    <>
                      <button
                        className={`profile-toggle ${isExpanded ? "profile-toggle--open" : ""}`}
                        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide Full Profile" : "View Full Profile"}</span>
                        <svg
                          className="profile-toggle__chevron"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="18"
                          height="18"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div
                        className="profile-detail-wrapper"
                        style={{
                          maxHeight: isExpanded ? "2000px" : "0px",
                          opacity: isExpanded ? 1 : 0,
                        }}
                      >
                        <ProfileDetail member={c} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Shramdaan Callout Banner */}
          <div className="committee-footnote-card">
            <span className="committee-footnote__icon" aria-hidden="true">
              🌱
            </span>
            <div className="committee-footnote__text">
              <strong>Community-Driven Shramdaan (श्रमदान)</strong>
              <p>
                Every initiative is carried forward through the voluntary physical contribution of
                local villagers, farmers, and students working shoulder-to-shoulder on weekends and
                holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ---- Executive Committee & Field Team ---- */
        .about-committee {
          padding-top: 16px;
        }
        .committee-intro {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 40px;
        }
        .committee-intro h2 {
          font-size: clamp(2rem, 3.4vw, 2.7rem);
          margin-top: 0;
          color: var(--charcoal);
        }
        .committee-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .committee-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .committee-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
        }

        .committee-card {
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: var(--radius-lg);
          padding: 30px 22px;
          box-shadow: var(--shadow-sm);
          border-top: 4px solid var(--purple);
          transition: transform 0.26s ease, box-shadow 0.26s ease;
          display: flex;
          flex-direction: column;
        }
        .committee-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px -4px rgba(124, 58, 237, 0.12);
        }
        .committee-card--expanded {
          grid-column: 1 / -1;
          max-width: 100%;
          transform: none !important;
          box-shadow: 0 20px 50px -8px rgba(124, 58, 237, 0.18), 0 8px 20px rgba(16, 185, 129, 0.08);
          border-color: rgba(124, 58, 237, 0.25);
          border-top-width: 5px;
        }
        .committee-card__top {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
        }
        .committee-card__avatar {
          width: 58px; height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #10B981);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(124, 58, 237, 0.28);
        }
        .committee-card__identity { flex: 1; }
        .committee-card__name {
          font-size: 20px;
          font-weight: 700;
          color: var(--charcoal);
        }
        .committee-card__role-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .committee-card__role {
          font-size: 12.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--purple);
        }
        .committee-card__role-mr {
          font-size: 13px;
          font-weight: 600;
          color: var(--muted);
        }
        .committee-card__note {
          font-size: 14.5px;
          color: var(--ink);
          line-height: 1.68;
          margin-bottom: 22px;
          flex-grow: 1;
        }
        .committee-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 18px;
          border-top: 1px dashed rgba(124, 58, 237, 0.12);
        }
        .committee-tag {
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-pill);
          background: var(--purple-pale);
          color: var(--purple-dark);
          border: 1px solid rgba(124, 58, 237, 0.15);
        }

        /* ---- Profile Toggle Button ---- */
        .profile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
          padding: 10px 22px;
          border: 1.5px solid rgba(124, 58, 237, 0.2);
          border-radius: var(--radius-pill);
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.06) 0%, rgba(16, 185, 129, 0.06) 100%);
          color: var(--purple);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
        }
        .profile-toggle:hover {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(16, 185, 129, 0.1) 100%);
          border-color: rgba(124, 58, 237, 0.35);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.12);
        }
        .profile-toggle__chevron {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .profile-toggle--open .profile-toggle__chevron {
          transform: rotate(180deg);
        }

        /* ---- Profile Detail Wrapper (animated) ---- */
        .profile-detail-wrapper {
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
        }

        /* ---- Profile Detail Content ---- */
        .profile-detail {
          padding-top: 24px;
        }

        .profile-location {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(16, 185, 129, 0.08));
          border: 1px solid rgba(124, 58, 237, 0.14);
          border-radius: var(--radius-pill);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 28px;
        }
        .profile-location__icon {
          font-size: 15px;
        }

        /* ---- Profile Sections ---- */
        .profile-section {
          margin-bottom: 28px;
        }
        .profile-section:last-child {
          margin-bottom: 0;
        }
        .profile-section__header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(124, 58, 237, 0.1);
        }
        .profile-section__icon {
          font-size: 20px;
          line-height: 1;
        }
        .profile-section__title {
          font-size: 16px;
          font-weight: 800;
          color: var(--charcoal);
          letter-spacing: -0.01em;
          text-transform: uppercase;
          font-size: 12.5px;
          letter-spacing: 0.08em;
        }

        /* ---- Work Experience Timeline ---- */
        .timeline {
          position: relative;
          padding-left: 28px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: linear-gradient(180deg, var(--purple) 0%, var(--green) 100%);
          border-radius: 2px;
          opacity: 0.3;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 22px;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -24px;
          top: 6px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--white);
          border: 3px solid var(--purple);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
          z-index: 1;
        }
        .timeline-item:last-child .timeline-dot {
          border-color: var(--green);
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
        }
        .timeline-content {
          background: rgba(124, 58, 237, 0.03);
          border: 1px solid rgba(124, 58, 237, 0.08);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .timeline-content:hover {
          border-color: rgba(124, 58, 237, 0.18);
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.06);
        }
        .timeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .timeline-org {
          font-size: 15px;
          font-weight: 700;
          color: var(--charcoal);
        }
        .timeline-period {
          font-size: 11.5px;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-pill);
          background: rgba(124, 58, 237, 0.08);
          color: var(--purple);
          white-space: nowrap;
        }
        .timeline-role {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--purple);
          margin-bottom: 8px;
        }
        .timeline-detail {
          font-size: 13.5px;
          color: var(--ink);
          line-height: 1.6;
          margin: 0;
        }

        /* ---- Projects List ---- */
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .project-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(124, 58, 237, 0.04) 100%);
          border: 1px solid rgba(16, 185, 129, 0.15);
          border-radius: var(--radius-md);
          padding: 18px 22px;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .project-item:hover {
          box-shadow: 0 6px 18px rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }
        .project-item__badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .project-item__badge-icon {
          font-size: 20px;
        }
        .project-item__info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .project-item__title {
          font-size: 15px;
          font-weight: 700;
          color: var(--charcoal);
        }
        .project-item__meta {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.4;
        }

        /* ---- Associations Grid ---- */
        .assoc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 12px;
        }
        .assoc-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: var(--radius-md);
          padding: 16px 18px;
          border-left: 3px solid var(--purple);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .assoc-item:hover {
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.08);
          border-left-color: var(--green);
        }
        .assoc-org {
          font-size: 14px;
          font-weight: 700;
          color: var(--charcoal);
          line-height: 1.4;
        }
        .assoc-role {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--purple);
        }
        .assoc-period {
          font-size: 11.5px;
          color: var(--muted);
          margin-top: 2px;
        }

        /* ---- Footnote ---- */
        .committee-footnote-card {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 44px;
          background: var(--white);
          border: 1px solid rgba(124, 58, 237, 0.15);
          border-left: 5px solid var(--purple);
          border-radius: var(--radius-md);
          padding: 22px 28px;
          box-shadow: var(--shadow-sm);
        }
        @media (max-width: 600px) {
          .committee-footnote-card { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
        .committee-footnote__icon {
          font-size: 32px;
          line-height: 1;
        }
        .committee-footnote__text strong {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: var(--charcoal);
          margin-bottom: 4px;
        }
        .committee-footnote__text p {
          font-size: 13.5px;
          color: var(--muted);
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
