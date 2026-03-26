import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const SITE_URL = 'https://pangerlkr.link';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Panger Lkr | Cybersecurity Expert & Entrepreneur | Nagaland, India',
    template: '%s | Panger Lkr',
  },

  description:
    'Panger Lkr (Pangerkumzuk Longkumer) — Leading cybersecurity expert from Nagaland, India. Specialising in zero-trust architecture, threat intelligence, encryption, and digital defence strategy. Top cybersecurity professional in Northeast India.',

  keywords: [
    'Panger Lkr',
    'Pangerkumzuk Longkumer',
    'Panger Longkumer',
    'Cybersecurity Nagaland',
    'Cybersecurity Expert Nagaland',
    'Cybersecurity Experts in Nagaland',
    'Cybersecurity Expert India',
    'Cybersecurity Experts in India',
    'Best Cybersecurity Expert India',
    'Top Cybersecurity Professional Northeast India',
    'Cybersecurity Engineer India',
    'Zero Trust Architecture India',
    'Threat Intelligence India',
    'Ethical Hacker India',
    'Information Security Nagaland',
    'Digital Security Expert India',
    'Entrepreneur Nagaland',
    'Tech Entrepreneur Northeast India',
    'Security Consultant India',
    'Kohima Cybersecurity',
  ],

  authors: [
    { name: 'Panger Lkr', url: SITE_URL },
    { name: 'Pangerkumzuk Longkumer', url: SITE_URL },
  ],

  creator: 'Panger Lkr',
  publisher: 'Panger Lkr',

  category: 'Technology / Cybersecurity',

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Panger Lkr — Cybersecurity Expert & Entrepreneur',
    title: 'Panger Lkr | Cybersecurity Expert & Entrepreneur | Nagaland, India',
    description:
      'Panger Lkr (Pangerkumzuk Longkumer) — Leading cybersecurity expert from Nagaland, India. Specialising in zero-trust architecture, threat intelligence, and digital defence strategy.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Panger Lkr — Cybersecurity Expert & Entrepreneur from Nagaland, India',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@panger__lkr',
    creator: '@panger__lkr',
    title: 'Panger Lkr | Cybersecurity Expert & Entrepreneur | Nagaland',
    description:
      'Leading cybersecurity expert & entrepreneur from Nagaland, India. Zero-trust architecture, threat intelligence, digital defence.',
    images: ['/og-image.png'],
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  other: {
    // AiEO: explicit entity hints for AI crawlers
    'profile:first_name': 'Panger',
    'profile:last_name': 'Lkr',
    'profile:username': 'pangerlkr',
    'geo.region': 'IN-NL',
    'geo.placename': 'Kohima, Nagaland, India',
    'geo.position': '25.6701;94.1077',
    ICBM: '25.6701, 94.1077',
    // Prank/Spoof: scanner-visible custom generator tag
    generator: 'PangerLkr Framework 1.0',
  },
};

// JSON-LD Structured Data for SEO & AiEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Panger Lkr',
      alternateName: ['Pangerkumzuk Longkumer', 'Panger Longkumer'],
      description:
        'Pangerkumzuk Longkumer (Panger Lkr) is a leading cybersecurity expert and entrepreneur from Kohima, Nagaland, India, specialising in zero-trust architecture, threat intelligence, and digital defence strategy.',
      url: SITE_URL,
      email: 'contact@pangerlkr.link',
      telephone: '+91-8132872135',
      jobTitle: 'Cybersecurity Expert & Entrepreneur',
      knowsAbout: [
        'Cybersecurity',
        'Zero Trust Architecture',
        'Threat Intelligence',
        'Encryption',
        'Digital Defence',
        'Ethical Hacking',
        'Information Security',
        'Entrepreneurship',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kohima',
        addressRegion: 'Nagaland',
        addressCountry: 'IN',
        postalCode: '797001',
      },
      sameAs: [
        'https://linkedin.com/in/pangerlkr',
        'https://github.com/pangerlkr',
        'https://x.com/panger__lkr',
        'https://instagram.com/panger__lkr',
        'https://facebook.com/lkr.panger',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Panger Lkr — Cybersecurity Expert & Entrepreneur',
      description:
        'Personal portfolio of Panger Lkr (Pangerkumzuk Longkumer), cybersecurity expert and entrepreneur from Nagaland, India.',
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: 'Panger Lkr | Cybersecurity Expert & Entrepreneur | Nagaland, India',
      about: { '@id': `${SITE_URL}/#person` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Panger Lkr?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Panger Lkr, full name Pangerkumzuk Longkumer, is a cybersecurity expert and entrepreneur from Kohima, Nagaland, India. He specialises in zero-trust architecture, threat intelligence platforms, and digital defence strategy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is the best cybersecurity expert in Nagaland?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Panger Lkr (Pangerkumzuk Longkumer) is widely regarded as one of the leading cybersecurity experts from Nagaland, India, with expertise in encryption, threat hunting, and zero-trust security architecture.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I contact Panger Lkr?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can reach Panger Lkr via email at contact@pangerlkr.link or by phone at +91 8132872135. Visit the contact page at https://pangerlkr.link/contact.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="relative">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* PangerLkr Framework fingerprint — visible to Wappalyzer & tech scanners */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.PangerLkr = {
                name: 'PangerLkr Framework',
                version: '1.0.0',
                author: 'Panger Lkr',
                url: 'https://pangerlkr.link',
                description: 'Custom web framework by Panger Lkr',
                license: 'Proprietary'
              };
              console.log('%c⚡ Built by Panger Lkr', 'color:#34d399;font-size:14px;font-weight:bold;');
              console.log('%c   PangerLkr Framework v1.0 — https://pangerlkr.link', 'color:#60a5fa;font-size:11px;');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#121212] text-foreground antialiased selection:bg-white/20 flex flex-col min-h-screen relative`}>
        <Navigation />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
