import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Cybersecurity Deployments by Panger Lkr',
  description:
    'Explore high-end cybersecurity projects by Panger Lkr (Pangerkumzuk Longkumer) — including zero-trust architecture, threat intelligence platforms, and encryption protocols built for enterprise defence in India.',
  keywords: [
    'Panger Lkr Projects',
    'Cybersecurity Projects India',
    'Zero Trust Architecture Project',
    'Threat Intelligence Platform',
    'Encryption Protocol India',
    'Pangerkumzuk Longkumer portfolio',
    'Cybersecurity Portfolio Nagaland',
    'Best Cybersecurity Projects India',
  ],
  openGraph: {
    title: 'Projects | Cybersecurity Deployments by Panger Lkr',
    description:
      'High-end cybersecurity and engineering projects by Panger Lkr — zero-trust architecture, threat intelligence, and encryption systems.',
    url: 'https://pangerlkr.link/projects',
    type: 'website',
  },
  alternates: {
    canonical: 'https://pangerlkr.link/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
