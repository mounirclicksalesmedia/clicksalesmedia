'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

interface Stat {
    value: string
    label: string
}

interface StatsEditorProps {
    stats: Stat[]
    onChange: (stats: Stat[]) => void
}

export function StatsEditor({ stats, onChange }: StatsEditorProps) {
    const addStat = () => {
        onChange([...stats, { value: '', label: '' }])
    }

    const updateStat = (index: number, field: 'value' | 'label', value: string) => {
        const newStats = [...stats]
        newStats[index] = { ...newStats[index], [field]: value }
        onChange(newStats)
    }

    const removeStat = (index: number) => {
        onChange(stats.filter((_, i) => i !== index))
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-300">
                    Statistics
                </label>
                <button
                    type="button"
                    onClick={addStat}
                    className="flex items-center gap-1 px-3 py-1 text-sm rounded-lg bg-[#AD8253] text-white hover:bg-[#8a6842] transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Stat
                </button>
            </div>

            {stats.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">
                    No statistics added. Click &quot;Add Stat&quot; to create one.
                </p>
            ) : (
                <div className="space-y-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex gap-3 p-3 rounded-lg bg-[#272727] border border-white/10"
                        >
                            <div className="flex-1 space-y-2">
                                <input
                                    type="text"
                                    placeholder="Value (e.g., $2.7M, 450%)"
                                    value={stat.value}
                                    onChange={(e) => updateStat(index, 'value', e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                                />
                                <input
                                    type="text"
                                    placeholder="Label (e.g., pipeline generated)"
                                    value={stat.label}
                                    onChange={(e) => updateStat(index, 'label', e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => removeStat(index)}
                                className="self-center p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
