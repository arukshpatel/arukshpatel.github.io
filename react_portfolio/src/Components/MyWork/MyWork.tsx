import React                 from 'react'
import { CgCornerRightDown } from "react-icons/cg";

import { Background } from "./Components/Background";
import character      from "./Assets/character.png";


export default function MyWork() {

    return (
        <div id={'MyWork'} className={'h-screen pt-16 sm:pt-24'}>
            {/*<Background/>*/}
            <div className={'flex place-content-center mt-8'}>
                <h3 className={'text-center font-bold font-serif text-2xl mx-5 lg:text-3xl text-center' +
                    ' bg-gradient-to-r from-purple-400 to-rose-500 w-fit bg-clip-text drop-shadow-lg' +
                    ' text-transparent'}>
                    My Work
                </h3>
            </div>
            <div className={'mx-auto my-5 w-full max-w-[1080px] flex place-items-center'}>
                <h4 className={'text-xl underline'}>Working on</h4>
            </div>

        </div>
    );

}