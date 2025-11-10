export type PaceId = "steady" | "energetic" | "cinematic";
export type MonetizationId = "community" | "affiliate" | "sponsorship" | "product";

export interface VideoFormat {
  id: string;
  label: string;
  duration: string;
  description: string;
  structure: string[];
}

export interface PaceProfile {
  id: PaceId;
  label: string;
  tone: string;
  deliveryBeats: string[];
  stylisticNotes: string;
}

export interface MonetizationPlay {
  id: MonetizationId;
  label: string;
  positioning: string;
  integrationMoment: string;
}

export interface IdeaConfig {
  rawKeywords: string;
  formatId: string;
  paceId: PaceId;
  monetizationId: MonetizationId;
  includeShorts: boolean;
  includeCommunityPrompt: boolean;
}

export interface VideoIdea {
  title: string;
  hook: string;
  summary: string;
  outline: string[];
  callToAction: string;
  supportingShort?: string;
  communityPrompt?: string;
  monetizationPlacement: string;
  tags: string[];
}

export const VIDEO_FORMATS: VideoFormat[] = [
  {
    id: "tutorial",
    label: "Deep Dive Tutorial",
    duration: "12-16 min",
    description:
      "Step-by-step walkthrough that blends narrative and actionable checkpoints.",
    structure: [
      "Cold open with the finished result + pain-point tease",
      "Credibility anchor and promise",
      "High-level roadmap",
      "Teach by building live",
      "Recap with quick wins + resource bundle",
    ],
  },
  {
    id: "case-study",
    label: "Case Study Breakdown",
    duration: "9-13 min",
    description:
      "Analyze a standout example, reverse-engineer the strategy, and give viewers a repeatable playbook.",
    structure: [
      "Headline-worthy result in the first 10 seconds",
      "Origin story and problem framing",
      "Tension build with the 'aha' pivot moment",
      "Framework reveal + supporting data",
      "Action plan for viewers to copy",
    ],
  },
  {
    id: "challenge",
    label: "30-Day Challenge",
    duration: "14-18 min",
    description:
      "Document a transformation arc with before/after proof, mini-wins, and audience checkpoints.",
    structure: [
      "Countdown hook + stakes",
      "Rules, constraints, and commitment",
      "Weekly progression montage",
      "Key lessons with raw behind-the-scenes moments",
      "Final reveal + viewer participation challenge",
    ],
  },
  {
    id: "live-teardown",
    label: "Live Audit / Teardown",
    duration: "10-15 min",
    description:
      "Evaluate something live (channel, website, workflow) with real-time commentary and quick fixes.",
    structure: [
      "High-energy teaser edit of the biggest fix",
      "Context download + scoring rubric",
      "Rapid-fire wins, then deep-dive on top 3 issues",
      "Side-by-side comparisons",
      "Viewer challenge with downloadable checklist",
    ],
  },
];

export const PACE_PROFILES: PaceProfile[] = [
  {
    id: "steady",
    label: "Steady & Trusted",
    tone: "Thoughtful, coach-like pacing with confident pauses.",
    stylisticNotes:
      "Layer in ambient bed music, keep cuts purposeful, leave space for on-screen text.",
    deliveryBeats: [
      "Warm welcome + quick recap of last video",
      "Set expectations in the first 20 seconds",
      "Teach-show-teach loop for every step",
      "Summarize before moving to next segment",
    ],
  },
  {
    id: "energetic",
    label: "High-Energy Storyteller",
    tone: "Fast hits, punchy transitions, and strong pattern interrupts.",
    stylisticNotes:
      "Use whip pans, sound design stingers, and bold kinetic typography to keep momentum.",
    deliveryBeats: [
      "Open mid-action with a bold claim",
      "Pattern interrupt every 8-12 seconds",
      "Stack B-roll to emphasize energy spikes",
      "End with a jump-cut CTA straight to camera",
    ],
  },
  {
    id: "cinematic",
    label: "Cinematic Documentary",
    tone: "Grounded narration paired with cinematic B-roll and textured soundscapes.",
    stylisticNotes:
      "Shoot in layered lighting, lean on slow push-ins, add chapter cards with ambient rise.",
    deliveryBeats: [
      "Start with a scene that forces curiosity",
      "Voice-over reveal with on-screen captions",
      "Use interviews or quotes as anchors",
      "Resolve with a reflective takeaway",
    ],
  },
];

export const MONETIZATION_PLAYS: MonetizationPlay[] = [
  {
    id: "community",
    label: "Community-first Offer",
    positioning: "Position your private group/cohort as the natural next step.",
    integrationMoment: "Insert after the biggest aha moment to ride the dopamine peak.",
  },
  {
    id: "affiliate",
    label: "Affiliate Toolkit",
    positioning:
      "Frame your recommended gear/software as the exact toolkit you personally rely on.",
    integrationMoment: "Place after a real demo where the tool saves time or money.",
  },
  {
    id: "sponsorship",
    label: "Story-led Sponsorship",
    positioning:
      "Bridge into the sponsor by sharing the struggle that the product solved for you.",
    integrationMoment: "Transition out of act one cliffhanger with a seamless sponsor segue.",
  },
  {
    id: "product",
    label: "Flagship Product Launch",
    positioning:
      "Roll out your signature course or template pack as the antidote to a pain point you just opened.",
    integrationMoment: "Anchor near the climax, then echo in the outro with social proof.",
  },
];

