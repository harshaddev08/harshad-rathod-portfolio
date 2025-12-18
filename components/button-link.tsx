import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

  const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
    primary:
      "bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-400 dark:text-zinc-950 dark:hover:bg-indigo-300",
    secondary:
      "border border-indigo-500/30 bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500 hover:text-white dark:border-indigo-400/40 dark:bg-indigo-400/10 dark:text-indigo-200 dark:hover:bg-indigo-400 dark:hover:text-zinc-950",
  };

  return (
    <Link
      href={href}
      className={`${baseClass} ${variants[variant]}`}
      {...props}
    >
      {children}
    </Link>
  );
}
