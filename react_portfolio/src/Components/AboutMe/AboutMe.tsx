import React from 'react'

import headshot            from '../../assets/images/headshot.jpeg'
// import '../../assets/images/animeDirectory'
import { ParticlesCanvas } from './Components/ParticlesCanvas'
import { SiPnpm }          from "react-icons/all";

export default function AboutMe() {

    function animePopup() {
        var bck = document.getElementById('AboutMe');

        if(!bck) return;
        console.log(bck);

    }

    return (
        <div>
            {/*<ParticlesCanvas classNames={'absolute -z-50'} />*/}
            <div
                id={'AboutMe'}
                className={'backdrop-blur-sm w-screen bg-slate-800 text-center p-[5%]'}
            >
                <div
                    className={
                        ' container sm:mx-auto h-fit flex flex-col sm:flex-row' +
                        ' w-full place-items-center' +
                        ' sm:justify-around mx-auto py-10 gap-7'
                    }
                >
                    <div className={'w-48 sm:w-96 mx-3'}>
                        <img
                            className={'rounded-full md:rounded-[25%]'}
                            src={headshot}
                            alt={"Aruksh's Headshot"}
                            loading={'lazy'}
                            id={'headshotImg'}
                        />
                    </div>
                    <div className={'flex flex-col'}>
                        <div className={'text-white bg-white/10 rounded-xl mx-3 p-4 text-left w-full'}>
                            <h2 className={'tracking-wider italic font-bold text-xl text-center'}>Let me brag about
                                myself a
                                little...</h2>
                            <br/>
                            <p>Hello <span>👋</span> my name is Aruksh Patel.</p>
                            <br/>
                            <p>
                                I am a self-learning developer with my education obtained from University of Oklahoma,
                                but
                                primarily through my own research and development...
                                <span className={'blur hover:blur-none duration-150'}>
                                <span className={'italic'}>Google searches and projects </span>
                                😅
                            </span>
                            </p>
                            <br/>
                            <p>
                                I am extremely passionate for Web/Application Development (including Frontend and
                                Backend
                                Development.
                            </p>
                            <br/>
                            <p>Besides only having one true love for development, I consider myself to be a handy-dandy
                                man, willing to take on any task or project without having a clue only knowing that I
                                will
                                succeed. </p>

                        </div>
                        <div className={'text-white bg-white/10 rounded-xl m-3 p-4 text-left w-full'}>
                            <p className={'tracking-wider italic font-bold text-xl text-center'}>You may be wondering
                                "<span className={'not-italic'}>🤔</span> what else does he like besides bragging about
                                yourself?"</p>
                            <br/>
                            <p>Well let me tell you... I am an <span onMouseEnter={animePopup}
                                                                     className={'text-purple-400 underline'}>Anime</span> and <span
                                className={'text-red-400 underline'}>Marvel</span> FANATIC.
                                I have also recently started taking interest in <span
                                    className={'text-red-400 italic underline'}> F1</span> Racing and like to keep up
                                with <span className={'underline'}>
                                    <span>S</span>
                                    <span className={'text-white/40'}>o</span>
                                    <span>c</span>
                                    <span className={'text-white/40'}>c</span>
                                    <span>e</span>
                                    <span className={'text-white/40'}>r</span></span> from
                                time-to-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
