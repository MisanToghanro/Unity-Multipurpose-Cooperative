import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";



export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <motion.header
    initial={{y:-40, opacity:0}}
    animate ={{y:0, opacity:1}}
    transition={{
      duration:0.5,
      ease:"easeInOut"
    }}
    className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">
      <div className=" mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Left */}
        <div className="flex flex-col  gap-6">

          <Link href="/" className="flex items-center  gap-2">

            {/* logo */}
            <Image
              src="/images/unitylogo.png"
              alt="Unity Cooperative"
              width={55}
              height={55}
            />

            <div className="space-y-1">
              <h1 className="text-xl font-bold text-slate-900">
                Unity Cooperative
              </h1>

              <p className="text-xs md:text-sm text-slate-500 ">
                Making Property Ownership Possible Together
              </p>
            </div>

          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">

              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-medium text-slate-700 transition hover:text-[#7AC943]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </nav>

        </div>

        {/* Right */}

        <div className="space-y-4 text-right hidden lg:flex flex-col">

          <div className="flex items-start text-right justify-end gap-2 text-slate-600">
            <MapPin size={18} />
             <span className="max-w-57.5 leading-6">
  4 Refinery Road,
  Iye Plaza,
  Warri, Delta State
</span>
          </div>

          <div className="flex items-center justify-end gap-2 text-slate-600">
            <Phone size={18} />
            <Link href="tel:+2347089286918"
            className="transition-colors hover:text-[#7AC943]">
              +234 708 928 6918
            </Link>
          </div>

        </div>
        
      <button onClick={() => setOpenMenu(!openMenu)} className="lg:hidden">

        {openMenu ? <X size={28}/> : <Menu size={28}/>}
          
      </button>

      </div>
<AnimatePresence>
        {openMenu && (
  <motion.div
  initial={{opacity:0 , height:0}}
  animate={{opacity:1, height:"auto"}}
  exit={{opacity: 0, height: 0,}}
   className="border-t bg-white lg:hidden">
    <nav className="py-6">
      <ul className="flex flex-col gap-5 px-6">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={() => setOpenMenu(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t px-6 pt-6">
        <div className="mb-3 flex items-center gap-2">
          <MapPin size={18} />
          <span> 4 Refinery Road Iye Plaza Warri Delta State</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={18} />
          <span>+234 708 928 6918</span>
        </div>
      </div>
    </nav>
  </motion.div>
)}

</AnimatePresence>


       
    </motion.header>
  );
}