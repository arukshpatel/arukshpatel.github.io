import { FaArrowRight } from 'react-icons/fa'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import React from 'react'

export default function Intro() {
    return (
        <div className={'mx-auto w-screen h-screen max-w-[1080px]'}>
            <div className={'container h-fit py-[35vh]'}>
                <div className={'introHeading group'}>
                    <h2>HELLO!!!</h2>
                    <h2 className={'text-xl group-hover:text-2xl group-hover:animate-wave duration-150 ease-in-out'}>
                        👋
                    </h2>
                </div>
                <div className={'sm:text-center align-middle my-5 mx-5 sm:mx-0 ease-in-out duration-1000'}>
                    <p className={'text-sm lg:text-lg align-middle text-gray-500'}>
                        Self-learning software engineering through research & development.
                    </p>
                </div>
                <div className={'ml-5 sm:mx-0 my-5 flex flex-row justify-start sm:justify-center'}>
                    <button
                        className={
                            'border-blue-500 text-blue-700 hover:bg-blue-500 hidden sm:block introHeading-Button'
                        }
                    >
                        Resume
                    </button>
                    <button
                        className={
                            'border-gray-500 text-gray-700 hover:bg-gray-500 hidden sm:block introHeading-Button'
                        }
                    >
                        Projects
                    </button>
                    <button
                        className={
                            'border-teal-500 text-teal-700 hover:bg-teal-500 hidden sm:block introHeading-Button'
                        }
                    >
                        Hire Me
                    </button>
                    <button className={'block sm:hidden temporary-bounce'}>
                        <div className={'group '}>
                            <div
                                className={
                                    'MyWorkButton flex flex-row mx-5 my-2 hover:mx-0 hover:my-0' +
                                    ' hover:px-5 hover:py-2'
                                }
                            >
                                <span
                                    className={
                                        'underline underline-offset-0 decoration-2 decoration-black/10' +
                                        ' group-hover:decoration-white/50'
                                    }
                                >
                                    My Work
                                </span>
                                <div
                                    className={'bg-gradient-to-r rounded-full from-rose-500 to-purple-400 bg-clip-text'}
                                >
                                    <FaArrowRight
                                        className={
                                            'duration-300 text-black/30 group-hover:text-white/50' +
                                            ' animate-bounceRight'
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div
                className={
                    'text-center flex flex-col inset-x-0 text-base lg:text-xl' +
                    ' place-items-center text-gray-500 hover:text-black bg-gradient-to-t'
                }
            >
                <div className={'absolute place-items-center bottom-0'}>
                    <a href={'#AboutMe'}>
                        <span className={'mb-2'}>About Me</span>
                    </a>
                    <div className={'mx-auto animate-bounce w-4 lg:w-7'}>
                        <HiOutlineChevronDoubleDown />
                    </div>
                </div>
            </div>
        </div>
    )
}
