/**
 * Sophie's Journey
 * Picture description practice: simple, compound and complex sentences.
 *
 * ============================================================================
 * TEACHER EDIT ZONE: PICTURE DATA
 * ============================================================================
 * Each picture has 3 levels. In every level students get words or hints first,
 * try their own sentence, and then reveal a model sentence that uses exactly
 * those words.
 *
 * - 'title' : scene title (shown on the cards and under "Picture X of 10").
 * - 'image' : path to the picture, e.g. "images/scene-01.jpg".
 *             If the file is missing, a coloured placeholder is shown.
 * - 'alt'   : short description of the picture for screen readers.
 * - 'km'    : distance sailed in this scene (0 to 5,500). Moves the boat on the map.
 * - 'levels':
 *     simple:   { words: [verb, noun, noun, noun], sentence }
 *                 The FIRST word is the verb (shown as the action word).
 *     compound: { newWords: [fanboysWord, contentWord], sentence }
 *     complex:  { conjunction, idea, frame, sentence }
 *                 'frame' uses ___ for the blanks, e.g. "Although ___, Sophie ___."
 *
 * Every target word is highlighted in its model sentence automatically,
 * also when the verb changes form (read -> reads / reading, carry -> carries).
 * ============================================================================
 */

const PICTURES_DATA = [
  {
    id: 1,
    title: "The dreamer",
    image: "images/scene-01.jpg",
    alt: "Sophie reading a sailing book at her desk at night.",
    km: 0,
    levels: {
      simple: {
        words: ["read", "book", "map", "window"],
        sentence: "Sophie reads a book with a map near the window."
      },
      compound: {
        newWords: ["but", "sleep"],
        sentence: "Sophie reads a book with a map near the window, but she doesn't want to sleep."
      },
      complex: {
        conjunction: "although",
        idea: "it is late",
        frame: "Although ___, Sophie ___.",
        sentence: "Although it is late, Sophie reads a book with a map near the window."
      }
    }
  },
  {
    id: 2,
    title: "Please let me go!",
    image: "images/scene-02.jpg",
    alt: "Sophie arguing with her uncles in the kitchen.",
    km: 0,
    levels: {
      simple: {
        words: ["argue", "uncles", "kitchen", "trip"],
        sentence: "Sophie argues with her uncles in the kitchen about the trip."
      },
      compound: {
        newWords: ["but", "help"],
        sentence: "Sophie argues with her uncles in the kitchen about the trip, but Uncle Dock helps her."
      },
      complex: {
        conjunction: "because",
        idea: "she wants to sail",
        frame: "Because ___, Sophie ___.",
        sentence: "Because she wants to sail, Sophie argues with her uncles in the kitchen about the trip."
      }
    }
  },
  {
    id: 3,
    title: "A worried mother",
    image: "images/scene-03.jpg",
    alt: "Sophie's mother hugging her on the dock.",
    km: 0,
    levels: {
      simple: {
        words: ["hug", "mother", "scarf", "dock"],
        sentence: "Her mother hugs Sophie on the dock with a warm scarf."
      },
      compound: {
        newWords: ["yet", "worried"],
        sentence: "Her mother hugs Sophie on the dock with a warm scarf, yet she is worried."
      },
      complex: {
        conjunction: "before",
        idea: "Sophie leaves",
        frame: "Before ___, her mother ___.",
        sentence: "Before Sophie leaves, her mother hugs her on the dock with a warm scarf."
      }
    }
  },
  {
    id: 4,
    title: "Loading the boat",
    image: "images/scene-04.jpg",
    alt: "The crew loading the sailboat at the harbour.",
    km: 0,
    levels: {
      simple: {
        words: ["carry", "boxes", "rope", "boat"],
        sentence: "Uncle Mo carries boxes and a rope to the boat."
      },
      compound: {
        newWords: ["and", "juggle"],
        sentence: "Uncle Mo carries boxes and a rope to the boat, and Cody juggles oranges."
      },
      complex: {
        conjunction: "while",
        idea: "Brian reads",
        frame: "While ___, Uncle Mo ___.",
        sentence: "While Brian reads, Uncle Mo carries boxes and a rope to the boat."
      }
    }
  },
  {
    id: 5,
    title: "Goodbye, harbour!",
    image: "images/scene-05.jpg",
    alt: "The sailboat leaving the harbour while Sophie waves.",
    km: 0,
    levels: {
      simple: {
        words: ["wave", "family", "sails", "harbour"],
        sentence: "Sophie waves to her family under the sails in the harbour."
      },
      compound: {
        newWords: ["so", "excited"],
        sentence: "Sophie is excited, so she waves to her family under the sails in the harbour."
      },
      complex: {
        conjunction: "as soon as",
        idea: "the wind blows",
        frame: "As soon as ___, Sophie ___.",
        sentence: "As soon as the wind blows, Sophie waves to her family under the sails in the harbour."
      }
    }
  },
  {
    id: 6,
    title: "Dolphins at sunset",
    image: "images/scene-06.jpg",
    alt: "Sophie steering the boat at sunset with dolphins.",
    km: 1500,
    levels: {
      simple: {
        words: ["steer", "boat", "dolphins", "sunset"],
        sentence: "Sophie steers the boat near the dolphins at sunset."
      },
      compound: {
        newWords: ["and", "jump"],
        sentence: "Sophie steers the boat near the dolphins at sunset, and they jump next to her."
      },
      complex: {
        conjunction: "when",
        idea: "she sees them",
        frame: "When ___, Sophie ___.",
        sentence: "When Sophie sees the dolphins, she steers the boat closer at sunset."
      }
    }
  },
  {
    id: 7,
    title: "Chores on deck",
    image: "images/scene-07.jpg",
    alt: "Brian writing, Cody sleeping and Sophie cleaning the deck.",
    km: 2800,
    levels: {
      simple: {
        words: ["write", "logbook", "pencil", "deck"],
        sentence: "Brian writes in the logbook with a pencil on the deck."
      },
      compound: {
        newWords: ["but", "sleep"],
        sentence: "Brian writes in the logbook with a pencil on the deck, but Cody sleeps."
      },
      complex: {
        conjunction: "while",
        idea: "Cody sleeps",
        frame: "While ___, Brian ___.",
        sentence: "While Cody sleeps, Brian writes in the logbook with a pencil on the deck."
      }
    }
  },
  {
    id: 8,
    title: "The storm",
    image: "images/scene-08.jpg",
    alt: "The crew pulling ropes in a big storm.",
    km: 3800,
    levels: {
      simple: {
        words: ["pull", "ropes", "storm", "waves"],
        sentence: "Sophie pulls the ropes in the storm with big waves."
      },
      compound: {
        newWords: ["yet", "afraid"],
        sentence: "Sophie pulls the ropes in the storm with big waves, yet she isn't afraid."
      },
      complex: {
        conjunction: "although",
        idea: "the rain is strong",
        frame: "Although ___, Sophie ___.",
        sentence: "Although the rain is strong, Sophie pulls the ropes in the storm with big waves."
      }
    }
  },
  {
    id: 9,
    title: "Thinking of Bompie",
    image: "images/scene-09.jpg",
    alt: "Sophie on deck at night holding a photo of her grandfather.",
    km: 4800,
    levels: {
      simple: {
        words: ["look", "stars", "photo", "grandfather"],
        sentence: "Sophie looks at the stars and a photo of her grandfather."
      },
      compound: {
        newWords: ["for", "miss"],
        sentence: "Sophie looks at the stars and a photo of her grandfather, for she misses him."
      },
      complex: {
        conjunction: "when",
        idea: "the sea is calm",
        frame: "When ___, Sophie ___.",
        sentence: "When the sea is calm, Sophie looks at the stars and a photo of her grandfather."
      }
    }
  },
  {
    id: 10,
    title: "Bompie's arms",
    image: "images/scene-10.jpg",
    alt: "Sophie running to hug her grandfather in an English harbour.",
    km: 5500,
    levels: {
      simple: {
        words: ["run", "grandfather", "harbour", "hills"],
        sentence: "Sophie runs to her grandfather in the harbour near the green hills."
      },
      compound: {
        newWords: ["and", "hug"],
        sentence: "Sophie runs to her grandfather in the harbour near the green hills, and he hugs her."
      },
      complex: {
        conjunction: "after",
        idea: "many days at sea",
        frame: "After ___, Sophie ___.",
        sentence: "After many days at sea, Sophie runs to her grandfather in the harbour near the green hills."
      }
    }
  }
];

