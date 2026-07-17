import { motion } from "motion/react";
import SectionHeading from "../UI/SectionHeading";
import ServiceCard from "../UI/ServiceCard";
import { services } from "@/data/services";
import {
  fadeUp,
  staggerContainer,
} from "../animations/variants";

export default function Services() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Our Services"
            title="Helping Members Build Wealth Through Cooperative Solutions"
            description="Unity Multipurpose Cooperative Society provides trusted financial and property solutions that empower individuals, families and businesses to save, invest and own valuable assets with confidence."
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-15"
        >
          {services.map((service) => (
  <motion.div
    key={service.id}
    variants={fadeUp}
  >
    <ServiceCard
      icon={service.icon}
      title={service.title}
      description={service.description}
      href={service.href}
    />
  </motion.div>
))}
        </motion.div>

      </div>
    </section>
  );
}