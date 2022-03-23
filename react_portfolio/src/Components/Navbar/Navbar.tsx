import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

import MenuItems from './Components/MenuItems'

import SocialItemsList from './Components/SocialItems'

import { HiPlus } from 'react-icons/hi'

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    // useEffect()
    const handleClick = () => {
        setNavOpen(!navOpen)
    }

    return (
        <div>
            <div
                className={
                    (!navOpen ? ' top-2 rounded-3xl h-20' : ' pt-2 top-0 rounded-b-3xl h-20 lg:h-20') +
                    (!navOpen ? ' bg-white/[.15]' : ' bg-white/[.65]') +
                    ' lg:rounded-3xl drop-shadow-2xl' +
                    ' w-full sm:w-auto sm:left-[5%] sm:right-[5%] lg:top-2 xl:left-[10%] lg:right-[10%] ' +
                    ' max-w-[1080px] flex flex-col' +
                    ' place-content-center justify-around place-items-center' +
                    ' fixed backdrop-blur-xl' +
                    ' ease-in-out ' +
                    ' duration-300 mx-auto'
                }
            >
                <div
                    className={
                        ' w-full lg:w-4/5 sm:max-w-[1080px] h-full z-50' +
                        ' flex' +
                        ' place-items-center' +
                        ' justify-between'
                    }
                >
                    <h1 className={'navbar-brand duration-150'}>
                        <a href={'/'}>Aruksh Patel</a>
                    </h1>

                    <MenuItems collapsed={false} />

                    <button
                        className={'navbar-menuButton ' + (!navOpen ? 'rotate-0' : 'rotate-45')}
                        onClick={handleClick}
                    >
                        <div className={'text-white/10 m-1 bg-black/[0] bg-clip-text  rounded-full'}>
                            <div className={'bg-transparent rounded-full'}>
                                <HiPlus className={'text-white/[.75]'} size={30} />
                            </div>
                        </div>

                        {/*{!navOpen ? <RiMenuFill className={'mx-3 '} /> : <CloseMenu className={'mx-3'} />}*/}
                    </button>
                </div>

                <Transition
                    className={'lg:hidden w-full'}
                    show={navOpen}
                    appear={true}
                    enter="duration-300 ease-in-out"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave=" duration-300 ease-in-out"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-50"
                >
                    <MenuItems collapsed={true} />
                </Transition>
            </div>

            <SocialItemsList />
        </div>
    )
}
