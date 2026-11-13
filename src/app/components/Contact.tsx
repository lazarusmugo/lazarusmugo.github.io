import { ArrowRight } from "lucide-react";
import { bookingUrl, contactEmail } from "../lib/contact";
import { EnquiryForm, formInputClass } from "./EnquiryForm";

export function Contact() {
  return (
    <section className="bg-[#F7F5F0] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-9 rounded-3xl bg-main-purple p-6 md:grid-cols-2 md:p-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1917] md:text-4xl">
            Tell me about your project
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[#1A1917]">
            Building a new app or improving an existing one? Share what you need,
            where the project stands, and any timeline you have in mind.
          </p>
          <a
            href={bookingUrl}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#393550] px-5 py-3 text-sm font-semibold text-[#1A1917] transition-colors hover:bg-white/80"
          >
            Book a free intro call <ArrowRight aria-hidden="true" className="size-4" />
          </a>
          <a href={`mailto:${contactEmail}`} className="mt-4 block w-fit text-sm font-semibold text-[#1A1917] underline underline-offset-4">
            {contactEmail}
          </a>
        </div>
        <EnquiryForm
          subject="New portfolio project enquiry"
          submitLabel="Send project enquiry"
          successMessage="Thanks for reaching out. Your enquiry has been sent."
        >
          <label className="text-sm font-semibold text-slate-900">
            Your name
            <input name="name" autoComplete="name" required maxLength={120} className={formInputClass} />
          </label>
          <label className="text-sm font-semibold text-slate-900">
            Email address
            <input type="email" name="email" autoComplete="email" required maxLength={254} className={formInputClass} />
          </label>
          <label className="text-sm font-semibold text-slate-900">
            Project details
            <textarea name="message" required maxLength={5000} rows={5} className={formInputClass} />
          </label>
        </EnquiryForm>
      </div>
    </section>
  );
}