/** Total length of the trip, used by the route map. */
const TOTAL_KM = 5500;

/* ============================================================================
   JOINING WORDS (used to underline the joining word automatically)
   The Teacher Guide shows these words grouped by meaning.
   ============================================================================ */
const byLength = (a, b) => b.length - a.length;
const FANBOYS = ["for", "and", "nor", "but", "or", "yet", "so"].sort(byLength);
const SUBORDINATORS = [
  "when", "while", "before", "after", "as soon as", "until", "whenever",
  "because", "since", "although", "even though", "if", "unless"
].sort(byLength);

/* ============================================================================
   HELPERS
   ============================================================================ */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatKm(value) {
  return Math.round(value).toLocaleString("en-US");
}

/* ============================================================================
   HIGHLIGHTING TARGET WORDS IN THE MODEL SENTENCES
   ============================================================================ */
// Irregular forms, so e.g. "run" also finds "ran" and "write" finds "wrote".
const IRREGULAR_FORMS = {
  be: ["is", "am", "are", "was", "were"], have: ["has", "had"], do: ["does", "did"],
  go: ["goes", "went"], run: ["ran"], write: ["wrote", "written"], sleep: ["slept"],
  see: ["saw", "seen"], sit: ["sat"], swim: ["swam"], feel: ["felt"], hold: ["held"],
  think: ["thought"], catch: ["caught"], fly: ["flew"], eat: ["ate"], drink: ["drank"],
  give: ["gave"], leave: ["left"], meet: ["met"], take: ["took"], make: ["made"],
  find: ["found"], blow: ["blew"], sing: ["sang"], tell: ["told"], say: ["said"]
};

