# AgendaRow

One session on one ruled line: big start time, title with speaker and meta, track chip on the right.

- The consumer provides the time (24h), title, speaker and role, room and length, and one TrackTag.
- `.dp-row__time--now` paints the time `red` for the session running now; one per view.
- Rows stack with no gap; the lines between them are the structure. This replaces SessionCard on the site.
- Speaker names in the preview are placeholders.
