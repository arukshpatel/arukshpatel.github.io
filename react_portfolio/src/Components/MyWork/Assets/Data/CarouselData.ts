import { CardProp } from "../../Components/Card";

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
    {
        title: 'Subway Utilities',
        description: 'Although this project has been completed, there are a lot more bugs than I anticipated.' +
            ' Furthermore, I have brought this project back into the "In Progress" category due to the fact that it' +
            ' needs a lot more algorithm boost(s). The runtime puts extreme strain on your local system and I' +
            ' believe that I need to utilize better backend languages to work with large data sets, i.e. C++ or' +
            ' at-least Java.',
        languages: ['HTML', "CSS", 'TypeScript', 'React.js', 'Selenium', 'TailwindCSS', 'Node.js', 'Electron.js', 'Chart.js', 'SQLite', 'Express.js'],
        date: 'Spring 2017 - Present',
        githubLink: 'https://github.com/arukshpatel/SubwayUtilities',
    },

];

export const CompletedData: CardProp[] = [
    {
        title: 'Subway Utilities',
        description: 'This project was created to aid Subway Partners. This project is locally hosted, meaning that' +
            ' your restaurants data belongs to YOU! From being the better version of "LIVE IQ", it also provides' +
            ' predictions. Using a linear model, it provides an estimate of how much inventory to order and how many' +
            ' units of breads are expected to sell.',
        languages: ['HTML', "CSS", 'TypeScript', 'React.js', 'Selenium', 'TailwindCSS', 'Node.js', 'Electron.js', 'Chart.js', 'SQLite', 'Express.js'],
        date: 'Spring 2017 - Present',
        githubLink: 'https://github.com/arukshpatel/SubwayUtilities',
    },
    {
        title: 'ChuggBot',
        description: 'Discord bot to store and retrieve Chegg data. This bot was developed to facilatate students,' +
            ' especially during the study season. It is HARD keeping track of which material you have studied, but' +
            ' not anymore. This bot can do that for you.',
        languages: ['TypeScript', 'Selenium'],
        date: 'Completed: Nov 4, 2021',
        githubLink: 'https://github.com/arukshpatel/ChuggBot',
    },
    {
        title: 'Accouting to Excel',
        description: "This project parse's your bank statements and outputs a predefined excel sheet with" +
            " categorized data. This not only simplifies your accounting life, but it also eliminates redundant work.",
        languages: ['Java', 'Java Spring'],
        date: 'Completed: Fall 2018',
        githubLink: 'https://github.com/arukshpatel/AccountingToExcel',
    }
]