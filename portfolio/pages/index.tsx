import type { NextPage } from 'next'
import Head              from 'next/head'
import Image             from 'next/image'
import IntroButton       from "../Components/IntroButton";
import Navbar            from "../Components/Navbar";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <title>Aruksh's Portfolio</title>
                <meta
                    name="description"
                    content="Aruksh Patel's E-Portfolio -- Online Representation to showcase his work, skills, and ambitions."
                />
                <link rel="icon" type="image/png" href="/favicon.png"/>
                <link rel="icon" type="image/svg+xml" href="/Icon.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <body>
            <Navbar/>
            <main>

                {/*<Hero/>*/}
                {/*<IntroButton/>*/}

                {/*<div className={'container w-screen h-screen flex flex-col md:flex-row place-content-evenly'}>*/}
                {/*    <div className={'flex flex-col place-content-center'}>*/}
                {/*        <h1 className={'text-5xl'}> Aruksh Patel</h1>*/}
                {/*        <p className={'text-sm lg:text-lg align-middle text-gray-500'}>*/}
                {/*            Self-learning software engineering through research & development.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*    <div className={'bg-github sm:visible gap-3 grid grid-rows-2 md:grid-cols-2' +*/}
                {/*        ' place-content-center '}>*/}
                {/*        <IntroButton className={'bg-facebook'}/>*/}
                {/*        <IntroButton className={'bg-snapchat'}/>*/}
                {/*        <IntroButton className={'bg-spotify'}/>*/}
                {/*        <IntroButton className={'bg-facebook'}/>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </main>
            </body>
        </div>
    );
}

export default Home
