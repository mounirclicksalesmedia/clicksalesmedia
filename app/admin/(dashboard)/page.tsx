import Link from 'next/link'
import { FileText, FolderOpen, Tag, Building2, Mail, Plus, Users, Calendar, Clock } from 'lucide-react'
import prisma from '@/lib/prisma'

async function getStats() {
    const [articles, categories, caseStudies, industries] = await Promise.all([
        prisma.blogArticle.count(),
        prisma.blogCategory.count(),
        prisma.caseStudy.count(),
        prisma.industry.count(),
    ])

    // Contact submissions - with error handling in case table doesn't exist yet
    let contacts = 0
    let unreadContacts = 0
    try {
        contacts = await prisma.contactSubmission.count()
        unreadContacts = await prisma.contactSubmission.count({ where: { read: false } })
    } catch {
        // Table might not exist yet
    }

    // Leads stats
    let leads = 0
    let qualifiedLeads = 0
    let newLeads = 0
    try {
        leads = await prisma.lead.count()
        qualifiedLeads = await prisma.lead.count({ where: { isQualified: true } })
        newLeads = await prisma.lead.count({ where: { status: 'NEW' } })
    } catch {
        // Table might not exist yet
    }

    // Meetings stats
    let upcomingMeetings = 0
    try {
        upcomingMeetings = await prisma.meeting.count({
            where: {
                startTime: { gte: new Date() },
                status: { in: ['SCHEDULED', 'RESCHEDULED'] },
            },
        })
    } catch {
        // Table might not exist yet
    }

    return { articles, categories, caseStudies, industries, contacts, unreadContacts, leads, qualifiedLeads, newLeads, upcomingMeetings }
}

export default async function AdminDashboard() {
    const stats = await getStats()

    const cards = [
        {
            title: 'Leads',
            count: stats.leads,
            badge: stats.newLeads > 0 ? `${stats.newLeads} new` : undefined,
            subtitle: `${stats.qualifiedLeads} qualified`,
            icon: Users,
            href: '/admin/leads',
            color: 'bg-[#AD8253]',
        },
        {
            title: 'Upcoming Meetings',
            count: stats.upcomingMeetings,
            icon: Calendar,
            href: '/admin/meetings',
            color: 'bg-purple-500',
        },
        {
            title: 'Contacts',
            count: stats.contacts,
            badge: stats.unreadContacts > 0 ? `${stats.unreadContacts} new` : undefined,
            icon: Mail,
            href: '/admin/contacts',
            color: 'bg-red-500',
        },
        {
            title: 'Blog Articles',
            count: stats.articles,
            icon: FileText,
            href: '/admin/blog',
            color: 'bg-blue-500',
        },
        {
            title: 'Case Studies',
            count: stats.caseStudies,
            icon: FolderOpen,
            href: '/admin/case-studies',
            color: 'bg-green-500',
        },
        {
            title: 'Industries',
            count: stats.industries,
            icon: Building2,
            href: '/admin/industries',
            color: 'bg-teal-500',
        },
    ]

    const quickActions = [
        {
            title: 'View Leads',
            href: '/admin/leads',
            icon: Users,
        },
        {
            title: 'Upcoming Meetings',
            href: '/admin/meetings',
            icon: Calendar,
        },
        {
            title: 'Set Availability',
            href: '/admin/availability',
            icon: Clock,
        },
    ]

    return (
        <div className="space-y-8 pt-12 lg:pt-0">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-400 mt-2">
                    Welcome to the ClickSalesMedia Admin Portal
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => {
                    const Icon = card.icon
                    return (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="bg-[#272727] rounded-xl p-6 border border-white/10 hover:border-[#AD8253] transition-colors group relative"
                        >
                            {'badge' in card && card.badge && (
                                <span className="absolute top-4 right-4 px-2 py-0.5 text-xs rounded-full bg-red-500 text-white">
                                    {card.badge}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <div
                                    className={`w-12 h-12 rounded-lg ${card.color} flex items-center justify-center`}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-3xl font-bold text-white">
                                    {card.count}
                                </span>
                            </div>
                            <h3 className="text-gray-400 font-medium group-hover:text-white transition-colors">
                                {card.title}
                            </h3>
                        </Link>
                    )
                })}
            </div>

            {/* Quick Actions */}
            <div>
                <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
                <div className="flex flex-wrap gap-4">
                    {quickActions.map((action) => {
                        const Icon = action.icon
                        return (
                            <Link
                                key={action.title}
                                href={action.href}
                                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                            >
                                <Plus className="w-5 h-5" />
                                <Icon className="w-5 h-5" />
                                {action.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
