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
            <div className={'mx-11 my-5'}>
                <h4 className={'text-xl'}>Working on</h4>
                <div className={''}>
                    <div className="snap-mandatory snap-x flex flex-row space-x-16 overflow-x-scroll">
                        <div className="snap-center ">
                            <img
                                src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
                        </div>
                        <div className="snap-center">
                            <img
                                src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
                        </div>
                        <div className="snap-center">
                            <img
                                src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
                        </div>
                        <div className="snap-center">
                            <img
                                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
                        </div>
                        <div className="snap-center">
                            <img
                                src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
                        </div>
                        <div className="snap-center">
                            <img
                                src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}