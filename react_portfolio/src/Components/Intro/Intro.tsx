import { ReactComponent as DoubleDownArrow } from '../../assets/icons/double_arrow_down.svg'

export default function Intro() {
    return (
        <div className={'mx-auto w-screen h-screen max-w-[1080px]'}>
            <div className={'container h-fit mx-auto py-[35vh] text-center'}>
                <div className={'introHeading w-full grid grid-cols-2 grid-rows-none place-content-center'}>
                    <h2>HELLO!!!</h2>
                    <h2 className={'text-xl hover:text-2xl hover:animate-wave duration-150 ease-in-out'}>👋</h2>
                </div>
                <div className={'text-center inline-block align-middle my-5 place-content-center'}>
                    <p className={'inline-block text-sm lg:text-lg align-middle text-gray-500'}>
                        Self-learning software engineering through research & development.
                    </p>
                </div>
                <div className={'invisible sm:visible my-5 place-content-center'}>
                    <button className={'border-blue-500 text-blue-700 hover:bg-blue-500 introHeading-Button'}>
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
            <div
                className={
                    'text-center flex flex-col inset-x-0 text-base lg:text-xl' +
                    ' place-items-center text-gray-500 hover:text-black'
                }
            >
                <div className={'hover:snap-y absolute place-items-center bottom-0'}>
                    <a href={'./#AboutMe'}>
                        <span className={'mb-2'}>About Me</span>
                    </a>
                    <div className={'mx-auto animate-bounce w-4 lg:w-7'}>
                        <DoubleDownArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
