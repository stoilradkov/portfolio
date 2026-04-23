import { ArrowLeft, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { PageShell } from "@/components/shared/page-shell";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";
import type { Project } from "@/content/portfolio-content";
import { siteContent } from "@/content/portfolio-content";
import { homeAnchor } from "@/lib/paths";

type ProjectPageProps = {
  project: Project;
};

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <PageShell>
      <SectionShell className="pb-10 pt-16 sm:pt-20">
        <div className="space-y-8">
          <FadeIn className="space-y-6">
            <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href={homeAnchor("work")}>
              <ArrowLeft className="h-4 w-4" />
              Back to selected work
            </a>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">{project.eyebrow}</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[4.65rem]">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm">
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                href={siteContent.contact.calendar}
                target="_blank"
                rel="noreferrer"
              >
                Discuss a similar project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="text-muted-foreground transition-colors hover:text-brand-rose" href={`mailto:${siteContent.contact.email}`}>
                Email
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="color-wash-blue overflow-hidden rounded-[1.8rem]">
              <img
                className="aspect-[16/9] h-full w-full object-cover"
                src={project.image}
                alt={`Placeholder visual for ${project.title}`}
              />
            </div>
          </FadeIn>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Role", value: project.role },
            { label: "Timeline", value: project.period },
            { label: "Categories", value: project.categories.join(" / ") },
            { label: "Stack", value: `${project.stack.slice(0, 4).join(", ")} + more` }
          ].map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium leading-6 text-foreground">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <FadeIn>
            <p className="text-sm font-medium text-foreground">Overview</p>
          </FadeIn>
          <div className="space-y-8">
            {[
              { label: "Context", value: project.challenge },
              { label: "What I built", value: project.solution },
              { label: "Outcome", value: project.impact }
            ].map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.05}>
                <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)]">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">{item.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { label: "Overview", items: project.overview },
            { label: "Responsibilities", items: project.responsibilities },
            { label: "Outcomes", items: project.outcomes }
          ].map((group, index) => (
            <FadeIn key={group.label} delay={index * 0.05}>
              <div className="space-y-5">
                <p className="text-sm font-medium text-foreground">{group.label}</p>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pb-12">
        <FadeIn className="color-wash space-y-5 rounded-[2rem] px-5 py-7 sm:px-7 sm:py-8">
          <p className="text-sm text-muted-foreground">Let's talk</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-[3.45rem] sm:leading-[1.05]">
            Have a workflow problem worth solving?
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            I work best with teams building useful software for real operations. If that sounds like your project, feel free to reach out.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-base">
            <a className="transition-colors hover:text-primary" href={`mailto:${siteContent.contact.email}`}>
              {siteContent.contact.email}
            </a>
            <Button asChild>
              <a href={siteContent.contact.calendar} target="_blank" rel="noreferrer">
                Book a Call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="rose">
              <a href={siteContent.contact.resume}>
                Download CV
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteContent.contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteContent.contact.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${siteContent.contact.email}`}>
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </FadeIn>
      </SectionShell>
    </PageShell>
  );
}
