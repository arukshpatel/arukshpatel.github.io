import React, { HTMLAttributes } from 'react'
import {
    RiFacebookLine,
    RiGithubLine,
    RiInstagramLine,
    RiLinkedinLine,
    RiMailSendLine,
    RiSnapchatLine,
    RiSpotifyLine,
    RiTwitterLine,
} from 'react-icons/ri'

interface SocialItemReq {
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
            className={`w-full py-1 px-2 flex flex-col my-1 ml-[-75%] hover:ml-[0%] group duration-300 rounded-r-lg hover:rounded-r-full bg-white bg-gray-200 hover:bg-white hover:drop-shadow-2xl drop-shadow-xl `}
        >
            <div className={`${req.textBackgroundClassNames}`}>
                <a className={`socialItemLinkElement`} href={req.link} target={'_blank'} rel={'noreferrer'}>
                    <div className={`socialItemName`}>{req.name}</div>
                    <div className={`socialItemIcon ${req.toIconCol}`}>{req.icon}</div>
                </a>
            </div>
        </li>
    )
}

export default function SocialItemsList() {
    return (
        <div className={' invisible sm:visible fixed flex flex-col top-[20%] left-0'}>
            <ul>
                <SocialItemEl
                    name={'Github'}
                    icon={<RiGithubLine />}
                    toIconCol={'text-github '}
                    link={'https://www.github.com/arukshpatel'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-github to-white focus:bg-red-500'}
                    textBackgroundClassNames={'bg-gradient-to-r from-github bg-clip-text'}
                />
                <SocialItemEl
                    name={'LinkedIn'}
                    icon={<RiLinkedinLine />}
                    toIconCol={'text-linkedIn '}
                    link={'https://www.github.com/arukshpatel'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-linkedIn to-white'}
                    textBackgroundClassNames={'bg-gradient-to-r from-linkedIn bg-clip-text'}
                />
                <SocialItemEl
                    name={'E-Mail'}
                    icon={<RiMailSendLine />}
                    toIconCol={'text-mail '}
                    link={'https://www.github.com/arukshpatel'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-mail'}
                    textBackgroundClassNames={'bg-gradient-to-r from-mail bg-clip-text'}
                />
                <li>
                    <div className={'my-4'} />
                </li>
                <SocialItemEl
                    name={'Facebook'}
                    icon={<RiFacebookLine />}
                    toIconCol={'text-facebook '}
                    link={'https://facebook.com/aruk5h/'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-facebook'}
                    textBackgroundClassNames={'bg-gradient-to-r from-facebook bg-clip-text'}
                />
                <SocialItemEl
                    name={'Instagram'}
                    icon={<RiInstagramLine />}
                    toIconCol={'text-instagram '}
                    link={'https://instagram.com/aruk5h/'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-instagram'}
                    textBackgroundClassNames={'bg-gradient-to-r from-instagram bg-clip-text'}
                />
                <SocialItemEl
                    name={'Snapchat'}
                    icon={<RiSnapchatLine />}
                    toIconCol={'text-snapchat '}
                    link={'https://snapchat.com/aruk5h/'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-snapchat'}
                    textBackgroundClassNames={'bg-gradient-to-r from-black bg-clip-text'}
                />
                <SocialItemEl
                    name={'Twitter'}
                    icon={<RiTwitterLine />}
                    toIconCol={'text-twitter '}
                    link={'https://twitter.com/aruk5h/'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-twitter'}
                    textBackgroundClassNames={'bg-gradient-to-r from-twitter bg-clip-text'}
                />
                <li>
                    <div className={'my-4'} />
                </li>
                <SocialItemEl
                    name={'Spotify'}
                    icon={<RiSpotifyLine />}
                    toIconCol={'text-spotify '}
                    link={'https://spotify.com/aruk5h/'}
                    elementBackgroundClassNames={'hover:bg-gradient-to-l from-spotify'}
                    textBackgroundClassNames={'bg-gradient-to-r from-spotify bg-clip-text'}
                />
            </ul>
        </div>
    )
}
