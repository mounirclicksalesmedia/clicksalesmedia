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
