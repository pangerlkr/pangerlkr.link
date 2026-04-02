import React from 'react';
import { PROJECTS_DATA } from '@/data/projects';
import ProjectsClient from '@/components/ProjectsClient';

export default function ProjectsPage() {
  const projectsList = Object.entries(PROJECTS_DATA).map(([slug, data], index) => ({
    ...data,
    id: index + 1,
    slug,
    color: index % 2 === 0 ? 'from-blue-500 to-emerald-500' : 'from-purple-500 to-blue-500',
    tags: [data.category, data.year]
  }));

  return <ProjectsClient projectsList={projectsList} />;
}
