import { Github, Linkedin, Mail } from "lucide-react";

import { siteContent } from "@/content/portfolio-content";

export function SiteFooter() {
  return (
    <footer className="lg:pl-[17.5rem]">
      <div className="mx-auto flex w-full max-w-[61rem] flex-col gap-5 px-5 py-10 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-muted-foreground">© {siteContent.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${siteContent.contact.email}`}>
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-foreground"
            href={siteContent.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-foreground"
            href={siteContent.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="hover:text-foreground"
            href={siteContent.contact.calendar}
            target="_blank"
            rel="noreferrer"
          >
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
}
