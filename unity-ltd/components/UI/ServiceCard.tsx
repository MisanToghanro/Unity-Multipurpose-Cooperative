import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ServiceCardProps } from "../layout/interfaces";


export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#7AC943]/40 hover:shadow-xl"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex rounded-2xl bg-[#7AC943]/10 p-4">
        <Icon
          size={32}
          className="text-[#7AC943]"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="mt-8 inline-flex items-center gap-2 font-semibold text-[#7AC943]"
      >
        Learn More

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>
    </motion.article>
  );
}