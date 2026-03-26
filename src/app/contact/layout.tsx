import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Panger Lkr — Cybersecurity Expert',
  description:
    'Get in touch with Panger Lkr (Pangerkumzuk Longkumer), a leading cybersecurity expert and entrepreneur from Kohima, Nagaland, India. Available for security consulting, enterprise defence strategy, and collaboration.',
  keywords: [
    'Contact Panger Lkr',
    'Hire Cybersecurity Expert India',
    'Cybersecurity Consultant Nagaland',
    'Cybersecurity Consulting India',
    'Security Consultant Northeast India',
    'Pangerkumzuk Longkumer Contact',
    'Hire Ethical Hacker India',
    'Best Cybersecurity Expert Contact India',
  ],
  openGraph: {
    title: 'Contact | Panger Lkr — Cybersecurity Expert',
    description:
      'Reach Panger Lkr for cybersecurity consulting, zero-trust architecture, and digital defence strategy. Based in Kohima, Nagaland, India.',
    url: 'https://pangerlkr.link/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pangerlkr.link/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
