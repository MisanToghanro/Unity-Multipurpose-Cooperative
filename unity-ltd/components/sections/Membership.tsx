"use client";

import { motion } from "motion/react";

import SectionHeading from "../UI/SectionHeading";
import Button from "../UI/Button";

import { membershipJourney } from "@/data/membershipJourney";

import {
  fadeUp,
  staggerContainer,
} from "../animations/variants";

export default function Membership() {
  return (
    <section className=" py-24 bg-linear-to-br from-[#dff1d4] via-white to-[#d2e0f3]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="Your Journey to Property Ownership Starts Here"
          description="Becoming a member is simple. Follow four straightforward steps to begin saving, investing and building long-term wealth with Unity Multipurpose Cooperative Society."
          center
        />

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mt-20 px-5"
        >
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-slate-200 lg:block" />

          <div className="grid gap-14 lg:grid-cols-4">
            {membershipJourney.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  className="group relative text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#7AC943] shadow-lg transition-all duration-300 group-hover:scale-110">
                    <Icon
                      size={30}
                      className="text-slate-900"
                    />
                  </div>

                  {/* Number */}
                  <span className="mt-6 block text-sm font-bold tracking-[0.25em] text-[#7AC943]">
                    STEP {String(step.id).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="mb-8 text-lg text-slate-600">
            Ready to begin your journey toward property ownership?
          </p>

          <Button href="/membership">
            Become a Member
          </Button>
        </motion.div>
      </div>
    </section>
  );
}