import React, { useState } from "react";
import {Transition}        from "@headlessui/react";

import {ReactComponent as TwoBarMenu} from '../../assets/icons/2barMenu.svg';
import {ReactComponent as CloseMenu}  from '../../assets/icons/Close.svg';

import MenuItems                         from "./Components/MenuItems";
import {
    RiFacebookLine,
    RiGithubLine,
    RiInstagramLine,
    RiLinkedinLine,
    RiSnapchatLine, RiSpotifyLine,
    RiTwitterLine
}                                        from "react-icons/ri";


export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const handleClick = () => {setNavOpen(!navOpen);}


    return (
        <nav>
            <div className={(!navOpen ? 'rounded-b-3xl h-20' : 'lg:h-20 lg:rounded-b-3xl rounded-t-3xl h-[75%]' +
                    ' sm:h-40') + ' drop-shadow-lg' +
                ' w-screen' +
                ' grid' +
                ' place-items-center' +
                ' fixed' +
                ' bg-white ease-in-out duration-300'}>
                <div className={'px-5 w-full lg:w-4/5 max-w-[1080px] h-full z-50 px-2' +
                    ' flex' +
                    ' items-center' +
                    ' justify-between'}>
                    <h1 className={'navbar-brand'}>
                        <a href={"#"}>
                            Aruksh Patel
                        </a>
                    </h1>

                    <MenuItems collapsed={false}/>

                    <button className={'navbar-menuButton'} onClick={handleClick}>
                        {
                            !navOpen ? <TwoBarMenu className={'mx-3'}/> : <CloseMenu className={"mx-3"}/>
                        }

                    </button>
                </div>

                <Transition className={'lg:hidden w-full'}
                            show = {navOpen}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                        <MenuItems collapsed={true}/>

                </Transition>

            </div>

            <div className={'invisible bg-white rounded-r-lg drop-shadow-lg sm:fixed sm:visible absolute flex' +
                ' bottom-0' +
                ' flex-col' +
                ' md:bottom-[35%]' +
                ' left-0' +
                ' px-4 py-4' +
                ' text-xl' +
                ' lg:text-2xl'}>

                <RiGithubLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl ease-in duration-150' +
                    ' hover:text-[#171515]'}/>
                <RiLinkedinLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl ease-in-out duration-150' +
                    ' hover:text-[#0077B5]'}/>
                <span className={'m-2 lg:m-4'}/>
                <RiFacebookLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl ease-in-out duration-150' +
                    ' hover:text-[#4267B2]'}/>
                <RiInstagramLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl ease-in-out duration-150' +
                    ' hover:text-[#C13584]'}/>
                <RiSnapchatLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl  ease-in-out duration-150' +
                    ' hover:text-[#FFFC00]'}/>
                <RiTwitterLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl ease-in-out duration-150' +
                    ' hover:text-[#1DA1F2]'}/>
                <span className={'m-2 lg:m-4'}/>
                <RiSpotifyLine className={'m-1 lg:m-2 lg:hover:text-4xl hover:text-2xl ease-in-out duration-150' +
                    ' hover:text-[#1DB954]'}/>
            </div>
        </nav>

    );
}