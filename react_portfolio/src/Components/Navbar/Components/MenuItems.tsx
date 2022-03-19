import React, { useState } from "react";

function NonCollapsedList()
{
    return (
        <ul className={'hidden lg:flex lg:text-lg gap-x-3 divide-x text-center'}>
            <li className={'navbar-Button ease-in-out duration-150 hover:underline hover:decoration-blue-500' +
                ' text-blue-500'}>
                <a href={"#"}>Resume  📃</a>
            </li>
            <li className={'navbar-Button ease-in-out duration-150 hover:underline hover:decoration-gray-500' +
                ' text-gray-500'}>
                <a href={"#"}>Projects  💾</a>
            </li>
            <li className={'navbar-Button ease-in-out duration-150 border-2 rounded-xl bg-teal-500 drop-shadow-lg' +
                ' hover:drop-shadow-2xl' +
                ' hover:text-white'}>
                <a href={"#"}>Hire Me  👨‍💻</a>
            </li>
        </ul>
    );
}
function CollapsedList()
{
    return (
        <ul className={'rounded-2xl lg:hidden absolute w-full bg-white'}>
            <li className={'navbar-Button-side border-b-neutral-500 border-b-2'}>
                <a href={"#"}>Home 🏠</a>
            </li>
            <li className={'navbar-Button-side border-b-blue-500 border-b-2'}>
                <a href={"#"}>Resume 📃</a>
            </li>
            <li className={'navbar-Button-side border-b-gray-500 border-b-2'}>
                <a href={"#"}>Projects 💾</a>
            </li>
            <li className={'navbar-Button-side border-b-teal-500 border-b-2'}>
                <a href={"#"}>Hire Me 👨‍💻</a>
            </li>
        </ul>
    );
}
export default function MenuItems(props: { collapsed: boolean; })
{

    if(props.collapsed)
        return CollapsedList();

    return NonCollapsedList();
}