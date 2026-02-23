export interface Company {
    id: number;
    name: string;
    type: string;
    initials: string;        // fallback logo text, e.g. "W&J"
    bgColor: string;         // logo background color
    textColor: string;
    description: string;
    teamSize: string;        // e.g. "2 - 9"
    minBudget: string;       // e.g. "$10,000"
    hourlyRate: string;      // e.g. "$50-99/hr"
    location: string;        // e.g. "New York, US"
    points: number;
    portfolio: number;
    reviews: number;
    cases: number;
    website: string;
    categories: string[];    // matching subcategory slugs
    cities: string[];        // matching city slugs
}

export const companiesData: Company[] = [
    // ── New York / Web Developers ────────────────────────────
    {
        id: 1,
        name: 'Weil & Jones',
        type: 'Website Development Company',
        initials: 'W&J',
        bgColor: '#f5f5f5',
        textColor: '#333',
        description:
            'Weil & Jones is an independent firm of Chartered Accountants and Business Advisers, providing a comprehensive range of professional services to businesses, charities and individuals. They have teams of highly skilled and experienced professionals located…',
        teamSize: '2 - 9',
        minBudget: '$10,000',
        hourlyRate: '$50-99/hr',
        location: 'New York, US',
        points: 340,
        portfolio: 60,
        reviews: 0,
        cases: 2,
        website: '#',
        categories: ['web-developers', 'full-stack'],
        cities: ['new-york'],
    },
    {
        id: 2,
        name: 'Vermillion Sky',
        type: 'Web Development Company',
        initials: 'VS',
        bgColor: '#dc2626',
        textColor: '#fff',
        description:
            'Vermillion Sky is a web development and marketing agency based in Los Angeles, California. Founded in 2007, the company provides a wide range of services to businesses and entrepreneurs, including website design and development, content marketing, search…',
        teamSize: '10 - 49',
        minBudget: '$25,000',
        hourlyRate: '$150-199/hr',
        location: 'New York, US',
        points: 402,
        portfolio: 88,
        reviews: 3,
        cases: 5,
        website: '#',
        categories: ['web-developers', 'frontend'],
        cities: ['new-york', 'los-angeles'],
    },
    {
        id: 3,
        name: 'Utility',
        type: 'Web Development Company',
        initials: 'u.',
        bgColor: '#111827',
        textColor: '#fff',
        description:
            'Utility is a full-service digital agency specializing in custom web solutions, e-commerce platforms, and scalable SaaS applications. Their engineering team delivers modern, performance-first products across multiple industries.',
        teamSize: '50 - 249',
        minBudget: '$10,276',
        hourlyRate: '$37/hr',
        location: 'New York, US',
        points: 356,
        portfolio: 1,
        reviews: 0,
        cases: 1,
        website: '#',
        categories: ['web-developers', 'backend'],
        cities: ['new-york'],
    },
    {
        id: 4,
        name: 'PixelForge Studio',
        type: 'Web & Mobile Development',
        initials: 'PF',
        bgColor: '#7c3aed',
        textColor: '#fff',
        description:
            'PixelForge Studio is a boutique digital product agency building fast, accessible, and beautiful web experiences. They specialize in React, Next.js, and headless CMS solutions for startups and scale-ups.',
        teamSize: '10 - 49',
        minBudget: '$15,000',
        hourlyRate: '$100-149/hr',
        location: 'New York, US',
        points: 288,
        portfolio: 42,
        reviews: 7,
        cases: 3,
        website: '#',
        categories: ['web-developers', 'frontend', 'full-stack'],
        cities: ['new-york', 'boston'],
    },
    {
        id: 5,
        name: 'Brightline Digital',
        type: 'Digital Agency',
        initials: 'BD',
        bgColor: '#0ea5e9',
        textColor: '#fff',
        description:
            'Brightline Digital focuses on outcome-driven web development and conversion optimization. Their cross-functional teams handle everything from UX design to backend integrations, helping clients grow revenue through world-class digital experiences.',
        teamSize: '50 - 249',
        minBudget: '$20,000',
        hourlyRate: '$100-149/hr',
        location: 'New York, US',
        points: 317,
        portfolio: 55,
        reviews: 12,
        cases: 8,
        website: '#',
        categories: ['web-developers', 'frontend'],
        cities: ['new-york', 'chicago'],
    },

    // ── Boston / Web Developers ──────────────────────────────
    {
        id: 6,
        name: 'Atlantic Code Labs',
        type: 'Software Development Company',
        initials: 'AC',
        bgColor: '#059669',
        textColor: '#fff',
        description:
            'Atlantic Code Labs is a Boston-based software house delivering high-quality web and enterprise solutions. With 15+ years of experience, they partner with Fortune 500 companies and ambitious startups alike.',
        teamSize: '50 - 249',
        minBudget: '$30,000',
        hourlyRate: '$100-149/hr',
        location: 'Boston, US',
        points: 378,
        portfolio: 73,
        reviews: 9,
        cases: 4,
        website: '#',
        categories: ['web-developers', 'full-stack', 'backend'],
        cities: ['boston'],
    },
    {
        id: 7,
        name: 'Northshore Apps',
        type: 'Web Development & Design',
        initials: 'NA',
        bgColor: '#f59e0b',
        textColor: '#fff',
        description:
            'Northshore Apps crafts polished digital products for healthcare, fintech, and e-commerce. Their team blends design thinking with pragmatic engineering to ship products that users love.',
        teamSize: '10 - 49',
        minBudget: '$12,000',
        hourlyRate: '$50-99/hr',
        location: 'Boston, US',
        points: 264,
        portfolio: 31,
        reviews: 4,
        cases: 2,
        website: '#',
        categories: ['web-developers', 'frontend'],
        cities: ['boston'],
    },

    // ── Los Angeles / Web Developers ────────────────────────
    {
        id: 8,
        name: 'Sunset Digital Co.',
        type: 'Creative Web Agency',
        initials: 'SD',
        bgColor: '#ef4444',
        textColor: '#fff',
        description:
            'Sunset Digital Co. blends bold visual design with cutting-edge web development to create immersive brand experiences. Based in LA, they serve entertainment, fashion, and lifestyle brands worldwide.',
        teamSize: '10 - 49',
        minBudget: '$20,000',
        hourlyRate: '$150-199/hr',
        location: 'Los Angeles, US',
        points: 421,
        portfolio: 94,
        reviews: 15,
        cases: 7,
        website: '#',
        categories: ['web-developers', 'frontend', 'full-stack'],
        cities: ['los-angeles'],
    },

    // ── New York / Mobile Developers ────────────────────────
    {
        id: 9,
        name: 'Apex Mobile Labs',
        type: 'Mobile App Development',
        initials: 'AM',
        bgColor: '#4f46e5',
        textColor: '#fff',
        description:
            'Apex Mobile Labs is a premier mobile development studio specializing in iOS and Android applications. They\'ve shipped 200+ apps across fintech, health, and consumer markets with 4.8★ average App Store ratings.',
        teamSize: '10 - 49',
        minBudget: '$25,000',
        hourlyRate: '$100-149/hr',
        location: 'New York, US',
        points: 391,
        portfolio: 67,
        reviews: 11,
        cases: 6,
        website: '#',
        categories: ['mobile-developers', 'ios-app-developers', 'android-app-developers'],
        cities: ['new-york'],
    },

    // ── Chicago / Web Developers ─────────────────────────────
    {
        id: 10,
        name: 'MidWest Web Works',
        type: 'Web Development Agency',
        initials: 'MW',
        bgColor: '#0891b2',
        textColor: '#fff',
        description:
            'MidWest Web Works is Chicago\'s go-to agency for robust, scalable web platforms. Their expert team handles everything from custom CMS builds to complex API integrations and cloud deployments on AWS and Azure.',
        teamSize: '10 - 49',
        minBudget: '$15,000',
        hourlyRate: '$50-99/hr',
        location: 'Chicago, US',
        points: 299,
        portfolio: 49,
        reviews: 6,
        cases: 3,
        website: '#',
        categories: ['web-developers', 'backend', 'full-stack'],
        cities: ['chicago'],
    },
];

/** Filter companies by subcategory slug and city slug */
export function getCompanies(categorySlug: string, citySlug: string): Company[] {
    return companiesData.filter(
        (c) =>
            c.categories.includes(categorySlug) &&
            (citySlug === 'all' || c.cities.includes(citySlug))
    );
}

/** Prettify a slug back to a label: "web-developers" → "Web Developers" */
export function slugToLabel(slug: string): string {
    return slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}
