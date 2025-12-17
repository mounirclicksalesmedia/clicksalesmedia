'use client'

import { useEffect, useState } from 'react'
import { Mail, Phone, Building2, Calendar, Trash2, Loader2, Eye, EyeOff, X } from 'lucide-react'

interface ContactSubmission {
    id: string
    name: string
    email: string
    company: string | null
    phone: string | null
    service: string | null
    message: string
    read: boolean
    createdAt: string
}

export default function ContactsPage() {
    const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    useEffect(() => {
        fetchSubmissions()
    }, [])

    const fetchSubmissions = async () => {
        try {
            const response = await fetch('/api/admin/contacts')
            const data = await response.json()
            setSubmissions(data)
        } catch (error) {
            console.error('Failed to fetch submissions:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleMarkAsRead = async (id: string, read: boolean) => {
        try {
            await fetch(`/api/admin/contacts/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ read }),
            })
            setSubmissions(submissions.map(s =>
                s.id === id ? { ...s, read } : s
            ))
            if (selectedSubmission?.id === id) {
                setSelectedSubmission({ ...selectedSubmission, read })
            }
        } catch (error) {
            console.error('Failed to update submission:', error)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this submission?')) return

        setDeletingId(id)
        try {
            const response = await fetch(`/api/admin/contacts/${id}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                setSubmissions(submissions.filter(s => s.id !== id))
                if (selectedSubmission?.id === id) {
                    setSelectedSubmission(null)
                }
            }
        } catch (error) {
            console.error('Failed to delete submission:', error)
        } finally {
            setDeletingId(null)
        }
    }

    const openSubmission = (submission: ContactSubmission) => {
        setSelectedSubmission(submission)
        if (!submission.read) {
            handleMarkAsRead(submission.id, true)
        }
    }

    const unreadCount = submissions.filter(s => !s.read).length

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
            </div>
        )
    }

    return (
        <div className="space-y-6 pt-12 lg:pt-0">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Contact Submissions</h1>
                    <p className="text-gray-400 mt-1">
                        {submissions.length} total, {unreadCount} unread
                    </p>
                </div>
            </div>

            {/* Submissions List */}
            {submissions.length === 0 ? (
                <div className="text-center py-12 bg-[#272727] rounded-xl border border-white/10">
                    <Mail className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">No contact submissions yet</p>
                </div>
            ) : (
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* List */}
                    <div className="space-y-3">
                        {submissions.map((submission) => (
                            <div
                                key={submission.id}
                                onClick={() => openSubmission(submission)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedSubmission?.id === submission.id
                                        ? 'bg-[#AD8253]/10 border-[#AD8253]/50'
                                        : submission.read
                                            ? 'bg-[#272727] border-white/10 hover:border-white/20'
                                            : 'bg-[#272727] border-[#AD8253]/30 hover:border-[#AD8253]/50'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {!submission.read && (
                                            <div className="w-2 h-2 rounded-full bg-[#AD8253]" />
                                        )}
                                        <h3 className={`font-medium ${submission.read ? 'text-gray-300' : 'text-white'}`}>
                                            {submission.name}
                                        </h3>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        {new Date(submission.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-400 mb-2">{submission.email}</p>
                                {submission.service && (
                                    <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-[#1a1a1a] text-gray-400">
                                        {submission.service}
                                    </span>
                                )}
                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                    {submission.message}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Detail View */}
                    <div className="lg:sticky lg:top-6">
                        {selectedSubmission ? (
                            <div className="bg-[#272727] rounded-xl border border-white/10 overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b border-white/10">
                                    <h2 className="text-xl font-semibold text-white">
                                        {selectedSubmission.name}
                                    </h2>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleMarkAsRead(selectedSubmission.id, !selectedSubmission.read)}
                                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                            title={selectedSubmission.read ? 'Mark as unread' : 'Mark as read'}
                                        >
                                            {selectedSubmission.read ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                        <button
                                            onClick={() => handleDelete(selectedSubmission.id)}
                                            disabled={deletingId === selectedSubmission.id}
                                            className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                        >
                                            {deletingId === selectedSubmission.id ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-5 h-5" />
                                            )}
                                        </button>
                                        <button
                                            onClick={() => setSelectedSubmission(null)}
                                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors lg:hidden"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Contact Info */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a]">
                                            <Mail className="w-5 h-5 text-[#AD8253]" />
                                            <div>
                                                <p className="text-xs text-gray-500">Email</p>
                                                <a href={`mailto:${selectedSubmission.email}`} className="text-white hover:text-[#AD8253]">
                                                    {selectedSubmission.email}
                                                </a>
                                            </div>
                                        </div>
                                        {selectedSubmission.phone && (
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a]">
                                                <Phone className="w-5 h-5 text-[#AD8253]" />
                                                <div>
                                                    <p className="text-xs text-gray-500">Phone</p>
                                                    <a href={`tel:${selectedSubmission.phone}`} className="text-white hover:text-[#AD8253]">
                                                        {selectedSubmission.phone}
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                        {selectedSubmission.company && (
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a]">
                                                <Building2 className="w-5 h-5 text-[#AD8253]" />
                                                <div>
                                                    <p className="text-xs text-gray-500">Company</p>
                                                    <p className="text-white">{selectedSubmission.company}</p>
                                                </div>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a]">
                                            <Calendar className="w-5 h-5 text-[#AD8253]" />
                                            <div>
                                                <p className="text-xs text-gray-500">Received</p>
                                                <p className="text-white">
                                                    {new Date(selectedSubmission.createdAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service */}
                                    {selectedSubmission.service && (
                                        <div>
                                            <p className="text-sm text-gray-500 mb-2">Service Interested In</p>
                                            <span className="inline-block px-3 py-1.5 rounded-full bg-[#AD8253]/20 text-[#AD8253] text-sm">
                                                {selectedSubmission.service}
                                            </span>
                                        </div>
                                    )}

                                    {/* Message */}
                                    <div>
                                        <p className="text-sm text-gray-500 mb-2">Message</p>
                                        <div className="p-4 rounded-lg bg-[#1a1a1a] text-gray-300 whitespace-pre-wrap">
                                            {selectedSubmission.message}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 pt-4">
                                        <a
                                            href={`mailto:${selectedSubmission.email}`}
                                            className="flex-1 px-4 py-3 rounded-lg bg-[#AD8253] text-white font-medium text-center hover:bg-[#8a6842] transition-colors"
                                        >
                                            Reply via Email
                                        </a>
                                        {selectedSubmission.phone && (
                                            <a
                                                href={`tel:${selectedSubmission.phone}`}
                                                className="px-4 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                                            >
                                                Call
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-[#272727] rounded-xl border border-white/10 p-12 text-center">
                                <Mail className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                                <p className="text-gray-400">Select a submission to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
