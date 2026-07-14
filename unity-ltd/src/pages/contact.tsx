export default function Contact() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7AC943]">
        Contact
      </span>

      <h1 className="mt-4 text-5xl font-bold">
        We'd Love to Hear From You
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        Whether you have questions about membership, property acquisition,
        savings plans or partnerships, our team is here to help.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border p-8">
          <h3 className="text-xl font-semibold">Office</h3>
          <p className="mt-4 text-slate-600">
            Warri, Delta State
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          <h3 className="text-xl font-semibold">Contact Details</h3>
          <p className="mt-4 text-slate-600">
            Phone: +234 XXX XXX XXXX
          </p>
          <p className="text-slate-600">
            Email: info@unitycooperative.com
          </p>
        </div>
      </div>
    </main>
  );
}