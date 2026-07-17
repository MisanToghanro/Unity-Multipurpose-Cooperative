"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import SectionHeading from "../UI/SectionHeading";
import PropertyCard from "../UI/PropertyCard";

import { featuredProperties } from "@/data/featuredProperties";
import { staggerContainer, fadeUp } from "../animations/variants";

export default function Properties() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

  <SectionHeading
  eyebrow="Upcoming Opportunities"
  title="Properties Coming Soon"
  description="Unity Multipurpose Cooperative Society is preparing a range of verified residential, commercial and investment opportunities. Register your interest today and be among the first to receive updates when listings become available."
  center
/>

        {/* Property Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </motion.div>

        {/* Browse Button */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/properties"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:border-[#7AC943] hover:bg-[#7AC943] hover:text-slate-900"
          >
            Browse All Properties

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}