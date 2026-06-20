import { ReactNode } from 'react';

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-[#1E293B] mb-6">{children}</h2>
);

export const SubsectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{children}</h3>
);

export const SmallSubsectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{children}</h3>
);

export const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-700 leading-relaxed">{children}</p>
);

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
    {items.map((item, idx) => (
      <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
    ))}
  </ul>
);

interface SubsectionConfig {
  title: string;
  content: string | ReactNode;
  items?: string[];
}

export const Subsection = ({ title, content, items }: SubsectionConfig) => (
  <div>
    <SubsectionTitle>{title}</SubsectionTitle>
    {typeof content === 'string' ? <Paragraph>{content}</Paragraph> : content}
    {items && <BulletList items={items} />}
  </div>
);

interface SectionConfig {
  id: string;
  label: string;
}

export const TableOfContents = ({ sections }: { sections: SectionConfig[] }) => (
  <aside className="hidden lg:block w-64 shrink-0">
    <div className="sticky top-24 bg-gray-50 rounded-lg p-6 border border-gray-200">
      <h3 className="text-sm font-bold text-[#1E293B] mb-4 uppercase tracking-wide">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block text-sm text-gray-600 hover:text-[#2201DC] transition-colors py-1"
          >
            {section.label}
          </a>
        ))}
      </nav>
    </div>
  </aside>
);

export const Header = () => (
  <div className="mb-12 scroll-mt-32" id="introduction">
    <h1 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-4">
      Privacy Policy
    </h1>
    <p className="text-lg text-gray-600">
      Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
    </p>
  </div>
);

interface TechServiceConfig {
  title: string;
  description: string;
  policyLink?: string;
  policyUrl?: string;
}

export const TechService = ({ title, description, policyLink, policyUrl }: TechServiceConfig) => (
  <div>
    <SubsectionTitle>{title}</SubsectionTitle>
    <Paragraph>{description}</Paragraph>
    {policyUrl && (
      <Paragraph>
        <strong>{policyLink}:</strong> <a href={policyUrl} target="_blank" rel="noopener noreferrer" className="text-[#2201DC] hover:underline">{policyUrl}</a>
      </Paragraph>
    )}
  </div>
);

export const RightItem = ({ title, description }: { title: string; description: string }) => (
  <div>
    <SmallSubsectionTitle>{title}</SmallSubsectionTitle>
    <Paragraph>{description}</Paragraph>
  </div>
);

export const ContactBox = () => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
    <div>
      <h3 className="font-semibold text-[#1E293B]">PixoryFlow Agency</h3>
    </div>
    <div>
      <p className="text-gray-700">
        <strong>Email:</strong> <a href="mailto:info@pixoryflow.agency" className="text-[#2201DC] hover:underline">info@pixoryflow.agency</a>
      </p>
    </div>
    <div>
      <p className="text-gray-700">
        <strong>Website:</strong> <a href="https://pixoryflow.agency" target="_blank" rel="noopener noreferrer" className="text-[#2201DC] hover:underline">https://pixoryflow.agency</a>
      </p>
    </div>
    <div>
      <p className="text-gray-700">
        <strong>Contact Form:</strong> <a href="/contact-us" className="text-[#2201DC] hover:underline">Submit a contact form</a>
      </p>
    </div>
  </div>
);

export const IntroductionSection = () => (
  <section className="mb-12">
    <Paragraph>
      PixoryFlow Agency (quot;we,quot; quot;us,quot; quot;our,quot; or quot;Companyquot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at pixoryflow.agency (the quot;Sitequot;) and use our services.
    </Paragraph>
    <Paragraph>
      Please read this Pribnvacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site. By accessing and using the Site, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
    </Paragraph>
  </section>
);
