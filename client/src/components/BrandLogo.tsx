import { cn } from "@/lib/utils";

type BrandLogoProps = {
  condensed?: boolean;
  showDescriptor?: boolean;
  className?: string;
};

export function BrandLogo({
  condensed = false,
  showDescriptor = true,
  className,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#3B82F6] to-[#1F3557] shadow-[0_20px_40px_-20px_rgba(37,99,235,0.28)]">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-white/90">
          AI
        </span>
      </span>

      <div className="leading-tight">
        <span className="block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text font-serif text-2xl font-semibold tracking-tight text-transparent">
          Afern AI
        </span>
        {!condensed && showDescriptor && (
          <span className="text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
            Conversational Studio
          </span>
        )}
      </div>
    </div>
  );
}

