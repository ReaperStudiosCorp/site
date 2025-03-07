import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Film, Gamepad2, PenTool, Music, Video, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Film size={48} />,
      title: '2D & 3D Animation',
      description: 'Breathtaking animations that bring stories to life with fluid motion and stunning visuals.'
    },
    {
      id: 2,
      icon: <Gamepad2 size={48} />,
      title: 'Game Asset Creation',
      description: 'High-quality, optimized 3D models, textures, and animations for immersive gaming experiences.'
    },
    {
      id: 3,
      icon: <PenTool size={48} />,
      title: 'Illustration',
      description: 'Stunning digital illustrations and concept art that capture imagination and convey powerful stories.'
    },
    {
      id: 4,
      icon: <Music size={48} />,
      title: 'Music Composition',
      description: 'Soul-stirring original soundtracks and audio design that elevate your projects to new heights.'
    },
    {
      id: 5,
      icon: <Video size={48} />,
      title: 'Video Editing',
      description: 'Professional video editing services that transform raw footage into compelling visual narratives.'
    },
    {
      id: 6,
      icon: <Palette size={48} />,
      title: 'Concept Art',
      description: 'Visionary concept art that lays the foundation for cohesive visual storytelling and world-building.'
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of creative services to bring your vision to life.
          Our team of talented artists, animators, and composers is dedicated to delivering 
          high-quality content tailored to your specific requirements.
        </p>
      </div>
      
      <div className="md:flex">
        <div className="md:w-2/3 pr-0 md:pr-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <h3 className="text-xl font-bold text-white bg-gradient-to-r from-gray-700 to-gray-800 p-4">
              Our Creative Process
            </h3>
            <div className="p-4">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Concept Phase" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Concept Development</h4>
                <p className="text-gray-600 text-sm">We begin with thorough research and conceptualization to establish a strong creative foundation.</p>
              </div>
              
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80" 
                  alt="Production Phase" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Production</h4>
                <p className="text-gray-600 text-sm">Our skilled team brings concepts to life through meticulous modeling, animation, and composition.</p>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Finalization Phase" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Finalization</h4>
                <p className="text-gray-600 text-sm">We refine and polish every detail to ensure the final product exceeds expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;