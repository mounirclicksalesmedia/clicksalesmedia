import { Metadata } from 'next'
import { generateServiceMeta } from '@/lib/seo-config'

export const metadata: Metadata = generateServiceMeta('paid-media')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
