"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

import SectionHeading from "../UI/SectionHeading";
import Button from "../UI/Button";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "../animations/variants";

const reasons = [
  {
    title: "Registered Cooperative",
    description:
      "Operating with transparency, accountability and member-first values.",
  },
  {
    title: "Verified Property Documentation",
    description:
      "Every property opportunity is backed by proper verification and documentation.",
  },
  {
    title: "Flexible Savings & Payment Plans",
    description:
      "Choose payment options that fit your financial goals and budget.",
  },
  {
    title: "Affordable Cooperative Loans",
    description:
      "Access member-friendly financing for housing, businesses and personal needs.",
  },
  {
    title: "Investment Opportunities",
    description:
      "Grow your wealth through carefully selected cooperative investment projects.",
  },
  {
    title: "Dedicated Member Support",
    description:
      "Our team is committed to guiding members every step of their investment journey.",
  },
];
export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Cooperative You Can Trust"
          description="We are committed to helping individuals, families and businesses build lasting wealth through transparency, affordability and secure investment opportunities."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid items-center gap-16 lg:grid-cols-2"
        >

          {/* Left */}

          <motion.div variants={fadeRight}>
            <div className="rounded-xl bg-linear-to-br from-[#7AC943]/15 via-white to-[#1D4F91]/10 p-6 shadow-xl">

              <Image
                src="/images/unityLogo.png"
                alt="Unity Cooperative"
                width={450}
                height={450}
                className="mx-auto"
              />

            </div>
          </motion.div>

          {/* Right */}

          <motion.div variants={fadeLeft}>

            <h3 className="text-4xl font-bold text-slate-900">
              Building Wealth Through
              <span className="block text-[#1D4F91]">
                Trust & Transparency
              </span>
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              Unity Multipurpose Cooperative Society exists to provide
              members with genuine opportunities for financial growth,
              property ownership and cooperative investment through
              integrity, accountability and member-focused services.
            </p>

            <div className="mt-10 space-y-5">

             {reasons.map((reason) => (
  <motion.div
    key={reason.title}
    variants={fadeUp}
    className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-[#7AC943]/40 hover:bg-white hover:shadow-lg"
  >
    <div className="mt-1 rounded-full bg-[#7AC943]/10 p-2">
      <CheckCircle
        size={20}
        className="text-[#7AC943]"
      />
    </div>

    <div>
      <h4 className="text-lg font-semibold text-slate-900">
        {reason.title}
      </h4>

      <p className="mt-2 leading-7 text-slate-600">
        {reason.description}
      </p>
    </div>
  </motion.div>
))}

            </div>

            <div className="mt-12">
              <Button href="/membership">
                Become a Member
              </Button>
            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}