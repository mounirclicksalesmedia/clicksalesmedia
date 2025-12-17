'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Upload, X, Loader2 } from 'lucide-react'

interface ImageUploaderProps {
    value?: string | null
    onChange: (url: string | null) => void
    folder?: string
}

export function ImageUploader({ value, onChange, folder = 'admin' }: ImageUploaderProps) {
    const [isUploading, setIsUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setIsUploading(true)
        setError(null)

        try {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('folder', folder)

            const response = await fetch('/api/admin/upload', {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'Upload failed')
            }

            const data = await response.json()
            onChange(data.url)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Upload failed')
        } finally {
            setIsUploading(false)
        }
    }

    const handleRemove = () => {
        onChange(null)
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    return (
        <div className="space-y-2">
            {value ? (
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#272727] border border-white/10">
                    <Image
                        src={value}
                        alt="Uploaded image"
                        fill
                        className="object-cover"
                    />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <label
                    className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${isUploading
                            ? 'border-[#AD8253] bg-[#AD8253]/10'
                            : 'border-white/20 hover:border-[#AD8253] bg-[#272727]'
                        }`}
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {isUploading ? (
                            <Loader2 className="w-10 h-10 text-[#AD8253] animate-spin mb-3" />
                        ) : (
                            <Upload className="w-10 h-10 text-gray-400 mb-3" />
                        )}
                        <p className="mb-2 text-sm text-gray-400">
                            {isUploading ? 'Uploading...' : 'Click to upload'}
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF or WebP</p>
                    </div>
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png,image/gif,image/webp"
                        onChange={handleUpload}
                        disabled={isUploading}
                    />
                </label>
            )}
            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    )
}
