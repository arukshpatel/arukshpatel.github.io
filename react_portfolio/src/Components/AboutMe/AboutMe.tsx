import React from 'react'

export default function AboutMe() {
    return (
        <div id={'AboutMe'} className={'w-screen h-screen bg-slate-800 text-center mx-auto'}>
            <div className={'bg-gray-300 max-w-[1080px] mx-auto flex flex-col md:flex-row'}>
                <div>
                    <img src={'../../public/assets/favicon.png'} alt={'Profile '} />
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
