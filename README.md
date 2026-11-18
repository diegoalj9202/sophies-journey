# Sophie's Journey ⛵

A picture description app for a 5th-grade EFL class (ages 10–11, level A1–A2), based on scenes from *The Wanderer*.

Students look at 10 pictures of Sophie's trip across the Atlantic. Each picture has **3 levels**. In every level, students get words or a hint first, try their own sentence, and then reveal a model sentence that uses exactly those words:

| Level | Students get | They make |
|---|---|---|
| 🟢 1 · Simple | 4 key words: 1 action verb + 3 nouns | a simple sentence with all 4 words |
| 🔵 2 · Compound | + 2 new words: a FANBOYS word + one more word | a longer sentence: simple sentence + comma + FANBOYS + new idea |
| 🟠 3 · Complex | a hint (joining word + idea) and a frame, e.g. `Although ___, Sophie ___.` | a complex sentence (comma after the first part) |

The flow for each picture is: **Reveal words → Show sentence → Level up 🔵 → Show sentence → Level up 🟠 → Show sentence → Done! ✓**. Only the next button is shown. Earlier levels stay on screen.

In each model sentence, the target words are highlighted in the colour of their chips, including other forms of the verb (*read → reads*, *carry → carries*). The joining word is underlined. Once the sentence is shown, its chips get a ✓. Click any chip or 🔊 to hear it read aloud.

A small route map shows how far Sophie has sailed (≈ km of 5,500 km).

It is a static site (plain HTML, CSS and JavaScript). There is no build step.

**Keyboard:** `Esc` = Home · `←` / `→` = previous / next picture.

## Edit the content

Open `script.js`. At the top you will find the `PICTURES_DATA` list. Each picture looks like this:

```js
{
  id: 6,
  title: "Dolphins at sunset",
  image: "images/scene-06.jpg",
  alt: "Sophie steering the boat at sunset with dolphins.",
  km: 1500,                                             // 0 to 5,500: moves the boat on the map
  levels: {
    simple: {
      words: ["steer", "boat", "dolphins", "sunset"],   // the first word is the verb (action)
      sentence: "Sophie steers the boat near the dolphins at sunset."
    },
    compound: {
      newWords: ["and", "jump"],                        // FANBOYS word + 1 word
      sentence: "Sophie steers the boat near the dolphins at sunset, and they jump next to her."
    },
    complex: {
      conjunction: "when",
      idea: "she sees them",
      frame: "When ___, Sophie ___.",                   // ___ = a blank
      sentence: "When Sophie sees the dolphins, she steers the boat closer at sunset."
    }
  }
}
```

Change the text between the quotes and save. Make sure each sentence uses its level's words: they are highlighted automatically.

Joining words for reference (also in the Teacher Guide):

- 🔵 FANBOYS: *and* (add) · *but, yet* (different idea) · *so* (result) · *or* (choice) · *for* (reason) · *nor*
- 🟠 Complex: time *when, while, before, after, as soon as, until* · reason *because, since* · contrast *although, even though* · condition *if, unless*

## Replace the images

Put the pictures in the `images` folder with these names:

```
images/scene-01.jpg … images/scene-10.jpg
```

Use landscape pictures (16:9), about 1600 × 900 px. If a picture is missing, the app shows a coloured placeholder with the scene number and title, so it still works.

## Run it locally

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy

The repository is connected to Vercel, so every push to `main` updates https://sophies-journey.vercel.app. For a new copy: import the repository into [Vercel](https://vercel.com) as a new project, Framework preset **Other**, with no build command and no output directory.
