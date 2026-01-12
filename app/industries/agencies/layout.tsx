import { Metadata } from 'next'
import { generateIndustryMeta } from '@/lib/seo-config'

export const metadata: Metadata = generateIndustryMeta('agencies')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
