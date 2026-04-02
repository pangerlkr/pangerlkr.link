import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/data/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA];
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Panger Lkr`,
    description: project.description
  };
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = PROJECTS_DATA[params.slug as keyof typeof PROJECTS_DATA];

  if (!project) {
    notFound();
  }

  // Pre-process the project object for the client component
  // We can add IDs or specific colors here if needed
  const projectWithMeta = {
    ...project,
    slug: params.slug,
  };

  return <ProjectDetailClient project={projectWithMeta} />;
}
