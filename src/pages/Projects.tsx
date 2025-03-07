import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const completedProjects = [
    {
      id: 1,
      title: 'Redacted',
      description: 'To be disclosed at a later date.',
      videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
    },
    {
      id: 2,
      title: 'Redacted',
      description: 'To be disclosed at a later date.',
      videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
    },
    {
      id: 3,
      title: 'Redacted',
      description: 'To be disclosed at a later date.',
      videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video ID
    }
  ];

  const ongoingProjects = [
    {
      id: 4,
      title: 'Redacted',
      description: 'To be disclosed at a later date.',
      image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      isOngoing: true
    },
    {
      id: 5,
      title: 'Redacted',
      description: 'To be disclosed at a later date.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      isOngoing: true
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Projects</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore our portfolio of completed projects that showcase our expertise in animation, game asset creation, 
          illustration, and music composition.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-cyan-500 pb-2">Completed Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {completedProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            videoId={project.videoId}
          />
        ))}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-yellow-500 pb-2">Ongoing Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ongoingProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            isOngoing={project.isOngoing}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;