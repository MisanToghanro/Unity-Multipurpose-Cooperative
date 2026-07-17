"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BadgeCheck, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { Property } from "../layout/interfaces";
import { fadeUp } from "../animations/variants";

export default function PropertyCard({
  title,
  image,
  location,
  price,
  type,
  installment,
  verified,
   status,
  href,
}: Property) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        <span className="absolute left-5 top-5 rounded-full bg-[#7AC943] px-4 py-2 text-sm font-semibold text-slate-900">
          {type}
        </span>
      </div>

      {/* Content */}

      <div className="space-y-5 p-7">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">
            {title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-slate-500">
            <MapPin size={18} />
            <span>{location}</span>
          </div>
        </div>

        <div className="space-y-3">
          {verified && (
            <div className="flex items-center gap-2 text-slate-600">
              <BadgeCheck
                size={18}
                className="text-[#7AC943]"
              />

              Verified Documentation
            </div>
          )}

          {installment && (
            <div className="flex items-center gap-2 text-slate-600">
              <BadgeCheck
                size={18}
                className="text-[#7AC943]"
              />

              Flexible Installment Plans
            </div>
          )}
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-slate-100 px-5 py-4">
  <div>
    <p className="text-sm text-slate-500">
      Availability
    </p>

    <h4 className="mt-1 text-lg font-semibold text-slate-900">
      {status === "coming-soon"
        ? "Coming Soon"
        : price}
    </h4>
  </div>

  <span
    className={`rounded-full px-4 py-2 text-sm font-semibold ${
      status === "coming-soon"
        ? "bg-amber-100 text-amber-700"
        : "bg-green-100 text-green-700"
    }`}
  >
    {status === "coming-soon"
      ? "Coming Soon"
      : "Available"}
  </span>
</div>

        <Link
          href={href}
          className="group inline-flex items-center gap-2 font-semibold text-[#1D4F91]"
        >
          View Property

          <ArrowUpRight
            size={18}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}