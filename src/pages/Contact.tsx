import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Ready to bring your creative vision to life? Get in touch with us to discuss your project needs.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gradient-to-b from-gray-800 to-gray-700 text-white p-8">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="mb-6 flex items-start">
              <MapPin className="mr-4 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1 text-cyan-200">Our Location</h4>
                <p className="text-gray-300">123 Creative Avenue, Suite 100, Digital City, DC 12345</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <Phone className="mr-4 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1 text-cyan-200">Phone</h4>
                <p className="text-gray-300">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <Mail className="mr-4 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1 text-cyan-200">Email</h4>
                <p className="text-gray-300">info@reaperstudios.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="mr-4 text-cyan-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1 text-cyan-200">Business Hours</h4>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday - Sunday: By appointment only</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Project Type</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  >
                    <option value="">Select a project type</option>
                    <option value="Animation">Animation</option>
                    <option value="Game Assets">Game Assets</option>
                    <option value="Illustration">Illustration</option>
                    <option value="Music">Music Composition</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                  placeholder="Tell us about your project and what you're looking to achieve..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md hover:shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;