import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          Unity Cooperative
        </Link>

        <nav>
          <ul className="hidden gap-8 font-medium md:flex">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/membership">Membership</Link></li>
            <li><Link href="/properties">Properties</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-green-700 px-5 py-2 text-green-700 transition hover:bg-green-50">
            Login
          </button>

          <button className="rounded-lg bg-green-700 px-5 py-2 text-white transition hover:bg-green-800">
            Become a Member
          </button>
        </div>
      </div>
    </header>
  );
}