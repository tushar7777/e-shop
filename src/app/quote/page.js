async function fetchQuoteAPI() {
    let data = await fetch("https://dummyjson.com/quotes")
    data = await data.json()

    return data.quotes
}

export default async function Quote() {
    let quotes = await fetchQuoteAPI()
    console.log(quotes)
    return (
        <>
            <h1>Quote</h1>
            {
                quotes.map(string => (
                    <>
                        <div>{string.quote}</div>
                        <hr />
                    </>
                ))
            }
        </>
    )
}