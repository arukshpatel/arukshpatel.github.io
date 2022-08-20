import React from "react";

const Navbar = (params: any) => {

    return (
        <div className={params.className + ' hidden sm:flex ' +
            ' w-screen sm:w-auto sm:left-[5%] sm:right-[5%] lg:top-2 xl:left-[10%] lg:right-[10%] ' +
            ' max-w-[1690px] flex-col' +
            ' place-content-center justify-around place-items-center' +
            ' fixed backdrop-blur' +
            ' ease-in-out ' +
            ' duration-300 mx-auto z-[100]'}>
            <div className={'w-full h-20 shadow-2xl rounded-3xl bg-red-300'}>
                <div className={'flex justify-between items-center w-full h-full px-2 2xl:px-16'}>
                    <div className={'flex'}>
                        <h1 className={'font-bold font-serif text-3xl mx-5 lg:text-4xl text-center' +
                            ' bg-gradient-to-r from-rose-500 to-purple-400 bg-clip-text drop-shadow-lg text-transparent'}>
                            Aruksh Patel
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;