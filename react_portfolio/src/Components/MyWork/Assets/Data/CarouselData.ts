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

export const InProgressData: CardProp[] = [
    {
        title: 'This portfolio',
        description: 'This website has been in development and has gone through many renditions throughout my' +
            ' career. I believe it will never reach the "completed" state, as it is my "sandbox" in a way, where I' +
            ' like to try out new front-end technologies and methodologies.',
        languages: ['HTML', "CSS", 'TypeScript', 'React.js', 'TailwindCSS', 'Node.js'],
        date: 'Spring 2017 - Present',
        githubLink: 'https://github.com/arukshpatel/arukshpatel.github.io',
        siteLink: 'https://arukshpatel.info',
    },

];

export const CompletedData: CardProp[] = [
    {
        title: 'ChuggBot',
        description: 'Discord bot to store and retrieve Chegg data. This bot was developed to facilatate students,' +
            ' especially during the study season. It is HARD keeping track of which material you have studied, but' +
            ' not anymore. This bot can do that for you.',
        languages: ['TypeScript', 'Selenium'],
        date: 'Completed: Nov 4, 2021',
        githubLink: 'https://github.com/arukshpatel/ChuggBot',
    },
]