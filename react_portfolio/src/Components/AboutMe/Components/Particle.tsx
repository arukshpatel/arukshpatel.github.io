import { ParticlesCanvas } from './ParticlesCanvas'

export class Particle {
    x: number
    y: number
    directionX: number
    directionY: number
    size: number
    color: string
    PC: ParticlesCanvas = require('ParticlesCanvas')

    constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
    }

    draw() {
        this.PC.canvasCtx?.beginPath()
        this.PC.canvasCtx?.arc(this.x, this.y, this.size, 0, Math.PI, false)
        // @ts-ignore
        this.PC.canvasCtx.fillStyle = this.color

        // @ts-ignore
        this.PC.canvasCtx.fill()
    }

    /**
     * check particle position, check mouse position
     */
    update() {
        //check if particle is still within canvas
        // @ts-ignore
        if (this.x > this.PC.canvas.width || this.x < 0) {
            this.directionX = -this.directionX
        }

        // @ts-ignore
        if (this.y > this.PC.canvas?.height) {
            this.directionY = -this.directionY
        }
    }
}
