# Emotional Barometer

An interactive web version of the School of Life *Emotional Barometer* — a tool
to help us explain our moods.

> It can be remarkably hard to tell other people how we really feel; it may even
> be tricky for us to get clear about our own moods. This is a tool to help us
> overcome our vagueness.

Spin or drag the wheel of **twenty moods** to reveal a short definition of each
feeling — from *anxious* and *nostalgic* to *grateful*, *dreamy* and *needy*.

## The twenty moods

Happy · Awed · Nostalgic · Anxious · Loving · Dreamy · Confident · Guilty ·
Sulky · Grateful · Envious · Solitary · Obsessed · Ugly · Practical · Weepy ·
Sensual · Melancholy · Self-Pitying · Needy

## Running it

It's a single, dependency-free static page. Open `index.html` directly in a
browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How it works

- The wheel is drawn with SVG, one colour segment per mood (18° each); the
  fixed pointer at the top marks the current selection.
- **Press the centre dial** for a random spin, or **drag/flick the wheel**
  directly — a real friction model lets it coast and settle naturally onto a
  mood. The dial shows the colour passing under the pointer as it turns.
- When the wheel stops, the chosen mood's name appears on the dial and its
  definition fades in below.

The app lives in `index.html` (markup, styles and vanilla JS) — no build step and
no external dependencies beyond the Google Fonts used for typography.

## Editing the mood text

All wording lives in **`moods.js`** — the only file you edit to change copy. Each
mood has a `body` written in **Markdown**:

- Separate paragraphs with a blank line.
- Links: `[School of Life](https://www.theschooloflife.com)` — these open in a new
  tab and are restricted to `http`/`https`/`mailto` for safety.
- Emphasis: `*italic*` and `**bold**`.

For multi-paragraph entries, use backticks instead of quotes so you can press
Enter freely (see the comment at the top of `moods.js`). The mood names and
segment colours match the printed wheel and should be left as they are.
