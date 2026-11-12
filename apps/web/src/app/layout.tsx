import type { Metadata } from 'next';
import './globals.css';
import UniversityHeader from '@/components/layout/UniversityHeader';
import UniversityFooter from '@/components/layout/UniversityFooter';
import AIAssistantModal from '@/components/ui/AIAssistantModal';

export const metadata: Metadata = {
  title: 'Sai Nath University | Ranchi, Jharkhand | Established by Act 15 of 2012',
  description:
    'Official Portal of Sai Nath University, Ranchi, Jharkhand. Recognized under Section 2(f) of UGC Act, 1956. Offering accredited degree & diploma courses in Engineering, Law, Pharmacy, Nursing, Agriculture, Management, and Education.',
  keywords: [
    'Sai Nath University',
    'Sai Nath University Ranchi',
    'University in Jharkhand',
    'B.Tech Mining Engineering Ranchi',
    'LL.B Ranchi',
    'B.Pharm D.Pharm Ranchi',
    'B.Sc Nursing Jharkhand',
    'Agriculture University Jharkhand',
    'UGC 2f university Jharkhand',
  ],
  authors: [{ name: 'Sai Nath University' }],
  metadataBase: new URL('https://kiru6006.github.io/univ-sainath/'),
  alternates: {
    canonical: 'https://kiru6006.github.io/univ-sainath/',
  },
  openGraph: {
    title: 'Sai Nath University | Premier University in Ranchi, Jharkhand',
    description:
      'Explore 40+ degree and diploma programs. UGC 2(f), AIU, BCI, PCI, NCTE, and INC approved. Admissions open for 2026-27.',
    url: 'https://kiru6006.github.io/univ-sainath/',
    siteName: 'Sai Nath University',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: 'Sai Nath University',
    alternateName: 'SNU Ranchi',
    url: 'https://www.sainathuniversity.com/',
    logo: 'https://www.sainathuniversity.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jirawar, Chandway-Kuchu Road, Ormanjhi',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      postalCode: '835219',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-7970408015',
        contactType: 'Admissions Inquiry',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    foundingDate: '2012',
    actionableFeedbackPolicy: 'https://kiru6006.github.io/univ-sainath/disclosures',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        <UniversityHeader />
        <main className="flex-1">{children}</main>
        <AIAssistantModal />
        <UniversityFooter />
      </body>
    </html>
  );
}