const HOOK_PATTERNS = [
  "I bet you've never looked at {keyword} like this before...",
  "If you tried {keyword} and failed, it's probably because nobody told you this.",
  "This simple {keyword} tweak saved me {impact} in just {timeframe}.",
  "Every creator is sleeping on this {keyword} playbook—until now.",
  "I broke {keyword} into 3 repeatable moves so you can plug-and-play it this week.",
];

const IMPACT_METRICS = [
  "72 hours of editing time",
  "an extra $4,800 in revenue",
  "hundreds of subscriber comments",
  "a 3x retention lift",
  "a full day every week",
];

const TIMEFRAMES = ["a week", "14 days", "one weekend", "three recording sessions", "five uploads"];

const CTA_PATTERNS = [
  "Drop a 🔥 in the comments if you're running this playbook with me this week.",
  "Download the checklist in the description before your next upload.",
  "Screenshot the framework and tag me when you publish—we're building momentum together.",
  "Hit subscribe for the follow-up video where I share the unfiltered analytics.",
  "Share this with a creator who needs a system, not another inspirational quote.",
];

const OUTLINE_BEATS = [
  "Frame the problem from your own experience and quantify the stakes.",
  "Preview the three cornerstone moves viewers will learn.",
  "Walk through the workflow step-by-step with pattern interrupts.",
  "Surface a common mistake and show how to course-correct live.",
  "Close with a fast recap and next-step challenge.",
  "Layer a retention hook teasing the companion resource.",
];

const SHORTS_HOOKS = [
  "One {keyword} hack I guarantee you haven't used yet 👇",
  "Stop doing this with {keyword}. Try this instead.",
  "POV: you finally fix your {keyword} pipeline.",
  "Creators who master {keyword} get the brand deals. Here's why.",
];

const COMMUNITY_PROMPTS = [
  "What's the single biggest block that's kept you from publishing weekly?",
  "Share a win from your latest upload—I'll pick one to feature in the next video.",
  "What would make a monthly live review genuinely valuable for you?",
  "Tell me the niche you're creating for and I'll riff a hook in the comments.",
];

const TAG_BANK = [
  "creator-economy",
  "youtube-growth",
  "content-strategy",
  "production-workflow",
  "storytelling",
  "camera-setup",
  "editing-tips",
  "short-form",
  "monetization",
  "branding",
];

export const TREND_PROMPTS = [
  "React to the latest algorithm update through the lens of your niche.",
  "Document the build of your most requested product feature.",
  "Compare your 2023 vs 2024 analytics and extract what actually moved the needle.",
  "Host a 'subscribers vs you' challenge and let them pitch the next video.",
  "Create a cinematic day-in-the-life that highlights the systems behind the channel.",
];

const randomFrom = <T,>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];

export const normalizeKeywords = (raw: string): string[] =>
  raw
    .split(/,|\n/)
    .map((keyword) => keyword.trim())
    .filter(Boolean);

export function generateVideoIdea(config: IdeaConfig): VideoIdea {
  const keywords = normalizeKeywords(config.rawKeywords);
  const primaryKeyword = keywords[0] ?? "YouTube strategy";
  const secondaryKeyword = randomFrom(keywords.slice(1)) ?? "growth system";

  const format =
    VIDEO_FORMATS.find((item) => item.id === config.formatId) ?? VIDEO_FORMATS[0];
  const pace =
    PACE_PROFILES.find((profile) => profile.id === config.paceId) ?? PACE_PROFILES[0];
  const monetization =
    MONETIZATION_PLAYS.find((play) => play.id === config.monetizationId) ??
    MONETIZATION_PLAYS[0];

  const title = `${format.label}: ${primaryKeyword.replace(
    /\b\w/g,
    (letter) => letter.toUpperCase(),
  )} Blueprint`;

  const hookTemplate = randomFrom(HOOK_PATTERNS);
  const hook = hookTemplate
    .replace("{keyword}", primaryKeyword)
    .replace("{impact}", randomFrom(IMPACT_METRICS))
    .replace("{timeframe}", randomFrom(TIMEFRAMES));

  const outline = [
    format.structure[0],
    randomFrom(OUTLINE_BEATS),
    format.structure[2],
    randomFrom(OUTLINE_BEATS),
    format.structure.at(-1) ?? OUTLINE_BEATS[0],
  ];

  const tags = [
    primaryKeyword.replace(/\s+/g, "-").toLowerCase(),
    secondaryKeyword.replace(/\s+/g, "-").toLowerCase(),
    format.id,
    pace.id,
    randomFrom(TAG_BANK),
    randomFrom(TAG_BANK),
  ].filter((value, index, self) => self.indexOf(value) === index);

  const idea: VideoIdea = {
    title,
    hook,
    summary: `${pace.tone} Pair it with the ${format.label.toLowerCase()} structure to keep viewers locked for ${format.duration}.`,
    outline,
    callToAction: randomFrom(CTA_PATTERNS),
    monetizationPlacement: `${monetization.positioning} ${monetization.integrationMoment}.`,
    tags,
  };

  if (config.includeShorts) {
    idea.supportingShort = randomFrom(SHORTS_HOOKS).replace(
      "{keyword}",
      primaryKeyword,
    );
  }

  if (config.includeCommunityPrompt) {
    idea.communityPrompt = randomFrom(COMMUNITY_PROMPTS);
  }

  return idea;
}
