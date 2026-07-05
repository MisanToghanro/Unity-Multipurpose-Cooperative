



export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">
            Unity Cooperative
          </h3>

          <p>
            Building wealth together through secure land ownership,
            property investment and cooperative savings.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Quick Links
          </h4>

          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Membership</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Services
          </h4>

          <ul className="space-y-2">
            <li>Land Purchase</li>
            <li>Property Financing</li>
            <li>Housing Development</li>
            <li>Investment Scheme</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">
            Contact
          </h4>

          <p>Lagos, Nigeria</p>
          <p>info@unity.com</p>
          <p>+234 xxx xxx xxxx</p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm">
        © {new Date().getFullYear()} Unity Multipurpose Cooperative Society
        Limited. All rights reserved.
      </div>
    </footer>
  );
}