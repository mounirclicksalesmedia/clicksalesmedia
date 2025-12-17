'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, Loader2, X, Check } from 'lucide-react'

interface Category {
    id: string
    name: string
    slug: string
    description: string | null
    _count: {
        articles: number
    }
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [deletingId, setDeletingId] = useState<string | null>(null)
    const [formData, setFormData] = useState({ name: '', description: '' })
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/admin/categories')
            const data = await response.json()
            setCategories(data)
        } catch (error) {
            console.error('Failed to fetch categories:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const openModal = (category?: Category) => {
        if (category) {
            setEditingId(category.id)
            setFormData({ name: category.name, description: category.description || '' })
        } else {
            setEditingId(null)
            setFormData({ name: '', description: '' })
        }
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setEditingId(null)
        setFormData({ name: '', description: '' })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)

        try {
            const url = editingId
                ? `/api/admin/categories/${editingId}`
                : '/api/admin/categories'
            const method = editingId ? 'PUT' : 'POST'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                fetchCategories()
                closeModal()
            }
        } catch (error) {
            console.error('Failed to save category:', error)
        } finally {
            setIsSaving(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category?')) return

        setDeletingId(id)
        try {
            const response = await fetch(`/api/admin/categories/${id}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                setCategories(categories.filter((c) => c.id !== id))
            } else {
                const data = await response.json()
                alert(data.error || 'Failed to delete category')
            }
        } catch (error) {
            console.error('Failed to delete category:', error)
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
                    <h1 className="text-2xl font-bold text-white">Blog Categories</h1>
                    <p className="text-gray-400 mt-1">Manage your blog categories</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    New Category
                </button>
            </div>

            {/* Categories Grid */}
            {categories.length === 0 ? (
                <div className="text-center py-12 bg-[#272727] rounded-xl border border-white/10">
                    <p className="text-gray-400 mb-4">No categories yet</p>
                    <button
                        onClick={() => openModal()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Create your first category
                    </button>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-[#272727] rounded-xl p-6 border border-white/10 hover:border-[#AD8253]/50 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="font-semibold text-white text-lg">
                                    {category.name}
                                </h3>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => openModal(category)}
                                        className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category.id)}
                                        disabled={deletingId === category.id || category._count.articles > 0}
                                        className="p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        title={category._count.articles > 0 ? 'Cannot delete category with articles' : 'Delete'}
                                    >
                                        {deletingId === category.id ? (
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        ) : (
                                            <Trash2 className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            {category.description && (
                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                    {category.description}
                                </p>
                            )}
                            <p className="text-xs text-gray-500">
                                {category._count.articles} article{category._count.articles !== 1 ? 's' : ''}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={closeModal}
                    />
                    <div className="relative bg-[#272727] rounded-xl w-full max-w-md border border-white/10">
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-semibold text-white">
                                {editingId ? 'Edit Category' : 'New Category'}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                                    placeholder="Category name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({ ...formData, description: e.target.value })
                                    }
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                                    placeholder="Optional description"
                                />
                            </div>
                            <div className="flex items-center justify-end gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] disabled:opacity-50 transition-colors flex items-center gap-2"
                                >
                                    {isSaving ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <Check className="w-4 h-4" />
                                    )}
                                    {editingId ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
