import type { Metadata } from "next"
import Link from "next/link"
import { Camera, Images, Lock, PenLine, ShieldCheck, SlidersHorizontal } from "lucide-react"
import { CONTACT_EMAIL, FramelyFooter, FramelyHeader } from "@/components/framely/site-chrome"

export const metadata: Metadata = {
  title: "Framely | Post to TikTok from your desktop",
  description:
    "Framely is a macOS app for creators and small brands: prepare a video or photo carousel, review it, and post it to your own TikTok account or send it to your drafts.",
}

const steps = [
  {
    title: "Sign in with TikTok",
    text: "You approve access on TikTok’s own website. Framely never sees your password.",
  },
  {
    title: "Prepare your post",
    text: "Choose a video (MP4 or MOV) or up to 35 photos, preview it, and write your caption. Optional suggestions can help with the words.",
  },
  {
    title: "Review and choose",
    text: "See which account you are posting to, pick who can view the post, set comments, Duet, and Stitch, and disclose promotional content.",
  },
  {
    title: "Post or send to drafts",
    text: "Post right away, or send the post to your TikTok drafts to finish in the app. Follow the progress until TikTok confirms it.",
  },
]

const features = [
  {
    icon: Camera,
    title: "Videos and photo carousels",
    text: "Post a video up to TikTok’s limits, or a carousel of 1 to 35 photos with a cover of your choice.",
  },
  {
    icon: SlidersHorizontal,
    title: "Your account, your settings",
    text: "Privacy options and interaction settings come from your own TikTok account. Nothing is chosen for you.",
  },
  {
    icon: PenLine,
    title: "Suggestions for titles and captions",
    text: "Pick a tone and get three ideas for the title, description, and hashtags. Use one, edit it, or ignore them.",
  },
  {
    icon: Images,
    title: "Progress and history",
    text: "See each upload as it happens, and keep a private list of what you posted on your own computer.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing posts by surprise",
    text: "Framely publishes only after you choose Post now or Send to drafts. It never posts for you in the background.",
  },
  {
    icon: Lock,
    title: "Light on data",
    text: "Your access token lives in memory only, videos go straight to TikTok, and there are no ads or trackers.",
  },
]

const permissions = [
  {
    scope: "user.info.basic",
    text: "Shows your TikTok name and avatar so you always know which account you are posting to.",
  },
  {
    scope: "video.publish",
    text: "Posts the video or photo carousel you prepared to your account when you choose Post now.",
  },
  {
    scope: "video.upload",
    text: "Sends the video or photos to your TikTok drafts when you choose Send to drafts.",
  },
]

const shots = [
  {
    src: "/framely/sign-in.png",
    alt: "The Framely sign-in screen with the Sign in with TikTok button",
    caption: "Sign in on TikTok’s own page. You choose what to allow.",
  },
  {
    src: "/framely/suggestions.png",
    alt: "The Suggestions section of the New post screen with three suggested texts",
    caption: "Suggestions: pick a tone, then use, edit, or ignore the ideas.",
  },
  {
    src: "/framely/publish.jpg",
    alt: "The Post to TikTok screen with the account, privacy, interaction, and disclosure settings",
    caption: "Review the post and choose who can see it before anything is sent.",
  },
  {
    src: "/framely/status.png",
    alt: "The status screen showing the post as published",
    caption: "Follow the post until TikTok confirms it.",
  },
]

const faq = [
  {
    q: "Does Framely post without my approval?",
    a: "No. Nothing is sent to TikTok until you choose Post now or Send to drafts, and you can review everything first.",
  },
  {
    q: "Does Framely see my TikTok password?",
    a: "No. You sign in on TikTok’s website and approve a limited set of permissions. You can end the connection at any time with Sign out in Framely or from your TikTok account settings.",
  },
  {
    q: "Where do my videos and photos go?",
    a: "Videos go straight from your computer to TikTok. Photos for a carousel are stored briefly on our cloud storage so TikTok can download them, then deleted.",
  },
  {
    q: "Why can I only choose “Only me” right now?",
    a: "TikTok limits every new app to private posts until the app has passed TikTok’s audit. After that, the visibility options your account allows become available.",
  },
]

export default function FramelyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FramelyHeader />

      <main>
        {/* Hero */}
        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-4xl text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/framely/icon.png" alt="Framely app icon" width={96} height={96} className="mx-auto mb-8 rounded-2xl shadow-xl" />
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">Post to TikTok from your desktop</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Framely is a macOS app for creators and small brands. Prepare a video or photo carousel, review every setting,
              and post it to your own TikTok account, or send it to your drafts to finish in the TikTok app.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Framely%20for%20macOS`}
                className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                Get Framely for macOS
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Free to use. Requires a TikTok account.</p>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="bg-white px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">How it works</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-2">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-gray-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">Made for careful posting</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-gray-900" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screens */}
        <section className="bg-white px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">A look inside</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {shots.map((shot) => (
                <figure key={shot.src} className="space-y-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full rounded-xl border border-gray-200 shadow-md" />
                  <figcaption className="text-sm text-gray-600">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Permissions */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">What Framely asks TikTok for</h2>
            <p className="mt-4 text-center text-gray-600">Framely requests only these three permissions and uses each one for a single purpose.</p>
            <dl className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white shadow-sm">
              {permissions.map((permission) => (
                <div key={permission.scope} className="grid gap-1 p-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-mono text-sm font-medium text-gray-900">{permission.scope}</dt>
                  <dd className="text-gray-600">{permission.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-4 py-20">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-gray-900">Questions</h2>
            <div className="mt-10 space-y-8">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-gray-600">
              More in our <Link href="/framely/privacy" className="text-emerald-700 underline">Privacy Policy</Link> and{" "}
              <Link href="/framely/terms" className="text-emerald-700 underline">Terms of Service</Link>, or write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-700 underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <FramelyFooter />
    </div>
  )
}
