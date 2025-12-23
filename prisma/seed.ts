import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting database seed...')

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@clicksalesmedia.com'
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123123'

    const existingAdmin = await prisma.user.findUnique({
        where: { email: adminEmail },
    })

    if (!existingAdmin) {
        const hashedPassword = await hash(adminPassword, 12)

        await prisma.user.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                name: 'Admin',
                role: 'admin',
            },
        })
        console.log(`✅ Admin user created: ${adminEmail}`)
    } else {
        console.log(`ℹ️ Admin user already exists: ${adminEmail}`)
    }

    // Create default industries for case studies
    const industries = [
        'Manufacturing',
        'Finance',
        'Healthcare',
        'SaaS',
        'Environmental',
        'Marketing & Creative Agencies',
        'Software Development',
        'Legal Services',
        'Technology',
        'Human Resources',
    ]

    for (const name of industries) {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

        await prisma.industry.upsert({
            where: { slug },
            update: {},
            create: { name, slug },
        })
    }
    console.log(`✅ ${industries.length} industries created/updated`)

    // Create default blog categories
    const blogCategories = [
        { name: 'Outreach', description: 'Cold email and outreach strategies' },
        { name: 'B2B Marketing', description: 'Business to business marketing insights' },
        { name: 'Lead Generation', description: 'Lead generation tactics and tips' },
        { name: 'Reviews', description: 'Product and service reviews' },
        { name: 'Sales', description: 'Sales strategies and techniques' },
    ]

    for (const category of blogCategories) {
        const slug = category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

        await prisma.blogCategory.upsert({
            where: { slug },
            update: {},
            create: { ...category, slug },
        })
    }
    console.log(`✅ ${blogCategories.length} blog categories created/updated`)

    // Create case studies
    const caseStudiesData = [
        {
            slug: 'american-accreditation-association',
            title: 'Enhancing Global Visibility with Organic SEO & AI Search Optimization',
            client: 'American Accreditation Association',
            description: 'How we leveraged organic traffic strategies and AI-driven search engine optimization to dramatically improve performance and digital presence.',
            challenge: 'The American Accreditation Association struggled with low online visibility in a competitive global market. Traditional SEO methods were yielding stagnant results, and the brand was invisible to modern AI-driven search experiences, limiting their ability to attract new institutions for accreditation.',
            solution: 'We implemented a dual-pronged strategy focusing on technical SEO and AI Search Engine Optimization (GEO). We restructured their site architecture for better crawlability, created high-authority content clusters around accreditation standards, and optimized schema markup to ensure visibility in AI-generated answers (like ChatGPT and Google SGE).',
            results: 'The intervention resulted in a 350% surge in organic traffic within 6 months. The association now dominates the top 3 search results for their core keywords and appears frequently in AI-generated recommendations, significantly enhancing their brand authority and applicant pool.',
            industries: ['Technology'],
            stats: [
                { value: '350%', label: 'Increase in Organic Traffic' },
                { value: 'Top 3', label: 'Ranking for Key Industry Terms' },
            ],
        },
        {
            slug: 'wall-street-english',
            title: 'Achieving Over 2M SAR ROI with Performance Marketing & HubSpot Automation',
            client: 'Wall Street English',
            description: 'A comprehensive performance marketing strategy utilizing targeted ads and HubSpot integration to drive massive ROI in 2025.',
            challenge: 'Wall Street English faced high lead acquisition costs and a leaky sales funnel. While they had traffic, the conversion rate was low, and manual follow-ups were inefficient, leading to missed opportunities and suboptimal return on ad spend.',
            solution: 'We deployed a full-funnel performance marketing strategy. By integrating HubSpot CRM, we automated lead nurturing sequences and lead scoring. Simultaneously, we launched hyper-targeted ad campaigns on Meta and Google Ads, synchronized with HubSpot data to optimize for high-value conversions rather than just clicks.',
            results: 'This integrated approach generated over 2 million SAR in ROI within a single year (2025). The automated workflows reduced lead response time to under 5 minutes, significantly boosting conversion rates while lowering the cost per acquisition by 45%.',
            industries: ['Marketing & Creative Agencies'],
            stats: [
                { value: '> 2M SAR', label: 'ROI Achieved in 2025' },
                { value: '45%', label: 'Reduction in Cost Per Lead' },
            ],
        },
        {
            slug: 'tohatsu-saudi-arabia',
            title: 'Revitalizing B2B Strategy for Marine Engineering in Saudi Arabia',
            client: 'Tohatsu',
            description: 'Strategic B2B positioning and digital transformation to expand market share in the Saudi Arabian marine sector.',
            challenge: 'Tohatsu, a leader in marine outboards, had a limited B2B footprint in the rapidly growing Saudi Arabian market. Their digital presence did not reflect their engineering excellence, and they were missing out on key government and commercial tenders.',
            solution: 'We crafted a tailored B2B digital strategy focusing on LinkedIn outreach and account-based marketing (ABM). We revamped their local digital assets to highlight technical specifications and reliability—key factors for Saudi decision-makers. We also implemented a targeted content strategy addressing the specific needs of the Kingdom\'s marine infrastructure projects.',
            results: 'Tohatsu saw a 3x increase in qualified B2B inquiries from major commercial partners in Saudi Arabia. The brand successfully penetrated new regional markets, expanding its reach by 60% and solidifying its position as a preferred supplier for marine engineering solutions.',
            industries: ['Manufacturing'],
            stats: [
                { value: '3x', label: 'Growth in B2B Inquiries' },
                { value: '60%', label: 'Market Reach Expansion' },
            ],
        },
        {
            slug: 'governvalu',
            title: 'Digital Transformation & Performance Enhancement across Qatar and Turkey',
            client: 'GovernValu Consultation',
            description: 'Scaling a consultation firm\'s digital footprint and lead generation capabilities in cross-border markets.',
            challenge: 'GovernValu needed to establish a strong digital presence in two distinct markets: Qatar and Turkey. Cultural and linguistic differences, combined with a lack of a unified digital strategy, resulted in fragmented brand messaging and poor lead generation.',
            solution: 'We developed a localized performance strategy for each region. Customized landing pages were created for Qatar (focusing on corporate governance) and Turkey (focusing on valuation services). We utilized geo-targeted PPC campaigns and retargeting workflows to nurture prospects effectively across borders.',
            results: 'The unified yet localized approach led to a 200% increase in valid leads across both regions. Brand engagement metrics soared by 40%, and GovernValu successfully established itself as a thought leader in both the Qatari and Turkish consultation markets.',
            industries: ['Finance'],
            stats: [
                { value: '200%', label: 'Increase in Valid Leads' },
                { value: '40%', label: 'Uplift in Cross-Border Engagement' },
            ],
        },
        {
            slug: 'new-rayan-dental-kuwait',
            title: 'Automating Patient Acquisition & Lead Management in Kuwait',
            client: 'New Rayan Dental Clinic',
            description: 'Implementing a system automation machine to streamline lead generation and appointment bookings.',
            challenge: 'New Rayan Dental Clinic in Kuwait was overwhelmed with manual inquiries but suffered from a high \'no-show\' rate and slow response times. Potential patients were being lost to competitors due to administrative bottlenecks.',
            solution: 'We built a \'System Automation Machine\' marketing funnel. This included an automated booking system integrated with WhatsApp and email reminders. We set up lead capture forms that instantly synced with the clinic\'s reception dashboard, triggering immediate automated follow-up sequences.',
            results: 'The automation system revolutionized their intake process, achieving an 85% appointment booking rate from leads. The clinic now operates a 24/7 lead processing machine, ensuring no patient inquiry is left unanswered, significantly increasing their active patient base.',
            industries: ['Healthcare'],
            stats: [
                { value: '85%', label: 'Appointment Booking Rate' },
                { value: '24/7', label: 'Automated Lead Processing' },
            ],
        },
        {
            slug: 'mydoctor',
            title: 'Maximizing ROAS & Revenue with WhatsApp Agents & Google Ads',
            client: 'Mydoctor',
            description: 'Driven clinic revenue growth through high-converting Google Ads and instant WhatsApp conversational marketing.',
            challenge: 'Mydoctor was investing heavily in ads with diminishing returns. The gap between ad click and appointment booking was too wide, and patients often dropped off due to friction in the booking process.',
            solution: 'We shifted the strategy to focus on \'Conversational Conversions\'. We optimized Google Ads to drive traffic directly to a WhatsApp Business API driven agent. This AI-assisted agent answered common questions, qualified patients, and booked appointments instantly in the chat.',
            results: 'This friction-free approach skyrocketed the clinic\'s ROAS to 4.5x. The instant engagement provided by the WhatsApp agent enhanced patient trust and convenience, leading to a direct 55% increase in weekly revenue from executed appointments.',
            industries: ['Healthcare'],
            stats: [
                { value: '4.5x', label: 'Return on Ad Spend (ROAS)' },
                { value: '55%', label: 'Increase in Weekly Revenue' },
            ],
        },
    ]

    for (const cs of caseStudiesData) {
        const existingCs = await prisma.caseStudy.findUnique({ where: { slug: cs.slug } })
        if (!existingCs) {
            const industryRecords = await prisma.industry.findMany({
                where: { name: { in: cs.industries } },
            })

            await prisma.caseStudy.create({
                data: {
                    title: cs.title,
                    slug: cs.slug,
                    client: cs.client,
                    description: cs.description,
                    challenge: cs.challenge,
                    solution: cs.solution,
                    results: cs.results,
                    published: true,
                    industries: {
                        connect: industryRecords.map((i) => ({ id: i.id })),
                    },
                    stats: {
                        create: cs.stats.map((stat, index) => ({
                            value: stat.value,
                            label: stat.label,
                            order: index,
                        })),
                    },
                },
            })
            console.log(`✅ Case study created: ${cs.slug}`)
        } else {
            console.log(`ℹ️ Case study already exists: ${cs.slug}`)
        }
    }

    console.log('🎉 Database seed completed!')
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
