import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeLeft, fadeUp, staggerContainer } from "../animations/variants";


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* CTA */}

      <section className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

          <motion.h2 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-4xl text-5xl font-bold uppercase leading-tight text-white md:text-7xl">
            Ready to Build
            <br />
             Financial Future?
          </motion.h2>

          <motion.p 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Join a trusted member-owned cooperative committed to helping
individuals, families and businesses grow through disciplined
savings, affordable financing, strategic investments and
property ownership.
          </motion.p>

          <motion.button
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true ,  amount: 0.5}}
          >
           <Link
            href="/membership"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#7AC943] px-8 py-4 font-semibold text-slate-950 transition hover:scale-105"
          >
            Become a Member

            <ArrowUpRight
              size={20}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          </motion.button>


        </div>
      </section>

      {/* Footer Content */}

      <motion.section 
          variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}

      className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        <motion.div  variants={fadeUp}>
                     <Image
                        src="/images/unitylogo.png"
                        alt="Unity Cooperative"
                        width={65}
                        height={65}
                      />

          <h3 className="mb-5 text-2xl font-bold text-white">
            Unity Cooperative
          </h3>

          <p className="leading-8 text-slate-400">
              Empowering members through disciplined savings,
  affordable financing, property ownership and
  sustainable investment opportunities that create
  lasting wealth.
          </p>

        </motion.div>

        <motion.div 
        variants={fadeUp}
        className="grid grid-cols-2 gap-10">

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/properties">Properties</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          <div>

            <h4 className="mb-5 font-semibold text-white">
              Services
            </h4>

             <ul className="space-y-3">

  <li>
    <Link href="/services">
      Savings Plans
    </Link>
  </li>

  <li>
    <Link href="/services">
      Property Acquisition
    </Link>
  </li>

  <li>
    <Link href="/services">
      Cooperative Loans
    </Link>
  </li>

  <li>
    <Link href="/services">
      Housing Development
    </Link>
  </li>

  <li>
    <Link href="/services">
      Investment Opportunities
    </Link>
  </li>

  <li>
    <Link href="/services">
      Property Documentation
    </Link>
  </li>

</ul>

          </div>

        </motion.div>

        <motion.div
        variants={fadeUp} 
        >

          <h4 className="mb-5 font-semibold text-white">
            Contact
          </h4>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>4 Refinery Road Iye Plaza Warri Delta State</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <Link
  href="tel:+2347089286918"
  className="transition-colors hover:text-[#7AC943]"
>
  +234 708 928 6918
</Link>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>unitympcsltd@gmail.com</span>
            </div>

          </div>

        </motion.div>

      </motion.section>

      {/* Bottom */}

      <section className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

          <div className="flex gap-5">



          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Unity Multipurpose Cooperative Society Limited.
            All Rights Reserved.
          </p>

        </div>
      </section>

    </footer>
  );
}