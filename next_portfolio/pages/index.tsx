import { NextPage } from 'next'
import Head         from 'next/head'
import Image        from 'next/image'

import Hero   from "../Components/Hero";
import Navbar from "../Components/Navbar";

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
                <link rel={"favicon"} href={"/favicon.png"}/>
                <link rel="icon" type="image/png" href="/favicon.png"/>
                <link rel="icon" type="image/svg+xml" href="/Icon.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <main>
                {/*<Hero/>*/}
            </main>
        </div>
    )
}

export default Home;

