import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

import { navigation, siteContent } from '@/content/portfolio-content'
import { homeAnchor } from '@/lib/paths'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  homePage?: boolean
}

export function SiteHeader({ homePage = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const resolveHref = (sectionId: string) =>
    homePage ? `#${sectionId}` : homeAnchor(sectionId)

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:left-0 lg:w-70 lg:bg-transparent lg:backdrop-blur-0">
      <div className="mx-auto flex w-full max-w-244 items-center justify-between px-5 py-5 sm:px-6 lg:h-full lg:max-w-none lg:flex-col lg:items-start lg:px-8 lg:py-8">
        <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-9">
          <a
            aria-label={`${siteContent.name} home`}
            href={homePage ? '#top' : homeAnchor()}
          >
            <img
              className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
              src={siteContent.avatar.src}
              alt={siteContent.avatar.alt}
            />
          </a>

          <nav className="hidden items-center gap-5 md:flex lg:flex-col lg:items-start lg:gap-3">
            {navigation.map((item) => (
              <a
                key={item.sectionId}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground lg:text-[0.95rem]"
                href={resolveHref(item.sectionId)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-5 text-sm md:flex lg:flex-col lg:items-start lg:gap-3">
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href={`mailto:${siteContent.contact.email}`}
          >
            Email
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href={siteContent.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href={siteContent.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            href={siteContent.contact.resume}
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div
        className={cn(
          'bg-background/98 transition-[max-height,opacity] duration-300 md:hidden',
          menuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 overflow-hidden opacity-0',
        )}
      >
        <div className="mx-auto flex w-full max-w-244 flex-col gap-2 px-5 py-4 sm:px-6 lg:px-8">
          {navigation.map((item) => (
            <a
              key={item.sectionId}
              className="rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-accent"
              href={resolveHref(item.sectionId)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 grid gap-2 pt-3 text-sm">
            <a
              className="rounded-2xl px-4 py-3 text-foreground hover:bg-accent"
              href={siteContent.contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-2xl px-4 py-3 text-foreground hover:bg-accent"
              href={`mailto:${siteContent.contact.email}`}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
