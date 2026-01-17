import { NextResponse } from 'next/server'
import useAuth from './app/Hooks/useAuth/useAuth'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const hasUser = request.cookies.get("authUser")
    if (!hasUser) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    NextResponse.next()
}

export const config = {
    matcher: ['/create-a-course/:path*', '/my-courses'],
}
