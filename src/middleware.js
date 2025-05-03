import { NextResponse } from "next/server"


export function middleware(req) {

    const userToken = req.cookies.get('login_token')

    if (!userToken) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: [
        '/',
        '/users/:path*',
        '/posts/:path*',
        '/comments/:path*',
    ]
}