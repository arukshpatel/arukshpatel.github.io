import React, { useState } from "react";

import {ReactComponent as DoubleDownArrow} from "../../assets/icons/double_arrow_down.svg";
import {
    RiInstagramLine,
    RiGithubLine,
    RiFacebookCircleLine,
    RiLinkedinLine,
    RiSpotifyLine,
    RiSnapchatLine, RiTwitterLine, RiFacebookLine
}                                          from 'react-icons/ri'

export default function Intro()
{

    return (
        <div className={'grid grid-cols-1'}>
            <div className={'container mx-auto h-full mt-40'}>
                <div className={'w-full h-full place-items-center'}>
                    <div className={'mx-auto my-auto px-5 lg:w-4/5 max-w-[1080px] grid grid-rows-3 text-center'}>
                        <div className={'introHeading w-full grid grid-cols-2 grid-rows-none place-content-center'}>
                            <h2>
                                HELLO!!!
                            </h2>
                            <h2 className={'text-xl hover:text-2xl hover:animate-wave duration-150 ease-in-out'}>👋</h2>
                        </div>
                        <div className={'text-center inline-block align-middle my-5 place-content-center'}>
                            <p className={"inline-block text-sm lg:text-lg align-middle text-gray-500"}>Self-learning software engineering through research & development.</p>
                        </div>
                        <div className={'my-5 place-content-center'}>
                            <button className={'border-blue-500 text-blue-700 hover:bg-blue-500' +
                                ' introHeading-Button'}>
                                Resume
                            </button>
                            <button className={'border-gray-500 text-gray-700 hover:bg-gray-500 introHeading-Button'}>
                                Projects
                            </button>
                            <button className={'border-teal-500 text-teal-700 hover:bg-teal-500 introHeading-Button'}>
                                Hire Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'text-center flex flex-col absolute bottom-0 inset-x-0 text-base lg:text-xl' +
                ' items-center z-10 text-gray-500 hover:text-black'}>
                <span className={'mb-2'}>About Me</span>
                <div className={'animate-bounce w-4 lg:w-7'}>
                    <DoubleDownArrow/>
                </div>
            </div>

        </div>

    );
}