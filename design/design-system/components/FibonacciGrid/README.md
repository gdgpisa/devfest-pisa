# FibonacciGrid

Layout primitive: an 8 × 5 rectangle tiled by squares of side 5, 3, 2, 1 and 1 units. Each square holds one idea.

- Unit is `space-55` on desktop and `space-34` under 520px. For a poster, scale the unit up; keep the proportions.
- Put the most important fact (the date in `numeral-89` or `numeral-144`, rubric `red`) in the 5-square. Venue, motto and the lockup go in the 3- and 2-squares. The two 1-squares are solid colour, no text.
- Fill squares with `surface-raised`, a pastel, or a core colour; text on a fill is `on-pastel`. At most one square in each core colour.
- The golden spiral runs through the squares as one continuous line: a quarter circle in each square, from the 5 down to the two 1s, in `ink` at `stroke-2`. It is drawn by `.dp-fib__spiral` on top of the tiles. Content in each square sits in the corner the arc turns around (its centre), where the line never passes: bottom right in the 5, bottom left in the 3, top left in the 2. The grid's own classes already align it there.
- Squares keep `radius-0`. The outer frame has a `stroke-2` ink contour; inner seams are `hairline`.
- Date and venue in the preview are placeholders until confirmed.
