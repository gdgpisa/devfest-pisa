# HeroTiling

The opening of every main surface: an 8 × 5 golden rectangle, edge to edge, tiled by squares of 5, 3, 2, 1 and 1 units and crossed by the spiral.

- The consumer provides the content of each square: title and actions in `.dp-hero__s5`, the year or a CallBox in `.dp-hero__s3`, the price or a CallBox in `.dp-hero__s2`. The two 1-squares stay empty.
- Text goes in the corner the spiral turns around: bottom right of the 5 (the class already aligns it), bottom left of the 3, top left of the 2.
- Colours are fixed: 3 `blue`, 2 `yellow`, 1-squares `green` and `red`, 5 `surface-raised`.
- Full width of the viewport, never inside the 1280px content column. On phones the squares stack and the spiral is hidden.
- The date in the preview is a placeholder.
