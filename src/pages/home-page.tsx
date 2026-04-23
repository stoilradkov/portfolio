import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
} from 'lucide-react'
import { useState } from 'react'

import { FadeIn } from '@/components/shared/fade-in'
import { PageShell } from '@/components/shared/page-shell'
import { SectionShell } from '@/components/shared/section-shell'
import { Button } from '@/components/ui/button'
import {
  experienceHighlights,
  projectFilters,
  projects,
  projectCaseStudyHref,
  siteContent,
} from '@/content/portfolio-content'
import { cn } from '@/lib/utils'

export function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <PageShell homePage>
      <div id="top" />
      <SectionShell className="pb-10 pt-16 sm:pt-20 lg:pt-24">
        <FadeIn className="max-w-4xl space-y-6">
          <h1 className="max-w-4xl text-[2.95rem] font-semibold leading-[1.03] tracking-[-0.045em] text-foreground sm:text-[4.3rem] lg:text-[5.45rem]">
            {siteContent.hero.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {siteContent.hero.description}
          </p>
          <p className="text-sm text-muted-foreground">
            {siteContent.hero.meta}
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-14">
          <div className="color-wash grid gap-6 rounded-4xl p-5 sm:p-6 lg:grid-cols-[5rem_minmax(0,1fr)_auto] lg:items-start lg:p-7">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src={siteContent.avatar.src}
              alt={siteContent.avatar.alt}
            />
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">
                {siteContent.hero.proof.title}
              </p>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {siteContent.hero.proof.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-foreground lg:justify-end">
              <Button asChild size="sm">
                <a
                  href={siteContent.hero.primaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {siteContent.hero.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="sm" variant="rose">
                <a href={siteContent.hero.secondaryCta.href}>
                  {siteContent.hero.secondaryCta.label}
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div className="flex flex-wrap gap-2.5">
            {siteContent.credentials.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--brand-blue)_12%,white)] px-3.5 py-1.5 text-[0.78rem] font-medium tracking-[0.01em] text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </SectionShell>

      <SectionShell id="services" className="py-12">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <FadeIn>
            <h2 className="text-sm font-medium text-foreground">Services</h2>
          </FadeIn>
          <div className="space-y-6">
            {siteContent.services.map((service, index) => (
              <FadeIn
                key={service.title}
                delay={index * 0.04}
                className="grid gap-3 lg:grid-cols-[14rem_minmax(0,1fr)]"
              >
                <h3 className="text-base font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="work">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <FadeIn>
            <div className="space-y-3">
              <h2 className="text-sm font-medium text-foreground">Work</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Anonymized case studies based on NDA-bound work.
              </p>
            </div>
          </FadeIn>
          <div className="space-y-12">
            <div className="flex flex-wrap gap-4 pb-1">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`text-sm transition-colors ${
                    activeFilter === filter
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            {visibleProjects.map((project, index) => (
              <FadeIn
                key={project.slug}
                delay={index * 0.05}
                className="space-y-6"
              >
                <a
                  className="group block cursor-pointer space-y-6"
                  href={projectCaseStudyHref(project)}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-[2rem] font-semibold tracking-[-0.035em] text-foreground sm:text-[2.35rem]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.eyebrow} · {project.period}
                      </p>
                      <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-[1.03rem]">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-5 text-sm">
                      <span className="inline-flex items-center gap-2 text-foreground transition-colors group-hover:text-primary">
                        Read case study
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                      <span className="text-muted-foreground">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'block overflow-hidden rounded-[1.6rem]',
                      index % 2 === 0 ? 'color-wash-blue' : 'color-wash-rose',
                    )}
                  >
                    <img
                      className="aspect-video h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.012]"
                      src={project.image}
                      alt={`Placeholder project visual for ${project.title}`}
                    />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="experience" className="pt-8">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <FadeIn>
            <h2 className="text-sm font-medium text-foreground">Experience</h2>
          </FadeIn>
          <div className="space-y-9">
            {experienceHighlights.map((highlight, index) => (
              <FadeIn
                key={`${highlight.role}-${highlight.period}`}
                delay={index * 0.04}
                className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_10rem]"
              >
                <div className="space-y-2">
                  <h3 className="text-[1.45rem] font-medium tracking-[-0.03em] text-foreground">
                    {highlight.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.company} · {highlight.period}
                  </p>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                    {highlight.summary}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground lg:pt-1 lg:text-right">
                  {highlight.period}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="about" className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <FadeIn>
            <h2 className="text-sm font-medium text-foreground">
              {siteContent.about.title}
            </h2>
          </FadeIn>
          <FadeIn className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="space-y-5">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-[1.06rem]"
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-sm text-foreground">
                {siteContent.about.note}
              </p>
            </div>
            <div className="space-y-5">
              <img
                className="aspect-4/5 w-full rounded-[1.7rem] object-cover"
                src={siteContent.avatar.src}
                alt={siteContent.avatar.alt}
              />
              <div className="space-y-3 text-sm text-muted-foreground flex flex-col">
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href={siteContent.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href={siteContent.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href={siteContent.contact.resume}
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell id="contact" className="pb-20 pt-12 sm:pb-24">
        <FadeIn className="color-wash space-y-5 rounded-4xl px-5 py-7 sm:px-7 sm:py-8">
          <p className="text-sm text-muted-foreground">Working on something?</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-[3.45rem] sm:leading-[1.05]">
            {siteContent.contact.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            {siteContent.contact.description}
          </p>
          <div className="flex flex-wrap items-center gap-5 pt-2 text-base">
            <a
              className="transition-colors hover:text-primary"
              href={`mailto:${siteContent.contact.email}`}
            >
              {siteContent.contact.email}
            </a>
            <Button asChild>
              <a
                href={siteContent.contact.calendar}
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="rose">
              <a href={`mailto:${siteContent.contact.email}`}>Email Me</a>
            </Button>
          </div>
        </FadeIn>
      </SectionShell>
    </PageShell>
  )
}
