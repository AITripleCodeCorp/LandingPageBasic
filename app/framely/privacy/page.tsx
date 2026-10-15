import type { Metadata } from "next"
import Link from "next/link"
import { CONTACT_EMAIL, LegalPage, LegalSection } from "@/components/framely/site-chrome"

export const metadata: Metadata = {
  title: "Privacy Policy | Framely",
  description: "What personal data Framely processes when you post to TikTok, why, and how long it is kept.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what personal data Framely, our desktop app for posting to your own TikTok account, and this website process, why, and what your choices are. Framely is built to handle as little data as possible: most things stay on your computer or go straight to TikTok."
    >
      <LegalSection id="who" title="1. Who is responsible">
        <p>
          TwinCodeCorp (“we”, “us”) is the controller of the personal data described here. Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>

      <LegalSection id="data" title="2. What we process">
        <ul>
          <li>
            <strong>TikTok profile.</strong> When you sign in with TikTok and approve access, TikTok gives Framely your
            unique TikTok identifier (<code>open_id</code>), display name, username, and avatar. Framely shows them so
            you can see which account you are posting to. They are used on your computer and are not stored on our servers.
          </li>
          <li>
            <strong>Access token.</strong> The token TikTok issues after you approve access is kept in the app’s memory only.
            It is not written to disk, and it is discarded when you sign out or close Framely.
          </li>
          <li>
            <strong>Your videos.</strong> A video you post is sent from your computer straight to TikTok. We do not
            store it.
          </li>
          <li>
            <strong>Your photos (carousels).</strong> TikTok can only fetch photos from a web address, so when you post
            a photo carousel Framely uploads the photos to a storage bucket that we operate on Amazon Web Services (AWS)
            and gives TikTok a web address to download them from. The photos sit under a random folder name, but anyone
            who has the exact address could open them until they are deleted. We delete them as soon as TikTok reports
            the final status of your post. If the app is closed or loses its connection before that, any leftover files are deleted
            within 7 days at the latest.
          </li>
          <li>
            <strong>Post text and settings.</strong> Your title, description, privacy choice, interaction settings, and
            content disclosure choice are sent to TikTok to create your post.
          </li>
          <li>
            <strong>Post history.</strong> Framely keeps a list of the posts you made (title, time, status, and a small
            thumbnail) in a file on your own computer. It never leaves your computer and you can remove it by deleting
            the app’s data folder.
          </li>
          <li>
            <strong>Technical data.</strong> When Framely or this website contacts a server, that server sees your IP
            address and basic request data, as with any internet service. Our website host may keep standard server logs.
          </li>
        </ul>
        <p>
          Framely does not contain advertising, analytics, or tracking tools, and this website does not use advertising
          or analytics cookies. The optional text suggestions are created on your computer; your content is not sent
          anywhere to create them.
        </p>
      </LegalSection>

      <LegalSection id="use" title="3. Why we use it">
        <p>
          We use this data only to run Framely: to sign you in through TikTok, to show which account you are posting
          to, to deliver your content to TikTok, and to show you the progress and result of each post. We do not sell
          personal data, use it for advertising, build profiles, or use your content to train AI models.
        </p>
      </LegalSection>

      <LegalSection id="basis" title="4. Legal basis (GDPR)">
        <ul>
          <li>Performing our agreement with you: providing the features you ask for.</li>
          <li>Your consent: the access you grant to TikTok when you sign in, which you can withdraw at any time.</li>
          <li>Our legitimate interests: keeping the service secure and preventing abuse.</li>
        </ul>
      </LegalSection>

      <LegalSection id="sharing" title="5. Who receives data">
        <ul>
          <li>
            <strong>TikTok</strong> receives the content, text, and settings you choose to post, and handles your account
            under its own privacy policy.
          </li>
          <li>
            <strong>Amazon Web Services</strong> hosts the temporary photo storage described above, as our processor. The
            storage is in the United States (us-east-1 region).
          </li>
          <li>
            Our <strong>website host</strong> serves this website and may keep standard server logs.
          </li>
          <li>We may disclose data if the law requires it.</li>
        </ul>
      </LegalSection>

      <LegalSection id="transfers" title="6. Transfers outside your country">
        <p>
          Temporary photo storage is in the United States. Where the law requires it, the transfer relies on the
          contractual safeguards (standard contractual clauses) that our provider offers. TikTok processes data under
          its own terms.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="7. How long we keep data">
        <ul>
          <li>Access token: in memory only, until you sign out or close the app.</li>
          <li>Photos for carousels: deleted when TikTok reports the final status of the post, and in any case within 7 days.</li>
          <li>Videos: not stored by us.</li>
          <li>Post history: on your computer until you delete it.</li>
          <li>Emails you send us: as long as needed to answer you, then deleted.</li>
        </ul>
      </LegalSection>

      <LegalSection id="rights" title="8. Your rights and choices">
        <p>
          Depending on where you live, you may have the right to access your data, correct it, delete it, restrict or
          object to its use, receive a copy, withdraw consent, and complain to your data protection authority. Because
          we keep almost no data about you, there is usually little to access or delete, but write to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will help. We may need to confirm who you are
          before we act on a request.
        </p>
        <p>
          <strong>To disconnect Framely:</strong> choose <strong>Sign out</strong> in the app (it revokes the access
          token with TikTok). You can also remove Framely from the apps connected to your account in your TikTok
          settings. To remove your local post history, delete the app’s data folder on your computer.
        </p>
      </LegalSection>

      <LegalSection id="children" title="9. Children">
        <p>
          Framely is not for children under 13, and we do not knowingly process their data. TikTok sets its own minimum
          age for accounts.
        </p>
      </LegalSection>

      <LegalSection id="security" title="10. Security">
        <p>
          Connections to TikTok and to our storage use encryption in transit. The access token is never stored on disk.
          No system is perfectly secure, so please keep your computer up to date.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes">
        <p>
          We may update this policy. We will publish the new version here with a new “Last updated” date. See also our{" "}
          <Link href="/framely/terms">Terms of Service</Link>.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <p>
          TwinCodeCorp, <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
