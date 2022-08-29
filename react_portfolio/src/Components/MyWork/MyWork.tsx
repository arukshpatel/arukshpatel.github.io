import React from 'react'

import Carousel from './Components/Carousel'
import Card     from "./Components/Card";
// import Card     from './Components/Card'

export default function MyWork() {
    return (
        <div id={'MyWork'} className={'h-fit pt-16 sm:pt-24 bg-slate-200'}>
            {/*<Background/>*/}
            <div className={'flex place-content-center mt-8'}>
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
                <Carousel sectionTitle={'In-progress:'} className={'bg-black'}>
                    <Card title={"Subway Utilities"}
                          description={"Lorem"}
                          date={'Spring 2017'}
                          languages={["Java"]}
                          githubLink={'git'}
                          siteLink={'git'}
                    />
                    <Card title={"Subway Utilities"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id. Id nibh tortor id aliquet lectus proin nibh nisl condimentum."}
                          date={'Spring 2017'}
                          languages={["Java", "Python", "CSS", "HTML", "React.js", "Selenium", "Node.js"]}
                          githubLink={'git'}
                          siteLink={'git'}
                    />
                </Carousel>
            </div>
            <div className={'mx-auto w-full'}>
                <Carousel sectionTitle={'Completed:'} className={'bg-black'}>
                    <Card title={"Subway Utilities"}
                          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor id. Id nibh tortor id aliquet lectus proin nibh nisl condimentum."}
                          date={'Spring 2017'}
                          languages={["Java", "Python", "CSS", "HTML", "React.js", "Selenium", "Node.js"]}
                          githubLink={'git'}
                          siteLink={'git'}
                    />
                    <Card title={"Subway Utilities"}
                          description={"Lorem"}
                          date={'Spring 2017'}
                          languages={["Java"]}
                          siteLink={'git'}
                    />
                </Carousel>
            </div>
        </div>
    )
}
