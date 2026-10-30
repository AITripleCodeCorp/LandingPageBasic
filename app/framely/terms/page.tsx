import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT_EMAIL, LegalPage, LegalSection } from "@/components/framely/site-chrome"

export const metadata: Metadata = {
  title: "Terms of Service | Framelsy",
  description: "The terms that apply when you use Framelsy, a desktop app for posting to your own TikTok account.",
}

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms are an agreement between you and TwinCodeCorp (“we”, “us”) about your use of Framelsy, our desktop app for preparing and publishing videos and photo carousels to your own TikTok account. By signing in to or using Framelsy you agree to these terms. If you do not agree, please do not use Framelsy."
    >
      <LegalSection id="service" title="1. What Framelsy does">
        <p>
          Framelsy lets you choose a video or photos on your computer, write a caption, preview the post, choose how it
          is shared, and then either post it to your TikTok account or send it to your TikTok drafts to finish in the
          TikTok app. Framelsy works through TikTok’s official developer platform. It publishes only what you prepare,
          only to the account you sign in with, and only when you ask it to.
        </p>
        <p>
          Framelsy is an independent product of TwinCodeCorp. It is not affiliated with, endorsed by, or sponsored by
          TikTok. TikTok and related marks belong to their owners.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="2. Who can use Framelsy">
        <ul>
          <li>You must be old enough to hold a TikTok account where you live, and at least 13 years old.</li>
          <li>You must have a TikTok account and comply with TikTok’s own terms and policies.</li>
          <li>You may post only to an account that you own or are authorized to manage by its owner.</li>
        </ul>
      </LegalSection>

      <LegalSection id="authorization" title="3. Signing in and TikTok access">
        <p>
          You sign in on TikTok’s own website. We never see your TikTok password. When you approve access, Framelsy
          receives a temporary access token that lets it do only what you approved: read your basic profile (name and
          avatar), post content to your account, and send content to your drafts. Framelsy keeps the token in memory
          while the app is open. You can end the connection at any time with <strong>Sign out</strong> in Framelsy, which
          revokes the token, and by removing Framelsy from the connected apps in your TikTok account settings.
        </p>
      </LegalSection>

      <LegalSection id="content" title="4. Your content">
        <ul>
          <li>You keep all rights in the videos, photos, captions, and other content you post. We do not claim ownership of it.</li>
          <li>
            You give us a limited, temporary permission to process and transmit your content for one purpose: delivering
            it to TikTok at your request. We do not use it for anything else.
          </li>
          <li>
            You are responsible for your content and for having the rights to it, including rights to any music, images,
            and other material in it.
          </li>
          <li>
            You must follow TikTok’s Community Guidelines and, where they apply, TikTok’s Music Usage Confirmation and
            Branded Content Policy. If your post promotes yourself, your business, or a third party, you must turn on
            the content disclosure setting in Framelsy.
          </li>
          <li>Framelsy does not add watermarks, logos, or promotional text to your content.</li>
        </ul>
      </LegalSection>

      <LegalSection id="suggestions" title="5. Suggestions">
        <p>
          Framelsy can offer ready-made suggestions for a title, description, and hashtags. They are generated on your
          computer from simple templates, are optional, and are inserted only when you choose one. You can edit them
          freely. You remain responsible for everything you publish.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="6. Acceptable use">
        <p>You agree not to use Framelsy to:</p>
        <ul>
          <li>post content that is illegal, infringes the rights of others, or violates TikTok’s policies;</li>
          <li>post to accounts you do not own or are not authorized to manage;</li>
          <li>spam, mislead people, or copy other people’s content without permission;</li>
          <li>get around TikTok’s limits, restrictions, or review decisions;</li>
          <li>interfere with, reverse engineer, or attack Framelsy or the services it relies on.</li>
        </ul>
      </LegalSection>

      <LegalSection id="tiktok-limits" title="7. TikTok’s rules and limits">
        <p>
          Posting depends on TikTok. TikTok decides what can be posted, sets daily limits, and may remove content or
          restrict accounts. Until TikTok has completed its audit of Framelsy, TikTok allows posts made through apps like
          Framelsy only with the “Only me” visibility, and only from private accounts. After you post, TikTok may need
          a few minutes to process the content. We are not responsible for TikTok’s decisions, delays, or outages.
        </p>
      </LegalSection>

      <LegalSection id="fees" title="8. Price">
        <p>
          Framelsy is currently free to use. If we introduce paid features, we will tell you before you are charged for
          anything.
        </p>
      </LegalSection>

      <LegalSection id="privacy" title="9. Your data">
        <p>
          How we handle personal data is described in our <Link href="/privacy-policy">Privacy Policy</Link>, which is
          part of these terms.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="10. Our rights">
        <p>
          Framelsy, its design, and its code belong to TwinCodeCorp. You may use Framelsy for its intended purpose, but
          you may not copy, sell, or redistribute it unless we agree in writing.
        </p>
      </LegalSection>

      <LegalSection id="ending" title="11. Ending your use">
        <p>
          You can stop using Framelsy at any time by signing out and deleting the app. We may suspend or end your access
          if you break these terms or if we must do so to comply with the law or with TikTok’s requirements.
        </p>
      </LegalSection>

      <LegalSection id="disclaimer" title="12. No warranty">
        <p>
          Framelsy is provided “as is” and “as available”. We work to keep it reliable, but we cannot promise that it
          will be uninterrupted or error-free, or that TikTok will accept, process, or show every post.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="13. Limit of liability">
        <p>
          To the extent the law allows, TwinCodeCorp is not liable for indirect or consequential losses, lost profits,
          or lost data arising from your use of Framelsy, and our total liability for any claim is limited to the
          amount you paid us for Framelsy in the previous 12 months (or, if you paid nothing, to a nominal amount).
          Nothing in these terms limits any right you have under mandatory consumer-protection law or any liability that
          cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="14. Changes to these terms">
        <p>
          We may update these terms, for example when Framelsy or TikTok’s requirements change. We will publish the new
          version on this page with a new “Last updated” date. If you keep using Framelsy after a change takes effect,
          you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact">
        <p>
          TwinCodeCorp. Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
