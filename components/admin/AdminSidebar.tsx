'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
    LayoutDashboard,
    FileText,
    FolderOpen,
    Tag,
    Building2,
    Mail,
    LogOut,
    Menu,
    X,
    Users,
    Calendar,
    Clock,
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Leads', href: '/admin/leads', icon: Users },
    { name: 'Meetings', href: '/admin/meetings', icon: Calendar },
    { name: 'Availability', href: '/admin/availability', icon: Clock },
    { name: 'Contacts', href: '/admin/contacts', icon: Mail },
    { name: 'Blog Articles', href: '/admin/blog', icon: FileText },
    { name: 'Blog Categories', href: '/admin/blog/categories', icon: Tag },
    { name: 'Case Studies', href: '/admin/case-studies', icon: FolderOpen },
    { name: 'Industries', href: '/admin/industries', icon: Building2 },
]

export function AdminSidebar() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const isActive = (href: string) => {
        if (href === '/admin') {
            return pathname === '/admin'
        }
        return pathname.startsWith(href)
    }

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#272727] text-white"
            >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 h-screen w-64 bg-[#1a1a1a] border-r border-white/10 transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-white/10">
                        <Link href="/admin" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#AD8253] flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <div>
                                <h1 className="text-white font-bold">ClickSalesMedia</h1>
                                <p className="text-xs text-gray-500">Admin Portal</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon
                            const active = isActive(item.href)
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${active
                                        ? 'bg-[#AD8253] text-white'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t border-white/10">
                        <button
                            onClick={() => signOut({ callbackUrl: '/admin/login' })}
                            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </div>
                </div>
            </aside>
        </>
    )
}
