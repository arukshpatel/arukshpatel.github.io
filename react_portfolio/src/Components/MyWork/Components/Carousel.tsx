import React from "react";

function Carousel(props: any) {

    return (

        <div className="flex flex-col m-auto p-auto">
            <h4
                className={'text-xl w-full text-center sm:text-left mx-auto lg:pl-40 sm:pl-20 underline' +
                    ' text-slate-700'}>
                {props.sectionTitle}
            </h4>
            {/*Left blur*/}
            <div className={'bg-gradient-to-r left-0 from-slate-200 h-80 absolute w-12 md:w-40 sm:h-96'}/>
            {/*Right blur*/}
            <div className={'bg-gradient-to-l right-0 from-slate-200 h-80 absolute w-12 md:w-40 sm:h-96'}/>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 mx-auto">
                    {/*CARD BEGINS HERE*/}
                    {props.children}
                </div>
            </div>
        </div>
    );

}

export default Carousel;