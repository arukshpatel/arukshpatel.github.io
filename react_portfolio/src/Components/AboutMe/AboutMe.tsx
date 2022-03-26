import React from 'react'

import headshot from '../../assets/images/headshot.jpeg'
import { ParticlesCanvas } from './Components/ParticlesCanvas'

export default function AboutMe() {
    return (
        <div
            id={'AboutMe'}
            className={'backdrop-blur-3xl w-screen h-1/3 bg-slate-800 text-center px-[5%] lg:px-0 py-[5%]'}
        >
            <div
                className={
                    'bg-white/10 rounded-xl max-w-[1080px] h-fit flex flex-col sm:flex-row place-items-center' +
                    ' justify-center' +
                    ' sm:justify-around mx-auto py-10 gap-7'
                }
            >
                <div className={'w-24 md:w-48'}>
                    <img className={'rounded-full md:rounded-[25%]'} src={headshot} alt={"Aruksh's Headshot"} />
                </div>
                <div>
                    <p>Hello my name is Aruksh</p>
                </div>
            </div>
            <ParticlesCanvas />
        </div>
    )
}
