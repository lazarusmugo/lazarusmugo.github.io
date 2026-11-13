import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { EnquiryForm, formInputClass } from "../components/EnquiryForm";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";

export const metadata: Metadata = {
  title: "Share your experience | Lazarus Mugo",
  description: "Write a recommendation about working with Lazarus Mugo.",
};

export default function RecommendPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F5F0] px-6 pb-16 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-2xl">
          <Link href="/#testimonials" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#49457e] hover:underline">
            <ChevronLeft aria-hidden="true" className="size-4" /> Back to testimonials
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            What was it like working together?
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-slate-700">
            Your experience helps future clients understand how I work.
            Thank you for taking a moment to share it.
          </p>
          <div className="mt-7 rounded-2xl border border-purple-100 bg-white p-5 sm:p-8">
            <EnquiryForm
              subject="New portfolio recommendation"
              submitLabel="Submit recommendation"
              successMessage="Thank you. I’ll review your recommendation before it appears on the site."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-900">
                  Name
                  <input name="name" autoComplete="name" required maxLength={120} className={formInputClass} />
                </label>
                <label className="text-sm font-semibold text-slate-900">
                  Role and company <span className="font-normal text-slate-600">(optional)</span>
                  <input name="role_and_company" maxLength={160} className={formInputClass} />
                </label>
              </div>
              <label className="text-sm font-semibold text-slate-900">
                Email
                <input type="email" name="email" autoComplete="email" required maxLength={254} aria-describedby="email-help" className={formInputClass} />
                <span id="email-help" className="mt-1 block font-normal text-slate-600">
                  Used to confirm your submission and kept off the public site.
                </span>
              </label>
              <label className="text-sm font-semibold text-slate-900">
                Project or working relationship
                <input name="project_or_relationship" required maxLength={180} className={formInputClass} />
              </label>
              <label className="text-sm font-semibold text-slate-900">
                Your recommendation
                <textarea name="recommendation" required maxLength={3000} rows={5} aria-describedby="recommendation-help" className={formInputClass} />
                <span id="recommendation-help" className="mt-1 block font-normal text-slate-600">
                  What did we work on, how was the collaboration, and what stood out to you?
                </span>
              </label>
              <label className="text-sm font-semibold text-slate-900">
                Website or LinkedIn profile <span className="font-normal text-slate-600">(optional)</span>
                <input type="url" name="public_profile" placeholder="https://" maxLength={500} className={formInputClass} />
              </label>
              <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                <input type="checkbox" name="publication_consent" value="Agreed" required className="mt-0.5 size-4 shrink-0 accent-[#555291]" />
                <span>
                  You may publish my recommendation, name, and the optional public details I’ve provided on your portfolio.
                </span>
              </label>
            </EnquiryForm>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
