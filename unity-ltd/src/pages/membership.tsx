import Link from "next/link";

export default function Membership() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7AC943]">
        Membership
      </span>

      <h1 className="mt-4 text-5xl font-bold">
        Join Our Cooperative Family
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        Membership is open to individuals, entrepreneurs, civil servants,
        business owners, students and organisations who are committed to
        achieving financial growth through cooperative investment.
      </p>

      <div className="mt-16 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">
          Online Registration Coming Soon
        </h2>

        <p className="mt-4 text-slate-600">
          Soon you'll be able to apply online, upload documents and track
          your membership application directly from the website.
        </p>
      </div>

      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-[#7AC943] px-8 py-4 font-semibold"
      >
        Contact Our Team
      </Link>
    </main>
  );
}