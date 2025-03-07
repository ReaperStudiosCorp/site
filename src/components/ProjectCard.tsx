import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  videoId?: string;
  image?: string;
  isOngoing?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  videoId, 
  image,
  isOngoing = false 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${isOngoing ? 'border-l-4 border-yellow-500' : ''}`}>
      {videoId && (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      
      {image && !videoId && (
        <div className="aspect-video">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          {isOngoing && (
            <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
              In Progress
            </span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;