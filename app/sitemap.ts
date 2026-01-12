import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

const BASE_URL = 'https://clicksalesmedia.com'

// Static pages with their priorities
const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/growth-engineering', priority: 0.9, changeFrequency: 'weekly' as const },
]

// Services pages
const services = [
    'google-ads',
    'linkedin-ads',
    'paid-media',
    'ai-automation',
    'alpha-lead-gen',
    'seo-geo',
    'web-development',
    'creative-studio',
    'crm-architecture',
    'ads-management',
    'multi-channel-acquisition',
    'landing-page-cro',
    'retargeting-staging',
    'revenue-analytics',
    'google-my-business',
    'strategy-consulting',
]

// Industries pages
const industries = [
    'saas',
    'real-estate',
    'healthcare',
    'fintech',
    'financial-services',
    'education',
    'construction',
    'consulting',
    'law-firms',
    'agencies',
    'recruitment',
    'logistics',
    'hotels-restaurants',
    'media-production',
    'luxury-marine',
    'accreditation',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = new Date()

    // Static pages
    const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
        url: `${BASE_URL}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }))

    // Services pages
    const serviceUrls: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${BASE_URL}/services/${service}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Industries index page
    const industriesIndex: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/industries`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ]

    // Industries pages
    const industryUrls: MetadataRoute.Sitemap = industries.map((industry) => ({
        url: `${BASE_URL}/industries/${industry}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Blog index
    const blogIndex: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
    ]

    // Dynamic blog articles from database
    let blogUrls: MetadataRoute.Sitemap = []
    try {
        const articles = await prisma.blogArticle.findMany({
            where: { published: true },
            select: { slug: true, updatedAt: true },
            orderBy: { publishedAt: 'desc' },
        })

        blogUrls = articles.map((article) => ({
            url: `${BASE_URL}/blog/${article.slug}`,
            lastModified: article.updatedAt,
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }))
    } catch (error) {
        console.error('Error fetching blog articles for sitemap:', error)
    }

    // Case studies index
    const caseStudiesIndex: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}/case-studies`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ]

    // Dynamic case studies from database
    let caseStudyUrls: MetadataRoute.Sitemap = []
    try {
        const caseStudies = await prisma.caseStudy.findMany({
            where: { published: true },
            select: { slug: true, updatedAt: true },
            orderBy: { createdAt: 'desc' },
        })

        caseStudyUrls = caseStudies.map((study) => ({
            url: `${BASE_URL}/case-studies/${study.slug}`,
            lastModified: study.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    } catch (error) {
        console.error('Error fetching case studies for sitemap:', error)
    }

    return [
        ...staticUrls,
        ...serviceUrls,
        ...industriesIndex,
        ...industryUrls,
        ...blogIndex,
        ...blogUrls,
        ...caseStudiesIndex,
        ...caseStudyUrls,
    ]
}
