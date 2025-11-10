import IdeaGenerator from "@/components/IdeaGenerator";
import { TREND_PROMPTS } from "@/data/ideas";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <BackgroundGlow />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:pt-20 lg:px-10">
        <Hero />
        <StatsDeck />
        <ChannelPillars />
        <IdeaGenerator />
        <PublishingOps />
      </main>
    </div>
  );
}

const metrics = [
  {
    label: "Core Channel",
    value: "Momentum Stories",
    change: "Uploading weekly",
  },
  {
    label: "Subscribers",
    value: "128K",
    change: "+2.4K last 28 days",
  },
  {
    label: "Watch time",
    value: "13,900 hrs",
    change: "+18% vs. previous period",
  },
  {
    label: "RPM",
    value: "$8.72",
    change: "+$1.24 month-over-month",
  },
];

const operatingRhythm = [
  {
    day: "Monday",
    focus: "Research & hook board",
    notes: "Pull trends, draft narratives, lock in A/B hooks.",
  },
  {
    day: "Wednesday",
    focus: "Production sprint",
    notes: "Record A-cam + capture B-roll, gather social proof clips.",
  },
  {
    day: "Friday",
    focus: "Edit & analytics review",
    notes: "Lock story arc, schedule uploads, measure retention.",
  },
];

const pipeline = [
  { title: "Script \"The $0 to $10K Creator System\"", stage: "In edit", eta: "Oct 3" },
  { title: "Short: 90 sec automation behind-the-scenes", stage: "In review", eta: "Oct 5" },
  { title: "Live audit: Subscriber channel teardown", stage: "Pre-production", eta: "Oct 8" },
];

const pillars = [
  {
    name: "Creator Systems",
    promise: "Proven workflows for consistent uploads without burnout.",
    cadence: "2x month",
    focus: ["automation", "templates", "retention"],
  },
  {
    name: "Storytelling Mastery",
    promise: "Hook frameworks, emotional arcs, and pacing that keep viewers glued.",
    cadence: "2x month",
    focus: ["hooks", "editing rhythm", "viewer empathy"],
  },
  {
    name: "Monetization Playbook",
    promise: "Behind-the-scenes on brand deals, products, and community funnels.",
    cadence: "1x month",
    focus: ["offer design", "funnels", "pricing"],
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-10 shadow-2xl shadow-cyan-500/20">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.35),transparent)] blur-2xl md:block" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
            Creator cockpit
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Keep your YouTube channel running like a product launch
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200/80">
            Align your publishing rhythm, dial in monetization, and ship winning
            ideas fast. This workspace tracks the health of{" "}
            <span className="text-white">Momentum Stories</span> so every upload
            is intentional.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-slate-200/80">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 font-medium text-white shadow shadow-cyan-500/20">
            Next publish window · <span className="text-cyan-200">Sunday 9 AM ET</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
            Primary KPI · <span className="font-semibold text-white">Retention before minute 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsDeck() {
  return (
    <section className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/60 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-sm shadow-inner shadow-cyan-500/10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {metric.label}
          </span>
          <span className="text-2xl font-semibold text-white">{metric.value}</span>
          <span className="text-xs font-medium text-cyan-200/80">{metric.change}</span>
        </div>
      ))}
    </section>
  );
}

function ChannelPillars() {
  return (
    <section className="grid gap-6 lg:grid-cols-[2fr_3fr]">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/60">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
          Operating rhythm
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Weekly cadence to stay consistent
        </h2>
        <p className="mt-2 text-sm text-slate-200/75">
          Slot these power blocks in your calendar and protect them like you would a client call.
        </p>
        <ul className="mt-6 space-y-4">
          {operatingRhythm.map((slot) => (
            <li
              key={slot.day}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
            >
              <div className="flex items-center justify-between text-xs uppercase text-slate-300">
                <span className="tracking-[0.24em]">{slot.day}</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-100">
                  Focus block
                </span>
              </div>
              <p className="text-sm font-semibold text-white">{slot.focus}</p>
              <p className="text-xs text-slate-200/70">{slot.notes}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4">
        {pillars.map((pillar) => (
          <article
            key={pillar.name}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-white/[0.06] p-6 shadow-xl shadow-slate-950/50"
          >
            <header className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{pillar.name}</h3>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Cadence · {pillar.cadence}
                </p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-slate-200">
                {pillar.focus.length} focus points
              </div>
            </header>
            <p className="mt-4 text-sm text-slate-200/80">{pillar.promise}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-200">
              {pillar.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 uppercase tracking-[0.2em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PublishingOps() {
  return (
    <section className="grid gap-6 lg:grid-cols-[3fr_2fr]">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
              Production pipeline
            </p>
            <h2 className="text-2xl font-semibold text-white">What&apos;s shipping next</h2>
          </div>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1 text-xs font-medium text-slate-200">
            3 items in motion
          </span>
        </div>
        <ul className="space-y-4">
          {pipeline.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-slate-200"
            >
              <div className="flex items-center justify-between text-xs uppercase text-slate-300">
                <span className="tracking-[0.24em]">{item.stage}</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-100">
                  ETA {item.eta}
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-white">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-fuchsia-500/10 to-cyan-400/10 p-6 shadow-xl shadow-fuchsia-500/20">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-100/70">
            Trend fuel
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            Prompts worth riffing on this week
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-100/85">
            {TREND_PROMPTS.map((prompt) => (
              <li
                key={prompt}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"
              >
                {prompt}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-200 shadow-inner shadow-cyan-500/10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300/80">
            Ritual
          </p>
          <p className="mt-2 leading-relaxed">
            Wrap every upload by logging three metrics: the retention drop-off timestamp,
            comment that signals resonance, and revenue source that over-performed. Those
            notes compound into your next creative leap.
          </p>
        </div>
      </div>
    </section>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(244,114,182,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.9)_0%,rgba(15,23,42,0.6)_35%,rgba(15,23,42,0.9)_100%)]" />
    </div>
  );
}
