import "@/styles/index.css";

import { projects } from "@/content/portfolio-content";
import { renderPage } from "@/lib/render-page";
import { ProjectPage } from "@/pages/project-page";

renderPage(<ProjectPage project={projects[2]} />);

