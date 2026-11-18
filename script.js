/**
 * Sophie's Journey
 * Picture description practice: simple, compound and complex sentences.
 *
 * ============================================================================
 * TEACHER EDIT ZONE: PICTURE DATA
 * ============================================================================
 * Edit any picture below:
 * - 'title'   : scene title (shown on the cards and under "Picture X of 10").
 * - 'image'   : path to the picture, e.g. "images/scene-01.jpg".
 *               If the file is missing, a coloured placeholder is shown.
 * - 'alt'     : short description of the picture for screen readers.
 * - 'words'   : 4 key words. The FIRST word is the verb (shown as the action).
 * - 'km'      : distance sailed in this scene (0 to 5,500). Moves the boat on the map.
 * - 'phrases' : the 3 model sentences:
 *      simple   🟢 one idea
 *      compound 🔵 two ideas + FANBOYS (for, and, nor, but, or, yet, so)
 *      complex  🟠 because, when, although, while, before, after, as soon as...
 *   The joining word is underlined automatically.
 * ============================================================================
 */

const PICTURES_DATA = [
  {
    id: 1,
    title: "The dreamer",
    image: "images/scene-01.jpg",
    alt: "Sophie reading a sailing book at her desk at night.",
    words: ["read", "book", "map", "window"],
    km: 0,
    phrases: {
      simple: "Sophie is reading a sailing book.",
      compound: "It is late, but she isn't sleeping.",
      complex: "When she reads about the sea, she feels free."
    }
  },
  {
    id: 2,
    title: "Please let me go!",
    image: "images/scene-02.jpg",
    alt: "Sophie arguing with her uncles in the kitchen.",
    words: ["argue", "uncles", "kitchen", "book"],
    km: 0,
    phrases: {
      simple: "Sophie wants to go on the trip.",
      compound: "Stew and Mo say no, but Uncle Dock says yes.",
      complex: "Although her uncles are worried, Sophie doesn't give up."
    }
  },
  {
    id: 3,
    title: "A worried mother",
    image: "images/scene-03.jpg",
    alt: "Sophie's mother hugging her on the dock.",
    words: ["hug", "mother", "scarf", "dock"],
    km: 0,
    phrases: {
      simple: "Her mother hugs Sophie.",
      compound: "She is proud, yet she is worried.",
      complex: "Before Sophie leaves, her mother gives her a scarf."
    }
  },
  {
    id: 4,
    title: "Loading the boat",
    image: "images/scene-04.jpg",
    alt: "The crew loading the sailboat at the harbour.",
    words: ["carry", "boxes", "rope", "harbour"],
    km: 0,
    phrases: {
      simple: "The crew is preparing the boat.",
      compound: "Uncle Mo carries boxes, and Cody plays with oranges.",
      complex: "While Brian reads, Sophie helps with the ropes."
    }
  },
  {
    id: 5,
    title: "Goodbye, harbour!",
    image: "images/scene-05.jpg",
    alt: "The sailboat leaving the harbour while Sophie waves.",
    words: ["wave", "sails", "family", "sky"],
    km: 0,
    phrases: {
      simple: "The boat leaves the harbour.",
      compound: "Sophie is excited, so she waves to her family.",
      complex: "As soon as the wind blows, the sails open."
    }
  },
  {
    id: 6,
    title: "Dolphins at sunset",
    image: "images/scene-06.jpg",
    alt: "Sophie steering the boat at sunset with dolphins.",
    words: ["steer", "wheel", "dolphins", "sunset"],
    km: 1500,
    phrases: {
      simple: "Sophie steers the boat.",
      compound: "The sun is going down, and dolphins are jumping.",
      complex: "When Sophie sees the dolphins, she smiles."
    }
  },
  {
    id: 7,
    title: "Chores on deck",
    image: "images/scene-07.jpg",
    alt: "Brian writing, Cody sleeping and Sophie cleaning the deck.",
    words: ["write", "logbook", "mop", "deck"],
    km: 2800,
    phrases: {
      simple: "Brian writes in the logbook.",
      compound: "Sophie is cleaning, but Cody is sleeping.",
      complex: "Because Cody is lazy, Uncle Stew is angry."
    }
  },
  {
    id: 8,
    title: "The storm",
    image: "images/scene-08.jpg",
    alt: "The crew pulling ropes in a big storm.",
    words: ["pull", "waves", "ropes", "lightning"],
    km: 3800,
    phrases: {
      simple: "There is a big storm.",
      compound: "The waves are huge, yet Sophie isn't afraid.",
      complex: "Although the rain is strong, they pull the ropes."
    }
  },
  {
    id: 9,
    title: "Thinking of Bompie",
    image: "images/scene-09.jpg",
    alt: "Sophie on deck at night holding a photo of her grandfather.",
    words: ["remember", "stars", "photo", "lantern"],
    km: 4800,
    phrases: {
      simple: "Sophie looks at the stars.",
      compound: "The sea is calm, and she feels peaceful.",
      complex: "When she sees the photo, she remembers Bompie."
    }
  },
  {
    id: 10,
    title: "Bompie's arms",
    image: "images/scene-10.jpg",
    alt: "Sophie running to hug her grandfather in an English harbour.",
    words: ["run", "grandfather", "hills", "cottages"],
    km: 5500,
    phrases: {
      simple: "Sophie arrives in England.",
      compound: "She runs to Bompie, and he hugs her.",
      complex: "After many days at sea, Sophie finally sees her grandfather."
    }
  }
];

