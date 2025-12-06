import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function proxy(req) {
    const token = req.nextauth.token
    const isAuthPage = req.nextUrl.pathname.startsWith("/login") || 
                       req.nextUrl.pathname.startsWith("/register")
    const isAppPage = req.nextUrl.pathname.startsWith("/app")

    // If user is logged in and tries to access auth pages, redirect to dashboard
    if (token && isAuthPage) {
      return NextResponse.redirect(new URL("/app/dashboard", req.url))
    }

    // If user is not logged in and tries to access app pages, redirect to login
    if (!token && isAppPage) {
      const loginUrl = new URL("/login", req.url)
      loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: () => true, // We handle authorization in the proxy function
    },
  }
)

export const config = {
  matcher: ["/app/:path*", "/login", "/register"],
}

