import type { Metadata } from 'next';

const SITE_URL = 'https://pangerlkr.link';

export const metadata: Metadata = {
  title: 'About | Panger Lkr — Cybersecurity Expert & Entrepreneur',
  description:
    'Learn about Panger Lkr (Pangerkumzuk Longkumer) — cybersecurity expert, entrepreneur, and founder of NexusCipherGuard & Aegis Mind Technologies from Kohima, Nagaland, India. Expert in zero-trust architecture, threat intelligence, and digital defence.',
  keywords: [
    'About Panger Lkr',
    'Pangerkumzuk Longkumer',
    'Cybersecurity Expert Nagaland',
    'NexusCipherGuard India',
    'Aegis Mind Technologies',
    'Zero Trust Architecture Expert India',
    'Cybersecurity Entrepreneur Nagaland',
    'Threat Intelligence Expert India',
    'Penetration Testing Expert Northeast India',
    'MMB Cyber School Advisor',
    'Ethical Hacker Nagaland',
    'Digital Defence Strategy India',
    'Panger Lkr Biography',
    'Best Cybersecurity Professional Northeast India',
  ],
  openGraph: {
    title: 'About | Panger Lkr — Cybersecurity Expert & Entrepreneur',
    description:
      'Panger Lkr (Pangerkumzuk Longkumer) — cybersecurity expert, entrepreneur, and founder of NexusCipherGuard from Nagaland, India. Expert in zero-trust security, threat intelligence, and digital defence strategy.',
    url: `${SITE_URL}/about`,
    type: 'profile',
    images: [
      {
        url: '/panger-lkr.png',
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
    title: 'About | Panger Lkr — Cybersecurity Expert',
    description:
      'Cybersecurity expert & entrepreneur from Nagaland, India. Founder of NexusCipherGuard & Aegis Mind Technologies.',
    images: ['/panger-lkr.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
