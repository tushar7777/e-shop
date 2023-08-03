import { NextResponse } from 'next/server'

export function middleware(request) {
    const reponse = NextResponse.next()
    // console.log(request.nextUrl.pathname)
    // return reponse
    // if (request.nextUrl.pathname !== "/login") {
    //     return NextResponse.redirect(new URL("/login", request.url))
    // }


    return NextResponse.redirect(new URL('/login', request.url));

}

export const config = {
    matcher: ["/about/about-us", "/student-list/:path*"]
}