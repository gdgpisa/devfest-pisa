# SessionCard

Agenda entry: the start time as a big bold numeral, then title, speaker and meta line.

- The consumer provides time (24h, `09:30`), title, speaker name and role, one TrackTag, room and length.
- `.dp-session__time--now` paints the time in rubric `red`: use it on the session running now or the next one, never on more than one card in view.
- Cards stack with `space-21` between them. On phones the time moves above the title.
- Example names in the preview are placeholders, not confirmed speakers.
