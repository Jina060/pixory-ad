import { Metadata } from 'next';
import {
  SectionTitle,
  SubsectionTitle,
  Paragraph,
  BulletList,
  Subsection,
  TableOfContents,
  Header,
  TechService,
  RightItem,
  ContactBox,
  IntroductionSection,
} from '@/components/PrivacyPolicy/PrivacyComponents';

export const metadata: Metadata = {
  title: 'Privacy Policy | PixoryFlow Agency',
  description: 'Privacy Policy for PixoryFlow Agency. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy | PixoryFlow Agency',
    description: 'Privacy Policy for PixoryFlow Agency. Learn how we collect, use, and protect your personal data.',
    url: '/privacy-policy',
    siteName: 'PixoryFlow Agency',
    type: 'website',
  },
};

interface SectionConfig {
  id: string;
  label: string;
}

const sections: SectionConfig[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: '1. Information We Collect' },
  { id: 'how-we-use', label: '2. How We Use Your Information' },
  { id: 'third-party-services', label: '3. Third-Party Services and Data Sharing' },
  { id: 'data-security', label: '4. Data Security' },
  { id: 'data-retention', label: '5. Data Retention' },
  { id: 'your-rights', label: '6. Your Rights and Choices' },
  { id: 'international-transfers', label: '7. International Data Transfers' },
  { id: 'childrens-privacy', label: '8. Children\'s Privacy' },
  { id: 'third-party-links', label: '9. Third-Party Links and Services' },
  { id: 'specific-technologies', label: '10. Specific Technologies We Use' },
  { id: 'california-rights', label: '11. California Privacy Rights' },
  { id: 'european-rights', label: '12. European Privacy Rights' },
  { id: 'policy-updates', label: '13. Updates to This Privacy Policy' },
  { id: 'contact-us', label: '14. Contact Us' },
  { id: 'additional-info', label: '15. Additional Information' },
];

