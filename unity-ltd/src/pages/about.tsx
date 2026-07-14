import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7AC943]">
        About Us
      </span>

      <h1 className="mt-4 text-5xl font-bold text-slate-900">
        Building Wealth Through Unity
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        Unity Multipurpose Cooperative Society Limited exists to make
        property ownership, cooperative savings and wealth creation
        accessible to everyone. Through transparency, disciplined
        savings and strategic partnerships, we help individuals and
        families invest confidently in their future.
      </p>

      <div className="mt-16 rounded-3xl bg-slate-100 p-8">
        <h2 className="text-2xl font-semibold">Coming Soon</h2>

        <p className="mt-4 text-slate-600">
          This page will include our story, mission, vision, leadership,
          governance structure, strategic partners and community impact.
        </p>
      </div>

      <Link
        href="/membership"
        className="mt-10 inline-block rounded-full bg-[#7AC943] px-8 py-4 font-semibold"
      >
        Become a Member
      </Link>
    </main>
  );
}