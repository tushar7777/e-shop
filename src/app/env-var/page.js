export default function Page() {

    console.log(process.env)
    console.log(process.env.NODE_ENV)

    return (
        <>
            <h1>
                Enviornment Variables
            </h1>

            <ul>
                <li>
                    <b> Node Enviornment: </b> {process.env.NODE_ENV}
                </li>
                <li>
                    <b> ENV Local File :</b> {process.env.SERVER_USERNAME}
                </li>
            </ul>
        </>
    )
}