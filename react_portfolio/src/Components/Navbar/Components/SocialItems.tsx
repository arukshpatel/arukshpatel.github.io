import React from 'react'
import {
    RiFacebookLine,
    RiGithubLine,
    RiInstagramLine,
    RiLinkedinLine,
    RiMailSendLine,
    RiSnapchatLine,
    RiSnapchatFill,
    RiSpotifyLine,
    RiTwitterLine,
}            from 'react-icons/ri'

interface SocialItemReq
{
    name: string
    icon: JSX.Element
    toIconCol: string
    link?: string
    elementBackgroundClassNames?: string
    textBackgroundClassNames?: string
}

function SocialItemEl(req: SocialItemReq) {
    return (
        <li
            className={
                'w-full py-1 px-2 flex flex-col ' +
                'ml-[-75%] hover:ml-[0%] group duration-300 rounded-r-2xl ' +
                'bg-white/10 duration-300 ease-in-out' +
                'hover:drop-shadow-2xl drop-shadow-xl backdrop-blur-xl ' +
                req.elementBackgroundClassNames
            }
        >
            <div className={`${req.textBackgroundClassNames}`}>
                <a className={`socialItemLinkElement`} href={req.link} target={'_blank'} rel={'noreferrer'}>
                    <div className={`socialItemName`}>{req.name}</div>
                    <div className={'socialItemIcon ' + req.toIconCol}>{req.icon}</div>
                </a>
            </div>
        </li>
    )
}

function topDiff(height: number) {
    return height < 300 ? 'sm:invisible' : height < 500 ? 'bottom-0' : 'top-1/3'
}

export default function SocialItemsList(params: { flexCol?: string; flexRow?: string }) {
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)

    React.useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)
    })

    return (
        <div className={'z-50 invisible sm:visible fixed flex flex-col left-0 ' + topDiff(windowHeight)}>
            <ul className={'space-y-1'}>
                <SocialItemEl
                    name={'Github'}
                    icon={<RiGithubLine/>}
                    toIconCol={'text-linkedin'}
                    link={'https://www.github.com/arukshpatel'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-github/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-white to-github bg-clip-text'}
                />
                <SocialItemEl
                    name={'LinkedIn'}
                    icon={<RiLinkedinLine/>}
                    toIconCol={'text-linkedIn '}
                    link={'https://www.github.com/arukshpatel'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-linkedIn/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-white to-linkedIn bg-clip-text'}
                />
                <SocialItemEl
                    name={'E-Mail'}
                    icon={<RiMailSendLine/>}
                    toIconCol={'text-mail '}
                    link={'https://www.github.com/arukshpatel'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-mail/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-mail bg-clip-text'}
                />
                <li>
                    <div className={'my-4'}/>
                </li>
                <SocialItemEl
                    name={'Facebook'}
                    icon={<RiFacebookLine/>}
                    toIconCol={'text-facebook '}
                    link={'https://facebook.com/aruk5h/'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-facebook/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-facebook bg-clip-text'}
                />
                <SocialItemEl
                    name={'Instagram'}
                    icon={<RiInstagramLine/>}
                    toIconCol={'text-instagram '}
                    link={'https://instagram.com/aruk5h/'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-instagram/[0.4] to-transparent '
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-instagram bg-clip-text'}
                />
                <SocialItemEl
                    name={'Snapchat'}
                    icon={<RiSnapchatLine/>}
                    toIconCol={'text-snapchat group-hover:text-black '}
                    link={'https://snapchat.com/add/aruk5h/'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-black/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-black bg-clip-text'}
                />
                <SocialItemEl
                    name={'Twitter'}
                    icon={<RiTwitterLine/>}
                    toIconCol={'text-twitter '}
                    link={'https://twitter.com/aruk5h/'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-twitter/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-twitter bg-clip-text'}
                />
                <li>
                    <div className={'my-4'}/>
                </li>
                <SocialItemEl
                    name={'Spotify'}
                    icon={<RiSpotifyLine/>}
                    toIconCol={'text-spotify '}
                    link={'https://open.spotify.com/user/aruk5h'}
                    elementBackgroundClassNames={
                        'hover:bg-gradient-to-r bg-gradient-to-l from-spotify/[0.4] to-transparent'
                    }
                    // textBackgroundClassNames={'bg-gradient-to-r from-spotify bg-clip-text'}
                />
            </ul>
        </div>
    )
}
