"use client";

import { useState } from "react";
import Pitch from "./Pitch";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = { name: "", email: "", subject: "", message: "" };

const contactLinks = [
  { label: "harkrishnan2e@gmail.com", href: "mailto:harkrishnan2e@gmail.com", icon: "✉" },
  { label: "github.com/HarishKrishnaan", href: "https://github.com/HarishKrishnaan", icon: "{}" },
  { label: "linkedin.com/in/harish-krishnan", href: "https://www.linkedin.com/in/harish-krishnan-568579325/", icon: "in" },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please enter a subject";
    if (!form.message.trim()) nextErrors.message = "Please enter a message";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // Not wired to a real send yet — see chat notes on adding
    // Formspree/EmailJS/Resend once you're happy with this UI.
    setSubmitted(true);
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <Pitch id="contact" label="Summit — Contact" title="Let's connect">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-soft text-[15.5px] leading-relaxed max-w-[42ch]">
            Have a project in mind, a role to fill, or just want to say hi?
            Send me a message.
          </p>
          <div className="flex flex-col gap-3 mt-6">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-3 text-[13.5px] text-soft no-underline transition-colors duration-200 hover:text-cream"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded border border-line text-gold text-[13px] shrink-0">
                  {c.icon}
                </span>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-panel rounded-lg p-6 sm:p-7">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center h-full py-6">
              <div className="w-11 h-11 rounded bg-gold flex items-center justify-center mb-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8 14.5L16 6" stroke="#20221D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-cream text-[18px]">Message sent.</h3>
              <p className="text-soft text-[14px] mt-2 max-w-[32ch]">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 text-[12.5px] text-gold border-b border-gold hover:text-cream hover:border-cream transition-colors duration-200"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div>
                {errors.name && (
                  <p className="text-[11.5px] text-red-400 mb-1">{errors.name}</p>
                )}
                <label className="block text-[11px] uppercase tracking-wide text-soft mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Jane Doe"
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
                  Email
                </label>
                <input
                  type="text"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="you@example.com"
                  className={`w-full bg-bg border rounded px-3 py-2.5 text-[14px] text-cream placeholder:text-soft/60 outline-none transition-colors duration-200 focus:border-gold ${
                    errors.email ? "border-red-400" : "border-line"
                  }`}
                />
              </div>

              <div>
                {errors.subject && (
                  <p className="text-[11.5px] text-red-400 mb-1">{errors.subject}</p>
                )}
                <label className="block text-[11px] uppercase tracking-wide text-soft mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="Project idea, job opportunity..."
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
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell me what you're working on..."
                  rows={4}
                  className={`w-full bg-bg border rounded px-3 py-2.5 text-[14px] text-cream placeholder:text-soft/60 outline-none resize-none transition-colors duration-200 focus:border-gold ${
                    errors.message ? "border-red-400" : "border-line"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="mt-1 bg-gold text-bg font-display font-bold text-[13px] uppercase tracking-wide rounded py-3 transition-colors duration-200 hover:bg-cream"
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </Pitch>
  );
}