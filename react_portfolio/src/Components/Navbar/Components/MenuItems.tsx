import React from 'react'

function NonCollapsedList() {
    return (
        <ul className={'hidden lg:flex lg:text-lg place-items-center text-center gap-x-3'}>
            <li
                className={'navbar-Button ease-in-out duration-150 text-[#559CC8] hover:text-sky-600'}
                id={'ResumeButton'}
            >
                <a href={'#'}>Resume 📃</a>
            </li>
            <li
                className={'navbar-Button ease-in-out duration-150 hover:text-sky-600 text-[#559CC8]'}
                id={'ProjectButton'}
            >
                <a href={'#'}>Projects 💾</a>
            </li>
            <li
                className={
                    'navbar-Button ease-in-out duration-150 rounded-xl' +
                    ' drop-shadow-lg' +
                    ' hover:decoration-white hover:drop-shadow-2xl' +
                    ' hover:text-white'
                }
                id={'HireMeButton'}
            >
                <a href={'#'}>Hire Me </a>👨‍💻
            </li>
        </ul>
    )
}

function CollapsedList() {
    return (
        <ul className={'lg:hidden w-full my-2  space-y-1'}>
            <li className={'navbar-Button-side'}>
                <a href={'#'}>Home 🏠</a>
            </li>
            <li className={'navbar-Button-side'}>
                <a href={'#'}>Resume 📃</a>
            </li>
            <li className={'navbar-Button-side'}>
                <a href={'#'}>Projects 💾</a>
            </li>
            <li className={'navbar-Button-side'}>
                <a href={'#'}>Hire Me 👨‍💻</a>
            </li>
        </ul>
    )
}

export default function MenuItems(props: { collapsed: boolean }) {
    if(props.collapsed) return <div className={'absolute w-full h-screen  bg-red/[.90]'}>{CollapsedList()}</div>

    return NonCollapsedList()
}
