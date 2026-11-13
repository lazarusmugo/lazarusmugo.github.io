import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kambi Victor",
    role: "CTO",
    company: "Tajji Real Estate",
    content:
      "Mugo is a sharp, capable engineer who picks up new technologies fast and applies them well. He joined as an intern and grew into our Chief Product Officer and mobile lead, a trajectory that says a lot about his drive and range. He's absorbed and put to real use things like OAuth, OIDC, SvelteKit, Kotlin Multiplatform, and Gradle in short order. It's been a pleasure working with him across design, web, and mobile. His instincts on security and architectural trade offs, especially as the app moved from early stage to scale, were a real asset. I'd work with him again without hesitation.",
  },
  {
    id: 3,
    name: "Emmanuel",
    role: "Founder",
    company: "City Homes Kenya",
    content:
      "Lazarus delivered an exceptional platform that beautifully showcases our luxury properties. His frontend work with SvelteKit resulted in a fast, elegant website that our clients love. He's professional, creative, and consistently delivers beyond expectations.",
  },
  {
    id: 4,
    name: "Arnold Opiyo",
    role: "Data Engineer",
    company: "Adanian Labs",
    content:
      "Mugo is one of the best frontend developers I've worked with. His code is clean, maintainable, and always well-documented. The collaboration was seamless—he understands the full stack and makes integration effortless. I'd work with him again in a heartbeat.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#f8f7fd] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          What people say about working with me
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col rounded-2xl border border-purple-100 bg-white p-6"
            >
              <blockquote className="flex-1 leading-relaxed text-slate-700">
                <p>“{testimonial.content}”</p>
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <span className="block font-bold text-slate-900">{testimonial.name}</span>
                {testimonial.role}, {testimonial.company}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          href="/recommend"
          className="mt-6 inline-flex rounded-full border border-purple-200 px-4 py-2 text-sm font-semibold text-[#49457e] hover:bg-white"
        >
          Share your experience
        </Link>
      </div>
    </section>
  );
}