// Small words that are not used on their own to find an idea in a sentence.
const STOP_WORDS = new Set(["a", "an", "the", "she", "he", "it", "they", "them", "her", "him", "his",
  "is", "are", "am", "to", "of", "at", "in", "on", "and", "with"]);

/** All the forms of a word: read -> read, reads, reading, readed... (extra forms do no harm). */
function wordForms(word) {
  const w = word.toLowerCase();
  const forms = new Set([w, w + "s", w + "es", w + "ed", w + "d", w + "ing"]);
  if (w.endsWith("e")) forms.add(w.slice(0, -1) + "ing");                      // argue -> arguing
  if (/[^aeiou]y$/.test(w)) {                                                   // carry -> carries
    forms.add(w.slice(0, -1) + "ies");
    forms.add(w.slice(0, -1) + "ied");
  }
  if (/[^aeiou][aeiou][bdgklmnprt]$/.test(w)) {                                 // hug -> hugging
    forms.add(w + w.slice(-1) + "ing");
    forms.add(w + w.slice(-1) + "ed");
  }
  (IRREGULAR_FORMS[w] || []).forEach((f) => forms.add(f));
  return [...forms];
}

function overlaps(range, ranges) {
  return ranges.some((r) => range.start < r.end && r.start < range.end);
}

/**
 * Finds where a target (word or phrase) appears in a sentence.
 * Returns { start, end } or null. 'afterComma' prefers the match after a comma
 * (for FANBOYS: "boxes and a rope, and Cody..." -> the second "and").
 */
function findTarget(sentence, text, taken, afterComma = false) {
  const clean = text.trim();
  const pattern = /\s/.test(clean)
    ? clean.split(/\s+/).map(escapeRegex).join("\\s+")
    : "(?:" + wordForms(clean).sort(byLength).map(escapeRegex).join("|") + ")";
  const re = new RegExp("\\b" + pattern + "\\b", "gi");
  const matches = [...sentence.matchAll(re)]
    .map((m) => ({ start: m.index, end: m.index + m[0].length }))
    .filter((r) => !overlaps(r, taken));
  if (!matches.length) return null;
  if (afterComma) {
    const afterCommaMatch = matches.find((r) => /,\s*$/.test(sentence.slice(0, r.start)));
    if (afterCommaMatch) return afterCommaMatch;
  }
  return matches[0];
}

/** Position of the joining word, for the automatic underline. */
function findJoiner(sentence, levelKey) {
  if (levelKey === "compound") {
    const m = sentence.match(new RegExp(",\\s+(" + FANBOYS.join("|") + ")\\b", "i"));
    if (m) {
      const start = m.index + m[0].length - m[1].length;
      return { start, end: start + m[1].length };
    }
  }
  if (levelKey === "complex") {
    const m = sentence.match(new RegExp("\\b(" + SUBORDINATORS.map(escapeRegex).join("|") + ")\\b", "i"));
    if (m) return { start: m.index, end: m.index + m[1].length };
  }
  return null;
}

/**
 * Returns the sentence as HTML with every target highlighted in its chip colour
 * and the joining word underlined.
 * targets: [{ text, cls, afterComma?, idea? }]
 */
