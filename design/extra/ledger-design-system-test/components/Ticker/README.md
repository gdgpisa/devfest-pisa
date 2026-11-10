# Ticker

A dark band that scrolls session times and tracks like a market feed, at the top of a page.

- The consumer provides items of symbol (track or `DVFS`), value (a time, a year, a price) and a short note. Real schedule data only; never invented figures.
- Repeat the item list twice inside `.lg-ticker__track` so the loop is seamless. It stops moving when the viewer asks for reduced motion.
- `▲` and `green-30` mark what is next; `brand` yellow marks the edition and the price. One ticker per page.
