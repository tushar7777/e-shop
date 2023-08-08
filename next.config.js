/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.vectorlogo.zone"]
    },
    // output: "export",
    redirects: async () => {
        return [
            {
                source: "/redirect-page-2",
                destination: "/carts",
                permanent: false
            },
            {
                //dynamic page
                source: "/redirect-page-2/:redirectPageId",
                destination: "/carts/10",
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