function highlightSentence(sentence, levelKey, targets) {
  const ranges = [];
  targets.forEach((t) => {
    const r = findTarget(sentence, t.text, ranges, t.afterComma);
    if (r) {
      ranges.push({ ...r, cls: t.cls });
    } else if (t.idea) {
      // The idea is not word-for-word in the sentence: highlight its main words.
      t.text.split(/\s+/).filter((w) => !STOP_WORDS.has(w.toLowerCase())).forEach((w) => {
        const r2 = findTarget(sentence, w, ranges);
        if (r2) ranges.push({ ...r2, cls: t.cls });
      });
    }
  });

  const joiner = findJoiner(sentence, levelKey);
  if (joiner) {
    const same = ranges.find((r) => r.start === joiner.start && r.end === joiner.end);
    if (same) same.joiner = true;
    else if (!overlaps(joiner, ranges)) ranges.push({ ...joiner, cls: "", joiner: true });
  }

  ranges.sort((a, b) => a.start - b.start);
  let html = "";
  let pos = 0;
  ranges.forEach((r) => {
    html += escapeHtml(sentence.slice(pos, r.start));
    const word = escapeHtml(sentence.slice(r.start, r.end));
    const inner = r.joiner ? `<u class="joiner">${word}</u>` : word;
    html += r.cls ? `<mark class="hl ${r.cls}">${inner}</mark>` : inner;
    pos = r.end;
  });
  html += escapeHtml(sentence.slice(pos));
  return html;
}

/** Targets of each level, with the chip colour they use. */
function getTargets(item, levelKey) {
  const lv = item.levels[levelKey];
  if (levelKey === "simple") {
    return lv.words.map((w, i) => ({ text: w, cls: i === 0 ? "c-verb" : "c-noun" }));
  }
  if (levelKey === "compound") {
    return [
      { text: lv.newWords[0], cls: "c-fanboys", afterComma: true },
      { text: lv.newWords[1], cls: "c-new" }
    ];
  }
  return [
    { text: lv.conjunction, cls: "c-conj" },
    { text: lv.idea, cls: "c-idea", idea: true }
  ];
}

/* ============================================================================
   IMAGE PLACEHOLDER (soft gradient + scene number + scene title)
   ============================================================================ */
const PLACEHOLDER_GRADIENTS = [
  ["#c7d2fe", "#fbcfe8"], ["#bae6fd", "#ddd6fe"], ["#fde68a", "#fecaca"],
  ["#a7f3d0", "#bae6fd"], ["#bfdbfe", "#fef3c7"], ["#fed7aa", "#fbcfe8"],
  ["#d9f99d", "#a5f3fc"], ["#c4b5fd", "#94a3b8"], ["#a5b4fc", "#1e3a8a"],
  ["#bbf7d0", "#fde68a"]
];

function getPlaceholder(item, index) {
  const [c1, c2] = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];
  const num = String(index + 1).padStart(2, "0");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="1600" height="900" fill="url(#g)"/>
    <circle cx="1350" cy="180" r="260" fill="#ffffff" opacity="0.18"/>
    <circle cx="220" cy="760" r="320" fill="#ffffff" opacity="0.14"/>
    <text x="800" y="380" text-anchor="middle" font-family="Trebuchet MS, Verdana, Arial, sans-serif" font-size="64" font-weight="700" fill="#1e293b" opacity="0.65">⛵ Scene ${num}</text>
    <text x="800" y="500" text-anchor="middle" font-family="Trebuchet MS, Verdana, Arial, sans-serif" font-size="96" font-weight="800" fill="#0f172a">${escapeHtml(item.title)}</text>
    <text x="800" y="580" text-anchor="middle" font-family="Verdana, Arial, sans-serif" font-size="34" fill="#334155" opacity="0.8">Add ${escapeHtml(item.image)}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function loadImage(imgElement, item, index) {
  imgElement.onerror = () => {
    imgElement.onerror = null;
    imgElement.src = getPlaceholder(item, index);
  };
  imgElement.src = item.image;
}

/* ============================================================================
   ROUTE MAP (inline SVG, no external library)
   ============================================================================ */
// Dotted route from the US East Coast to England (approximate, for class discussion).
const ROUTE_D = "M46,80 C98,74 150,42 203,73";