export default function PrivacyPolicy() {

  return (
    <main className="min-h-screen bg-white">
      <div className="flex gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <TableOfContents sections={sections} />

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          <Header />
          <IntroductionSection />

          {/* 1. Information We Collect */}
          <section className="mb-12 scroll-mt-32" id="information-we-collect">
            <SectionTitle>1. Information We Collect</SectionTitle>
            
            <div className="space-y-6">
              <Subsection
                title="1.1 Information You Provide Directly"
                content="We collect information that you voluntarily provide to us, including:"
                items={[
                  '<strong>Contact Form Data:</strong> When you submit our contact form, we collect your full name, corporate email address, service inquiry type, budget range, project description/message, and any attached files (documents in .doc, .docx, or .pdf format).',
                  '<strong>Communication Data:</strong> Any emails, messages, or correspondence you send us directly.',
                  '<strong>Account Information:</strong> If applicable, login credentials and profile information.',
                ]}
              />

              <Subsection
                title="1.2 Information Automatically Collected"
                content="When you visit our Site, we automatically collect certain information about your device and browsing activity:"
                items={[
                  '<strong>Device Information:</strong> IP address, browser type, operating system, device type, and device identifiers.',
                  '<strong>Usage Data:</strong> Pages visited, time spent on pages, referral sources, and interaction patterns through analytics tools.',
                  '<strong>Location Data:</strong> General geographic location based on IP address (not precise location).',
                ]}
              />

              <Subsection
                title="1.3 Third-Party Information"
                content="We may receive information about you from third-party sources, including analytics providers, advertising networks, and publicly available sources, which we may combine with other information we collect about you."
              />
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12 scroll-mt-32" id="how-we-use">
            <SectionTitle>2. How We Use Your Information</SectionTitle>
            
            <Paragraph>We use the information we collect for various purposes, including:</Paragraph>
            
            <BulletList items={[
              '<strong>Service Delivery:</strong> Processing and responding to your inquiries, providing quotes, and delivering our services.',
              '<strong>Communication:</strong> Sending you service-related announcements, updates, and responses to your inquiries.',
              '<strong>Marketing:</strong> With your consent, sending promotional materials, newsletters, and marketing communications about our services.',
              '<strong>Website Improvement:</strong> Analyzing usage patterns to improve Site functionality, user experience, and content.',
              '<strong>Analytics:</strong> Understanding how users interact with our Site to optimize performance and conversion.',
              '<strong>Security:</strong> Detecting, preventing, and addressing fraud, abuse, and security incidents.',
              '<strong>Legal Compliance:</strong> Complying with legal obligations, court orders, and regulatory requirements.',
              '<strong>Business Operations:</strong> Managing our business operations, including billing, accounting, and auditing.',
            ]} />
          </section>

          {/* 3. Third-Party Services and Data Sharing */}
          <section className="mb-12 scroll-mt-32" id="third-party-services">
            <SectionTitle>3. Third-Party Services and Data Sharing</SectionTitle>
            
            <div className="space-y-6">
              <Subsection
                title="3.1 Service Providers"
                content="We share your information with third-party service providers who assist us in operating our Site and conducting our business:"
                items={[
                  '<strong>Email Service Providers:</strong> We use SMTP email services to send and receive communications. Your contact information and message content are transmitted to our email service provider.',
                  '<strong>Analytics Providers:</strong> Vercel Analytics and Vercel Speed Insights collect usage data to help us understand Site performance and user behavior.',
                  '<strong>Security Services:</strong> Google reCAPTCHA verifies that you are human and protects our Site from automated abuse. Google processes your interaction data in accordance with their privacy policy.',
                  '<strong>Hosting Providers:</strong> Our Site is hosted on Vercel, which may process your data as part of hosting and delivery services.',
                ]}
              />

              <Subsection
                title="3.2 Legal Requirements and Business Transfers"
                content="We may disclose your information when required by law or when we believe in good faith that disclosure is necessary to:"
                items={[
                  'Comply with applicable laws, regulations, court orders, or government requests.',
                  'Enforce our Terms of Service and other agreements.',
                  'Protect the security or integrity of our Site and services.',
                  'Protect the rights, privacy, safety, or property of PixoryFlow Agency, our users, or the public.',
                  'In the event of a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction.',
                ]}
              />

              <Subsection
                title="3.3 No Sale of Personal Data"
                content="We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We only share your data with service providers who assist us in delivering our services and who are bound by confidentiality obligations."
              />
            </div>
          </section>

          {/* 4. Data Security */}
          <section className="mb-12 scroll-mt-32" id="data-security">
            <SectionTitle>4. Data Security</SectionTitle>
            
            <Paragraph>We implement comprehensive technical, administrative, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</Paragraph>
            
            <BulletList items={[
              'HTTPS encryption for all data transmitted to and from our Site.',
              'Secure SMTP authentication for email communications.',
              'reCAPTCHA protection to prevent automated attacks and unauthorized access.',
              'Regular security monitoring and vulnerability assessments.',
              'Access controls limiting employee access to personal information on a need-to-know basis.',
              'Secure file handling and storage practices for uploaded documents.',
            ]} />
            
            <Paragraph>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security. You acknowledge that you provide information at your own risk.</Paragraph>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-12 scroll-mt-32" id="data-retention">
            <SectionTitle>5. Data Retention</SectionTitle>
            
            <Paragraph>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required by law:</Paragraph>
            
            <BulletList items={[
              '<strong>Contact Form Data:</strong> Retained for up to 3 years for business records, customer service follow-up, and legal compliance purposes.',
              '<strong>Email Communications:</strong> Retained in accordance with our email retention policy and legal requirements.',
              '<strong>Analytics Data:</strong> Retained by our analytics providers in accordance with their data retention policies.',
              '<strong>Cookies:</strong> Retained for the duration specified in our Cookie Policy or until you delete them.',
            ]} />
            
            <Paragraph>When information is no longer needed, we securely delete or anonymize it. However, we may retain certain information for legal, accounting, or archival purposes.</Paragraph>
          </section>

          {/* 6. Your Rights and Choices */}
          <section className="mb-12 scroll-mt-32" id="your-rights">
            <SectionTitle>6. Your Rights and Choices</SectionTitle>
            
            <div className="space-y-6">
              <Subsection
                title="6.1 Access and Correction"
                content="You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at the address provided in the Contact Us section below."
              />

              <Subsection
                title="6.2 Marketing Communications"
                content="You may opt out of receiving promotional emails and marketing communications from us at any time by clicking the unsubscribe link in any marketing email or by contacting us directly. Please note that even if you opt out of marketing communications, we will continue to send you service-related announcements and administrative messages."
              />

              <div>
                <SubsectionTitle>6.3 GDPR and CCPA Rights</SubsectionTitle>
                <Paragraph><strong>For EU Residents (GDPR):</strong> If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including:</Paragraph>
                <BulletList items={[
                  'Right to access your personal data.',
                  'Right to rectification of inaccurate data.',
                  'Right to erasure ("right to be forgotten").',
                  'Right to restrict processing.',
                  'Right to data portability.',
                  'Right to object to processing.',
                  'Right to withdraw consent at any time.',
                ]} />
                
                <Paragraph><strong>For California Residents (CCPA):</strong> If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including:</Paragraph>
                <BulletList items={[
                  'Right to know what personal information is collected.',
                  'Right to know whether personal information is sold or disclosed.',
                  'Right to opt out of the sale or sharing of personal information.',
                  'Right to delete personal information collected from you.',
                  'Right to correct inaccurate personal information.',
                  'Right to limit use and disclosure of sensitive personal information.',
                ]} />
              </div>
            </div>
          </section>

          {/* 7. International Data Transfers */}
          <section className="mb-12 scroll-mt-32" id="international-transfers">
            <SectionTitle>7. International Data Transfers</SectionTitle>
            
            <Paragraph>Our Site is hosted in the United States and your information may be transferred to, stored in, and processed in the United States or other countries where our service providers operate. These countries may have data protection laws that differ from your country of residence.</Paragraph>
            
            <Paragraph>By using our Site and providing your information, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules. We implement appropriate safeguards, including Standard Contractual Clauses and other mechanisms, to protect your information during international transfers.</Paragraph>
          </section>

          {/* 8. Children's Privacy */}
          <section className="mb-12 scroll-mt-32" id="childrens-privacy">
            <SectionTitle>8. Children&apos;s Privacy</SectionTitle>
            
            <Paragraph>Our Site is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information and terminate the child&apos;s account. If you believe we have collected information from a child under 13, please contact us immediately.</Paragraph>
          </section>

          {/* 9. Third-Party Links and Services */}
          <section className="mb-12 scroll-mt-32" id="third-party-links">
            <SectionTitle>9. Third-Party Links and Services</SectionTitle>
            
            <Paragraph>Our Site may contain links to third-party websites, applications, and services that are not operated by PixoryFlow Agency. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices.</Paragraph>
            
            <Paragraph>We encourage you to review the privacy policies of any third-party services before providing your information. Your use of third-party services is subject to their terms and privacy policies, not ours.</Paragraph>
          </section>

          {/* 10. Specific Technologies */}
          <section className="mb-12 scroll-mt-32" id="specific-technologies">
            <SectionTitle>10. Specific Technologies We Use</SectionTitle>
            
            <div className="space-y-6">
              <TechService
                title="10.1 Google reCAPTCHA"
                description="We use Google reCAPTCHA to protect our contact form from spam and automated abuse. Google reCAPTCHA collects information about your interaction with our Site, including your IP address and other data, and processes it in accordance with Google's Privacy Policy."
                policyLink="Google Privacy Policy"
                policyUrl="https://policies.google.com/privacy"
              />

              <TechService
                title="10.2 Vercel Analytics and Speed Insights"
                description="We use Vercel Analytics and Vercel Speed Insights to monitor Site performance, user behavior, and conversion metrics. These services collect usage data including page views, referral sources, and performance metrics."
                policyLink="Vercel Privacy Policy"
                policyUrl="https://vercel.com/legal/privacy-policy"
              />

              <Subsection
                title="10.3 Email Services"
                content="We use SMTP email services to send and receive communications. Your contact information and message content are transmitted to our email service provider for delivery. The specific email service provider may vary, but all are bound by confidentiality agreements."
              />

              <TechService
                title="10.4 Hosting and Content Delivery"
                description="Our Site is hosted on Vercel, which provides hosting, content delivery, and infrastructure services. Vercel may process your data as part of providing these services."
                policyLink="Vercel Privacy Policy"
                policyUrl="https://vercel.com/legal/privacy-policy"
              />
            </div>
          </section>

          {/* 11. California Privacy Rights */}
          <section className="mb-12 scroll-mt-32" id="california-rights">
            <SectionTitle>11. California Privacy Rights (CCPA/CPRA)</SectionTitle>
            
            <Paragraph>If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):</Paragraph>
            
            <div className="space-y-4">
              <RightItem title="Right to Know" description="You have the right to request what personal information we collect, use, share, and sell about you." />
              <RightItem title="Right to Delete" description="You have the right to request deletion of personal information we have collected from you, subject to certain exceptions." />
              <RightItem title="Right to Correct" description="You have the right to request correction of inaccurate personal information." />
              <RightItem title="Right to Opt-Out" description="You have the right to opt out of the sale or sharing of your personal information for cross-context behavioral advertising." />
              <RightItem title="Right to Limit" description="You have the right to limit our use and disclosure of sensitive personal information." />
            </div>
            
            <Paragraph>To exercise any of these rights, please submit a request to us using the contact information provided below. We will verify your identity and respond within 45 days (or as required by law).</Paragraph>
          </section>

          {/* 12. European Privacy Rights (GDPR) */}
          <section className="mb-12 scroll-mt-32" id="european-rights">
            <SectionTitle>12. European Privacy Rights (GDPR)</SectionTitle>
            
            <Paragraph>If you are located in the European Union, United Kingdom, or other jurisdictions covered by the General Data Protection Regulation (GDPR), you have the following rights:</Paragraph>
            
            <div className="space-y-4">
              <RightItem title="Right to Access" description="You have the right to request access to your personal data and receive a copy of the information we hold about you." />
              <RightItem title="Right to Rectification" description="You have the right to request correction of inaccurate or incomplete personal data." />
              <RightItem title="Right to Erasure" description="You have the right to request deletion of your personal data under certain circumstances (the right to be forgotten)." />
              <RightItem title="Right to Restrict Processing" description="You have the right to request that we restrict the processing of your personal data under certain circumstances." />
              <RightItem title="Right to Data Portability" description="You have the right to request your personal data in a structured, commonly used, and machine-readable format." />
              <RightItem title="Right to Object" description="You have the right to object to processing of your personal data for direct marketing and other purposes." />
              <RightItem title="Right to Withdraw Consent" description="If we process your data based on your consent, you have the right to withdraw that consent at any time." />
            </div>
            
            <Paragraph>To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days (or as required by law).</Paragraph>
          </section>

          {/* 13. Updates to This Privacy Policy */}
          <section className="mb-12 scroll-mt-32" id="policy-updates">
            <SectionTitle>13. Updates to This Privacy Policy</SectionTitle>
            
            <Paragraph>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the Last updated date at the top of this policy and, where required, by obtaining your consent.</Paragraph>
            
            <Paragraph>Your continued use of our Site following the posting of revised Privacy Policy means that you accept and agree to the changes. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</Paragraph>
          </section>

          {/* 14. Contact Us */}
          <section className="mb-12 scroll-mt-32" id="contact-us">
            <SectionTitle>14. Contact Us</SectionTitle>
            
            <Paragraph>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</Paragraph>
            
            <ContactBox />
            
            <Paragraph><strong>Data Protection Officer:</strong> If you are in the EU and have concerns about our privacy practices, you may also contact your local data protection authority.</Paragraph>
          </section>

          {/* 15. Additional Information */}
          <section className="mb-12 scroll-mt-32" id="additional-info">
            <SectionTitle>15. Additional Information</SectionTitle>
            
            <div className="space-y-4">
              <RightItem title="Lawful Basis for Processing (GDPR)" description="We process your personal data based on the following lawful bases: (1) your consent, (2) performance of a contract, (3) compliance with legal obligations, (4) protection of vital interests, (5) performance of tasks in the public interest, and (6) our legitimate interests." />
              <RightItem title="Automated Decision-Making" description="We do not engage in automated decision-making or profiling that produces legal or similarly significant effects on you." />
              <RightItem title="Sensitive Personal Data" description="We do not intentionally collect sensitive personal data (such as racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, or data concerning sex life or sexual orientation) unless necessary for a specific purpose and with your explicit consent." />
            </div>
          </section>

          {/* Closing */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <Paragraph>By using PixoryFlow Agency&apos;s website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. If you do not agree with any part of this policy, please do not use our Site or services.</Paragraph>
          </section>
        </div>
      </div>
    </main>
  );
}
