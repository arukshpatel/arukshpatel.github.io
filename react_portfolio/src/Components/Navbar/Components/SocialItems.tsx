import React from 'react'
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
}

function SocialItemEl(req: SocialItemReq) {
    return (
        <a
            className={`socialItemLinkElement bg-gradient-to-r from-${req.toIconCol} to-white`}
            href={req.link}
            target={'_blank'}
            rel={'noreferrer'}
        >
            <div className={`socialItemName`}>{req.name}</div>
            <div className={`socialItemIcon text-${req.toIconCol}`}>{req.icon}</div>
        </a>
    )
}

export default function SocialItemsList() {
    return (
        <div className={'fixed flex flex-col top-[35%] left-0 px-4 py-2'}>
            <ul>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'Github'}
                        icon={<RiGithubLine />}
                        toIconCol={'github'}
                        link={'https://www.github.com/arukshpatel'}
                    />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'LinkedIn'}
                        icon={<RiLinkedinLine />}
                        toIconCol={'linkedIn'}
                        link={'https://www.github.com/arukshpatel'}
                    />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'E-Mail'}
                        icon={<RiMailSendLine />}
                        toIconCol={'mail'}
                        link={'https://www.github.com/arukshpatel'}
                    />
                </li>
                <li>
                    <div className={'my-4'} />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'Facebook'}
                        icon={<RiFacebookLine />}
                        toIconCol={'facebook'}
                        link={'https://facebook.com/aruk5h/'}
                    />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'Instagram'}
                        icon={<RiInstagramLine />}
                        toIconCol={'instagram'}
                        link={'https://instagram.com/aruk5h/'}
                    />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'Snapchat'}
                        icon={<RiSnapchatLine />}
                        toIconCol={'-snapchat'}
                        link={'https://snapchat.com/aruk5h/'}
                    />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'Twitter'}
                        icon={<RiTwitterLine />}
                        toIconCol={'twitter'}
                        link={'https://twitter.com/aruk5h/'}
                    />
                </li>
                <li>
                    <div className={'my-4'} />
                </li>
                <li className={'flex justify-between items-center'}>
                    <SocialItemEl
                        name={'Spotify'}
                        icon={<RiSpotifyLine />}
                        toIconCol={'spotify'}
                        link={'https://spotify.com/aruk5h/'}
                    />
                </li>
            </ul>
        </div>
    )
}
