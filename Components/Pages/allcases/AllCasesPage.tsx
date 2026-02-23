'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../../public/Styles/PagesCss/allcases.css';
import { caseStudiesData } from '@/data/caseStudiesData';

export default function AllCasesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'All', 'SEO', 'SMM', 'Branding', 'Design', 'Internet',
    'Package of services', 'Contextual advertising', 'Marketing',
    'Mobile development', 'Monitoring', 'Presentations',
    'Website development', 'Startups', 'Ecommerce', 'Usability'
  ];

  const caseStudies = caseStudiesData;

  // Top-6 most viewed cases for the sidebar
  const popularCases = [...caseStudiesData]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);

  const filteredCases = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(caseItem => caseItem.category === selectedCategory);

  const caseThumbnails = Array.from({ length: 9 }, (_, i) => i + 1);

  // Use the slug directly from data
  const getSlug = (index: number) => filteredCases[index]?.slug ?? '';

  return (
    <div className="allcases-page">
      {/* Breadcrumb */}
      <div className="allcases-breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <span>Company cases</span>
      </div>

      {/* Main Title */}
      <h1 className="allcases-main-title">Best examples of Web Developers Portfolios</h1>

      {/* Filter Bar */}
      <div className="allcases-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            <span className="filter-indicator"></span>
            {category}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="allcases-content-grid">
        {/* Left Column */}
        <div className="allcases-column">
          {/* Featured Case Card — filteredCases[0] */}
          {filteredCases[0] && (
            <div className="case-card-large">
              <Link href={`/allcases/${filteredCases[0].slug}`} className="case-card-image-large" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="case-card-badge">
                  <span className="case-badge-flag">🇺🇸</span>
                  <span className="case-badge-text">TOP-5</span>
                </div>
                <div className="case-card-tag">#{filteredCases[0].category.toLowerCase().replace(/\s+/g, '_')}</div>
              </Link>
              <div className="case-card-content">
                <Link href={`/allcases/${filteredCases[0].slug}`} className="case-company-link">
                  {filteredCases[0].company}
                </Link>
                <Link href={`/allcases/${filteredCases[0].slug}`}>
                  <h3 className="case-title">{filteredCases[0].title}</h3>
                </Link>
                <div className="case-meta">
                  <span className="case-date">{filteredCases[0].date}</span>
                  <span className="case-category">{filteredCases[0].category}</span>
                </div>
              </div>
            </div>
          )}

          {/* Second Case Card — filteredCases[1] */}
          {filteredCases[1] && (
            <div className="case-card-large">
              <Link href={`/allcases/${filteredCases[1].slug}`} className="case-card-image-large valentine-card" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="valentine-icon">❤️</div>
                <div className="valentine-text">{filteredCases[1].category}</div>
              </Link>
              <div className="case-card-content">
                <Link href={`/allcases/${filteredCases[1].slug}`} className="case-company-link">
                  {filteredCases[1].company}
                </Link>
                <Link href={`/allcases/${filteredCases[1].slug}`}>
                  <h3 className="case-title">{filteredCases[1].title}</h3>
                </Link>
                <div className="case-meta">
                  <span className="case-date">{filteredCases[1].date}</span>
                  <span className="case-category">{filteredCases[1].category}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Middle Column */}
        <div className="allcases-column">
          {/* Thumbnail Grid */}
          <div className="cases-thumbnail-grid">
            {caseThumbnails.map((thumb, index) => (
              <div
                key={thumb}
                className={`case-thumbnail ${index === 4 ? 'case-thumbnail-center' : ''}`}
              >
                <div className="case-thumbnail-image"></div>
              </div>
            ))}
          </div>

          {/* Case Details Below Grid — filteredCases[2] */}
          {filteredCases[2] && (
            <div className="case-card-large">
              <div className="case-card-content">
                <Link href={`/allcases/${filteredCases[2].slug}`} className="case-company-link">
                  {filteredCases[2].company}
                </Link>
                <Link href={`/allcases/${filteredCases[2].slug}`}>
                  <h3 className="case-title">{filteredCases[2].title}</h3>
                </Link>
                <div className="case-meta">
                  <span className="case-date">{filteredCases[2].date}</span>
                  <span className="case-category">{filteredCases[2].category}</span>
                </div>
              </div>
            </div>
          )}

          {/* Fourth Case Card — filteredCases[3] */}
          {filteredCases[3] && (
            <div className="case-card-large">
              <Link href={`/allcases/${filteredCases[3].slug}`} className="case-card-image-large percentage-card" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="percentage-text">
                  {filteredCases[3].results?.[0]?.match(/\d[\d,.%]+/)?.[0] ?? '↑'}
                </span>
              </Link>
              <div className="case-card-content">
                <Link href={`/allcases/${filteredCases[3].slug}`} className="case-company-link">
                  {filteredCases[3].company}
                </Link>
                <Link href={`/allcases/${filteredCases[3].slug}`}>
                  <h3 className="case-title">{filteredCases[3].title}</h3>
                </Link>
                <div className="case-meta">
                  <span className="case-date">{filteredCases[3].date}</span>
                  <span className="case-category">{filteredCases[3].category}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Popular Cases */}
        <div className="allcases-column popular-cases-column">
          <h2 className="popular-cases-title">Popular cases</h2>
          <div className="popular-cases-list">
            {popularCases.map((caseItem) => (
              <div key={caseItem.id} className="popular-case-item">
                <Link href={`/allcases/${caseItem.slug}`} className="popular-case-company">
                  {caseItem.company}
                </Link>
                <Link href={`/allcases/${caseItem.slug}`}>
                  <h4 className="popular-case-title">{caseItem.title}</h4>
                </Link>
                <div className="popular-case-meta">
                  <span className="popular-case-date">{caseItem.date}</span>
                  <div className="popular-case-views">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>{caseItem.views}</span>
                  </div>
                </div>
                <span className="popular-case-category">{caseItem.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Remaining cases as a list */}
      {filteredCases.length > 4 && (
        <div style={{ padding: '0 40px 40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: '#111' }}>
            More cases
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredCases.slice(4).map((caseItem) => (
              <Link
                key={caseItem.id}
                href={`/allcases/${caseItem.slug}`}
                style={{ display: 'block', border: '1px solid #eee', borderRadius: '8px', padding: '20px', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}
              >
                <span style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 600 }}>{caseItem.company}</span>
                <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '8px 0', color: '#111', lineHeight: 1.4 }}>{caseItem.title}</h3>
                <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: '#777' }}>
                  <span>{caseItem.date}</span>
                  <span>{caseItem.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Pagination Section */}
      <div className="allcases-pagination">
        <button
          className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        <button
          className={`pagination-btn ${currentPage === 2 ? 'active' : ''}`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>
        <button
          className={`pagination-btn ${currentPage === 3 ? 'active' : ''}`}
          onClick={() => setCurrentPage(3)}
        >
          3
        </button>
        <span className="pagination-ellipsis">...</span>
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(54)}
        >
          54
        </button>
        <button
          className="pagination-btn pagination-next"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, 54))}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="allcases-newsletter">
        <div className="newsletter-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <h2 className="newsletter-title">Subscribe to the newsletter</h2>
        <p className="newsletter-description">
          Subscribe to our free newsletter and get 5% for all web studio services or 10% for advertising.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Your email"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