const MAP_SVG = `
<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of the North Atlantic with Sophie's route from the USA to England">
  <defs>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e0f2fe"/>
      <stop offset="1" stop-color="#bae6fd"/>
    </linearGradient>
  </defs>
  <rect width="240" height="140" fill="url(#sea)"/>
  <!-- North America (US East Coast + Canada) -->
  <path class="land" d="M0,0 L104,0 L101,10 L108,20 L98,28 L92,26 L86,36 L76,42 L68,48 L62,56 L58,62 L62,68 L54,70 L48,74 L43,79 L40,86 L37,94 L33,102 L35,110 L30,117 L26,126 L28,140 L0,140 Z"/>
  <path class="land" d="M112,20 L122,16 L127,24 L121,33 L113,31 Z"/>
  <!-- Ireland -->
  <path class="land" d="M186,40 L193,36 L197,42 L196,52 L190,57 L183,55 L181,48 Z"/>
  <!-- Great Britain -->
  <path class="land land-uk" d="M208,8 L214,5 L219,8 L216,14 L220,18 L217,24 L222,30 L224,38 L227,46 L230,52 L232,58 L234,63 L231,66 L233,69 L226,71 L218,71 L210,72 L204,74 L198,76 L202,71 L206,68 L202,65 L207,63 L203,58 L205,53 L209,51 L206,46 L207,40 L204,34 L200,30 L202,24 L199,18 L203,12 Z"/>
  <!-- Europe (France / Spain) -->
  <path class="land" d="M228,80 L240,76 L240,140 L212,140 L208,122 L220,110 L214,96 L220,86 Z"/>

  <text class="map-label" x="10" y="64">USA</text>
  <text class="map-label" x="166" y="86">England</text>
  <text class="map-sea-label" x="128" y="112">Atlantic Ocean</text>

  <path id="route-base" class="route-base" d="${ROUTE_D}"/>
  <path id="route-done" class="route-done" d="${ROUTE_D}"/>
  <circle class="route-end" cx="46" cy="80" r="2.6"/>
  <circle class="route-end" cx="203" cy="73" r="2.6"/>

  <g id="map-boat" class="map-boat" transform="translate(46,80)">
    <circle r="8" fill="#ffffff" opacity="0.92"/>
    <path d="M-5.5,1.5 L5.5,1.5 L3.5,4.8 L-3.5,4.8 Z" fill="#b45309"/>
    <line x1="0" y1="1.5" x2="0" y2="-6.5" stroke="#334155" stroke-width="0.8"/>
    <path d="M0.6,-6.2 L0.6,0.8 L5,0.8 Z" fill="#f97316"/>
    <path d="M-0.6,-5 L-0.6,0.8 L-4.2,0.8 Z" fill="#fde68a"/>
  </g>
</svg>`;

const map = {
  path: null,
  done: null,
  boat: null,
  length: 0,
  currentKm: 0,
  animationId: null
};

function initMap() {
  const holder = document.getElementById("route-map-svg");
  holder.innerHTML = MAP_SVG;
  map.path = holder.querySelector("#route-base");
  map.done = holder.querySelector("#route-done");
  map.boat = holder.querySelector("#map-boat");
  map.length = map.path.getTotalLength();
  drawMapAt(0);
}

function drawMapAt(km) {
  const fraction = Math.max(0, Math.min(1, km / TOTAL_KM));
  const point = map.path.getPointAtLength(map.length * fraction);
  map.boat.setAttribute("transform", `translate(${point.x.toFixed(2)},${point.y.toFixed(2)})`);
  map.done.style.strokeDasharray = `${map.length * fraction} ${map.length}`;
  elements.routeKm.textContent = `≈ ${formatKm(km)} km sailed of ${formatKm(TOTAL_KM)} km`;
  elements.routeProgressFill.style.width = `${fraction * 100}%`;
  elements.routeProgress.setAttribute("aria-valuenow", String(Math.round(km)));
  map.currentKm = km;
}

function moveBoatTo(targetKm, animate = true) {
  if (!map.path) return;
  if (map.animationId) cancelAnimationFrame(map.animationId);

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startKm = map.currentKm;
  if (!animate || reduceMotion || startKm === targetKm) {
    drawMapAt(targetKm);
    return;
  }

  const duration = 1100;
  const startTime = performance.now();
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function step(now) {
    const t = Math.min(1, (now - startTime) / duration);
    drawMapAt(startKm + (targetKm - startKm) * ease(t));
    if (t < 1) {
      map.animationId = requestAnimationFrame(step);
    } else {
      map.animationId = null;
    }
  }
  map.animationId = requestAnimationFrame(step);
}

function setMapCollapsed(collapsed) {
  elements.routeMap.classList.toggle("collapsed", collapsed);
  elements.btnMapToggle.setAttribute("aria-expanded", String(!collapsed));
  try { localStorage.setItem("sj-map-collapsed", collapsed ? "1" : "0"); } catch (e) { /* storage not available */ }
}


/* ============================================================================
   STEPS FOR EACH PICTURE
   0 Reveal words -> 1 Show sentence -> 2 Level up 🔵 -> 3 Show sentence
   -> 4 Level up 🟠 -> 5 Show sentence -> 6 Done!
   state.step = how many steps have been done.
   ============================================================================ */
