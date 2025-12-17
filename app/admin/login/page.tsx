'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError('Invalid email or password')
                setIsLoading(false)
                return
            }

            router.push('/admin')
            router.refresh()
        } catch {
            setError('An error occurred. Please try again.')
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#AD8253] flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-3xl">C</span>
                    </div>
                    <h1 className="text-2xl font-bold text-white">ClickSalesMedia</h1>
                    <p className="text-gray-400 mt-2">Admin Portal Login</p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#272727] rounded-2xl p-8 border border-white/10"
                >
                    {error && (
                        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253] transition-colors"
                                placeholder="admin@clicksalesmedia.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-300 mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253] transition-colors"
                                placeholder="••••••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 rounded-lg bg-[#AD8253] text-white font-semibold hover:bg-[#8a6842] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </div>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    © 2024 ClickSalesMedia. All rights reserved.
                </p>
            </div>
        </div>
    )
}
