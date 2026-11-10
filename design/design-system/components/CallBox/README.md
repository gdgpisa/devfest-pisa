# CallBox

A clickable square for a call to action that reveals its full copy on hover or keyboard focus.

- Two reveals: `.dp-call--speakers` with a `.dp-call__curtain` face that slides up (Call for Speakers), and `.dp-call--flip` with a `.dp-call__card` that turns over to `.dp-call__back` (Call for Sponsors).
- The consumer provides an `<a>` to the section or form, the visible face (title and a one-line hint with an arrow) and the hidden face (eyebrow, the approved call copy, an action label).
- The visible face must make sense alone: touch screens may never show the hidden face, and a tap follows the link.
- Inside the HeroTiling, the speakers box fills the 3-square and the sponsors box the 2-square. Keep text clear of the spiral (top left in the 2-square).
- Hidden faces use `reveal` with `surface` text. Reduced motion shows the reveal without movement.