const STEPS = [
  { label: "Reveal words", cls: "step-words", icon: "eye" },
  { label: "Show sentence", cls: "step-simple", icon: "chat" },
  { label: "Level up 🔵", cls: "step-compound", icon: "up" },
  { label: "Show sentence", cls: "step-compound", icon: "chat" },
  { label: "Level up 🟠", cls: "step-complex", icon: "up" },
  { label: "Show sentence", cls: "step-complex", icon: "chat" }
];
const LAST_STEP = STEPS.length; // 6 = everything revealed

const LEVEL_INFO = {
  simple:   { n: 1, label: "Simple",   emoji: "🟢", wordsAt: 1, sentenceAt: 2 },
  compound: { n: 2, label: "Compound", emoji: "🔵", wordsAt: 3, sentenceAt: 4 },
  complex:  { n: 3, label: "Complex",  emoji: "🟠", wordsAt: 5, sentenceAt: 6 }
};

/* ============================================================================
   APPLICATION STATE
   ============================================================================ */
const state = {
  selectedPictureIndex: null,
  step: 0
};

/* ============================================================================
   DOM ELEMENTS
   ============================================================================ */
const elements = {
  galleryView: document.getElementById("gallery-view"),
  activityView: document.getElementById("activity-view"),
  galleryGrid: document.getElementById("gallery-grid"),

  activityImage: document.getElementById("activity-image"),
  activityCounter: document.getElementById("activity-counter"),
  activitySceneTitle: document.getElementById("activity-scene-title"),
  prevBtn: document.getElementById("btn-prev"),
  nextBtn: document.getElementById("btn-next"),

  btnStep: document.getElementById("btn-step"),
  btnHome: document.getElementById("btn-home"),
  btnReset: document.getElementById("btn-reset"),

  levelsStack: document.getElementById("levels-stack"),

  routeMap: document.getElementById("route-map"),
  btnMapToggle: document.getElementById("btn-map-toggle"),
  routeKm: document.getElementById("route-km"),
  routeProgress: document.getElementById("route-progress"),
  routeProgressFill: document.getElementById("route-progress-fill"),

  btnGuide: document.getElementById("btn-guide"),
  guideModal: document.getElementById("guide-modal"),
  btnCloseModal: document.getElementById("btn-close-modal")
};

/* ============================================================================
   GALLERY
   ============================================================================ */
function renderGallery() {
  elements.galleryGrid.innerHTML = "";

  PICTURES_DATA.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "picture-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Picture ${index + 1}: ${item.title}`);

    card.innerHTML = `
      <div class="card-media">
        <span class="card-number-badge">Picture ${index + 1}</span>
        <img alt="${escapeHtml(item.alt)}" loading="lazy" />
      </div>
      <div class="card-body">
        <h2 class="card-title">${escapeHtml(item.title)}</h2>
        <div class="card-footer">
          <span class="card-action-text">Practice description &rarr;</span>
          <span class="card-km">⛵ ${formatKm(item.km)} km</span>
        </div>
      </div>
    `;

    loadImage(card.querySelector("img"), item, index);

    card.addEventListener("click", () => openActivity(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openActivity(index);
      }
    });

    elements.galleryGrid.appendChild(card);
  });
}

/* ============================================================================
   ACTIVITY VIEW
   ============================================================================ */
function openActivity(index) {
  if (index < 0 || index >= PICTURES_DATA.length) return;

  const wasOpen = state.selectedPictureIndex !== null;
  stopSpeaking();

  state.selectedPictureIndex = index;
  state.step = 0;

  const item = PICTURES_DATA[index];

  elements.activityCounter.textContent = `Picture ${index + 1} of ${PICTURES_DATA.length}`;
  elements.activitySceneTitle.textContent = item.title;
  elements.activityImage.alt = item.alt;
  loadImage(elements.activityImage, item, index);

  elements.prevBtn.disabled = index === 0;
  elements.nextBtn.disabled = index === PICTURES_DATA.length - 1;

  renderStack();
  updateStepButton();

  elements.galleryView.classList.remove("active");
  elements.activityView.classList.add("active");

  // Animate the boat when moving between pictures; jump when opening from Home.
  moveBoatTo(item.km || 0, wasOpen);

  if (!wasOpen) window.scrollTo({ top: 0, behavior: "smooth" });
}

/** One clickable word chip. 'used' adds a small ✓ once the sentence is shown. */
function chipHtml(text, cls, used, tag = "") {
  return `<button type="button" class="chip ${cls}${used ? " chip-used" : ""}" data-say="${escapeHtml(text)}" title="Listen">` +
    (tag ? `<span class="verb-tag">${tag}</span>` : "") +
    `<span>${escapeHtml(text)}</span>` +
    (used ? `<span class="chip-check" aria-label="used">✓</span>` : "") +
    `</button>`;
}

