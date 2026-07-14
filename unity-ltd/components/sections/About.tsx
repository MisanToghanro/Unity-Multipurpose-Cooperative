import Image from "next/image";
import { motion } from "motion/react";
import {
  Building2,
  Users,
  Landmark,
} from "lucide-react";

import SectionHeading from "../UI/SectionHeading";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { fadeRight } from "../animations/variants";


export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Content */}

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>
            <SectionHeading
              center={false}
              eyebrow="About Unity Cooperative"
              title="Building Wealth Through Unity"
              description="Unity Multipurpose Cooperative Society Limited is a registered member-owned cooperative committed to helping individuals, families and businesses achieve financial security through disciplined savings, affordable financing, property ownership, strategic investments and sustainable wealth creation."
            />

            <div className="mt-10">
              <Button href="/about">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right */}

          <motion.div
          variants={fadeRight}
              initial="hidden"
    whileInView="visible"
    viewport={{
        once: true,
        amount: 0.3,
    }}
           className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/unityLogo.png"
              alt="Unity Cooperative"
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </motion.div>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Card
            icon={<Building2 size={30} />}
            title="Registered Cooperative"
            description="Operating with transparency, accountability and trusted cooperative principles for the benefit of every member."
          />

          <Card
            icon={<Users size={30} />}
            title="Member-Owned"
            description="Every member contributes to the cooperative's success while enjoying shared opportunities and long-term financial benefits."
          />

          <Card
            icon={<Landmark size={30} />}
            title="Building Wealth"
            description="Helping members grow through savings, investments, financing, property ownership and sustainable wealth creation."
          />

        </div>

      </div>
    </section>
  );
}