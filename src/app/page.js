import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 text-center space-y-10">
      {/* Hero Section */}
      <section>
        <h1 className="text-5xl font-bold mb-4">Cloud Nine Coaches</h1>
        <p className="text-xl max-w-3xl mx-auto mb-6">
          Luxury stretch limousine service based in Yorkton, Saskatchewan. Perfect for weddings, graduations, special occasions, airport transfers and more — at just $200 +GST per hour from our depot in Yorkton.
        </p>
        <Link href="/contact" legacyBehavior>
          <a
            className="inline-block bg-black/90 text-white py-3 px-6 rounded hover:bg-[#c4bc91] hover:text-white transition"
          >
            Book Your Ride
          </a>
        </Link>
      </section>

      {/* Testimonials / Event Mentions */}
      <section className="text-left max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">What We&apos;ve Been Up To</h2>
        <ul className="list-disc pl-6 text-left">
          <li>CP Holiday Train event — Thanks to Tourism Yorkton and Randy Goulden for including us!</li>
          <li>Yorkton Parade was a hit — thank you to everyone who turned out!</li>
          <li>Event or day out at <strong>Rawhides</strong>? We&apos;ll pick you up in style.</li>
          <li>Girls night out or your next birthday? Call or text <strong>(306) 641-4724</strong> and we&apos;ll handle the ride!</li>
          <li>Supported local events like Go Skateboarding Day — we love our community!</li>
          <li>Community got to visit our 14-passenger Ford Excursion stretch limousine inside Flexi Hall at the <strong>bridal</strong> show on April 6th, 2025!</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="bg-black/90 text-white p-6 rounded shadow max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Ride?</h2>
        <p className="mb-4">Call or text <strong>(306) 641-4724</strong> to reserve your luxury limo today.</p>
        <Link href="/contact" legacyBehavior>
          <a
            className="inline-block bg-white text-black font-semibold py-2 px-5 rounded hover:bg-[#c4bc91] hover:text-white transition"
          >
            Get in Touch
          </a>
        </Link>
      </section>

      {/* SEO helper (invisible) */}
      <div className="sr-only">
        Serving Yorkton, Melville, Esterhazy, Foam Lake, Ituna, Langenburg, Canora, Springside, Theodore, Churchbridge, Saltcoats, and communities throughout eastern Saskatchewan. Ideal for weddings, graduation formals, proms, galas, concerts, girls nights, birthdays, winery visits and luxury group transport.
      </div>
    </div>
  );
}
