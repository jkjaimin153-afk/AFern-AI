import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-4xl flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/60">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground md:leading-snug">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}