/** Total length of the trip, used by the route map. */
const TOTAL_KM = 5500;

/* ============================================================================
   SENTENCE LEVELS
   ============================================================================ */
const LEVELS = [
  { key: "simple",   label: "Simple",   emoji: "🟢" },
  { key: "compound", label: "Compound", emoji: "🔵" },
  { key: "complex",  label: "Complex",  emoji: "🟠" }
];

/* ============================================================================
   TEACHER EDIT ZONE: CUE WORDS
   ----------------------------------------------------------------------------
   After students see the simple sentence, a box shows the cue words for the
   NEXT level (compound, then complex), grouped by meaning, so they can try
   to build the harder sentence before they click "Level up".
   Add, remove or move words freely. Click a word in the app to hear it.
   ============================================================================ */
const CUE_WORDS = {
  compound: {
    heading: "Try a compound sentence 🔵",
    howTo: "Join two simple sentences with a comma + a FANBOYS word.",
    pattern: ["Sentence 1", ", and / but / so", "Sentence 2."],
    example: "Sophie is happy, so she sings.",
    groups: [
      { meaning: "add more", icon: "➕", words: ["and"] },
      { meaning: "different idea", icon: "↔️", words: ["but", "yet"] },
      { meaning: "result", icon: "➡️", words: ["so"] },
      { meaning: "choice", icon: "🔀", words: ["or"] },
      { meaning: "reason", icon: "💡", words: ["for"] },
      { meaning: "not this, not that", icon: "🚫", words: ["nor"] }
    ]
  },
  complex: {
    heading: "Try a complex sentence 🟠",
    howTo: "Start with a cue word + one idea, then a comma, then the main idea.",
    pattern: ["When / Because / Although + idea", ",", "main idea."],
    example: "Because it is cold, Sophie wears a hat.",
    groups: [
      { meaning: "time", icon: "⏰", words: ["when", "while", "before", "after", "as soon as", "until", "whenever"] },
      { meaning: "reason", icon: "💡", words: ["because", "since"] },
      { meaning: "surprise / contrast", icon: "↔️", words: ["although", "even though"] },
      { meaning: "condition", icon: "🤔", words: ["if", "unless"] }
    ]
  }
};

// Lists used to underline the joining word (longest first, so "as soon as" wins over "as").
const byLength = (a, b) => b.length - a.length;
const FANBOYS = CUE_WORDS.compound.groups.flatMap((g) => g.words).sort(byLength);
const SUBORDINATORS = CUE_WORDS.complex.groups.flatMap((g) => g.words).sort(byLength);

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

/**
 * Wraps the joining word of a sentence in <u class="joiner">.
 * Compound: the FANBOYS word that comes right after a comma (", but").
 * Complex: the first subordinating word (when, although, as soon as...).
 */