/** The sentence frame with blanks, e.g. "Although ___, Sophie ___." */
function frameHtml(frame, conjunction) {
  const parts = frame.split(/_{2,}/);
  return parts.map((part, i) => {
    let html = escapeHtml(part);
    if (i === 0) {
      const r = findTarget(part, conjunction, []);
      if (r) {
        html = escapeHtml(part.slice(0, r.start)) +
          `<mark class="hl c-conj">${escapeHtml(part.slice(r.start, r.end))}</mark>` +
          escapeHtml(part.slice(r.end));
      }
    }
    return html + (i < parts.length - 1 ? '<span class="blank" aria-label="blank"></span>' : "");
  }).join("");
}

function sentenceCardHtml(item, levelKey) {
  const info = LEVEL_INFO[levelKey];
  const sentence = item.levels[levelKey].sentence;
  return `
    <div class="level-card level-${levelKey}">
      <div class="level-card-text">
        <span class="level-tag">${info.emoji} Model sentence</span>
        <p class="revealed-phrase-text">${highlightSentence(sentence, levelKey, getTargets(item, levelKey))}</p>
      </div>
      <button type="button" class="btn-speak" data-say="${escapeHtml(sentence)}" aria-label="Listen to the ${info.label.toLowerCase()} sentence" title="Listen">
        <span aria-hidden="true">🔊</span>
      </button>
    </div>`;
}

function levelBlockHtml(item, levelKey) {
  const info = LEVEL_INFO[levelKey];
  const lv = item.levels[levelKey];
  const shown = state.step >= info.sentenceAt;
  const isNew = state.step === info.wordsAt;
  let body = "";

  if (levelKey === "simple") {
    body = `
      <div class="chip-label">Key words</div>
      <div class="chip-row">
        ${lv.words.map((w, i) => chipHtml(w, i === 0 ? "c-verb" : "c-noun", shown, i === 0 ? "action" : "")).join("")}
      </div>
      ${shown ? "" : `<p class="level-prompt">🗣️ Say a simple sentence with all ${lv.words.length} words.</p>`}`;
  } else if (levelKey === "compound") {
    const [fanboys, word] = lv.newWords;
    body = `
      <div class="chip-label">+ New words</div>
      <div class="chip-row">
        ${chipHtml(fanboys, "c-fanboys", shown)}
        ${chipHtml(word, "c-new", shown)}
      </div>
      ${shown ? "" : `<p class="level-prompt">🗣️ Add the new words to your simple sentence. Put a comma before <strong>${escapeHtml(fanboys)}</strong>.</p>`}`;
  } else {
    body = `
      <div class="hint-card">
        <div class="chip-label">Hint</div>
        <div class="chip-row">
          ${chipHtml(lv.conjunction, "c-conj", shown)}
          ${chipHtml(lv.idea, "c-idea", shown)}
        </div>
        <p class="frame">${frameHtml(lv.frame, lv.conjunction)}</p>
        <p class="frame-tip">💡 Put a comma after the first part.</p>
      </div>
      ${shown ? "" : `<p class="level-prompt">🗣️ Use the hint and the frame to make a complex sentence.</p>`}`;
  }

  return `
    <section class="level-block block-${levelKey}${isNew ? " is-new" : ""}" data-level="${levelKey}">
      <div class="level-block-head">
        <span class="level-badge">${info.emoji} Level ${info.n} · ${info.label}</span>
      </div>
      ${body}
      ${shown ? sentenceCardHtml(item, levelKey) : ""}
    </section>`;
}

/** Draws every level reached so far (earlier levels stay visible). */
function renderStack() {
  const item = PICTURES_DATA[state.selectedPictureIndex];
  if (!item) {
    elements.levelsStack.innerHTML = "";
    return;
  }
  const html = Object.keys(LEVEL_INFO)
    .filter((key) => state.step >= LEVEL_INFO[key].wordsAt)
    .map((key) => levelBlockHtml(item, key))
    .join("");
  elements.levelsStack.innerHTML = html;
  elements.levelsStack.classList.toggle("visible", html !== "");

  // Mark the sentence that was just revealed, for the pop-in animation
  const justShown = Object.keys(LEVEL_INFO).find((k) => LEVEL_INFO[k].sentenceAt === state.step);
  if (justShown) {
    const card = elements.levelsStack.querySelector(`.block-${justShown} .level-card`);
    if (card) card.classList.add("level-new");
  }
}

const ICONS = {
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path></svg>`,
  chat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  up: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"></polyline></svg>`
};

