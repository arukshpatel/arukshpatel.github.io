import React   from 'react'
import { log } from "util";

export interface CardProp
{
    title: string
    description: string
    languages: string[]
    date: string
    githubLink?: string
    siteLink?: string
    className?: string,
    key?: number,
}

export default function Card(props: CardProp) {

    function gitButton() {
        if(props.githubLink) {
            return (
                <a href={props.githubLink}
                   className={'transition duration-300 ease-in-out text-base bg-github text-white px-3 py-1 w-full text-middle'}>
                    <button
                        type={"button"}
                        className={
                            'bg-github text-white px-3 py-1 w-full text-middle' +
                            ' transition duration-300 ease-in-out text-base'
                        }
                    >
                        Github
                    </button>
                </a>
            );
        }

        return '';
    }

    function siteButton() {
        if(props.siteLink) {
            return (
                <a href={props.siteLink}
                   className={'bg-facebook text-white px-3 py-1 w-full text-middle transition duration-300 ease-in-out text-base'}>
                    <button
                        type={'button'}
                        className={
                            'bg-facebook text-white px-3 py-1 w-full text-middle transition duration-300 ease-in-out' +
                            ' text-base'
                        }
                    >
                        Site
                    </button>
                </a>
            )
        } else {
            return ''
        }
    }

    function tag(text: string, index: string) {

        return (
            <span
                className={
                    'h-fit inline-block bg-slate-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-100 mr-2' +
                    ' mb-2 font-mono tracking-wide'
                }
                key={index}
            >
                {text}
            </span>
        )
    }

    function languageTags() {
        if(props.languages) {
            return props.languages.map((language: string, index: number) => {
                return tag(language, index.toString());
            })
        } else {
            return tag('NO TAGS', '0')
        }
    }

    return (
        <div key={props.key ? props.key.toString() : ''}
             className={'inline-block mx-3 group ' + (props.className ? props.className : '')}>
            <div
                className={
                    'w-64 h-72 sm:w-80 sm:h-80 max-w-xs overflow-y-scroll rounded-md shadow-md' +
                    ' hover:bg-white hide-scroll-bar' +
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
