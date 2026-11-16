// Project the pavement through the tower asset's front and side base corners.
export const floorFront = { x: 189.7, y: 684.5 }
export const floorLeft = { x: 2.5, y: 575.5 }
export const floorRight = { x: 373, y: 571.5 }
export const floorBounds = { left: -1800, right: 600, top: -350, bottom: 700 }

const floorHorizon = -600
const floorDepthX = (floorFront.y - floorRight.y) / (floorRight.y - floorHorizon)
const floorDepthY = (floorFront.y - floorLeft.y) / (floorLeft.y - floorHorizon)
const floorAxisX = floorRight.x * (1 + floorDepthX) - floorFront.x
const floorAxisY = floorLeft.x * (1 + floorDepthY) - floorFront.x

function projectFloor(x: number, y: number) {
    const depth = 1 + floorDepthX * x + floorDepthY * y
    return {
        x: (floorFront.x + floorAxisX * x + floorAxisY * y) / depth,
        y: floorHorizon + (floorFront.y - floorHorizon) / depth,
    }
}

export function floorPoint(point: { x: number; y: number }) {
    return `${point.x.toFixed(1)} ${point.y.toFixed(1)}`
}

// Bake only two paths at build time; the browser reuses them from the SVG sprite.
let tiles = ''
for (let x = -12; x < 48; x++) {
    for (let y = -12; y < 48; y++) {
        if ((x + y) % 2 === 0 || 1 + floorDepthX * x + floorDepthY * y <= 0.2) continue
        const corners = [
            projectFloor(x, y),
            projectFloor(x + 1, y),
            projectFloor(x + 1, y + 1),
            projectFloor(x, y + 1),
        ]
        if (
            corners.every(point => point.x < floorBounds.left) ||
            corners.every(point => point.x > floorBounds.right) ||
            corners.every(point => point.y < floorBounds.top) ||
            corners.every(point => point.y > floorBounds.bottom)
        ) continue
        tiles += `M${corners.map(floorPoint).join('L')}Z`
    }
}
export const floorTiles = tiles

const floorNearDepth = (floorFront.y - floorHorizon) / (floorBounds.bottom - floorHorizon)
const floorFarDepth = (floorFront.y - floorHorizon) / (floorBounds.top - floorHorizon)
let lines = ''
for (let line = -12; line <= 48; line++) {
    const nearX = projectFloor(line, (floorNearDepth - 1 - floorDepthX * line) / floorDepthY)
    const farX = projectFloor(line, (floorFarDepth - 1 - floorDepthX * line) / floorDepthY)
    const nearY = projectFloor((floorNearDepth - 1 - floorDepthY * line) / floorDepthX, line)
    const farY = projectFloor((floorFarDepth - 1 - floorDepthY * line) / floorDepthX, line)
    lines += `M${floorPoint(nearX)}L${floorPoint(farX)}M${floorPoint(nearY)}L${floorPoint(farY)}`
}
export const floorLines = lines
export const floorBase = `M${[floorFront, floorRight, projectFloor(1, 1), floorLeft].map(floorPoint).join('L')}Z`
export const floorFrontEdge = `M${[floorLeft, floorFront, floorRight].map(floorPoint).join('L')}`
