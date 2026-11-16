import type { APIRoute } from 'astro'
import { floorTiles, floorLines } from '@/lib/astro/hero-floor'

export const GET: APIRoute = () => new Response(
    `<svg xmlns="http://www.w3.org/2000/svg"><defs><path id="tiles" d="${floorTiles}"/><path id="lines" d="${floorLines}" vector-effect="non-scaling-stroke"/></defs></svg>`,
    { headers: { 'Content-Type': 'image/svg+xml' } },
)
