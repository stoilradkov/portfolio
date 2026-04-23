import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = PropsWithChildren<{
  id?: string;
  className?: string;
  innerClassName?: string;
}>;

export function SectionShell({ id, className, innerClassName, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-[4.5rem] lg:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-[61rem] px-5 sm:px-6 lg:px-8", innerClassName)}>{children}</div>
    </section>
  );
}
