"use client";

import { useMemo, useState } from "react";
import {
  VIDEO_FORMATS,
  PACE_PROFILES,
  MONETIZATION_PLAYS,
  generateVideoIdea,
  normalizeKeywords,
  type PaceId,
  type MonetizationId,
} from "@/data/ideas";

export default function IdeaGenerator() {
  const [keywords, setKeywords] = useState(
    "YouTube automation, storytelling, creator business, productivity workflow",
  );
  const [formatId, setFormatId] = useState(VIDEO_FORMATS[0]?.id ?? "tutorial");
  const [paceId, setPaceId] = useState<PaceId>(
    PACE_PROFILES[1]?.id ?? "energetic",
  );
  const [monetizationId, setMonetizationId] = useState<MonetizationId>(
    MONETIZATION_PLAYS[0]?.id ?? "community",
  );
  const [includeShorts, setIncludeShorts] = useState(true);
  const [includeCommunityPrompt, setIncludeCommunityPrompt] = useState(true);
  const [idea, setIdea] = useState(() =>
    generateVideoIdea({
      rawKeywords: keywords,
      formatId,
      paceId,
      monetizationId,
      includeShorts,
      includeCommunityPrompt,
    }),
  );

  const keywordCount = useMemo(
    () => normalizeKeywords(keywords).length,
    [keywords],
  );

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-2xl shadow-cyan-500/5 backdrop-blur">
      <header className="flex flex-col gap-2 border-b border-white/5 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">
            Idea Lab
          </p>
          <h2 className="text-3xl font-semibold text-slate-50">
            Generate a publish-ready video concept
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300/80">
            Blend your channel pillars with cinematic pacing, hooks, and
            monetization that actually fits the storyline. Drop in your current
            focus keywords to get a fresh concept in seconds.
          </p>
        </div>
        <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold text-cyan-200 shadow shadow-cyan-500/20">
          {keywordCount} channel pillars
        </div>
      </header>

      <form
        className="mt-8 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        onSubmit={(event) => {
          event.preventDefault();
          const nextIdea = generateVideoIdea({
            rawKeywords: keywords,
            formatId,
            paceId,
            monetizationId,
            includeShorts,
            includeCommunityPrompt,
          });
          setIdea(nextIdea);
        }}
      >
        <div className="space-y-6">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-200">
              Core pillars & keywords
            </span>
            <textarea
              className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm leading-relaxed text-slate-100 outline-none transition focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)]"
              value={keywords}
              onChange={(event) => setKeywords(event.target.value)}
              placeholder="Ex: audience growth, storytelling, content systems"
            />
            <span className="mt-2 block text-xs text-slate-400">
              Separate with commas or line breaks. Mix in outcomes, tools, and
              emotional triggers.
            </span>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-slate-200">
                Video format
              </span>
              <select
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)]"
                value={formatId}
                onChange={(event) => setFormatId(event.target.value)}
              >
                {VIDEO_FORMATS.map((format) => (
                  <option key={format.id} value={format.id}>
                    {format.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-slate-200">
                Pacing profile
              </span>
              <select
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)]"
                value={paceId}
                onChange={(event) => setPaceId(event.target.value as PaceId)}
              >
                {PACE_PROFILES.map((pace) => (
                  <option key={pace.id} value={pace.id}>
                    {pace.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col">
              <span className="mb-2 text-sm font-medium text-slate-200">
                Monetization move
              </span>
              <select
                className="rounded-2xl border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.25)]"
                value={monetizationId}
                onChange={(event) =>
                  setMonetizationId(event.target.value as MonetizationId)
                }
              >
                {MONETIZATION_PLAYS.map((play) => (
                  <option key={play.id} value={play.id}>
                    {play.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex flex-col justify-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200 shadow-inner shadow-cyan-500/5">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border border-white/10 bg-slate-800/80 text-cyan-400"
                  checked={includeShorts}
                  onChange={(event) => setIncludeShorts(event.target.checked)}
                />
                Support with a Shorts concept
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border border-white/10 bg-slate-800/80 text-cyan-400"
                  checked={includeCommunityPrompt}
                  onChange={(event) =>
                    setIncludeCommunityPrompt(event.target.checked)
                  }
                />
                Community call-to-action
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-inner shadow-cyan-500/10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
              Format Blueprint
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {VIDEO_FORMATS.find((format) => format.id === formatId)?.label}
            </h3>
            <p className="mt-1 text-sm text-slate-300/75">
              {
                VIDEO_FORMATS.find((format) => format.id === formatId)
                  ?.description
              }
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {VIDEO_FORMATS.find((format) => format.id === formatId)?.duration}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {PACE_PROFILES.find((profile) => profile.id === paceId)?.label}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="group flex items-center justify-center gap-3 rounded-2xl bg-cyan-400/90 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          >
            Generate the next banger
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 transition group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 21 10.5m0 0-3.75 3.75M21 10.5H3"
              />
            </svg>
          </button>
        </div>
      </form>

      {idea ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/50">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/70">
              Pitch deck
            </p>
            <h3 className="text-2xl font-semibold text-white">{idea.title}</h3>
            <p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
              {idea.hook}
            </p>
            <p className="text-sm text-slate-200/80">{idea.summary}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Run of show
              </p>
              <ul className="mt-3 space-y-3 text-sm text-slate-200">
                {idea.outline.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-xs font-semibold text-cyan-200">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="flex flex-col gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300/80">
                Monetization
              </p>
              <p className="mt-2 leading-relaxed">{idea.monetizationPlacement}</p>
            </div>

            {idea.supportingShort ? (
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-100">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                  Shorts companion
                </p>
                <p className="mt-2 leading-relaxed">{idea.supportingShort}</p>
              </div>
            ) : null}

            {idea.communityPrompt ? (
              <div className="rounded-3xl border border-fuchsia-400/20 bg-fuchsia-400/10 p-5 text-sm text-fuchsia-100">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-100/70">
                  Community spark
                </p>
                <p className="mt-2 leading-relaxed">{idea.communityPrompt}</p>
              </div>
            ) : null}

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-300/70">
                Publish with
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {idea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </section>
  );
}
