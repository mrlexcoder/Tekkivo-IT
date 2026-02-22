'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../../../public/Styles/HomeStyles.css';

interface CaseStudy {
  id: number;
  company: string;
  title: string;
  date: string;
  category: string;
  image: string;
}

interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
  image: string;
}

interface Course {
  id: number;
  title: string;
  date: string;
  image: string;
}

export default function FifthSecHome() {
  const [currentEventSlide, setCurrentEventSlide] = useState(0);
  const [currentCourseSlide, setCurrentCourseSlide] = useState(0);

  const caseStudies: CaseStudy[] = [
    { id: 1, company: 'UAITLAB', title: 'Case Study: Agromat.', date: '24 February 2025', category: 'Website development', image: '' },
    { id: 2, company: 'Promodex', title: 'Simple CRM system based on OpenCart', date: '13 September 2022', category: 'Website development', image: '' },
  ];

  // Thumbnail images for the grid (9 items for 3x3 grid)
  const caseThumbnails = Array.from({ length: 9 }, (_, i) => i + 1);

  const articles: Article[] = [
    { id: 1, title: 'IT Admin: In-App Community vs Discord: A Practical Buyer\'s Guide', date: '19 February 2026', category: 'Other' },
    { id: 2, title: 'International IT Rating: Brandy and Billy Wiseman Net Worth and Biography 2024', date: '18 February 2026', category: 'Other' },
    { id: 3, title: 'International IT Rating: The Best Nightclubs in New York City Right Now: Where the City Truly Comes Alive After Dark', date: '17 February 2026', category: 'Other' },
    { id: 4, title: 'IT Admin: Maltipoo: A Detailed Breed Guide for Future IT Owners', date: '16 February 2026', category: 'Other' },
    { id: 5, title: 'IT Admin: Online Schools in Nevada: Free vs Paid', date: '12 February 2026', category: 'Other' },
    { id: 6, title: 'IT Admin: Best Bean-to-Bar Craft Chocolate Makers in the World — Artisan Guide 2026', date: '11 February 2026', category: 'Other' },
    { id: 7, title: 'IT Admin: How Small Brands Grow Facebook Pages Without Ads', date: '11 February 2026', category: 'SMM' },
    { id: 8, title: 'International IT Rating: Top Nearshore', date: '10 February 2026', category: 'Other' },
  ];

  const events: Event[] = [
    { id: 1, title: 'International Conference on Big Data, IoT, Cyber Security and Information Technology', date: '1 January 2026', location: 'Venice', price: 'FREE', image: '' },
    { id: 2, title: 'Tech Summit 2026', date: '15 March 2026', location: 'New York', price: '$299', image: '' },
  ];

  const courses: Course[] = [
    { id: 1, title: 'Learn SQL', date: '1 January 2026', image: '' },
    { id: 2, title: 'Python Basics', date: '5 February 2026', image: '' },
  ];

  return (
    <section className="fifth-section">
      <div className="fifth-section-container">
        <div className="content-grid">
          {/* Column 1: Top company cases */}
          <div className="content-column">
            <div className="column-header">
              <h2 className="column-title">
                <Link href="/cases">Top company cases</Link>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </h2>
            </div>
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
            {/* Case Studies List */}
            <div className="cases-list">
              {caseStudies.map((caseItem) => (
                <div key={caseItem.id} className="case-card">
                  <div className="case-image-placeholder">
                    <span className="case-company">{caseItem.company}</span>
                  </div>
                  <div className="case-content">
                    <Link href="#" className="case-company-link">{caseItem.company}</Link>
                    <h3 className="case-title">{caseItem.title}</h3>
                    <div className="case-meta">
                      <span className="case-date">{caseItem.date}</span>
                      <span className="case-category">{caseItem.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Articles */}
          <div className="content-column">
            <div className="column-header">
              <h2 className="column-title">
                <Link href="/articles">Articles</Link>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </h2>
            </div>
            <div className="articles-list-scrollable">
              {articles.map((article) => (
                <div key={article.id} className="article-item">
                  <h3 className="article-title">{article.title}</h3>
                  <div className="article-meta">
                    <span className="article-date">{article.date}</span>
                    <span className="article-category">{article.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Events & IT course */}
          <div className="content-column">
            {/* Events */}
            <div className="column-header column-header-with-arrows">
              <button 
                className="slider-arrow-small" 
                onClick={() => setCurrentEventSlide((prev) => (prev - 1 + events.length) % events.length)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <h2 className="column-title">
                <Link href="/events">Events</Link>
              </h2>
              <button 
                className="slider-arrow-small" 
                onClick={() => setCurrentEventSlide((prev) => (prev + 1) % events.length)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="event-card">
              <div className="event-image-placeholder"></div>
              <div className="event-content">
                <span className="event-date">{events[currentEventSlide].date}</span>
                <h3 className="event-title">{events[currentEventSlide].title}</h3>
                <div className="event-footer">
                  <span className="event-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {events[currentEventSlide].location}
                  </span>
                  <span className="event-price">{events[currentEventSlide].price}</span>
                </div>
              </div>
              <div className="slider-dots">
                {events.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentEventSlide ? 'active' : ''}`}
                    onClick={() => setCurrentEventSlide(index)}
                  ></span>
                ))}
              </div>
            </div>

            {/* IT course */}
            <div className="column-header column-header-with-arrows" style={{ marginTop: '32px' }}>
              <button 
                className="slider-arrow-small" 
                onClick={() => setCurrentCourseSlide((prev) => (prev - 1 + courses.length) % courses.length)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <h2 className="column-title">
                <Link href="/courses">IT course</Link>
              </h2>
              <button 
                className="slider-arrow-small" 
                onClick={() => setCurrentCourseSlide((prev) => (prev + 1) % courses.length)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="course-card">
              <div className="course-image-placeholder">
                <span className="course-icon">Icl</span>
              </div>
              <div className="course-content">
                <span className="course-date">{courses[currentCourseSlide].date}</span>
                <h3 className="course-title">{courses[currentCourseSlide].title}</h3>
              </div>
              <div className="slider-dots">
                {courses.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === currentCourseSlide ? 'active' : ''}`}
                    onClick={() => setCurrentCourseSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
