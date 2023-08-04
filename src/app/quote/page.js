import Button from "./button"
import quoteCss from './quote.module.css'
import { Dancing_Script } from 'next/font/google'
import globalStyle from '@/app/global/style.module.css'

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
    // console.log(quotes)
    return (
        <div className={`${quoteCss.main}`}>
            <h1 className={quoteCss.heading}>Quotes</h1>
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
                            <div className={quoteCss.container}>
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