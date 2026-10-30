import { NextResponse, type NextRequest } from "next/server"

const FRAMELSY_ORIGIN = "https://framelsy.com"

/** Clean public paths on framelsy.com and the app routes that render them. */
const FRAMELSY_ROUTES: Record<string, string> = {
  "/": "/framely",
  "/privacy-policy": "/framely/privacy",
  "/terms-of-service": "/framely/terms",
}

const LEGACY_TO_PUBLIC: Record<string, string> = Object.fromEntries(
  Object.entries(FRAMELSY_ROUTES).map(([publicPath, route]) => [route, publicPath]),
)

function isFramelsyHost(host: string | null) {
  return host?.split(":")[0].replace(/^www\./, "").startsWith("framelsy.") ?? false
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const legacyTarget = LEGACY_TO_PUBLIC[pathname]

  if (!isFramelsyHost(request.headers.get("host"))) {
    // Old twincodecorp.pl/framely links move permanently to the Framelsy domain.
    if (legacyTarget) {
      return NextResponse.redirect(`${FRAMELSY_ORIGIN}${legacyTarget}${search}`, 301)
    }
    return NextResponse.next()
  }

  // On framelsy.com, keep the /framely/... routes out of sight behind the clean paths.
  if (legacyTarget) {
    const url = request.nextUrl.clone()
    url.pathname = legacyTarget
    return NextResponse.redirect(url, 301)
  }

  const route = FRAMELSY_ROUTES[pathname]
  if (route) {
    const url = request.nextUrl.clone()
    url.pathname = route
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  // Page paths only: static files such as /framely/icon.png and the TikTok verification file are served as is.
  matcher: ["/", "/privacy-policy", "/terms-of-service", "/framely", "/framely/privacy", "/framely/terms"],
}