function highlightJoiner(sentence, levelKey) {
  const safe = escapeHtml(sentence);
  if (levelKey === "compound") {
    const re = new RegExp(",\\s+(" + FANBOYS.join("|") + ")\\b", "i");
    const m = safe.match(re);
    if (m) {
      const start = m.index + m[0].length - m[1].length;
      return safe.slice(0, start) + '<u class="joiner">' + m[1] + "</u>" + safe.slice(start + m[1].length);
    }
    // Fallback: first FANBOYS word anywhere
    const re2 = new RegExp("\\b(" + FANBOYS.join("|") + ")\\b", "i");
    return safe.replace(re2, '<u class="joiner">$1</u>');
  }
  if (levelKey === "complex") {
    const re = new RegExp("\\b(" + SUBORDINATORS.map(escapeRegex).join("|") + ")\\b", "i");
    return safe.replace(re, '<u class="joiner">$1</u>');
  }
  return safe;
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
   APPLICATION STATE
   ============================================================================ */
const state = {
  selectedPictureIndex: null,
  wordsRevealed: false,
  level: 0 // 0 = no sentence shown, 1 = simple, 2 = + compound, 3 = + complex
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

  btnRevealWords: document.getElementById("btn-reveal-words"),
  btnRevealPhrase: document.getElementById("btn-reveal-phrase"),
  btnHome: document.getElementById("btn-home"),
  btnReset: document.getElementById("btn-reset"),

  wordsContainer: document.getElementById("words-container"),
  wordsList: document.getElementById("words-list"),
  phraseContainer: document.getElementById("phrase-container"),
  levelCards: document.getElementById("level-cards"),
  cueBox: document.getElementById("cue-box"),

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
  state.wordsRevealed = false;
  state.level = 0;

  const item = PICTURES_DATA[index];

  elements.activityCounter.textContent = `Picture ${index + 1} of ${PICTURES_DATA.length}`;
  elements.activitySceneTitle.textContent = item.title;
  elements.activityImage.alt = item.alt;
  loadImage(elements.activityImage, item, index);

  elements.prevBtn.disabled = index === 0;
  elements.nextBtn.disabled = index === PICTURES_DATA.length - 1;

  renderWords(item.words);
  renderLevels();

  elements.wordsContainer.classList.remove("visible");
  updateButtonStates();

  elements.galleryView.classList.remove("active");
  elements.activityView.classList.add("active");

  // Animate the boat when moving between pictures; jump when opening from Home.
  moveBoatTo(item.km || 0, wasOpen);

  if (!wasOpen) window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderWords(words) {
  elements.wordsList.innerHTML = "";
  words.forEach((word, i) => {
    const pill = document.createElement("div");
    pill.className = i === 0 ? "word-pill word-pill-verb" : "word-pill";
    pill.innerHTML = i === 0
      ? `<span class="verb-tag">action</span><span>${escapeHtml(word)}</span>`
      : `<span>${escapeHtml(word)}</span>`;
    elements.wordsList.appendChild(pill);
  });
}

/**
 * Shows the cue words for the NEXT level:
 * after 🟢 simple -> compound cue words, after 🔵 compound -> complex cue words.
 */
function renderCueBox() {
  const nextKey = state.level === 1 ? "compound" : state.level === 2 ? "complex" : null;
  const box = elements.cueBox;
  if (!nextKey) {
    box.innerHTML = "";
    box.className = "cue-box";
    return;
  }
  const cues = CUE_WORDS[nextKey];
  const [p1, p2, p3] = cues.pattern;
  box.className = `cue-box cue-${nextKey} visible`;
  box.innerHTML = `
    <div class="cue-head">
      <span class="cue-title">${escapeHtml(cues.heading)}</span>
      <span class="cue-howto">${escapeHtml(cues.howTo)}</span>
    </div>
    <div class="cue-pattern" aria-label="Pattern">
      <span class="cue-slot">${escapeHtml(p1)}</span>
      <span class="cue-slot cue-slot-join">${escapeHtml(p2)}</span>
      <span class="cue-slot">${escapeHtml(p3)}</span>
    </div>
    <div class="cue-groups">
      ${cues.groups.map((g) => `
        <div class="cue-group">
          <span class="cue-meaning"><span aria-hidden="true">${g.icon}</span> ${escapeHtml(g.meaning)}</span>
          <div class="cue-chips">
            ${g.words.map((w) => `<button type="button" class="cue-chip" data-word="${escapeHtml(w)}" title="Listen">${escapeHtml(w)}</button>`).join("")}
          </div>
        </div>`).join("")}
    </div>
    <p class="cue-example"><strong>Example:</strong> ${highlightJoiner(cues.example, nextKey)}</p>
    <p class="cue-nudge">Say your sentence first, then click <strong>Level up</strong> to compare.</p>
  `;
  box.querySelectorAll(".cue-chip").forEach((chip) => {
    chip.addEventListener("click", () => speak(chip.dataset.word));
  });
}

/** Renders the sentence cards for the levels revealed so far. */
function renderLevels() {
  const item = PICTURES_DATA[state.selectedPictureIndex];
  elements.levelCards.innerHTML = "";

  LEVELS.slice(0, state.level).forEach((level, i) => {
    const sentence = (item.phrases && item.phrases[level.key]) || "";
    const card = document.createElement("div");
    card.className = `level-card level-${level.key}`;
    if (i === state.level - 1) card.classList.add("level-new");
    card.innerHTML = `
      <div class="level-card-text">
        <span class="level-tag">${level.emoji} ${level.label}</span>
        <p class="revealed-phrase-text">${highlightJoiner(sentence, level.key)}</p>
      </div>
      <button type="button" class="btn-speak" aria-label="Listen to the ${level.label.toLowerCase()} sentence" title="Listen">
        <span aria-hidden="true">🔊</span>
      </button>
    `;
    card.querySelector(".btn-speak").addEventListener("click", () => speak(sentence));
    elements.levelCards.appendChild(card);
  });

  renderCueBox();

  elements.phraseContainer.classList.toggle("visible", state.level > 0);
}

const ICON_CHECK = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
const ICON_EYE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path></svg>`;
const ICON_CHAT = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;
const ICON_UP = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"></polyline></svg>`;

function updateButtonStates() {
  elements.btnRevealWords.innerHTML = state.wordsRevealed
    ? `${ICON_CHECK}<span>Words revealed</span>`
    : `${ICON_EYE}<span>Reveal words</span>`;

  const btn = elements.btnRevealPhrase;
  btn.classList.remove("btn-level-2", "btn-level-3", "btn-done");
  if (state.level === 0) {
    btn.innerHTML = `${ICON_CHAT}<span>Reveal phrase</span>`;
  } else if (state.level === 1) {
    btn.classList.add("btn-level-2");
    btn.innerHTML = `${ICON_UP}<span>Level up 🔵</span>`;
  } else if (state.level === 2) {
    btn.classList.add("btn-level-3");
    btn.innerHTML = `${ICON_UP}<span>Level up 🟠</span>`;
  } else {
    btn.classList.add("btn-done");
    btn.innerHTML = `${ICON_CHECK}<span>All levels revealed</span>`;
  }
}

function revealWords() {
  state.wordsRevealed = true;
  elements.wordsContainer.classList.add("visible");
  updateButtonStates();
  if (window.innerWidth < 640) {
    elements.wordsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

/** First click: simple. Then "Level up 🔵" (compound), then "Level up 🟠" (complex). */
function revealNextLevel() {
  if (state.selectedPictureIndex === null || state.level >= LEVELS.length) return;
  state.level += 1;
  renderLevels();
  updateButtonStates();
  const newest = elements.levelCards.lastElementChild;
  if (newest) newest.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function resetLevelsAndWords() {
  stopSpeaking();
  state.wordsRevealed = false;
  state.level = 0;
  elements.wordsContainer.classList.remove("visible");
  elements.phraseContainer.classList.remove("visible");
  elements.levelCards.innerHTML = "";
  elements.cueBox.innerHTML = "";
  elements.cueBox.className = "cue-box";
  updateButtonStates();
}

function goHome() {
  resetLevelsAndWords();
  state.selectedPictureIndex = null;
  elements.activityView.classList.remove("active");
  elements.galleryView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetCurrentActivity() {
  resetLevelsAndWords();
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
elements.btnRevealWords.addEventListener("click", revealWords);
elements.btnRevealPhrase.addEventListener("click", revealNextLevel);
elements.btnHome.addEventListener("click", goHome);
elements.btnReset.addEventListener("click", resetCurrentActivity);

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
  updateButtonStates();

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
