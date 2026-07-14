
import { motion } from "motion/react";
import { fadeUp } from "../animations/variants";
import { CardProps } from "../layout/interfaces";


export default function Card({
  icon,
  title,
  description,
}: CardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="mb-6 inline-flex rounded-2xl bg-[#7AC943]/10 p-4 text-[#7AC943]">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}