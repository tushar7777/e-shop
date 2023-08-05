import Button from "./button"
import quoteCss from './quote.module.css'
import { Dancing_Script } from 'next/font/google'
import globalStyle from '@/app/global/style.module.css'
import NextImg from '../../../public/next.svg'
import Image from "next/image"
import Script from "next/script"

export function generateMetadata() {
    return {
        title: "Quotes | Life Lesson",
        description: "Quotes from Greatest Philospher"
    }
}

const roboto = Dancing_Script({
    weight: '400',
    subsets: ['latin'],
})

async function fetchQuoteAPI() {
    let data = await fetch("https://dummyjson.com/quotes")
    data = await data.json()

    return data.quotes
}

export default async function Quote() {
    let quotes = await fetchQuoteAPI()
    // console.log(NextImg)
    return (
        <div className={`${quoteCss.main}`}>
            <Script
                src="/location.js"
            />
            <div className={quoteCss.headSection}>
                <Image
                    src={NextImg}
                    className={quoteCss.image}
                    alt="NEXT Icon image"
                />
                <div className={quoteCss.containerImageReact}>

                    <Image
                        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png"
                        className={`${quoteCss.image} ${quoteCss.imageReact}`}
                        fill
                        // width={100}
                        // height={60}
                        alt="React JS"
                    // layout="fill"
                    // style={{ objectFit: 'cover', "marginTop": "5px", "marginLeft": "5px" }}
                    />
                </div>

                <h1 className={quoteCss.heading}>
                    Quotes
                </h1>
            </div>
            <h3 className={globalStyle.sub_heading}>Moral Life</h3>
            <div className={quoteCss.textCount}>
                <b>Total:</b> {quotes.length}
            </div>

            <div className={quoteCss.horizontalRule}></div>
            {/* <div classsName={quoteCss.verticalDivider}></div> */}
            <div className={quoteCss.quoteSection}>
                {
                    quotes.map((qoute, i) => (
                        <>
                            <div key={i} className={quoteCss.container}>
                                <div className={quoteCss.textContainer}>
                                    <div className={quoteCss.listNumber}>
                                        {i + 1}.
                                    </div>
                                    <div className={quoteCss.verticalDivider}></div>
                                    <div className={quoteCss.verticalDividerSecond}></div>
                                    <div className={`${quoteCss.textBlock} ${roboto.className}`}>
                                        <div className={quoteCss.textBlockQuotes}>
                                            <q>
                                                <span className={quoteCss.text}>
                                                    {qoute.quote}
                                                </span>
                                            </q>
                                        </div>
                                        <div className={quoteCss.dividerShort}></div>
                                        <div className={quoteCss.buttonBlock}>
                                            <Button className={quoteCss.button} author={qoute.author} />
                                        </div>
                                    </div>
                                </div>
                                <hr className={quoteCss.divider} />
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}