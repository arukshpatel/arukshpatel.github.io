import React, { Component } from 'react'

import Carousel                          from './Components/Carousel'
import Card                              from "./Components/Card";
import { InProgressData, CompletedData } from "./Assets/Data/CarouselData";

export default function MyWork() {

    function InProgressCards() {
        return InProgressData.map((card, index) => {
            return <Card title={card.title}
                         key={index}
                         description={card.description}
                         languages={card.languages}
                         date={card.date}
                         githubLink={card.githubLink}
                         siteLink={card.siteLink}/>
        });
    }

    return (
        <div id={'MyWork'} className={'h-fit py-16 sm:pt-24 bg-slate-200'}>
            {/*<Background/>*/}
            <div className={'flex place-content-center'}>
                <h3
                    className={
                        'text-center font-bold font-serif text-2xl mx-5 lg:text-3xl text-center' +
                        ' bg-gradient-to-r from-purple-400 to-rose-500 w-fit bg-clip-text drop-shadow-lg' +
                        ' text-transparent'
                    }
                >
                    My Work
                </h3>
            </div>

            <div className={'mx-auto w-full'}>

                <Carousel sectionTitle={'In-progress:'}>
                    {InProgressData.map((card, index) =>
                        <Card title={card.title}
                              description={card.description}
                              date={card.date}
                              languages={card.languages}
                              siteLink={card.siteLink}
                              githubLink={card.githubLink}/>
                    )}

                </Carousel>
            </div>
            <div className={'mx-auto w-full'}>
                <Carousel sectionTitle={'Completed:'}>
                    {CompletedData.map((card, index) =>
                        <Card title={card.title}
                              description={card.description}
                              date={card.date}
                              languages={card.languages}
                              siteLink={card.siteLink}
                              githubLink={card.githubLink}
                        />)}
                </Carousel>
            </div>
        </div>
    )
}
