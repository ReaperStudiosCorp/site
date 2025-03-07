import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

const Home = () => {
  const navigate = useNavigate();
  
  const slides = [
    {
      id: 1,
      image: '/images/haunted-roots/maya.png',
      title: 'Maya - The Artistic Explorer',
      description: 'A creative soul with a passion for sketching. Always carrying her trusty sketchbook and art supplies in her messenger bag.',
      link: '/services'
    },
    {
      id: 2,
      image: '/images/haunted-roots/ollie.png',
      title: 'Ollie - The Curious Collector',
      description: 'Music enthusiast and collector of random treasures. Known for finding unique items to share with his friends.',
      link: '/projects'
    },
    {
      id: 3,
      image: '/images/haunted-roots/venessa.png',
      title: 'Venessa - The History Buff',
      description: 'Local museum archivist with a love for historical mysteries and monster movies. Expert in cryptid lore.',
      link: '/services'
    },
    {
      id: 4,
      image: '/images/haunted-roots/sam.png',
      title: 'Sam - The Handy Helper',
      description: 'Skilled handyman who enjoys fixing things. Works on home projects and always has practical advice to share.',
      link: '/services'
    },
    {
      id: 5,
      image: '/images/haunted-roots/dusty-jackson.png',
      title: 'Dusty Jackson - The Musical Soul',
      description: 'Charismatic performer who loves jazz and finger music. Known for his smooth moves and goofy personality.',
      link: '/services'
    },
    {
      id: 6,
      image: '/images/haunted-roots/ellie-simmons.png',
      title: 'Ellie Simmons',
      description: 'A mysterious character with untold stories yet to be revealed.',
      link: '/services'
    },
  ];

  return (
    <div>
      <Slideshow slides={slides} />
      
      <div className="max-w-4xl mx-auto my-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Reaper Studios</h2>
          <p className="text-gray-600 mb-6">
            Where creativity meets technology to bring visions to life. Born from a passion for 
            storytelling and digital artistry, our studio is a collective of dreamers, designers, 
            and innovators dedicated to crafting breathtaking 2D & 3D animations, high-quality 
            game assets, stunning illustrations, and immersive music.
          </p>
          <p className="text-gray-600 mb-6">
            From concept to completion, we specialize in turning ideas into visual masterpieces. 
            At Reaper Studios, every frame, texture, and note tells a story.
          </p>
          <button 
            onClick={() => navigate('/about')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md hover:shadow-lg transition duration-300"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;