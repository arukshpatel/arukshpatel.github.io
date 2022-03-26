import React from 'react'
import { Particle } from './Particle'

type ParticleProps = {
    size?: number
    particleColor?: string
    classNames?: string
}

export class ParticlesCanvas extends React.Component<ParticleProps, any> {
    private class = ParticlesCanvas
    public canvasHeight: number = window.innerHeight
    public canvasWidth: number = window.innerWidth
    public particlesArray: Particle[] | undefined

    public canvasCtx: CanvasRenderingContext2D | null | undefined
    public canvas: Promise<CanvasRenderingContext2D | null> | undefined

    async findCanvas() {
        return (document.getElementById('particleCanvas') as HTMLCanvasElement).getContext('2d')
    }

    componentDidMount() {
        this.canvas = this.findCanvas()
        try {
            console.log('Setting canvas')
            // this.canvasCtx = this.canvas.getContext('2d')
        } catch (e) {
            console.log('not set, retrying')
            this.findCanvas().then(
                ctxSuccess => {
                    this.canvasCtx = ctxSuccess
                    console.log('SUCESS')
                },
                ctxReject => {
                    this.canvasCtx = undefined
                    console.log('FAILED')
                },
            )
        }
    }

    render() {
        return <canvas id={'particlesCanvas'} className={this.props.classNames} />
    }
}
