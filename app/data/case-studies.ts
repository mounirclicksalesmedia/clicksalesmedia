export interface CaseStudy {
    id: string; // The slug
    title: string;
    client: string;
    categories: string[];
    description: string; // Short summary for the card
    image: string;
    stats: { value: string; label: string }[];
    content: {
        challenge: string;
        solution: string;
        results: string;
    };
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: "american-accreditation-association",
        client: "American Accreditation Association",
        categories: ["Education", "Accreditation"],
        title: "Enhancing Global Visibility with Organic SEO & AI Search Optimization",
        description: "How we leveraged organic traffic strategies and AI-driven search engine optimization to dramatically improve performance and digital presence.",
        image: "/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg", // Placeholder or generic
        stats: [
            { value: "350%", label: "Increase in Organic Traffic" },
            { value: "Top 3", label: "Ranking for Key Industry Terms" },
        ],
        content: {
            challenge: "The American Accreditation Association struggled with low online visibility in a competitive global market. Traditional SEO methods were yielding stagnant results, and the brand was invisible to modern AI-driven search experiences, limiting their ability to attract new institutions for accreditation.",
            solution: "We implemented a dual-pronged strategy focusing on technical SEO and AI Search Engine Optimization (GEO). We restructured their site architecture for better crawlability, created high-authority content clusters around accreditation standards, and optimized schema markup to ensure visibility in AI-generated answers (like ChatGPT and Google SGE).",
            results: "The intervention resulted in a 350% surge in organic traffic within 6 months. The association now dominates the top 3 search results for their core keywords and appears frequently in AI-generated recommendations, significantly enhancing their brand authority and applicant pool.",
        },
    },
    {
        id: "wall-street-english",
        client: "Wall Street English",
        categories: ["Education", "Marketing"],
        title: "Achieving Over 2M Rial ROI with Performance Marketing & HubSpot Automation",
        description: "A comprehensive performance marketing strategy utilizing targeted ads and HubSpot integration to drive massive ROI in 2025.",
        image: "/jason-goodman-Oalh2MojUuk-unsplash.jpg",
        stats: [
            { value: "> 2M SAR", label: "ROI Achieved in 2025" },
            { value: "45%", label: "Reduction in Cost Per Lead" },
        ],
        content: {
            challenge: "Wall Street English faced high lead acquisition costs and a leaky sales funnel. While they had traffic, the conversion rate was low, and manual follow-ups were inefficient, leading to missed opportunities and suboptimal return on ad spend.",
            solution: "We deployed a full-funnel performance marketing strategy. By integrating HubSpot CRM, we automated lead nurturing sequences and lead scoring. Simultaneously, we launched hyper-targeted ad campaigns on Meta and Google Ads, synchronized with HubSpot data to optimize for high-value conversions rather than just clicks.",
            results: "This integrated approach generated over 2 million SAR in ROI within a single year (2025). The automated workflows reduced lead response time to under 5 minutes, significantly boosting conversion rates while lowering the cost per acquisition by 45%.",
        },
    },
    {
        id: "tohatsu-saudi-arabia",
        client: "Tohatsu",
        categories: ["Marine", "Industrial", "B2B"],
        title: "Revitalizing B2B Strategy for Marine Engineering in Saudi Arabia",
        description: "Strategic B2B positioning and digital transformation to expand market share in the Saudi Arabian marine sector.",
        image: "/markus-spiske-Skf7HxARcoc-unsplash.jpg",
        stats: [
            { value: "3x", label: "Growth in B2B Inquiries" },
            { value: "60%", label: "Market Reach Expansion" },
        ],
        content: {
            challenge: "Tohatsu, a leader in marine outboards, had a limited B2B footprint in the rapidly growing Saudi Arabian market. Their digital presence did not reflect their engineering excellence, and they were missing out on key government and commercial tenders.",
            solution: "We crafted a tailored B2B digital strategy focusing on LinkedIn outreach and account-based marketing (ABM). We revamped their local digital assets to highlight technical specifications and reliability—key factors for Saudi decision-makers. We also implemented a targeted content strategy addressing the specific needs of the Kingdom's marine infrastructure projects.",
            results: "Tohatsu saw a 3x increase in qualified B2B inquiries from major commercial partners in Saudi Arabia. The brand successfully penetrated new regional markets, expanding its reach by 60% and solidifying its position as a preferred supplier for marine engineering solutions.",
        },
    },
    {
        id: "governvalu",
        client: "GovernValu Consultation",
        categories: ["Consulting", "Business Services"],
        title: "Digital Transformation & Performance Enhancement across Qatar and Turkey",
        description: "Scaling a consultation firm's digital footprint and lead generation capabilities in cross-border markets.",
        image: "/campaign-creators-gMsnXqILjp4-unsplash.jpg",
        stats: [
            { value: "200%", label: "Increase in Valid Leads" },
            { value: "40%", label: "Uplift in Cross-Border Engagement" },
        ],
        content: {
            challenge: "GovernValu needed to establish a strong digital presence in two distinct markets: Qatar and Turkey. Cultural and linguistic differences, combined with a lack of a unified digital strategy, resulted in fragmented brand messaging and poor lead generation.",
            solution: "We developed a localized performance strategy for each region. customized landing pages were created for Qatar (focusing on corporate governance) and Turkey (focusing on valuation services). We utilized geo-targeted PPC campaigns and retargeting workflows to nurture prospects effectively across borders.",
            results: "The unified yet localized approach led to a 200% increase in valid leads across both regions. Brand engagement metrics soared by 40%, and GovernValu successfully established itself as a thought leader in both the Qatari and Turkish consultation markets.",
        },
    },
    {
        id: "new-rayan-dental-kuwait",
        client: "New Rayan Dental Clinic",
        categories: ["Healthcare", "Automation"],
        title: "Automating Patient Acquisition & Lead Management in Kuwait",
        description: "Implementing a system automation machine to streamline lead generation and appointment bookings.",
        image: "/austin-distel-7uoMmzPd2JA-unsplash.jpg",
        stats: [
            { value: "85%", label: "Appointment Booking Rate" },
            { value: "24/7", label: "Automated Lead Processing" },
        ],
        content: {
            challenge: "New Rayan Dental Clinic in Kuwait was overwhelmed with manual inquiries but suffered from a high 'no-show' rate and slow response times. Potential patients were being lost to competitors due to administrative bottlenecks.",
            solution: "We built a 'System Automation Machine' marketing funnel. This included an automated booking system integrated with WhatsApp and email reminders. We set up lead capture forms that instantly synced with the clinic's reception dashboard, triggering immediate automated follow-up sequences.",
            results: "The automation system revolutionized their intake process, achieving an 85% appointment booking rate from leads. The clinic now operates a 24/7 lead processing machine, ensuring no patient inquiry is left unanswered, significantly increasing their active patient base.",
        },
    },
    {
        id: "mydoctor",
        client: "Mydoctor",
        categories: ["Healthcare", "Marketing"],
        title: "Maximizing ROAS & Revenue with WhatsApp Agents & Google Ads",
        description: "Driven clinic revenue growth through high-converting Google Ads and instant WhatsApp conversational marketing.",
        image: "/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg",
        stats: [
            { value: "4.5x", label: "Return on Ad Spend (ROAS)" },
            { value: "55%", label: "Increase in Weekly Revenue" },
        ],
        content: {
            challenge: "Mydoctor was investing heavily in ads with diminishing returns. The gap between ad click and appointment booking was too wide, and patients often dropped off due to friction in the booking process.",
            solution: "We shifted the strategy to focus on 'Conversational Conversions'. We optimized Google Ads to drive traffic directly to a WhatsApp Business API driven agent. This AI-assisted agent answered common questions, qualified patients, and booked appointments instantly in the chat.",
            results: "This friction-free approach skyrocketed the clinic's ROAS to 4.5x. The instant engagement provided by the WhatsApp agent enhanced patient trust and convenience, leading to a direct 55% increase in weekly revenue from executed appointments.",
        },
    },
];;
