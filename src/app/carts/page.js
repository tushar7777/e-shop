import Link from "next/link"
import getCarts from "../../../services/getCarts"

export default async function Carts() {

    const getCartList = getCarts()
    let carts = await getCartList
    carts = carts.carts
    // console.log("==============>", carts)

    return (
        <>
            <h1>Carts List</h1>
            {
                carts.map(cart => (
                    <div>
                        <Link href={`/carts/${cart.id}`}>CartID: {cart.id}</Link>
                    </div>
                ))
            }
        </>
    )

} 