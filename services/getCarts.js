export default async function getProducts() {
    const result = await fetch("https://dummyjson.com/carts")
    return result.json()
}