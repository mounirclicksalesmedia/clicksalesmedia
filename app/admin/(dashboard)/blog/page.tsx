'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2 } from 'lucide-react'

interface Category {
    id: string
    name: string
    slug: string
}

interface Article {
    id: string
    title: string
    slug: string
    excerpt: string | null
    image: string | null
    published: boolean
    createdAt: string
    category: Category
}

export default function BlogArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            const response = await fetch('/api/admin/articles')
            const data = await response.json()
            setArticles(data)
        } catch (error) {
            console.error('Failed to fetch articles:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this article?')) return

        setDeletingId(id)
        try {
            const response = await fetch(`/api/admin/articles/${id}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                setArticles(articles.filter((a) => a.id !== id))
            }
        } catch (error) {
            console.error('Failed to delete article:', error)
        } finally {
            setDeletingId(null)
        }
    }

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
                    <h1 className="text-2xl font-bold text-white">Blog Articles</h1>
                    <p className="text-gray-400 mt-1">Manage your blog content</p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    New Article
                </Link>
            </div>

            {/* Articles Table */}
            {articles.length === 0 ? (
                <div className="text-center py-12 bg-[#272727] rounded-xl border border-white/10">
                    <p className="text-gray-400 mb-4">No articles yet</p>
                    <Link
                        href="/admin/blog/new"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Create your first article
                    </Link>
                </div>
            ) : (
                <div className="bg-[#272727] rounded-xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                                        Article
                                    </th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                                        Category
                                    </th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                                        Status
                                    </th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">
                                        Date
                                    </th>
                                    <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {articles.map((article) => (
                                    <tr key={article.id} className="hover:bg-white/5">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                {article.image ? (
                                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#1a1a1a] flex-shrink-0">
                                                        <Image
                                                            src={article.image}
                                                            alt={article.title}
                                                            width={48}
                                                            height={48}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                                                        <span className="text-gray-500 text-xs">No img</span>
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="font-medium text-white line-clamp-1">
                                                        {article.title}
                                                    </p>
                                                    {article.excerpt && (
                                                        <p className="text-sm text-gray-400 line-clamp-1">
                                                            {article.excerpt}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 text-xs rounded-full bg-[#1a1a1a] text-gray-300">
                                                {article.category.name}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {article.published ? (
                                                <span className="flex items-center gap-1 text-green-400 text-sm">
                                                    <Eye className="w-4 h-4" />
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-1 text-yellow-400 text-sm">
                                                    <EyeOff className="w-4 h-4" />
                                                    Draft
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">
                                            {new Date(article.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/blog/${article.id}/edit`}
                                                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                                >
                                                    <Edit className="w-5 h-5" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(article.id)}
                                                    disabled={deletingId === article.id}
                                                    className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                                                >
                                                    {deletingId === article.id ? (
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        <Trash2 className="w-5 h-5" />
                                                    )}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
