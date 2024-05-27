import React, { useState } from 'react';
import personImage from "../assets/personImage.jpg"
import AboutUs from './About';
import Skills from './Skills';
import Testimonial from './Testimonial';
import Services from './Services';
import ContactPage from './Contact';
import Footer from './Footer';

const NAV_LINKS = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '#about' },
  { text: 'Skills', href: '#skills' },
  { text: 'Services', href: '#services' },
  { text: 'Testimonial', href: '#testimonial' },
  { text: 'Contact', href: '#contact' }
];

const SOCIAL_LINKS = [
  { icon: 'fab fa-facebook', href: '#' },
  { icon: 'fab fa-twitter', href: '#' },
  { icon: 'fab fa-linkedin', href: '#' }
];

const NAV_CLASSES = 'hover:text-teal-400';
const SIDEBAR_CLASSES = 'text-2xl hover:text-teal-400';
const CLOSE_BTN_CLASSES = 'mt-6 text-xl text-teal-600';
const ICON_CLASSES = 'text-2xl hover:text-teal-400';

const Portfolio = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const downloadCV = () => {
    const cvUrl = '../assets/portfolio.txt'; 
    
    const anchor = document.createElement('a');
    anchor.href = cvUrl;
    anchor.download = 'CV.txt';
    anchor.click();
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-teal-900 text-white" id='home'>
      <nav className="flex items-center justify-between p-10">
        <div className="text-2xl font-bold">Luqman's | Portfolio</div>
        <div className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link, index) => (
            <a key={index} href={link.href} className={NAV_CLASSES}>{link.text}</a>
          ))}
        </div>
        <button id="menu-btn" className="md:hidden focus:outline-none" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>
      <div id="sidebar" className={`fixed inset-0 bg-zinc-800 bg-opacity-75 z-50 ${sidebarVisible ? '' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          {NAV_LINKS.map((link, index) => (
            <a key={index} href={link.href} className={SIDEBAR_CLASSES}>{link.text}</a>
          ))}
          <button id="close-btn" className={CLOSE_BTN_CLASSES} onClick={() => setSidebarVisible(false)}>Close</button>
        </div>
      </div>
      <div className="container mx-auto p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-2">Hello, It's Me</h1>
          <h2 className="text-5xl font-bold mb-4">John Kendric</h2>
          <h3 className="text-2xl text-teal-400 mb-6">And I'm a Frontend Developer</h3>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus nulla sed saepe rerum, animi explicita.</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            {SOCIAL_LINKS.map((link, index) => (
              <a key={index} href={link.href} className={ICON_CLASSES}><i className={link.icon}></i></a>
            ))}
          </div>
          <a onClick={downloadCV} style={{marginBottom:"20px"}} className="inline-block bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded cursor-pointer ...">Download CV</a>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 rounded-full transform scale-125"></div>
            <img className="relative rounded-full w-74 h-74 object-cover" src={personImage} alt="Profile Picture" />
          </div>
        </div>
      </div>

      <a className='topButton' href="#home">Top</a>
    </div>
    <div className="container sec" id='about'><AboutUs/></div>
    <div className="container sec" id='skills'><Skills/></div>
    <div className="container sec" id='testimonial'><Testimonial/></div>
    <div className="container sec" id='services'><Services/></div>
    <div className="container sec" id='contact'><ContactPage/></div>
    <div><Footer/></div>
    </>
  );
};

export default Portfolio;
