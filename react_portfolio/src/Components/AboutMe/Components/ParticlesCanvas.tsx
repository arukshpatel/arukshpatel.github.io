import React, { useEffect, useRef, useState } from 'react'

type ParticleProps = {
    size?: number
    particleColor?: string
    classNames?: string
    canvasWidth?: number
    canvasHeight?: number
}

export function ParticlesCanvas(props: ParticleProps) {
    class Particle
    {
        x: number
        y: number
        directionX: number
        directionY: number
        size: number
        color: string
        maxWidth: number
        maxHeight: number

        constructor(
            x: number,
            y: number,
            directionX: number,
            directionY: number,
            size: number,
            color: string,
            width: number,
            height: number,
        ) {
            this.x = x
            this.y = y
            this.directionX = directionX
            this.directionY = directionY
            this.size = size
            this.color = color
            this.maxWidth = width
            this.maxHeight = height
        }

        draw(canvasCtx: CanvasRenderingContext2D) {
            canvasCtx.beginPath()
            canvasCtx.fillStyle = this.color
            canvasCtx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2, false)
            canvasCtx.fill()
        }

        /**
         * check particle position, check mouse position
         */
        update() {
            //check if particle is still within canvas

            if(this.x > this.maxWidth || this.x < 0) {
                this.directionX = -this.directionX
            }

            if(this.y > this.maxHeight || this.y < 0) {
                this.directionY = -this.directionY
            }

            this.x += this.directionX
            this.y += this.directionY
        }
    }

    let canvasCtx: any
    let particlesArray: Particle[]

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [canvasHeight, setCanvasHeight] = useState(null)
    const [canvasWidth, setCanvasWidth] = useState(null)

    function initParticles(canvasRef: any) {
        particlesArray = []

        // @ts-ignore
        let numOfParticles = (canvasHeight * canvasWidth) / 2400
        // let numOfParticles = window.innerWidth
        for(let i = 0; i < numOfParticles; i++) {
            let size = props.size ? props.size : Math.random() * 15
            // @ts-ignore
            let x = Math.random() * (canvasWidth - size * 2 - size * 2) + size * 2
            // @ts-ignore
            let y = Math.random() * (canvasHeight - size * 2 - size * 2) + size * 2
            let directionX = Math.random() * 5 - 2.5
            let directionY = Math.random() * 5 - 2.5
            let color = props.particleColor ? props.particleColor : '#ff0000'

            particlesArray?.push(
                new Particle(
                    x,
                    y,
                    directionX,
                    directionY,
                    size,
                    color,
                    canvasRef.current.width,
                    canvasRef.current.height,
                ),
            )
        }

        console.log(particlesArray)
        console.log(canvasWidth + '\t' + canvasHeight)
        console.log(canvasRef.current?.width + '\t' + canvasRef.current?.height)
    }

    useEffect(() => {
        canvasCtx = canvasRef.current?.getContext('2d')

        initParticles(canvasRef)
        // @ts-ignore
        setCanvasWidth(canvasRef.current?.width)
        // @ts-ignore
        setCanvasHeight(canvasRef.current?.height)

        const connect = () => {
            for(let a = 0; a < particlesArray.length; a++) {
                for(let b = a; b < particlesArray.length; b++) {
                    let distance =
                            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
                            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y)

                    // @ts-ignore
                    if(distance < (canvasWidth / 7) * (canvasHeight / 7)) {
                        canvasCtx.strokeStyle = 'rgb(250,175,220)'
                        canvasCtx.lineWidth = 1
                        canvasCtx.beginPath()
                        canvasCtx.moveTo(particlesArray[a].x, particlesArray[a].y)
                        canvasCtx.lineTo(particlesArray[b].x, particlesArray[b].y)
                        canvasCtx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            canvasCtx.clearRect(0, 0, canvasWidth, canvasHeight)
            for(let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update()
                particlesArray[i].draw(canvasCtx)
                connect()
            }
            // connect()
            window.requestAnimationFrame(animate)
        }
        animate()

        function handleResize() {
            // canvasCurrent.width = window.screen.availHeight
            // canvasCurrent.height = window.screen.availHeight
            // @ts-ignore
            setCanvasHeight(canvasRef.current?.height)
            // @ts-ignore
            setCanvasWidth(canvasRef.current?.width)
            initParticles(canvasRef)
            animate()
        }

        window.addEventListener('resize', handleResize)
    })

    return <canvas ref={canvasRef} id={'particlesCanvas'} className={props.classNames}/>
}
