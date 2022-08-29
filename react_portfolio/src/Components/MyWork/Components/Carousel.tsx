import React from "react";
import Card  from "./Card";

function Carousel(props: any) {

    return (

        // <div className="flex flex-col hide-scroll-bar z-[100] max-h-96 mx-10">
        //     {/*List*/}
        //     <div className="flex overflow-x-scroll pb-14 hide-scroll-bar">
        //         <div className="flex flex-nowrap place-content-center mx-auto max-w-[1080px]">
        //             {/*CARDS*/}
        //             {props.children}
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col m-auto p-auto">
            <h4
                className={'text-xl w-full text-center sm:text-left mx-auto lg:pl-40 sm:pl-20 underline' +
                    ' text-slate-700'}>
                {props.sectionTitle}
            </h4>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 mx-auto">
                    {/*CARD BEGINS HERE*/}
                    <div className="inline-block mx-3">
                        <div className={"w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white" +
                            " hover:shadow-xl transition-shadow duration-300 ease-in-out"}>
                            <h1>HELLO</h1>
                        </div>
                    </div>
                    <Card title={"Subway Utilities"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id. Id nibh tortor id aliquet lectus proin nibh nisl condimentum."}
                          date={'Spring 2017'}
                          languages={["Java", "Python", "CSS", "HTML", "React.js", "Selenium", "Node.js"]}/>

                </div>
            </div>
        </div>
    );

}

export default Carousel;