/** Only the next step's button is shown. */
function updateStepButton() {
  const btn = elements.btnStep;
  btn.className = "btn btn-step";
  if (state.step >= LAST_STEP) {
    btn.classList.add("step-done");
    btn.setAttribute("aria-disabled", "true");
    btn.innerHTML = `<span>Done! ✓</span>`;
    return;
  }
  const s = STEPS[state.step];
  btn.classList.add(s.cls);
  btn.removeAttribute("aria-disabled");
  btn.innerHTML = `${ICONS[s.icon]}<span>${s.label}</span>`;
}

function nextStep() {
  if (state.selectedPictureIndex === null || state.step >= LAST_STEP) return;
  state.step += 1;
  renderStack();
  updateStepButton();
  // Keep the new content and the next button in view (the buttons sit under the levels).
  const buttons = document.getElementById("activity-buttons-group");
  if (buttons) buttons.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetSteps() {
  stopSpeaking();
  state.step = 0;
  renderStack();
  updateStepButton();
}

function goHome() {
  resetSteps();
  state.selectedPictureIndex = null;
  elements.levelsStack.innerHTML = "";
  elements.activityView.classList.remove("active");
  elements.galleryView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================================
   READ ALOUD (browser speechSynthesis)
   ============================================================================ */
let englishVoice = null;

function pickEnglishVoice() {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  englishVoice =
    voices.find((v) => v.lang === "en-US" && /natural|google|samantha|aria|jenny/i.test(v.name)) ||
    voices.find((v) => v.lang === "en-US") ||
    voices.find((v) => v.lang === "en-GB") ||
    voices.find((v) => /^en/i.test(v.lang)) ||
    null;
}

function speak(text) {
  if (!("speechSynthesis" in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = englishVoice ? englishVoice.lang : "en-US";
  if (englishVoice) utterance.voice = englishVoice;
  utterance.rate = 0.82; // slightly slow for young learners
  window.speechSynthesis.speak(utterance);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

/* ============================================================================
   EVENT BINDINGS
   ============================================================================ */
elements.btnStep.addEventListener("click", nextStep);
elements.btnHome.addEventListener("click", goHome);
elements.btnReset.addEventListener("click", resetSteps);

// Chips and 🔊 buttons read their text aloud
elements.levelsStack.addEventListener("click", (e) => {
  const el = e.target.closest("[data-say]");
  if (el) speak(el.dataset.say);
});

elements.prevBtn.addEventListener("click", () => {
  if (state.selectedPictureIndex !== null && state.selectedPictureIndex > 0) {
    openActivity(state.selectedPictureIndex - 1);
  }
});
elements.nextBtn.addEventListener("click", () => {
  if (state.selectedPictureIndex !== null && state.selectedPictureIndex < PICTURES_DATA.length - 1) {
    openActivity(state.selectedPictureIndex + 1);
  }
});

elements.btnMapToggle.addEventListener("click", () => {
  setMapCollapsed(!elements.routeMap.classList.contains("collapsed"));
});

function openGuide() { elements.guideModal.classList.add("active"); elements.btnCloseModal.focus(); }
function closeGuide() { elements.guideModal.classList.remove("active"); }

elements.btnGuide.addEventListener("click", openGuide);
elements.btnCloseModal.addEventListener("click", closeGuide);
elements.guideModal.addEventListener("click", (e) => {
  if (e.target === elements.guideModal) closeGuide();
});

// Keyboard shortcuts: Esc = Home (or close the guide), ← / → = previous / next picture
document.addEventListener("keydown", (e) => {
  if (elements.guideModal.classList.contains("active")) {
    if (e.key === "Escape") closeGuide();
    return;
  }
  if (!elements.activityView.classList.contains("active")) return;
  if (e.key === "Escape") {
    goHome();
  } else if (e.key === "ArrowLeft" && state.selectedPictureIndex > 0) {
    openActivity(state.selectedPictureIndex - 1);
  } else if (e.key === "ArrowRight" && state.selectedPictureIndex < PICTURES_DATA.length - 1) {
    openActivity(state.selectedPictureIndex + 1);
  }
});

/* ============================================================================
   START
   ============================================================================ */
function init() {
  renderGallery();
  initMap();
  updateStepButton();

  let collapsed = false;
  try { collapsed = localStorage.getItem("sj-map-collapsed") === "1"; } catch (e) { /* storage not available */ }
  setMapCollapsed(collapsed);

  if ("speechSynthesis" in window) {
    pickEnglishVoice();
    window.speechSynthesis.addEventListener("voiceschanged", pickEnglishVoice);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
