import getCarts from "../../../../services/getCarts";
import '../cart.css'

export default async function CartDetails(props) {

    let carts = getCarts()
    carts = await carts
    carts = carts.carts
    const cartId = props.params.cartId
    const cartDetail = carts[cartId - 1]
    const totalPrice = cartDetail && cartDetail.products
        ? cartDetail.products.reduce((prev, curr) => {
            return prev + curr.price
        }, 0)
        : "-"
    let totalDiscountPercentage = cartDetail && cartDetail.products
        ? cartDetail.products.reduce(function (prev, curr) {
            const total = prev + curr.discountPercentage
            return total
        }, 0)
        : "-"
    totalDiscountPercentage = Math.round(totalDiscountPercentage * 100) / 100
    const userId = cartDetail?.userId
    
    return (
        <>
            <h1>Cart Details</h1>
            <div>
                <h2>
                    <small>Cart ID: </small> {cartId}
                </h2>
                <h4><b>User ID:</b> {userId}</h4>
                <h5>
                    <div>
                        <b>Cart Items:</b>
                        {
                            cartDetail && cartDetail.products && cartDetail.products.length > 0
                                ?
                                <table border={1} className="table-cart">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Discount %</th>
                                            <th>Discounted Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartDetail.products.map((item, key) => (
                                                <>
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td>{item.title}</td>
                                                        <td className="cart-item-number">{item.quantity}</td>
                                                        <td className="cart-item-number">{item.price}</td>
                                                        <td className="cart-item-number">{item.discountPercentage}</td>
                                                        <td className="cart-item-number">{item.discountedPrice}</td>
                                                        <td className="cart-item-number">{item.total}</td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td>Total: {cartDetail.totalProducts}</td>
                                            <td className="cart-item-number">{cartDetail.totalQuantity}</td>
                                            <td className="cart-item-number">{totalPrice}</td>
                                            <td className="cart-item-number">{totalDiscountPercentage}</td>
                                            <td className="cart-item-number">{cartDetail.discountedTotal}</td>
                                            <td className="cart-item-number">{cartDetail.total}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                : ""
                        }
                    </div>
                </h5>
            </div >
        </>
    )

}

export async function generateStaticParams() {

    let carts = getCarts()
    carts = await carts
    carts = carts.carts
    const pathMAP = carts.map((item) => {
        return { cartId: `${item.id}` }
    })

    // console.log("========>",pathMAP)
    return pathMAP
}