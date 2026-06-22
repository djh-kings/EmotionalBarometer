# Emotional Barometer

An interactive web version of the School of Life *Emotional Barometer* — a tool
to help us explain our moods.

> It can be remarkably hard to tell other people how we really feel; it may even
> be tricky for us to get clear about our own moods. This is a tool to help us
> overcome our vagueness.

Spin or drag the wheel of **twenty moods**, or tap a segment, to reveal a short
definition of each feeling — from *anxious* and *nostalgic* to *grateful*,
*dreamy* and *needy*.

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

- The wheel is drawn with SVG, one rounded segment per mood (18° each).
- **Drag** to spin freely, **tap** a segment to select it, or press **SPIN**
  for a random mood — the pointer at the top marks the current selection.
- Selecting a mood updates the card with its name, colour and definition.

Everything lives in `index.html` (markup, styles and vanilla JS) — no build step
and no external dependencies beyond the Google Fonts used for typography.
