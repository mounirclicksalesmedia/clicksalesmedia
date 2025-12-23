'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { RichTextEditor } from '@/components/admin/RichTextEditor'

interface Category {
    id: string
    name: string
}

export default function EditArticlePage() {
    const router = useRouter()
    const params = useParams()
    const articleId = params.id as string

    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(true)
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        image: null as string | null,
        categoryId: '',
        readTime: '',
        published: false,
    })

    useEffect(() => {
        fetchCategories()
        fetchArticle()
    }, [articleId])

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/admin/categories')
            const data = await response.json()
            setCategories(data)
        } catch (error) {
            console.error('Failed to fetch categories:', error)
        }
    }

    const fetchArticle = async () => {
        try {
            const response = await fetch(`/api/admin/articles/${articleId}`)
            const data = await response.json()
            setFormData({
                title: data.title,
                content: data.content,
                excerpt: data.excerpt || '',
                image: data.image,
                categoryId: data.categoryId,
                readTime: data.readTime || '',
                published: data.published,
            })
        } catch (error) {
            console.error('Failed to fetch article:', error)
        } finally {
            setIsFetching(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch(`/api/admin/articles/${articleId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                router.push('/admin/blog')
            }
        } catch (error) {
            console.error('Failed to update article:', error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isFetching) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 pt-12 lg:pt-0">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/blog"
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">Edit Article</h1>
                    <p className="text-gray-400 mt-1">Update your blog article</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#272727] rounded-xl p-6 border border-white/10 space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Enter article title"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category *
                        </label>
                        <select
                            required
                            value={formData.categoryId}
                            onChange={(e) =>
                                setFormData({ ...formData, categoryId: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white focus:outline-none focus:border-[#AD8253]"
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Excerpt */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Excerpt
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) =>
                                setFormData({ ...formData, excerpt: e.target.value })
                            }
                            rows={2}
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Brief summary of the article"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Content *
                        </label>
                        <RichTextEditor
                            value={formData.content}
                            onChange={(value) =>
                                setFormData({ ...formData, content: value })
                            }
                            placeholder="Write your article content here..."
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Featured Image
                        </label>
                        <ImageUploader
                            value={formData.image}
                            onChange={(url) => setFormData({ ...formData, image: url })}
                            folder="blog"
                        />
                    </div>

                    {/* Read Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Read Time
                        </label>
                        <input
                            type="text"
                            value={formData.readTime}
                            onChange={(e) =>
                                setFormData({ ...formData, readTime: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="e.g., 10 min"
                        />
                    </div>

                    {/* Published */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="published"
                            checked={formData.published}
                            onChange={(e) =>
                                setFormData({ ...formData, published: e.target.checked })
                            }
                            className="w-5 h-5 rounded bg-[#1a1a1a] border-white/10 text-[#AD8253] focus:ring-[#AD8253]"
                        />
                        <label htmlFor="published" className="text-gray-300">
                            Published
                        </label>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4">
                    <Link
                        href="/admin/blog"
                        className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-3 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] disabled:opacity-50 transition-colors flex items-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
