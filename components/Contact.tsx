"use client";

import { useState } from "react";
import Pitch from "./Pitch";

// ⚠️ Keep your existing real Formspree endpoint here — don't overwrite this
// line with the placeholder below, it's just shown for reference.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

const contactLinks = [
  { label: "Email", href: "mailto:harkrishnan2e@gmail.com", icon: "✉" },
  { label: "GitHub", href: "https://github.com/HarishKrishnaan", icon: "{}" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harish-krishnan-568579325/", icon: "in" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Let me know who's reaching out";
    if (!form.email.trim()) {
      nextErrors.email = "I'll need an email to write back to";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "That email doesn't look quite right";
    }
    if (!form.subject.trim()) nextErrors.subject = "Give it a quick subject line";
    if (!form.message.trim()) nextErrors.message = "The message box is empty";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSending(true);
    setSendError(false);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setSendError(false);
  }

  return (
    <Pitch id="contact" label="Summit — Contact" title="Send up a flare">
      <p className="text-soft text-[15.5px] leading-relaxed max-w-[56ch]">
        Got a project, a role, or just want to talk shop? I read everything that hits my inbox
      </p>

      <div className="flex flex-wrap gap-4 mt-5 mb-8">
        {contactLinks.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-2 text-[13px] text-soft no-underline border border-line rounded-full pl-2 pr-4 py-1.5 transition-all duration-200 hover:text-cream hover:border-gold/50"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-bg text-gold text-[11px] shrink-0">
              {c.icon}
            </span>
            {c.label}
          </a>
        ))}
      </div>

      <div className="bg-panel rounded-lg p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-8">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="mb-4">
              <line x1="9" y1="4" x2="9" y2="30" stroke="#D9A62E" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M9 5 L27 10 L9 15 Z" fill="#D9A62E" />
            </svg>
            <h3 className="font-display font-bold text-cream text-[19px]">
              Flag planted.
            </h3>
            <p className="text-soft text-[14px] mt-2 max-w-[34ch]">
              Your message just landed in my inbox — I'll get back to you soon.
            </p>
            <button
              onClick={handleReset}
              className="mt-5 text-[12.5px] text-gold border-b border-gold hover:text-cream hover:border-cream transition-colors duration-200"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                {errors.name && (
                  <p className="text-[11.5px] text-red-400 mb-1">{errors.name}</p>
                )}
                <label className="block text-[11px] uppercase tracking-wide text-soft mb-1.5">
                  Who's this from?
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Alex Rivera"
                  className={`w-full bg-bg border rounded px-3 py-2.5 text-[14px] text-cream placeholder:text-soft/60 outline-none transition-colors duration-200 focus:border-gold ${
                    errors.name ? "border-red-400" : "border-line"
                  }`}
                />
              </div>

              <div>
                {errors.email && (
                  <p className="text-[11.5px] text-red-400 mb-1">{errors.email}</p>
                )}
                <label className="block text-[11px] uppercase tracking-wide text-soft mb-1.5">
                  Where to reach you
                </label>
                <input
                  type="text"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="alex@domain.com"
                  className={`w-full bg-bg border rounded px-3 py-2.5 text-[14px] text-cream placeholder:text-soft/60 outline-none transition-colors duration-200 focus:border-gold ${
                    errors.email ? "border-red-400" : "border-line"
                  }`}
                />
              </div>
            </div>

            <div>
              {errors.subject && (
                <p className="text-[11.5px] text-red-400 mb-1">{errors.subject}</p>
              )}
              <label className="block text-[11px] uppercase tracking-wide text-soft mb-1.5">
                What's this about?
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder="New role, a project, or just saying hi"
                className={`w-full bg-bg border rounded px-3 py-2.5 text-[14px] text-cream placeholder:text-soft/60 outline-none transition-colors duration-200 focus:border-gold ${
                  errors.subject ? "border-red-400" : "border-line"
                }`}
              />
            </div>

            <div>
              {errors.message && (
                <p className="text-[11.5px] text-red-400 mb-1">{errors.message}</p>
              )}
              <label className="block text-[11px] uppercase tracking-wide text-soft mb-1.5">
                Tell me more
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="What are you working on, or what's on your mind?"
                rows={4}
                className={`w-full bg-bg border rounded px-3 py-2.5 text-[14px] text-cream placeholder:text-soft/60 outline-none resize-none transition-colors duration-200 focus:border-gold ${
                  errors.message ? "border-red-400" : "border-line"
                }`}
              />
            </div>

            {sendError && (
              <p className="text-[12px] text-red-400 -mb-1">
                That didn't go through — try again, or email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-1 bg-gold text-bg font-display font-bold text-[13px] uppercase tracking-wide rounded py-3 transition-colors duration-200 hover:bg-cream disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Connect with me →"}
            </button>
          </form>
        )}
      </div>
    </Pitch>
  );
}