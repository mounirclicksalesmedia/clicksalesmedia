import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/admin/login')
    }

    return (
        <div className="min-h-screen bg-[#1a1a1a]">
            <AdminSidebar />
            <main className="lg:ml-64 min-h-screen">
                <div className="p-4 lg:p-8">{children}</div>
            </main>
        </div>
    )
}
