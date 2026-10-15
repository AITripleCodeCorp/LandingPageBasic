import Link from "next/link"

export const CONTACT_EMAIL = "twincodecorp@gmail.com"
export const LAST_UPDATED = "15 October 2026"

/** Top bar shared by the Framely pages: always visible links, no hidden menu. */
export function FramelyHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
        <Link href="/framely" className="flex items-center gap-3 text-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/framely/icon.png" alt="" width={32} height={32} className="rounded-lg" />
          <span className="text-lg font-semibold">Framely</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <Link href="/framely#how-it-works" className="hover:text-gray-900">
            How it works
          </Link>
          <Link href="/framely/terms" className="hover:text-gray-900">
            Terms of Service
          </Link>
          <Link href="/framely/privacy" className="hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-gray-900">
            TwinCodeCorp
          </Link>
        </nav>
      </div>
    </header>
  )
}

/** Footer shared by the Framely pages. The legal links are always visible, as TikTok requires. */
export function FramelyFooter() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-lg font-semibold text-white">Framely</p>
            <p className="mt-2 text-sm text-gray-400">
              A desktop app for preparing and publishing videos and photo carousels to your own TikTok account.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/framely/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/framely/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
              {CONTACT_EMAIL}
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TwinCodeCorp. All rights reserved.</p>
          <p className="mt-2">
            Framely is an independent product of TwinCodeCorp and is not affiliated with, endorsed by, or sponsored by
            TikTok. TikTok is a trademark of its respective owner.
          </p>
        </div>
      </div>
    </footer>
  )
}

/** Page frame for the legal documents. */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <FramelyHeader />
      <main className="flex-1 px-4 py-12">
        <article className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>
          <p className="mt-6 text-gray-700 leading-relaxed">{intro}</p>
          <div className="mt-8 space-y-8">{children}</div>
        </article>
      </main>
      <FramelyFooter />
    </div>
  )
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id}>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-3 space-y-3 text-gray-700 leading-relaxed [&_a]:text-emerald-700 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  )
}
