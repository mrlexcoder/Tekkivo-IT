export interface CaseStudy {
    id: number;
    slug: string;
    company: string;
    title: string;
    date: string;
    category: string;
    views: number;
    image?: string;
    description?: string;
    about?: string;
    objectives?: string[];
    challenges?: string[];
    whatWeDid?: string[];
    results?: string[];
}

export const caseStudiesData: CaseStudy[] = [
    {
        id: 1,
        slug: 'ppc-for-a-manufacturers-ecommerce-site-in-fitness-equipment',
        company: 'WEDEX',
        title: "PPC for a manufacturer's ecommerce site in fitness equipment",
        date: '03-02-2026',
        category: 'Contextual advertising',
        views: 57,
        image: '/images/cases/case_fitness_ppc.png',
        description: 'Google Ads Performance Max campaign that reduced CPA by 48% and achieved 1,721% ROAS for a fitness equipment manufacturer.',
        about:
            "Official fitness equipment manufacturer with an e-commerce site on Horoshop. Despite strong products, reseller sites were outselling the brand's own store. Ad reach was low and cost per lead was high.",
        objectives: [
            'Expand reach without increasing the product catalog',
            'Multiply sales',
            'Keep cost per lead under 600 UAH',
        ],
        challenges: [
            "Partner retailers were outselling the manufacturer's own site",
            'Low advertising reach across all channels',
            'High cost per lead averaging 590 UAH',
        ],
        whatWeDid: [
            'Core strategy: Google Ads Performance Max to cover all available channels within a single campaign',
            'Product clustering and prioritization: identified the highest-potential SKUs for promotion',
            "Audience segmentation and signal testing: used detailed audience signals, including analysis of competitors' branded queries, to maximize relevance and efficiency",
            'Content optimization based on a semantic keyword map: improved on-site product titles and descriptions to boost appeal, search relevance, and ad reach',
        ],
        results: [
            '108,000 clicks, indicating a strong rise in interest in products',
            'Average CPC: 2.24 UAH',
            'ROAS: 1,721.5%',
            'CPA: 312 UAH — reduced by 48% from original',
        ],
    },
    {
        id: 2,
        slug: 'ppc-for-an-aluminum-pergola-installation-website-in-canada',
        company: 'WEDEX',
        title: 'PPC for an aluminum pergola installation website in Canada',
        date: '16-01-2026',
        category: 'Contextual advertising',
        views: 42,
        image: '/images/cases/case_pergola_ppc.png',
        description: 'Targeted Google Ads campaigns helped a Canadian pergola installer double their qualified leads within 3 months.',
        about:
            'A premium aluminum pergola installation company operating across Ontario, Canada, needed to increase their online lead volume during the competitive spring season. Their previous ad account had a poor structure with no negative keywords, resulting in wasted spend and few conversions.',
        objectives: [
            'Generate at least 30 qualified leads per month',
            'Reduce cost per lead to under CA$120',
            'Outperform competitors during peak spring season (April–June)',
        ],
        challenges: [
            'Highly seasonal demand with competitive click costs during summer months',
            'Previous agency had set up campaigns with no audience targeting or negative keyword lists',
            'Long buyer journey — customers compare multiple providers before deciding',
        ],
        whatWeDid: [
            'Full Google Ads account audit and restructuring with granular ad groups per service type',
            'Developed a negative keyword list of 400+ irrelevant search terms',
            'Implemented geo-targeting with radius bidding around high-income neighborhoods',
            'Created dedicated landing pages for each pergola style (louvered, attached, freestanding)',
            'Set up call tracking and form submission conversion goals in Google Analytics 4',
        ],
        results: [
            '63 qualified leads in the first month after restructure',
            'Average cost per lead: CA$87 (27% below target)',
            '320% increase in Google Ads conversion rate vs. previous setup',
            'Top 3 Google ranking for "pergola installation Toronto" and "aluminum pergola Ontario"',
        ],
    },
    {
        id: 3,
        slug: 'seo-for-orthodontic-dental-clinic-website',
        company: 'WEDEX',
        title: 'SEO for an Orthodontic & Dental Clinic Website',
        date: '08-01-2026',
        category: 'SEO',
        views: 38,
        image: '/images/cases/case_dental_seo.png',
        description: 'A 6-month SEO strategy increased organic traffic by 340% and brought 3x more appointment bookings for a dental clinic.',
        about:
            'A multi-chair orthodontic and general dental clinic in Kyiv wanted to reduce their dependence on paid ads. Their website had outdated content, poor technical health, and zero backlink profile. They needed a sustainable SEO strategy that would generate consistent organic leads.',
        objectives: [
            'Rank in top-5 for high-intent dental search queries in Kyiv',
            'Reduce dependency on paid advertising spend by at least 40%',
            'Increase monthly organic appointment form submissions by 3x',
        ],
        challenges: [
            'Website had 47 critical technical errors including broken links, missing meta tags, and slow page speed (38 / 100 PageSpeed score)',
            'Local competitors had established domain authority with 5+ years of SEO history',
            'Thin and duplicate content across most service pages',
        ],
        whatWeDid: [
            'Full technical SEO audit and remediation: fixed crawl errors, implemented structured data (LocalBusiness, MedicalBusiness schema)',
            'Rewrote and expanded 18 service pages with expert-level, patient-friendly content',
            'Built a local citation strategy across 45 Ukrainian business directories',
            'Created a dental blog with 24 articles targeting informational and comparison keywords',
            'Launched a backlink outreach campaign resulting in 38 high-quality referring domains',
        ],
        results: [
            '340% increase in organic search traffic over 6 months',
            'PageSpeed score improved from 38 to 91 on mobile',
            'Page 1 ranking for 27 high-intent keywords including "orthodontist Kyiv" and "braces price Ukraine"',
            'Monthly organic appointment form submissions increased from 12 to 49',
            'Paid ad spend reduced by 55%',
        ],
    },
    {
        id: 4,
        slug: 'promoting-an-ai-design-platform-in-the-usa-using-google-ads',
        company: 'WEDEX',
        title: 'Promoting an AI Design Platform in the USA Using Google Ads',
        date: '23-08-2024',
        category: 'Contextual advertising',
        views: 125,
        image: '/images/cases/case_ai_platform.png',
        description: 'Scaled a SaaS AI design tool from 200 to 2,000 monthly signups via Google Ads with a 45% lower customer acquisition cost.',
        about:
            'A Ukrainian-built AI-powered design platform (similar to Canva with AI generation features) was expanding into the US market. Their product was strong, but they had no brand recognition in the US and were competing against well-funded giants like Adobe and Canva. They needed a cost-effective Google Ads strategy to drive qualified free trial signups.',
        objectives: [
            'Achieve 1,000+ free trial signups per month within 3 months',
            'Keep customer acquisition cost (CAC) under $25 per signup',
            'Build brand awareness among US-based designers and marketers',
        ],
        challenges: [
            'Competing in a saturated market dominated by Adobe, Canva, and Figma',
            'No brand recognition in the US market — starting from zero',
            'Complex product with a learning curve requiring strong ad messaging to convert cold traffic',
        ],
        whatWeDid: [
            'Competitive keyword analysis identifying 180+ high-intent keywords with low brand competition overlap',
            'Created 6 ad creative variations tested via Google Ads Experiments, highlighting unique AI features',
            'Structured campaigns by funnel stage: awareness (Display & YouTube), consideration (Search), and retargeting (RLSA)',
            'Built a dedicated US-market landing page with social proof, demo video, and no-credit-card-required CTA',
            'Implemented Smart Bidding with Target CPA optimization after 30-day learning phase',
        ],
        results: [
            'Monthly signups scaled from 200 to 2,000+ within 90 days',
            'CAC reduced to $18.40 (27% below target)',
            'Google Ads CTR averaged 8.3% — 3x industry benchmark for SaaS',
            'ROAS of 4.2x on paid conversion campaigns',
            'Product featured in ProductHunt Top 10 off the back of launch traffic spike',
        ],
    },
    {
        id: 5,
        slug: 'google-ads-for-facade-materials-production-company',
        company: 'WEDEX',
        title: 'Google Ads in the field of facade materials production',
        date: '21-08-2024',
        category: 'Contextual advertising',
        views: 89,
        image: '/images/cases/case_facade_ads.png',
        description: 'B2B Google Ads strategy generated 150% more qualified leads at 30% lower CPL for a facade materials manufacturer.',
        about:
            'A Ukrainian manufacturer of high-end facade cladding materials (ceramic panels, composite aluminum, and ventilated facades) wanted to expand their B2B client base — targeting architects, construction companies, and commercial property developers. Their previous advertising was purely brand-awareness focused with no measurable lead generation.',
        objectives: [
            'Generate consistent B2B leads from architects and construction firms',
            'Build a pipeline of at least 20 qualified project inquiries per month',
            'Establish Google Ads as a measurable, ROI-positive channel',
        ],
        challenges: [
            'Long and complex B2B sales cycle (3–9 months from inquiry to contract)',
            'Small, niche audience of decision-makers (architects, project managers, procurement officers)',
            'No prior conversion tracking or CRM integration — zero historical data to optimize from',
        ],
        whatWeDid: [
            'Defined ICP (Ideal Customer Profile) and built custom intent audiences in Google Ads based on competitor searches and trade publications',
            'Launched Search campaigns targeting high-intent queries like "ventilated facade systems supplier" and "commercial cladding manufacturer Ukraine"',
            'Created a B2B-specific landing page with project portfolio, material samples request form, and technical documentation downloads',
            'Set up HubSpot CRM integration with Google Ads to track lead quality through the sales funnel',
            'Ran LinkedIn-synced Display remarketing to re-engage visitors who had viewed the product catalog',
        ],
        results: [
            '150% increase in qualified project inquiries over 4 months',
            'Average cost per qualified lead: $42 (down from $68 baseline)',
            '22 new B2B contracts attributed to Google Ads leads in first 5 months',
            'Material sample requests increased by 210%',
            'Pipeline value generated: $1.8M in first 6 months',
        ],
    },
    {
        id: 6,
        slug: 'smm-strategy-for-premium-wedding-dresses-brand',
        company: 'AG.Marketing',
        title: 'Turnkey B2C & B2B Marketing for Premium Wedding Dresses Brand',
        date: '17-02-2026',
        category: 'SMM',
        views: 1234,
        image: '/images/cases/case_wedding_smm.png',
        description: 'A full-funnel social media and influencer strategy grew a wedding brand\'s Instagram from 4K to 62K followers and 3x revenue in 12 months.',
        about:
            'A premium Ukrainian wedding dress brand expanding into the European and US markets. Despite beautiful products, their social media presence was minimal and inconsistent. They needed a full-scale marketing strategy covering Instagram, Pinterest, TikTok, and influencer partnerships to build brand desire and drive both B2C (direct brides) and B2B (boutique stockists) leads.',
        objectives: [
            'Grow Instagram following from 4,200 to 50,000+ within 12 months',
            'Generate 15+ B2B wholesale inquiries per month from European boutiques',
            'Build a strong brand identity on TikTok targeting US bridal market',
        ],
        challenges: [
            'Premium price point in an oversaturated bridal social media space',
            'Trans-Atlantic audience requiring multi-timezone content scheduling and culturally adapted messaging',
            'Small in-house content team with limited photo/video production capacity',
        ],
        whatWeDid: [
            'Developed a 12-month content strategy covering Instagram (feed, Reels, Stories), Pinterest boards, and TikTok with platform-specific tone of voice',
            'Produced a monthly shoot brief and coordinated remote photoshoots with photographers in Kyiv, Warsaw, and Milan',
            'Partnered with 34 micro and macro bridal influencers across Ukraine, Poland, Germany, and the US — driving authentic editorial-style content',
            'Launched a Pinterest SEO strategy resulting in 2.8M monthly impressions within 6 months',
            'Created a B2B wholesale inquiry funnel via Instagram DM flows and a dedicated "For Boutiques" landing page',
        ],
        results: [
            'Instagram followers grew from 4,200 to 62,400 in 12 months',
            '34 influencer collaborations drove 180K+ saves and 2.4M total reach',
            '28 qualified B2B boutique inquiries per month by month 10',
            'Pinterest became the #1 traffic source with 2.8M monthly impressions',
            'Brand revenue grew 3x year-over-year, with social media attributed to 61% of new customer acquisition',
        ],
    },
];

// Helper to create a URL-safe slug from a title
export function createSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}
