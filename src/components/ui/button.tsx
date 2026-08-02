import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClassName =
    variant === "primary"
      ? "rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
      : "rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200";

  return (
    <button className={[baseClassName, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </button>
  );
}
