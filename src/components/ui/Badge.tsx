import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
};

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-tech text-[11px] tracking-[0.15em] uppercase px-2.5 py-1",
        variant === "default" && "text-brand border-b border-brand/50 bg-brand/5",
        variant === "outline" && "text-mist border border-mist/30",
        className
      )}
    >
      {children}
    </span>
  );
}
