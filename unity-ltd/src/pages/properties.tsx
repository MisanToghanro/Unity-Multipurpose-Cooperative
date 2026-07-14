import Link from "next/link";

export default function Properties() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7AC943]">
        Properties
      </span>

      <h1 className="mt-4 text-5xl font-bold">
        Verified Lands & Investment Opportunities
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        We partner with trusted developers and land owners to provide
        verified property opportunities that meet the needs of our members.
      </p>

      <div className="mt-16 rounded-3xl bg-slate-100 p-8">
        <h2 className="text-2xl font-semibold">
          Property Listings Coming Soon
        </h2>

        <p className="mt-4 text-slate-600">
          Future listings will include available plots, housing estates,
          commercial developments and investment opportunities.
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