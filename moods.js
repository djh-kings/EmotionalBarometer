/*
 * Emotional Barometer — mood content
 * ----------------------------------
 * This is the ONLY file you need to edit to change the words for each mood.
 * The app code (index.html) reads from here.
 *
 * Each entry has three fields:
 *   n     The mood NAME, in capitals (shown on the dial). Keep as-is.
 *   c     The segment COLOUR (hex). Keep as-is — these match the printed wheel.
 *   body  The text shown when the wheel lands on this mood. See format below.
 *
 * Writing the `body` text (Markdown):
 *   • Separate paragraphs with a blank line.
 *   • Links:   [School of Life](https://www.theschooloflife.com)
 *   • Emphasis: *italic*  and  **bold**
 *   • Anything else is shown as plain text.
 *
 * For longer entries spanning several lines, wrap the text in backticks (`)
 * instead of quotes — then you can press Enter for new paragraphs freely, e.g.
 *
 *   body: `First paragraph here.
 *
 *   Second paragraph, with a [link](https://example.com).`
 *
 * NOTE: the body text below is placeholder copy and will be replaced with the
 * client's final wording.
 */
window.BAROMETER_MOODS = [
  { n:'HAPPY',        c:'#F2A93B', body:'A light, uncomplicated contentment — one of those rare hours when nothing needs fixing and the present feels entirely enough.' },
  { n:'AWED',         c:'#F0998A', body:'Wonder in the face of something far larger than ourselves; the pleasant smallness of standing before the vast and beautiful.' },
  { n:'NOSTALGIC',    c:'#8FC9E2', body:'A tender ache for a past that glows warmer in memory than it ever quite did in fact.' },
  { n:'ANXIOUS',      c:'#F4DC3C', body:`A restless bracing against dangers we cannot quite name. Everyone carries far more of it than they let on.

*Everyone is more anxious than they are inclined to tell us* — and we can at least hold out our arms to our similarly fractured neighbours, as if to say, in the kindest way possible: **'I know…'**

More on this mood at [The School of Life](https://www.theschooloflife.com).` },
  { n:'LOVING',       c:'#F3C0D2', body:'An open-hearted warmth toward another, wanting their good almost more keenly than our own.' },
  { n:'DREAMY',       c:'#4FA3D9', body:'Half here and half elsewhere; the mind drifting pleasantly off its leash, unbothered by the clock.' },
  { n:'CONFIDENT',    c:'#EE6F4B', body:'A quiet trust that we can meet whatever is coming — without any need to prove it to a soul.' },
  { n:'GUILTY',       c:'#C9A77C', body:'The uneasy sense of having fallen a little short of the person we had hoped to be.' },
  { n:'SULKY',        c:'#8C9095', body:'Intense anger bound to an intense refusal to say what is wrong — a strange privilege we reserve for those we trust to understand.' },
  { n:'GRATEFUL',     c:'#7FC3DC', body:'Noticing, for once, just how much had to go right for this ordinary moment to exist at all.' },
  { n:'ENVIOUS',      c:'#9CC03A', body:'A sharp wanting, sparked by another’s life — read kindly, it is a map of what we secretly long for.' },
  { n:'SOLITARY',     c:'#E4E1DA', body:'A chosen aloneness; the deep relief of being unobserved and, for a while, answerable to no one.' },
  { n:'OBSESSED',     c:'#F08CA6', body:`A mind circling one person or idea — telling us, in the end, more about ourselves than about them.

We may not really be getting to know another person properly, but we are *growing our insight into who we really are*. [Read more](https://www.theschooloflife.com).` },
  { n:'UGLY',         c:'#5C5F63', body:'The days we can hardly bear our own reflection, forgetting that everyone, sometimes, feels exactly this.' },
  { n:'PRACTICAL',    c:'#8FD3C2', body:'Head down, sleeves up: the steadying, underrated satisfaction of simply getting things done.' },
  { n:'WEEPY',        c:'#CDBBA0', body:'Close to tears for no single reason — a softness that has been waiting quietly to be let out.' },
  { n:'SENSUAL',      c:'#B79BC4', body:'Awake to the body and its small pleasures: texture, warmth, taste, the grace of being touched.' },
  { n:'MELANCHOLY',   c:'#9AA7D0', body:'A gentle, unhurried sadness that knows the world is bittersweet — and rather loves it anyway.' },
  { n:'SELF-PITYING', c:'#C5E07A', body:'Quietly convinced the world has been unfair to us in particular; a mood best met with a little humour.' },
  { n:'NEEDY',        c:'#C6BCE0', body:'An unashamed wish to be held and reassured — the brave admission that we cannot do it all alone.' }
];
