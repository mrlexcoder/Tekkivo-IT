'use client';

import Link from 'next/link';
import '../../../public/Styles/HomeStyles.css';

interface Company {
  id: number;
  name: string;
  logo: string;
  category: string;
  hasGlobe: boolean;
}

export default function ThirdSecHome() {
  const companies: Company[] = [
    { id: 1, name: 'Promodex', logo: '/images/companies/promodex.png', category: 'Web Developers', hasGlobe: true },
    { id: 2, name: 'Geometric', logo: '/images/companies/geometric.png', category: 'Web Design', hasGlobe: true },
    { id: 3, name: 'IdeAAds', logo: '/images/companies/ideaads.png', category: 'Social Media Marketing', hasGlobe: true },
    { id: 4, name: 'IngestAI', logo: '/images/companies/ingestai.png', category: 'AI tools', hasGlobe: true },
    { id: 5, name: 'UAATEAM', logo: '/images/companies/uaateam.png', category: 'Advertising & Marketing', hasGlobe: true },
  ];

  return (
    <section className="third-section">
      <div className="third-section-container">
        {/* Featured Header */}
        <div className="featured-header">
          <div className="featured-title">
            <svg className="star-icon-featured" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h2 className="section-title">Featured</h2>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="companies-grid">
          {companies.map((company) => (
            <div key={company.id} className="company-card">
              {company.hasGlobe && (
                <div className="globe-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
              )}
              <div className="company-logo-wrapper">
                <div className="company-logo-placeholder">
                  <span className="company-logo-text">{company.name.substring(0, 2)}</span>
                </div>
              </div>
              <h3 className="company-name">{company.name}</h3>
              <p className="company-category">{company.category}</p>
              <Link href={`/company/${company.id}`} className="see-listing-btn">
                See listing
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          ))}

          {/* Get Featured Card */}
          <div className="get-featured-card">
            <h3 className="get-featured-title">Get featured</h3>
            <ul className="featured-benefits">
              <li>• Email newsletters</li>
              <li>• Dofollow link</li>
              <li>• Pro Account</li>
              <li>• Zero position</li>
              <li>• Verification</li>
              <li>• Articles</li>
            </ul>
            <button className="get-featured-btn">
              <svg className="arrow-icon-white" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
