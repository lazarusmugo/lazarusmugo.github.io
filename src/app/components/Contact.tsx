"use client";

export function Contact() {
  return (
    <section className="bg-[#F7F5F0]">
      {/* ── TOP CURVE (from testimonials) ── */}
      <div className="relative h-36 md:h-44 -mb-1">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 176"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* light gray-100 fill to match testimonials */}
          <path d="M0,0 L0,116 Q720,0 1440,116 L1440,0 Z" fill="#f3f4f6" />
        </svg>
      </div>

      {/* ── CONTENT ── */}
      <div className="pb-24 px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-main-purple p-6 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-5 text-[#1A1917]">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Let’s build something interesting
                </h2>

                <p className="leading-relaxed opacity-90">
                  I work with startups, teams, and individuals to design and
                  ship mobile and web products — fast, scalable, and
                  cross-platform.
                </p>

                <p className="leading-relaxed opacity-90">
                  If you’ve got an idea, a product, or even just curiosity — I’m
                  open to talking.
                </p>

                <p className="text-sm opacity-70">Usually reply within hours</p>
              </div>

              {/* RIGHT SIDE FORM */}
              <form
                action="https://formsubmit.co/el/pelano"
                method="POST"
                className="flex flex-col gap-4"
              >
                {/* spam + config */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New portfolio contact"
                />

                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_honey"
                  style={{ display: "none" }}
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://your-site.com"
                />

                {/* fields */}
                <input
                  className="p-3 rounded-xl border border-black/10 bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/20"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <input
                  className="p-3 rounded-xl border border-black/10 bg-white/90 focus:outline-none focus:ring-2 focus:ring-black/20"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />

                <textarea
                  className="p-3 rounded-xl border border-black/10 bg-white/90 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-black/20"
                  name="message"
                  placeholder="Tell me about your idea..."
                  required
                />

                <button
                  type="submit"
                  className="bg-[#1A1917] text-white py-3 rounded-full hover:opacity-90 transition font-medium"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
