import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import crestAsset from "@/assets/ropaz-crest.asset.json";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply Online — Royal Prime Academy Zaria (ROPAZ)" },
      {
        name: "description",
        content:
          "Online admission application form for Royal Prime Academy Zaria. Register your child for Creche, Nursery, Primary, JSS or SS1 for the 2026/2027 session.",
      },
      { property: "og:title", content: "Apply Online — ROPAZ Admissions" },
      {
        property: "og:description",
        content: "Complete the 2026/2027 online admission application for ROPAZ, Zaria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  children?: ReactNode;
};

function Field({ label, name, type = "text", required, placeholder, className, children }: FieldProps) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="text-[10px] font-mono uppercase tracking-widest text-navy/60 block mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children ?? (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
        />
      )}
    </label>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-8 pb-4 border-b border-border flex items-baseline gap-4">
      <span className="font-mono text-xs text-gold tracking-widest">{tag}</span>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">{title}</h2>
    </div>
  );
}

function ApplyPage() {
  const [submitted, setSubmitted] = useState<{ ref: string; name: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("agree")) {
      toast.error("Please confirm the declaration to continue.");
      return;
    }

    setSubmitting(true);
    // Local submission — school will process at office. Backend can be wired later.
    const ref =
      "ROPAZ/" +
      new Date().getFullYear() +
      "/" +
      Math.random().toString(36).slice(2, 7).toUpperCase();
    const first = String(data.get("first_name") ?? "").trim();
    const surname = String(data.get("surname") ?? "").trim();

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted({ ref, name: `${first} ${surname}`.trim() || "Applicant" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-paper">
        <TopBar />
        <div className="max-w-2xl mx-auto px-6 py-24">
          <div className="bg-white border border-border p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rotate-45 translate-x-16 -translate-y-16" />
            <span className="font-mono text-xs text-gold tracking-widest">APPLICATION RECEIVED</span>
            <h1 className="text-4xl font-display font-bold mt-3 mb-4">
              Thank you, {submitted.name}.
            </h1>
            <p className="text-navy/70 leading-relaxed mb-8">
              Your application for the 2026/2027 academic session has been recorded. Please keep
              your reference number safe and visit the school office to complete the process.
            </p>

            <div className="bg-navy text-paper p-6 rounded-sm mb-8">
              <p className="text-[10px] font-mono uppercase tracking-widest text-gold mb-2">
                Reference Number
              </p>
              <p className="text-2xl font-display font-bold tracking-wide">{submitted.ref}</p>
            </div>

            <h3 className="font-display text-xl font-bold mb-4">Next Steps</h3>
            <ol className="space-y-4 mb-10">
              {[
                "Pay the ₦2,000 (non-refundable) application fee at the school admin office (Mon–Fri, 9:00 AM – 12:00 PM).",
                "Bring four coloured passport photographs and a copy of the child's birth certificate.",
                "For secondary intake, bring the primary school leaving certificate.",
                "Await scheduling of the entrance assessment and interview.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="size-7 rounded-full border border-gold grid place-items-center shrink-0 text-gold font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-sm text-navy/70 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="px-6 py-3 bg-navy text-paper font-semibold rounded-sm hover:bg-gold hover:text-navy transition-colors"
              >
                Back to Home
              </Link>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 border border-navy/20 font-semibold rounded-sm hover:bg-navy/5 transition-colors"
              >
                Print Confirmation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <TopBar />

      {/* Hero */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 rounded-full mb-6">
            <span className="size-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-tighter">
              2026 / 2027 Academic Session
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter leading-[0.95] mb-6">
            Admission <span className="text-gold italic">Application</span> Form
          </h1>
          <p className="max-w-[52ch] mx-auto text-navy/70">
            Complete all sections below to register your child for Creche, Nursery, Primary, JSS or
            SS1. Fields marked with <span className="text-gold">*</span> are required.
          </p>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto px-6 py-16 space-y-12"
        noValidate={false}
      >
        {/* Section A */}
        <section className="bg-white border border-border p-8 md:p-12">
          <SectionHeader tag="SECTION A" title="Child's Personal Data" />
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="First Name" name="first_name" required />
            <Field label="Surname" name="surname" required />
            <Field label="Other Names" name="other_names" />
            <Field label="Gender" name="gender" required>
              <select
                name="gender"
                required
                defaultValue=""
                className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              >
                <option value="" disabled>
                  Select…
                </option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </Field>
            <Field label="Date of Birth" name="dob" type="date" required />
            <Field label="Place of Birth" name="pob" required />
            <Field label="Local Government" name="lga" required />
            <Field label="State of Origin" name="state" required />
            <Field label="Nationality" name="nationality" required placeholder="e.g. Nigerian" />
            <Field label="Religion" name="religion" />
            <Field label="Language(s) Spoken" name="language" className="md:col-span-2" />
            <Field label="Home Address" name="address" required className="md:col-span-2">
              <textarea
                name="address"
                required
                rows={2}
                className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
              />
            </Field>
          </div>
        </section>

        {/* Section B */}
        <section className="bg-white border border-border p-8 md:p-12">
          <SectionHeader tag="SECTION B" title="Parent / Guardian Data" />
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Full Name" name="parent_name" required className="md:col-span-2" />
            <Field label="Address" name="parent_address" required className="md:col-span-2">
              <textarea
                name="parent_address"
                required
                rows={2}
                className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
              />
            </Field>
            <Field label="Phone Number 1" name="parent_phone1" type="tel" required placeholder="080…" />
            <Field label="Phone Number 2" name="parent_phone2" type="tel" placeholder="080…" />
            <Field label="Email" name="parent_email" type="email" placeholder="parent@example.com" />
            <Field label="Occupation" name="occupation" />
            <Field label="Religion" name="parent_religion" />
            <Field label="Tribe" name="tribe" />
          </div>
        </section>

        {/* Section C */}
        <section className="bg-white border border-border p-8 md:p-12">
          <SectionHeader tag="SECTION C" title="Child's Medical Data" />
          <p className="text-sm text-navy/60 mb-6">
            Does the child have any health complication, allergy or disability?
          </p>
          <Field label="Please state (if any)" name="medical">
            <textarea
              name="medical"
              rows={3}
              placeholder="Write ‘None’ if not applicable"
              className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
            />
          </Field>
        </section>

        {/* Section D */}
        <section className="bg-white border border-border p-8 md:p-12">
          <SectionHeader tag="SECTION D" title="Academic Record" />
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Class for which admission is sought" name="class_sought" required>
              <select
                name="class_sought"
                required
                defaultValue=""
                className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
              >
                <option value="" disabled>
                  Select class…
                </option>
                <option>Creche</option>
                <option>Nursery</option>
                <option>Primary</option>
                <option>JSS 1</option>
                <option>SS 1</option>
              </select>
            </Field>
            <Field label="Last Class Passed" name="last_class" />
            <Field
              label="Previous School Attended (with date)"
              name="prev_school"
              className="md:col-span-2"
            />
            <Field label="Reason for Leaving" name="reason_leaving" className="md:col-span-2">
              <textarea
                name="reason_leaving"
                rows={2}
                className="w-full border border-border bg-white px-4 py-3 rounded-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
              />
            </Field>
          </div>
        </section>

        {/* Section E — Declaration */}
        <section className="bg-navy text-paper p-8 md:p-12 rounded-sm">
          <div className="mb-8 pb-4 border-b border-white/10 flex items-baseline gap-4">
            <span className="font-mono text-xs text-gold tracking-widest">SECTION E</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold">Declaration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <label className="block md:col-span-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-2">
                Full name of parent / guardian <span className="text-gold">*</span>
              </span>
              <input
                name="declarant"
                required
                className="w-full bg-white/5 border border-white/20 px-4 py-3 rounded-sm text-paper placeholder:text-paper/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold block mb-2">
                Date <span className="text-gold">*</span>
              </span>
              <input
                name="declaration_date"
                type="date"
                required
                defaultValue={new Date().toISOString().slice(0, 10)}
                className="w-full bg-white/5 border border-white/20 px-4 py-3 rounded-sm text-paper focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              />
            </label>
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              required
              className="mt-1 size-5 accent-gold shrink-0"
            />
            <span className="text-sm text-paper/80 leading-relaxed">
              I confirm that, to the best of my knowledge, the information provided in this form is
              correct and accurate. I have understood and agree to abide by all school rules and
              regulations of Royal Prime Academy Zaria.
            </span>
          </label>
        </section>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <Link to="/" className="text-sm text-navy/60 hover:text-navy transition-colors">
            ← Back to home
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-10 py-4 bg-gold text-navy font-bold rounded-sm shadow-xl shadow-gold/20 hover:-translate-y-0.5 transition-transform disabled:opacity-60 disabled:translate-y-0"
          >
            {submitting ? "Submitting…" : "Submit Application"}
          </button>
        </div>

        <p className="text-xs text-navy/50 text-center max-w-lg mx-auto pt-6">
          Submission generates a reference number. Application fee of ₦2,000 is paid at the school
          admin office to complete registration.
        </p>
      </form>
    </div>
  );
}

function TopBar() {
  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={crestAsset.url}
            alt="ROPAZ crest"
            width={48}
            height={48}
            className="size-12 rounded-full object-contain"
          />
          <div className="leading-tight">
            <p className="font-display font-bold tracking-tight text-lg">ROPAZ ACADEMY</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-navy/50">
              Royal Prime · Zaria
            </p>
          </div>
        </Link>
        <Link
          to="/"
          className="text-[10px] font-mono uppercase tracking-widest text-navy/60 hover:text-navy transition-colors"
        >
          ← Home
        </Link>
      </div>
    </nav>
  );
}