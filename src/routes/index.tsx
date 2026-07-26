import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroStudent from "@/assets/hero-student.jpg";
import crestAsset from "@/assets/ropaz-crest.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Royal Prime Academy Zaria (ROPAZ) — Excellence Through Education" },
      {
        name: "description",
        content:
          "ROPAZ is a leading Creche, Nursery, Primary and Secondary school in Zaria, Kaduna State. 2026/2027 admissions now open.",
      },
      { property: "og:title", content: "Royal Prime Academy Zaria (ROPAZ) — Excellence Through Education" },
      {
        property: "og:description",
        content:
          "ROPAZ is a leading Creche, Nursery, Primary and Secondary school in Zaria, Kaduna State. 2026/2027 admissions now open.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-navy font-body selection:bg-gold/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
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
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#programs" className="hover:text-gold transition-colors">
              Programs
            </a>
            <a href="#admissions" className="hover:text-gold transition-colors">
              Admissions
            </a>
            <a href="#campus" className="hover:text-gold transition-colors">
              Campus
            </a>
            <a
              href="#admissions"
              className="bg-navy text-paper px-5 py-2.5 rounded-sm hover:bg-gold hover:text-navy transition-all"
            >
              Enroll 2026
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 rounded-full mb-6">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-tighter">
                Admissions Open for 2026 / 2027 Academic Session
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter text-balance leading-[0.9] mb-8">
              Nurturing <span className="text-gold italic">Excellence</span>
              <br />
              in Zaria's Heartland.
            </h1>
            <p className="max-w-[50ch] text-lg text-navy/70 leading-relaxed mb-10 text-pretty">
              Royal Prime Academy Zaria (ROPAZ) combines rigorous traditional standards with global
              innovation. From Creche to Secondary, we prepare the next generation of Nigerian
              leaders through holistic education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="px-8 py-4 bg-navy text-paper font-semibold rounded-sm shadow-xl shadow-navy/10 hover:-translate-y-0.5 transition-transform"
              >
                Start Admission Process
              </Link>
              <a
                href="#programs"
                className="px-8 py-4 border border-navy/20 font-semibold rounded-sm hover:bg-navy/5 transition-colors"
              >
                Explore Programs
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden ring-8 ring-white shadow-2xl animate-fade-up">
              <img
                src={heroStudent}
                alt="ROPAZ student in uniform"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 size-48 bg-gold/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </header>

      {/* Programs / Pillars */}
      <section id="programs" className="py-24 bg-navy text-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-display font-bold mb-4 italic text-gold">
                Our Academic Pillars
              </h2>
              <p className="text-paper/60">
                A continuous journey of growth, from the first steps of curiosity to the threshold
                of university life.
              </p>
            </div>
            <span className="font-mono text-gold text-sm">LEVELS 01—04</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              {
                n: "01",
                t: "Creche",
                d: "A warm, nurturing environment designed for early sensory development and safety.",
              },
              {
                n: "02",
                t: "Nursery",
                d: "Building the foundations of literacy, numeracy, and social interaction through play.",
              },
              {
                n: "03",
                t: "Primary",
                d: "Focusing on critical thinking and the core curriculum with an emphasis on discipline.",
              },
              {
                n: "04",
                t: "Secondary",
                d: "Advanced preparation for WAEC, NECO, and international examinations with leadership focus.",
              },
            ].map((p) => (
              <div
                key={p.n}
                className="p-10 bg-navy hover:bg-gold/10 transition-colors duration-500"
              >
                <span className="font-mono text-xs text-gold/60 mb-8 block">{p.n}</span>
                <h3 className="text-2xl font-display font-semibold mb-4">{p.t}</h3>
                <p className="text-sm text-paper/60 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-border p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rotate-45 translate-x-16 -translate-y-16" />

            <div className="grid lg:grid-cols-2 gap-16 relative">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">Admission Information</h2>
                <p className="text-navy/60 mb-8">
                  Enrollment is currently open for the 2026/2027 session. Register your child for
                  Creche, Nursery, Primary, JSS or SS1.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      n: 1,
                      t: "Purchase Application Form",
                      d: "Obtain the form at the school admin office for ₦2,000 (non-refundable).",
                    },
                    {
                      n: 2,
                      t: "Entrance Assessment",
                      d: "Candidates undergo a placement test to determine academic readiness.",
                    },
                    {
                      n: 3,
                      t: "Interview & Enrollment",
                      d: "Final meeting with parents / guardians and issuance of admission letters.",
                    },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <div className="size-10 rounded-full border border-gold grid place-items-center shrink-0 text-gold font-bold">
                        {s.n}
                      </div>
                      <div>
                        <h4 className="font-semibold">{s.t}</h4>
                        <p className="text-sm text-navy/60">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-navy/50">
                      Form Fee
                    </p>
                    <p className="text-2xl font-display font-bold mt-1">₦2,000</p>
                    <p className="text-xs text-navy/50">Non-refundable</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-navy/50">
                      Sales
                    </p>
                    <p className="text-2xl font-display font-bold mt-1">Mon — Fri</p>
                    <p className="text-xs text-navy/50">9:00 AM — 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div id="campus" className="bg-navy p-8 lg:p-10 text-paper rounded-lg flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase mb-2 block">
                    Visit Us in Zaria
                  </span>
                  <h3 className="text-2xl font-display mb-6">Contact Details</h3>
                  <ul className="space-y-4 text-paper/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 bg-gold rounded-full shrink-0" />
                      No 5 New Jos Road, Nagoyi, Zaria, Kaduna State
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="size-1.5 bg-gold rounded-full shrink-0" />
                      <a href="tel:+2348069771730" className="hover:text-gold transition-colors">
                        +234 806 977 1730
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="size-1.5 bg-gold rounded-full shrink-0" />
                      <a href="tel:+2348145012031" className="hover:text-gold transition-colors">
                        +234 814 501 2031
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="size-1.5 bg-gold rounded-full shrink-0" />
                      <a href="tel:+2349068212372" className="hover:text-gold transition-colors">
                        +234 906 821 2372
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xs font-mono text-paper/40 mb-4 italic">
                    "Excellence Through Education"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={crestAsset.url}
                      alt="ROPAZ crest"
                      loading="lazy"
                      width={80}
                      height={80}
                      className="size-20 bg-white/5 rounded-sm object-contain p-1"
                    />
                    <div className="text-sm">
                      <p className="font-bold text-gold">Royal Prime Academy</p>
                      <p className="text-paper/50">Zaria, Kaduna State</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-paper border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-navy/40 font-mono">
            © {new Date().getFullYear()} ROYAL PRIME ACADEMY ZARIA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] font-mono tracking-widest uppercase text-navy/40">
            …Register with us & see the difference
          </p>
        </div>
      </footer>
    </div>
  );
}
