"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { contactEmail } from "../lib/contact";
import { sendEnquiry } from "../lib/send-enquiry";

export const formInputClass =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#555291]";

export function EnquiryForm({
  children,
  subject,
  submitLabel,
  successMessage,
}: {
  children: ReactNode;
  subject: string;
  submitLabel: string;
  successMessage: string;
}) {
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    const form = event.currentTarget;
    setStatus("sending");

    try {
      await sendEnquiry(new FormData(form));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form
      action={`https://formsubmit.co/${contactEmail}`}
      method="post"
      onSubmit={handleSubmit}
      className="grid gap-4"
    >
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" hidden tabIndex={-1} autoComplete="off" />
      {children}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit rounded-full bg-[#1A1917] px-5 py-3 text-sm font-semibold text-white hover:bg-[#393550] disabled:cursor-wait disabled:opacity-65"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      <div role="status" className="text-sm text-slate-800">
        {status === "success" && <p>{successMessage}</p>}
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-900">
          Your message couldn’t be sent. Try again or{" "}
          <a href={`mailto:${contactEmail}`} className="underline">email me directly</a>.
        </p>
      )}
    </form>
  );
}
