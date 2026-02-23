'use client';

import Link from 'next/link';
import { Company, slugToLabel } from '@/data/performersData';
import '@/public/Styles/PagesCss/performers.css';

interface PerformersPageProps {
    categorySlug: string;
    citySlug: string;
    companies: Company[];
}

export default function PerformersPage({ categorySlug, citySlug, companies }: PerformersPageProps) {
    const categoryLabel = slugToLabel(categorySlug);   // "Web Developers"
    const cityLabel = slugToLabel(citySlug);       // "New York"
    const now = new Date();
    const dateLabel = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
        <div className="performers-page">

            {/* ── Breadcrumb ────────────────────────────────────── */}
            <div className="performers-breadcrumb">
                <Link href="/">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </Link>
                <span className="bc-sep">•</span>
                <span className="bc-item">Development</span>
                <span className="bc-sep">•</span>
                <span className="bc-item">{categoryLabel}</span>
                <span className="bc-sep">•</span>
                <span className="bc-current">{cityLabel}</span>
            </div>

            {/* ── Hero heading ──────────────────────────────────── */}
            <div className="performers-hero">
                <h1 className="performers-h1">
                    Top {categoryLabel} companies in {cityLabel}
                </h1>
                <p className="performers-ranking-date">Rankings as of {dateLabel}</p>
                <p className="performers-description">
                    It is important to choose the best {cityLabel.toLowerCase()} {categoryLabel.toLowerCase()} that is most
                    appropriate for your mission and business goals. Use our convenient filter by location, size,
                    price, and reviews to filter our list of {companies.length}+&nbsp;{cityLabel.toLowerCase()}&nbsp;
                    {categoryLabel.toLowerCase()} service vendors in the USA to find the partners that meet your
                    needs. Create a product that can achieve the desired business goals in your market.
                </p>
            </div>

            {/* ── List title ────────────────────────────────────── */}
            <h2 className="performers-list-title">
                List of the Best {categoryLabel} Companies in {cityLabel}
            </h2>

            {/* ── Filter bar ───────────────────────────────────── */}
            <div className="performers-filter-bar">
                <div className="filter-bar-left">
                    <button className="filter-pill">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>
                        Service&nbsp;<span>▾</span>
                    </button>
                    <button className="filter-pill">
                        Country&nbsp;<span>▾</span>
                    </button>
                    <button className="filter-pill filter-pill-active">
                        <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                        {cityLabel}&nbsp;<span>▾</span>
                    </button>
                </div>
                <button className="filter-methodology">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
                    Methodology
                </button>
            </div>

            {/* ── Table header ─────────────────────────────────── */}
            <div className="performers-table-header">
                <div className="col-num">№</div>
                <div className="col-company">
                    Company&nbsp;<span className="sort-arrow">▾</span>
                </div>
                <div className="col-stat">Points&nbsp;<span className="sort-arrow">▾</span></div>
                <div className="col-stat">Portfolio&nbsp;<span className="sort-arrow">▾</span></div>
                <div className="col-stat">Reviews&nbsp;<span className="sort-arrow">▾</span></div>
                <div className="col-stat">Cases&nbsp;<span className="sort-arrow">▾</span></div>
            </div>

            {/* ── Company rows ─────────────────────────────────── */}
            {companies.length === 0 ? (
                <div className="performers-empty">
                    <p>No companies found for <strong>{categoryLabel}</strong> in <strong>{cityLabel}</strong>.</p>
                    <Link href="/" className="performers-back-link">← Back to search</Link>
                </div>
            ) : (
                <div className="performers-list">
                    {companies.map((company, index) => (
                        <div key={company.id} className="company-row">
                            {/* Row number */}
                            <div className="company-num">{index + 1}</div>

                            {/* Logo */}
                            <div
                                className="company-logo"
                                style={{ background: company.bgColor, color: company.textColor }}
                            >
                                {company.initials}
                            </div>

                            {/* Info block */}
                            <div className="company-info">
                                <a href={company.website} className="company-name">{company.name}</a>
                                <p className="company-type">{company.type}</p>
                                <p className="company-desc">{company.description}</p>
                                <a href="#" className="company-read-more">Read more&nbsp;›</a>

                                {/* Detail chips */}
                                <div className="company-chips">
                                    <span className="chip chip-team">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                        {company.teamSize}
                                    </span>
                                    <span className="chip chip-budget">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg>
                                        {company.minBudget}
                                    </span>
                                    <span className="chip chip-location">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" /></svg>
                                        {company.location}
                                    </span>
                                    <span className="chip chip-rate">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                        {company.hourlyRate}
                                    </span>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="company-stat">{company.points}</div>
                            <div className="company-stat">{company.portfolio}</div>
                            <div className="company-stat">{company.reviews}</div>
                            <div className="company-stat">{company.cases}</div>

                            {/* CTA */}
                            <div className="company-cta">
                                <a href={company.website} className="visit-btn">Visit Website</a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
