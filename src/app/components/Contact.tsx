"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 🚨 stops page refresh

    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/mugolazarusk@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F7F5F0]">
      <div className="py-24 px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-main-purple p-6 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT */}
              <div className="flex flex-col gap-5 text-[#1A1917]">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Let’s build something interesting
                </h2>

                <p className="opacity-90 leading-relaxed">
                  I work with startups, teams, and individuals to design and
                  ship mobile and web products.
                </p>

                <p className="text-sm opacity-70">Usually reply within hours</p>
              </div>

              {/* RIGHT */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="hidden"
                  name="_subject"
                  value="New portfolio contact"
                />
                <input type="hidden" name="_captcha" value="false" />

                <input
                  className="p-3 rounded-xl border border-black/10 bg-white/90"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />

                <input
                  className="p-3 rounded-xl border border-black/10 bg-white/90"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />

                <textarea
                  className="p-3 rounded-xl border border-black/10 bg-white/90 min-h-[140px]"
                  name="message"
                  placeholder="Tell me about your idea..."
                  required
                />

                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#1A1917] text-white py-3 rounded-full transition hover:opacity-90 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>

                  {/* feedback area */}
                  <AnimatePresence mode="wait">
                    {success && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-xl bg-white px-4 py-3 text-sm text-[#1A1917] shadow-sm border border-black/5"
                      >
                        Message sent — I’ll get back to you soon 👌
                      </motion.div>
                    )}

                    {error && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-xl bg-white px-4 py-3 text-sm text-red-600 shadow-sm border border-red-100"
                      >
                        Something went wrong. Try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
