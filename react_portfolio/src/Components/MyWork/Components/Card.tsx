import React from 'react'

interface CardProp
{
    title: string
    description: string
    languages: string[]
    date: string
    githubLink?: string
    siteLink?: string
    className?: string
}

export default function Card(props: CardProp) {
    function gitButton() {
        if(props.githubLink) {
            return (
                <button
                    type={"button"}
                    className={
                        'bg-github text-white px-3 py-1 w-full text-middle' +
                        ' transition duration-300 ease-in-out text-base'
                    }
                >
                    Github
                </button>
            );
        }

        return '';
    }

    function siteButton() {
        if(props.siteLink) {
            return (
                <button
                    type={'button'}
                    className={
                        'bg-facebook text-white px-3 py-1 w-full text-middle' +
                        ' transition duration-300 ease-in-out text-base'
                    }
                >
                    Site
                </button>
            )
        } else {
            return ''
        }
    }

    function tag(text: string) {
        return (
            <span
                className={
                    'h-fit inline-block bg-slate-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-100 mr-2' +
                    ' mb-2'
                }
            >
                {text}
            </span>
        )
    }

    function languageTags() {
        if(props.languages) {
            return props.languages.map((language: any) => {
                return tag(language)
            })
        } else {
            return tag('NO TAGS')
        }
    }

    return (
        <div className={'inline-block mx-3 group ' + (props.className ? props.className : '')}>
            {/*Card2*/}
            <div
                className={
                    'w-64 h-72 sm:w-80 sm:h-80 max-w-xs overflow-y-scroll rounded-md shadow-md' +
                    ' hover:bg-white' +
                    ' bg-white/70 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col'
                }
            >
                <div className={'w-full px-4 py-3 sticky top-0 backdrop-blur max-h-20'}>
                    <p className={'font-bold text-xl font-serif group-hover:underline'}>
                        {props.title ? props.title : 'No Title'}
                    </p>
                    <p className={'text-gray-500 text-sm'}>{props.date}</p>
                </div>
                <div className={'w-full px-4 pb-2 flex flex-auto hide-scroll-bar'}>
                    <p className="text-gray-700 text-base hide-scroll-bar">
                        {props.description ? props.description : 'No Description'}
                    </p>
                </div>
                <div className={'w-full sticky bottom-0 backdrop-blur-sm'}>
                    <div className={'w-full flex flex-nowrap overflow-x-scroll px-4 pt-2 hide-scroll-bar'}>
                        {languageTags()}
                    </div>
                    <div className={'flex flex-row'}>
                        {gitButton()}
                        {siteButton()}
                    </div>
                </div>
            </div>
        </div>
    )

}
