import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body font-semibold tracking-wide uppercase text-sm transition-all duration-150 cursor-pointer border-0 outline-none";

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5",
    lg: "px-9 py-4.5 text-base",
  };

  const variants = {
    primary:
      "bg-brand text-dirt hover:bg-[#c46b08] active:translate-y-[1px]",
    secondary:
      "bg-transparent text-chalk border border-chalk/30 hover:border-chalk/70 hover:text-chalk active:translate-y-[1px]",
    ghost:
      "bg-transparent text-brand hover:text-[#c46b08] underline-offset-4 hover:underline p-0 uppercase tracking-wider text-xs",
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}>
      {children}
    </button>
  );
}
