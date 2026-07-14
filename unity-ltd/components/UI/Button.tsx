import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonProps } from "../layout/interfaces";

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 ${
        variant === "primary"
          ? "bg-[#7AC943] text-slate-900 hover:bg-[#6DB73B]"
          : "border border-slate-300 bg-white text-slate-900 hover:border-[#7AC943]"
      }`}
    >
      {children}

      <ArrowUpRight size={18} />
    </Link>
  );
}