# Sophie's Journey ⛵

A picture description app for a 5th-grade EFL class (ages 10–11, level A1–A2), based on scenes from *The Wanderer*.

Students look at 10 pictures of Sophie's trip across the Atlantic, say what is happening, reveal the key words, and then reveal model sentences level by level:

- 🟢 **Simple** sentence
- 🔵 **Compound** sentence (FANBOYS: for, and, nor, but, or, yet, so)
- 🟠 **Complex** sentence (because, when, although, while, before, after, as soon as)

Each sentence card has a 🔊 button that reads it aloud. A small route map shows how far Sophie has sailed (≈ km of 5,500 km).

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
  words: ["steer", "wheel", "dolphins", "sunset"], // the first word is the verb (action)
  km: 1500,                                          // 0 to 5,500: moves the boat on the map
  phrases: {
    simple:   "Sophie steers the boat.",
    compound: "The sun is going down, and dolphins are jumping.",
    complex:  "When Sophie sees the dolphins, she smiles."
  }
}
```

Change the text between the quotes and save. The joining word (*and, but, so, yet, when, because…*) is underlined automatically.

## Replace the images

Put the pictures in the `images` folder with these names:

```
images/scene-01.jpg … images/scene-10.jpg
```

Use landscape pictures (16:9), about 1600 × 900 px. If a picture is missing, the app shows a coloured placeholder with the scene number and title, so it still works.

## Run it locally

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy

Import this repository into [Vercel](https://vercel.com) as a new project. Framework preset: **Other**. No build command and no output directory are needed.
