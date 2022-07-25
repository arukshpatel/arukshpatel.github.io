import React, { useContext, useEffect, useRef, useState } from 'react'

import headshot            from '../../assets/images/headshot.jpeg'
import { ParticlesCanvas } from './Components/ParticlesCanvas'

export default function AboutMe() {
    return (
        <div>
            {/*<ParticlesCanvas classNames={'absolute -z-50'} />*/}
            <div
                id={'AboutMe'}
                className={'backdrop-blur-sm w-screen h-1/3 bg-slate-800 text-center px-[5%] lg:px-0 py-[5%]'}
            >
                <div
                    className={
                        ' container mx-auto w-screen max-w-[1080px] h-fit flex flex-col sm:flex-row place-items-center' +
                        ' justify-center' +
                        ' sm:justify-around mx-auto py-10 gap-7'
                    }
                >
                    <div className={'w-24 md:w-48 mx-3'}>
                        <img
                            className={'rounded-full md:rounded-[25%]'}
                            src={headshot}
                            alt={"Aruksh's Headshot"}
                            loading={'lazy'}
                        />
                    </div>
                    <div className={'text-white bg-white/10 rounded-xl'}>
                        <p>Hello my name is Aruksh Patel.</p>
                        <p>
                            I am a self-learning developer with my education obtained from University of Oklahoma. I am
                            extremely passionate for Web/Application Development (including Frontend and Backend
                            Development.
                        </p>
                        <p>Besides</p>
                    </div>

                    {/*<ParticlesCanvas/>*/}
                </div>
                <div></div>
            </div>
        </div>
    )
}
