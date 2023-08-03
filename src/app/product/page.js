"use client"
import { useState, useEffect } from "react"

export default function Product() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProductApi() {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json()
            console.log(data.products)
            setProduct(data.products)
        }
        fetchProductApi()

    }, [])
    return (
        <>
            <h1>Product</h1>
            {
                product.map((item) => {
                    return <h3>{item.title}</h3>
                })
            }
        </>
    )

} 