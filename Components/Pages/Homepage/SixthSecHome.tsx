'use client';

import { useState } from 'react';
import '../../../public/Styles/HomeStyles.css';

export default function SixthSecHome() {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullContent = `
    We compose ratings of IT companies from various niches. We strive to be as impartial as possible. We've developed a unique methodology that enables us to honestly rate IT companies by a set of meaningful criteria. Our ratings come in handy for both IT companies and people who'd like to use their services.

    Our ratings include only the information that we can check. For instance, an IT agency might state that it has completed a certain number of cases, using specific frameworks. Before taking this statement into account, we need to see with our own eyes that these facts are true.

    We understand that choosing the right IT company is crucial for your business success. That's why we've created a comprehensive rating system that evaluates companies based on multiple factors including their portfolio, client reviews, technical expertise, and project delivery capabilities.

    Our methodology is transparent and fair. We don't accept payments for higher rankings, ensuring that our ratings reflect genuine quality and performance. Every company in our database goes through a rigorous verification process.

    Whether you're a startup looking for your first development partner or an established business seeking to expand your technical capabilities, our ratings help you make informed decisions. We provide detailed insights into each company's strengths, specializations, and track record.

    For IT companies, being part of our rating system means gaining visibility and credibility in a competitive market. We help showcase your achievements and connect you with clients who are looking for exactly what you offer.
  `;

  const shortContent = `
    We compose ratings of IT companies from various niches. We strive to be as impartial as possible. We've developed a unique methodology that enables us to honestly rate IT companies by a set of meaningful criteria. Our ratings come in handy for both IT companies and people who'd like to use their services.

    Our ratings include only the information that we can check. For instance, an IT agency might state that it has completed a certain number of cases, using specific frameworks. Before taking this statement into account, we need to see with our own eyes that these facts are true.

    We can boast an essential competitive edge: our rating features an AI-based recommendation algorithm. You start to search for what you need, and our system suggests the most suitable IT companies based on your specific requirements, budget, and project scope. This intelligent matching saves you time and increases the likelihood of finding the perfect partner for your project.
  `;

  return (
    <section className="sixth-section">
      <div className="sixth-section-container">
        <h1 className="sixth-section-main-title">RANKING IT COMPANY/AGENCY IN THE USA</h1>
        <h2 className="sixth-section-subtitle">What Is it-rating.com and How It Can Help You</h2>
        <div className="sixth-section-content">
          <div className={`sixth-section-text-wrapper ${isExpanded ? 'expanded' : 'scrollable'}`}>
            <div className="sixth-section-text">
              <div className="sixth-section-full-text">
                {fullContent.split('\n\n').map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="sixth-section-paragraph">
                      {paragraph.trim()}
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className="sixth-section-footer">
            <button 
              className="sixth-section-more-link"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Less' : 'More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
