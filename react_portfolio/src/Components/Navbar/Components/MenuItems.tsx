import React, { EventHandler } from 'react'

function NonCollapsedList() {
    return (
        <ul className={'hidden lg:flex lg:text-lg place-items-center text-center gap-x-3'}>
            <ul className={'hidden lg:flex lg:text-lg place-items-center text-center gap-x-3'}>
                <li>
                    <a href={'#MyWork'}>
                        <button id={'ResumeButton'}
                                className={'navbar-Button ease-in-out duration-150 text-[#559CC8] hover:text-sky-600'}>
                            Resume 📃
                        </button>
                    </a>
                </li>
                <li>
                    <a href={'#'}>
                        <button className={'navbar-Button ease-in-out duration-150 hover:text-sky-600 text-[#559CC8]'}
                                id={'ProjectButton'}>
                            Projects 💾
                        </button>
                    </a>
                </li>
                <li>
                    <a href={'#'}>
                        <button className={
                            'navbar-Button ease-in-out duration-150 rounded-xl' +
                            ' drop-shadow-lg' +
                            ' hover:decoration-white hover:drop-shadow-2xl' +
                            ' hover:text-white'
                        }
                                id={'HireMeButton'}>
                            Hire Me 👨‍💻
                        </button>
                    </a>
                </li>
            </ul>
        </ul>
    )
}

function CollapsedList() {
    function navigate(event: EventHandler<any>, path: string) {

    }

    return (
        <ul className={'lg:hidden absolute flex flex-col w-full sm:w-1/2 right-0 my-2 space-y-1'}>
            <li>
                <a
                    href={'/'}>
                    <button className={'w-full bg-white px-14 py-5 text-left font-semibold font-nunito hover:text-xl' +
                        ' rounded-xl ease-in-out duration-150 hover:bg-gray-400/[.75] bg-white backdrop-blur-lg'}>
                        Home 🏠
                    </button>
                </a>
            </li>
            <li>
                <a href={'#MyWork'}>
                    <button className={'w-full bg-white px-14 py-5 text-left font-semibold font-nunito hover:text-xl' +
                        ' rounded-xl ease-in-out duration-150 hover:bg-gray-400/[.75] bg-white backdrop-blur-lg'}>
                        Resume 📃
                    </button>
                </a>
            </li>
            <li>
                <a href={'#MyWork'}>
                    <button className={'w-full bg-white px-14 py-5 text-left font-semibold font-nunito hover:text-xl' +
                        ' rounded-xl ease-in-out duration-150 hover:bg-gray-400/[.75] bg-white backdrop-blur-lg'}>
                        Projects 💾
                    </button>
                </a>
            </li>
            <li>
                <a href={'#'}>
                    <button className={'w-full bg-white px-14 py-5 text-left font-semibold font-nunito hover:text-xl' +
                        ' rounded-xl ease-in-out duration-150 hover:bg-gray-400/[.75] bg-white backdrop-blur-lg'}>
                        Hire Me 👨‍💻
                    </button>
                </a>
            </li>
        </ul>
    )
}

export default function MenuItems(props: { collapsed: boolean }) {
    if(props.collapsed)
        return (
            <div className={'bg-black/40 absolute w-full h-screen '}>
                {CollapsedList()}
            </div>
        )


    return NonCollapsedList()
}
