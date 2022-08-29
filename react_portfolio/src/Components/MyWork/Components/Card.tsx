import React from "react";

interface CardProp
{
    title: string;
    description: string;
    languages: string[];
    date: string;
    githubLink?: string;
    siteLink?: string;
    className?: string;
}


export default function Card(props: CardProp)
{
    function siteButtons() {
        if(props.siteLink) {
            return (<button
                className={'group-hover:bg-facebook group-hover:text-white outline outline-facebook' +
                    ' text-black px-3 py-1 rounded-md w-full text-middle group-hover:rounded-full transition' +
                    ' duration-300 ease-in-out'}>
                Site
            </button>)
        } else {
            return (<button type={"button"}
                            className={'group-hover:bg-slate-500 group-hover:text-white outline outline-slate-500' +
                                ' text-slate-500 px-3 py-1 rounded-md w-full text-middle group-hover:rounded-full' +
                                ' transition' +
                                ' duration-300 ease-in-out'}
                            disabled>No Site</button>);
        }
    }

    function tag(text: string) {
        return (<span
            className={"inline-block bg-gray-200 rounded-full px-3 py-1 text-xs" +
                " font-semibold text-gray-700 mr-2 mb-2"}>{text}</span>);
    }

    function languageTags() {

        if(props.languages) {
            return props.languages.map((language: any) => {
                return (tag(language))
            });
        } else {
            return tag("NO TAGS");
        }
    }

    return (
        // <div className="inline-block mx-3">
        //     <div className={"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white" +
        //         " hover:shadow-xl transition-shadow duration-300 ease-in-out"}>
        //         <h1>HELLO</h1>
        //     </div>
        // </div>
        //Card wrapper
        <div className={"inline-block px-3 group " + props.className}>
            {/*Card*/}
            <div className={"w-64 h-64 group-hover:h-fit max-w-xs overflow-hidden rounded-lg shadow-md" +
                " hover:bg-white" +
                " bg-white/70 hover:shadow-2xl transition-all duration-300 ease-in-out"}>
                <div className="h-full overflow-hidden">
                    <div className="px-6 py-4">
                        <div className="mb-2">
                            <p className={'font-bold text-xl font-serif group-hover:underline'}>
                                {props.title ? props.title : 'No Title'}
                            </p>
                            <p className={'text-gray-500 text-sm'}>{props.date}</p>
                        </div>
                        <div className={'flex flex-nowrap overflow-hidden'}>
                            <p className="text-gray-700 text-base">
                                {props.description ? props.description : "No Description"}
                            </p>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex flex-nowrap overflow-x-scroll">

                        {/*LANGUAGES USED IN PROJECT*/}
                        {languageTags()}
                    </div>
                    <div className={'m-3 flex flex-row gap-x-3 place-items-center bottom-0'}>
                        <button className={'group-hover:bg-github group-hover:text-white outline outline-github' +
                            ' text-black px-3 py-1 rounded-md w-full text-middle group-hover:rounded-full transition' +
                            ' duration-300 ease-in-out'}>
                            Github
                        </button>
                        {siteButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
}