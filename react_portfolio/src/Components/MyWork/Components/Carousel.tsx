import React from "react";

function Carousel(props: any) {

    return (

        <div className="flex flex-col m-auto p-auto">
            <h4
                className={'text-xl w-full text-center sm:text-left mx-auto lg:pl-40 sm:pl-20 underline' +
                    ' text-slate-700 max-w-[1440px]'}>
                {props.sectionTitle}
            </h4>

            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                {/*lg:mx-40 md:mx-20 mx-10*/}
                <div className="flex flex-nowrap mx-auto">
                    {/*Left blur*/}
                    <div className={'lg:w-40 md:w-20 w-10 h-full sticky left-0 bg-gradient-to-r from-slate-200 z-[9]'}/>

                    {/*CARD BEGINS HERE*/}
                    {props.children}

                    {/*Right blur*/}
                    <div className={'lg:w-40 md:w-20 w-10 h-full sticky right-0 bg-gradient-to-l from-slate-200' +
                        ' z-[9]'}/>
                </div>
            </div>
        </div>
    );

}

export default Carousel;