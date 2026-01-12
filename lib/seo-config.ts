import { Metadata } from 'next'

const BASE_URL = 'https://clicksalesmedia.com'
const COMPANY_NAME = 'ClickSalesMedia'
const TARGET_LOCATIONS = 'Dubai, Abu Dhabi, Riyadh, Jeddah, New York, Sydney, Toronto'

// Service page SEO configurations
export const serviceSeoConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
    'google-ads': {
        title: 'Google Ads Management Agency',
        description: `Expert Google Ads management and PPC campaigns that drive qualified leads and maximize ROI. Serving businesses in ${TARGET_LOCATIONS}. Get data-driven campaign strategies today.`,
        keywords: ['Google Ads agency', 'PPC management', 'Google Ads management', 'paid search', 'SEM agency', 'Google Ads Dubai', 'Google Ads Saudi Arabia'],
    },
    'linkedin-ads': {
        title: 'LinkedIn Ads Agency for B2B Growth',
        description: `Specialized LinkedIn advertising for B2B companies. Target decision-makers and generate high-quality leads in ${TARGET_LOCATIONS}. Expert campaign management and optimization.`,
        keywords: ['LinkedIn Ads agency', 'B2B advertising', 'LinkedIn marketing', 'B2B lead generation', 'LinkedIn Ads Dubai', 'LinkedIn Ads Saudi Arabia'],
    },
    'paid-media': {
        title: 'Paid Media Agency | Multi-Platform Advertising',
        description: `Strategic paid media management across Google, Meta, LinkedIn, and more. Maximize your ad spend with data-driven campaigns. Serving ${TARGET_LOCATIONS}.`,
        keywords: ['paid media agency', 'digital advertising', 'media buying', 'PPC agency', 'paid advertising Dubai', 'paid media Saudi Arabia'],
    },
    'ai-automation': {
        title: 'AI Marketing Automation & Chatbots',
        description: `Transform your marketing with AI-powered automation, chatbots, and intelligent lead nurturing. Cutting-edge AI solutions for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['AI automation', 'marketing automation', 'AI chatbots', 'AI marketing agency', 'automation Dubai', 'AI marketing Saudi Arabia'],
    },
    'alpha-lead-gen': {
        title: 'B2B Lead Generation System',
        description: `High-performance B2B lead generation systems that deliver qualified prospects on autopilot. Multi-channel acquisition for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['B2B lead generation', 'lead gen agency', 'sales leads', 'qualified leads', 'lead generation Dubai', 'lead generation Saudi Arabia'],
    },
    'seo-geo': {
        title: 'Local SEO & Geo-Targeting Services',
        description: `Dominate local search results with advanced SEO and geo-targeting strategies. Programmatic SEO for businesses targeting ${TARGET_LOCATIONS}.`,
        keywords: ['local SEO', 'geo-targeting', 'programmatic SEO', 'local search optimization', 'SEO Dubai', 'SEO Saudi Arabia'],
    },
    'web-development': {
        title: 'High-Performance Web Development',
        description: `Custom web development focused on speed, conversion, and SEO. Build websites that drive results for your business in ${TARGET_LOCATIONS}.`,
        keywords: ['web development agency', 'custom websites', 'high-performance websites', 'web design Dubai', 'web development Saudi Arabia'],
    },
    'creative-studio': {
        title: 'Creative Studio | Design & Branding',
        description: `Premium creative services including branding, design, video production, and visual content. Creative excellence for brands in ${TARGET_LOCATIONS}.`,
        keywords: ['creative agency', 'branding agency', 'design studio', 'video production', 'creative services Dubai', 'branding Saudi Arabia'],
    },
    'crm-architecture': {
        title: 'CRM Architecture & Implementation',
        description: `Expert CRM setup, integration, and optimization. Build powerful customer relationship systems for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['CRM implementation', 'CRM architecture', 'HubSpot agency', 'Salesforce integration', 'CRM Dubai', 'CRM Saudi Arabia'],
    },
    'ads-management': {
        title: 'Full-Service Ads Management',
        description: `Comprehensive advertising management across all major platforms. Strategic campaign optimization for maximum ROI in ${TARGET_LOCATIONS}.`,
        keywords: ['ads management', 'advertising agency', 'campaign management', 'ad optimization', 'ads agency Dubai', 'advertising Saudi Arabia'],
    },
    'multi-channel-acquisition': {
        title: 'Multi-Channel Customer Acquisition',
        description: `Integrated multi-channel marketing strategies that acquire customers across every touchpoint. Full-funnel approach for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['multi-channel marketing', 'customer acquisition', 'omnichannel marketing', 'integrated marketing', 'acquisition Dubai', 'marketing Saudi Arabia'],
    },
    'landing-page-cro': {
        title: 'Landing Page Design & CRO',
        description: `High-converting landing pages and conversion rate optimization. Turn more visitors into customers for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['landing page design', 'CRO agency', 'conversion optimization', 'landing page optimization', 'CRO Dubai', 'landing pages Saudi Arabia'],
    },
    'retargeting-staging': {
        title: 'Retargeting & Remarketing Campaigns',
        description: `Strategic retargeting campaigns that bring back lost visitors and close more deals. Remarketing expertise for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['retargeting agency', 'remarketing campaigns', 'display retargeting', 'audience retargeting', 'retargeting Dubai', 'remarketing Saudi Arabia'],
    },
    'revenue-analytics': {
        title: 'Revenue Analytics & Attribution',
        description: `Advanced analytics and attribution modeling to track every dollar of marketing spend. Data-driven insights for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['marketing analytics', 'revenue attribution', 'marketing ROI', 'analytics agency', 'analytics Dubai', 'attribution Saudi Arabia'],
    },
    'google-my-business': {
        title: 'Google My Business Optimization',
        description: `Maximize your local visibility with expert Google My Business management and optimization. Local SEO for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['Google My Business', 'GMB optimization', 'local SEO', 'Google Business Profile', 'GMB Dubai', 'local SEO Saudi Arabia'],
    },
    'strategy-consulting': {
        title: 'Marketing Strategy Consulting',
        description: `Expert marketing strategy consulting to accelerate your growth. Strategic guidance for businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['marketing strategy', 'growth consulting', 'digital strategy', 'marketing consultant', 'strategy Dubai', 'consulting Saudi Arabia'],
    },
}

// Industry page SEO configurations
export const industrySeoConfig: Record<string, { title: string; description: string; keywords: string[] }> = {
    'saas': {
        title: 'SaaS Marketing Agency | B2B SaaS Growth',
        description: `Specialized marketing for SaaS companies. Drive user acquisition, reduce churn, and accelerate MRR growth. SaaS marketing experts serving ${TARGET_LOCATIONS}.`,
        keywords: ['SaaS marketing', 'B2B SaaS agency', 'SaaS growth', 'software marketing', 'SaaS marketing Dubai', 'SaaS marketing Saudi Arabia'],
    },
    'real-estate': {
        title: 'Real Estate Marketing Agency',
        description: `Digital marketing for real estate developers, agents, and property companies. Generate qualified property leads in ${TARGET_LOCATIONS}.`,
        keywords: ['real estate marketing', 'property marketing', 'real estate leads', 'property advertising', 'real estate Dubai', 'property marketing Saudi Arabia'],
    },
    'healthcare': {
        title: 'Healthcare Marketing Agency',
        description: `HIPAA-compliant healthcare marketing for hospitals, clinics, and medical practices. Patient acquisition in ${TARGET_LOCATIONS}.`,
        keywords: ['healthcare marketing', 'medical marketing', 'hospital marketing', 'patient acquisition', 'healthcare Dubai', 'medical marketing Saudi Arabia'],
    },
    'fintech': {
        title: 'Fintech Marketing Agency',
        description: `Growth marketing for fintech startups and financial technology companies. Scale your fintech in ${TARGET_LOCATIONS}.`,
        keywords: ['fintech marketing', 'financial technology marketing', 'fintech growth', 'fintech agency', 'fintech Dubai', 'fintech Saudi Arabia'],
    },
    'financial-services': {
        title: 'Financial Services Marketing',
        description: `Compliant marketing for banks, investment firms, and financial advisors. Grow your financial services business in ${TARGET_LOCATIONS}.`,
        keywords: ['financial services marketing', 'banking marketing', 'investment marketing', 'finance marketing', 'financial Dubai', 'banking Saudi Arabia'],
    },
    'education': {
        title: 'Education Marketing Agency',
        description: `Student recruitment and enrollment marketing for universities, schools, and EdTech. Education marketing in ${TARGET_LOCATIONS}.`,
        keywords: ['education marketing', 'student recruitment', 'university marketing', 'EdTech marketing', 'education Dubai', 'education Saudi Arabia'],
    },
    'construction': {
        title: 'Construction & Building Industry Marketing',
        description: `Lead generation and marketing for construction companies, contractors, and builders. Construction marketing in ${TARGET_LOCATIONS}.`,
        keywords: ['construction marketing', 'contractor marketing', 'builder marketing', 'construction leads', 'construction Dubai', 'building Saudi Arabia'],
    },
    'consulting': {
        title: 'Consulting Firm Marketing',
        description: `B2B marketing for management consulting firms and business consultants. Grow your consulting practice in ${TARGET_LOCATIONS}.`,
        keywords: ['consulting marketing', 'B2B consulting', 'management consulting marketing', 'consultant marketing', 'consulting Dubai', 'consulting Saudi Arabia'],
    },
    'law-firms': {
        title: 'Law Firm Marketing Agency',
        description: `Ethical marketing for law firms and legal practices. Client acquisition for attorneys in ${TARGET_LOCATIONS}.`,
        keywords: ['law firm marketing', 'legal marketing', 'attorney marketing', 'lawyer advertising', 'law firm Dubai', 'legal marketing Saudi Arabia'],
    },
    'agencies': {
        title: 'Marketing for Agencies',
        description: `White-label and growth marketing for marketing agencies, creative agencies, and digital firms in ${TARGET_LOCATIONS}.`,
        keywords: ['agency marketing', 'white-label marketing', 'agency growth', 'digital agency marketing', 'agency Dubai', 'agency Saudi Arabia'],
    },
    'recruitment': {
        title: 'Recruitment & Staffing Marketing',
        description: `Lead generation for recruitment agencies and staffing firms. Attract clients and candidates in ${TARGET_LOCATIONS}.`,
        keywords: ['recruitment marketing', 'staffing marketing', 'HR marketing', 'talent acquisition marketing', 'recruitment Dubai', 'staffing Saudi Arabia'],
    },
    'logistics': {
        title: 'Logistics & Supply Chain Marketing',
        description: `B2B marketing for logistics companies, freight forwarders, and supply chain businesses in ${TARGET_LOCATIONS}.`,
        keywords: ['logistics marketing', 'supply chain marketing', 'freight marketing', 'transportation marketing', 'logistics Dubai', 'logistics Saudi Arabia'],
    },
    'hotels-restaurants': {
        title: 'Hospitality Marketing Agency',
        description: `Digital marketing for hotels, restaurants, and hospitality businesses. Drive bookings and reservations in ${TARGET_LOCATIONS}.`,
        keywords: ['hospitality marketing', 'hotel marketing', 'restaurant marketing', 'hotel advertising', 'hospitality Dubai', 'hotel Saudi Arabia'],
    },
    'media-production': {
        title: 'Media & Production Company Marketing',
        description: `Marketing for media production, film, and entertainment companies. Grow your media business in ${TARGET_LOCATIONS}.`,
        keywords: ['media marketing', 'production company marketing', 'entertainment marketing', 'film marketing', 'media Dubai', 'production Saudi Arabia'],
    },
    'luxury-marine': {
        title: 'Luxury & Marine Industry Marketing',
        description: `Premium marketing for luxury brands, yacht companies, and marine businesses. High-end marketing in ${TARGET_LOCATIONS}.`,
        keywords: ['luxury marketing', 'marine marketing', 'yacht marketing', 'luxury brand agency', 'luxury Dubai', 'marine Saudi Arabia'],
    },
    'accreditation': {
        title: 'Accreditation & Certification Marketing',
        description: `Marketing for accreditation bodies, certification organizations, and standards institutes in ${TARGET_LOCATIONS}.`,
        keywords: ['accreditation marketing', 'certification marketing', 'standards marketing', 'accreditation Dubai', 'certification Saudi Arabia'],
    },
}

// Helper function to generate page metadata
export function generateServiceMeta(serviceSlug: string): Metadata {
    const config = serviceSeoConfig[serviceSlug]
    if (!config) {
        return {}
    }

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        openGraph: {
            title: `${config.title} | ${COMPANY_NAME}`,
            description: config.description,
            url: `${BASE_URL}/services/${serviceSlug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${config.title} | ${COMPANY_NAME}`,
            description: config.description,
        },
        alternates: {
            canonical: `${BASE_URL}/services/${serviceSlug}`,
        },
    }
}

export function generateIndustryMeta(industrySlug: string): Metadata {
    const config = industrySeoConfig[industrySlug]
    if (!config) {
        return {}
    }

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        openGraph: {
            title: `${config.title} | ${COMPANY_NAME}`,
            description: config.description,
            url: `${BASE_URL}/industries/${industrySlug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${config.title} | ${COMPANY_NAME}`,
            description: config.description,
        },
        alternates: {
            canonical: `${BASE_URL}/industries/${industrySlug}`,
        },
    }
}
