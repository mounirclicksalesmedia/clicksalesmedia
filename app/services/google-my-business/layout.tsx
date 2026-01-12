import { Metadata } from 'next'
import { generateServiceMeta } from '@/lib/seo-config'

export const metadata: Metadata = generateServiceMeta('google-my-business')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
