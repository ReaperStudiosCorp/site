import React from 'react';
import TeamMember from '../components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      name: 'John Doe',
      role: 'Creative Director',
      portfolioLink: 'https://example.com/john'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      name: 'Jane Smith',
      role: 'Lead 3D Artist',
      portfolioLink: 'https://example.com/jane'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      name: 'Michael Johnson',
      role: 'Animation Director',
      portfolioLink: 'https://example.com/michael'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      name: 'Sarah Williams',
      role: 'Music Composer',
      portfolioLink: 'https://example.com/sarah'
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Reaper Studios Office" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Reaper Studios</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Reaper Studios, where creativity meets technology to bring visions to life. Born from a passion for 
              storytelling and digital artistry, our studio is a collective of dreamers, designers, and innovators dedicated 
              to crafting breathtaking 2D & 3D animations, high-quality game assets, stunning illustrations, and immersive music.
            </p>
            <p className="text-gray-600 mb-4">
              From concept to completion, we specialize in turning ideas into visual masterpieces. Whether it's game-ready 3D models, 
              cinematic animations, storyboards, or professional video editing, we push the boundaries of artistry and technology 
              to deliver unmatched quality. Our talented composers add the final touch, creating soul-stirring music that elevates 
              every project to new heights.
            </p>
            <p className="text-gray-600">
              At Reaper Studios, every frame, texture, and note tells a story. Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map(member => (
          <TeamMember 
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            portfolioLink={member.portfolioLink}
          />
        ))}
      </div>
    </div>
  );
};

export default About;