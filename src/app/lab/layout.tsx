import type { Metadata } from 'next';

const SITE_URL = 'https://pangerlkr.link';

export const metadata: Metadata = {
  title: 'The Lab | Panger Lkr — Cybersecurity Research & Experimentation',
  description:
    'The Lab — Panger Lkr\'s experimental zone for cybersecurity research, zero-trust protocol testing, and offensive-defensive security innovation. From Nagaland, India.',
  keywords: [
    'Panger Lkr Lab',
    'Cybersecurity Research India',
    'Zero Trust Protocol Testing',
    'Threat Defense Research Nagaland',
    'Cybersecurity Experimentation India',
    'Identity Management Research',
    'Security Systems Architecture',
    'Pangerkumzuk Longkumer Research',
    'Ethical Hacking Research India',
    'Cybersecurity Innovation Northeast India',
  ],
  openGraph: {
    title: 'The Lab | Panger Lkr — Cybersecurity Research',
    description:
      'Panger Lkr\'s experimental zone for cybersecurity research, zero-trust protocol testing, and security innovation from Nagaland, India.',
    url: `${SITE_URL}/lab`,
    type: 'website',
    images: [
      {
        url: '/panger-lkr.png',
        width: 1200,
        height: 630,
        alt: 'Panger Lkr — Cybersecurity Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panger__lkr',
    creator: '@panger__lkr',
    title: 'The Lab | Panger Lkr — Cybersecurity Research',
    description:
      'Experimental zone for cybersecurity research and zero-trust protocol testing by Panger Lkr.',
    images: ['/panger-lkr.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/lab`,
  },
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
