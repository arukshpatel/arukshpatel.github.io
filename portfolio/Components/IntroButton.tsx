import { AppProps } from "next/app";

export default function IntroButton(props: any)
{
    return (
        <button className={props.className + ' '}>
            Button Example
        </button>
    )
}