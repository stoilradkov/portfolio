import type { PropsWithChildren } from 'react'

import { SiteFooter } from '@/components/shared/site-footer'
import { SiteHeader } from '@/components/shared/site-header'

type PageShellProps = PropsWithChildren<{
  homePage?: boolean
}>

export function PageShell({ children, homePage = false }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader homePage={homePage} />
      <main className="lg:pl-70">{children}</main>
      <SiteFooter />
    </div>
  )
}
