'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../../public/Styles/PagesCss/single-case.css';

interface CaseStudy {
  id: number;
  slug: string;
  company: string;
  title: string;
  date: string;
  category: string;
  views: number;
  image?: string;
  about?: string;
  objectives?: string[];
  challenges?: string[];
  whatWeDid?: string[];
  results?: string[];
}

interface SingleCaseStudyProps {
  caseStudy: CaseStudy;
  relatedCases: CaseStudy[];
}

export default function SingleCaseStudy({ caseStudy, relatedCases }: SingleCaseStudyProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 4;
  const maxSlides = Math.max(0, Math.ceil(relatedCases.length / cardsPerView) - 1);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  return (
    <div className="single-case-page">

      {/* Breadcrumb */}
      <div className="single-case-breadcrumb">
        <Link href="/">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/allcases">Cases of IT companies</Link>
        <span className="breadcrumb-separator">/</span>
        <Link href={`/allcases?category=${encodeURIComponent(caseStudy.category)}`}>{caseStudy.category}</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{caseStudy.title}</span>
      </div>

      {/* Main Content */}
      <div className="single-case-container">

        {/* LEFT — Article */}
        <div className="single-case-main">

          {/* Social share bar + BACK */}
          <div className="single-case-toolbar">
            <div className="social-share-icons">
              {/* Facebook */}
              <a href="#" className="social-icon" aria-label="Share on Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="social-icon" aria-label="Share on Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-icon" aria-label="Share on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <Link href="/allcases" className="back-link">BACK</Link>
          </div>

          {/* Title + views */}
          <div className="single-case-header">
            <h1 className="single-case-title">{caseStudy.title}</h1>
            <div className="single-case-views">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>{caseStudy.views}</span>
            </div>
          </div>

          {/* Content Sections */}
          <div className="single-case-content">
            {caseStudy.about && (
              <section className="case-section">
                <h2 className="case-section-title">About the project</h2>
                <p className="case-section-text">{caseStudy.about}</p>
              </section>
            )}

            {caseStudy.objectives && caseStudy.objectives.length > 0 && (
              <section className="case-section">
                <h2 className="case-section-title">Objectives</h2>
                <ul className="case-list case-list-bullet">
                  {caseStudy.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </section>
            )}

            {caseStudy.challenges && caseStudy.challenges.length > 0 && (
              <section className="case-section">
                <h2 className="case-section-title">Key challenges</h2>
                <ol className="case-list case-list-numbered">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ol>
              </section>
            )}

            {caseStudy.whatWeDid && caseStudy.whatWeDid.length > 0 && (
              <section className="case-section">
                <h2 className="case-section-title">What we did</h2>
                <ol className="case-list case-list-numbered">
                  {caseStudy.whatWeDid.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </section>
            )}

            {caseStudy.results && caseStudy.results.length > 0 && (
              <section className="case-section">
                <h2 className="case-section-title">Results</h2>
                <ul className="case-list case-list-bullet">
                  {caseStudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Promo CTA box */}
          <div className="case-promo-box">
            <p className="case-promo-headline">No more searching and calling digital agencies!</p>
            <p className="case-promo-text">
              Create a tender and get offers on price and terms from the best web studios.<br />
              It&apos;s free and takes 2 minutes. There are 1500+ digital agencies in the catalog that are ready
              to help in the implementation of your tasks. Choose and save up to 30% on time and budget!
            </p>
            <a href="#" className="case-promo-link">Create tender</a>
          </div>
        </div>

        {/* RIGHT — Sticky Sidebar */}
        <div className="single-case-sidebar">
          {/* Sidebar thumbnail */}
          {caseStudy.image && (
            <div className="case-sidebar-thumb">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={320}
                height={200}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          )}

          {/* Sidebar info */}
          <div className="case-sidebar-info">
            <div className="sidebar-info-item">
              <span className="sidebar-label">COMPANY:</span>
              <span className="sidebar-value sidebar-company">{caseStudy.company}</span>
            </div>
            <div className="sidebar-info-item">
              <span className="sidebar-label">TYPE OF:</span>
              <span className="sidebar-value sidebar-type">{caseStudy.category}</span>
            </div>
            <div className="sidebar-info-item">
              <span className="sidebar-label">ADDED:</span>
              <span className="sidebar-value sidebar-date">{caseStudy.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Cases Section */}
      <div className="related-cases-section">
        <div className="related-cases-header">
          <h2 className="related-cases-title">Cases in this category</h2>
          <div className="related-cases-controls">
            <Link href="/allcases" className="all-cases-link">All cases</Link>
            <div className="related-cases-arrows">
              <button className="related-arrow-btn" onClick={prevSlide} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button className="related-arrow-btn" onClick={nextSlide} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="related-cases-container">
          <div
            className="related-cases-slider"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
          >
            {relatedCases.map((relatedCase) => (
              <Link
                key={relatedCase.id}
                href={`/allcases/${relatedCase.slug}`}
                className="related-case-card"
              >
                <div className="related-case-image">
                  {relatedCase.image ? (
                    <Image
                      src={relatedCase.image}
                      alt={relatedCase.title}
                      width={240}
                      height={140}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div className="related-case-image-placeholder"></div>
                  )}
                </div>
                <h3 className="related-case-title">{relatedCase.title}</h3>
                <span className="related-case-date">{relatedCase.date}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="related-cases-dots">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
