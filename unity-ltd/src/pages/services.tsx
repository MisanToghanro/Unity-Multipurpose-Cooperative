import Link from "next/link";

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7AC943]">
        Our Services
      </span>

      <h1 className="mt-4 text-5xl font-bold">
        Helping You Own, Build and Invest
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        From verified land acquisition to cooperative savings and
        affordable financing, our services are designed to support
        every stage of your property ownership journey.
      </p>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {[
          "Land Purchase Scheme",
          "Property Financing",
          "Housing Development",
          "Real Estate Investment",
        ].map((service) => (
          <div
            key={service}
            className="rounded-2xl border p-6"
          >
            <h3 className="text-xl font-semibold">{service}</h3>

            <p className="mt-3 text-slate-600">
              More information about this service will be available soon.
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/contact"
        className="mt-10 inline-block rounded-full bg-[#7AC943] px-8 py-4 font-semibold"
      >
        Contact Us
      </Link>
    </main>
  );
}