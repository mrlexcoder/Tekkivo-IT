'use client';

import '../../../public/Styles/HomeStyles.css';

export default function SecSecHome() {
  const stats = [
    { number: '110 061', label: 'Companies in our listing' },
    { number: '1 430', label: 'Cases of finished projects' },
    { number: '54 654', label: 'Projects in the portfolio of companies' },
    { number: '1 642', label: 'Research and articles' },
  ];

  return (
    <section className="sec-section">
      <div className="sec-section-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
