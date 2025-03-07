import React from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  portfolioLink: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, portfolioLink }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-48 h-48 overflow-hidden rounded-full mb-4 border-4 border-cyan-300 shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <a 
        href={portfolioLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-cyan-600 hover:text-cyan-800 transition-colors duration-300"
      >
        View Portfolio
      </a>
    </div>
  );
};

export default TeamMember;