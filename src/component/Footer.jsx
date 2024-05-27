import React from 'react';

const socialMediaLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com', img: "https://cdn-icons-png.freepik.com/512/124/124010.png" },
  { name: 'Instagram', url: 'https://www.instagram.com', img: "https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg"},
  { name: 'Twitter', url: 'https://www.twitter.com', img: "https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"},
  { name: 'Google Plus', url: 'https://plus.google.com', img: "https://cdn.worldvectorlogo.com/logos/google-plus.svg" },
  { name: 'YouTube', url: 'https://www.youtube.com', img: "https://yt3.googleusercontent.com/ytc/AIdro_mVwhNKzSPPdRsTfuxUTv9irXuKWITjqwiuJvHvvM0-Ag=s900-c-k-c0x00ffffff-no-rj" }
];

const navLinks = [
  { name: 'Home', url: '#home' },
  { name: 'Skills', url: '#skills' },
  { name: 'About', url: '#about' },
  { name: 'Contact Us', url: '#contact' },
  { name: 'Services', url: '#services' }
];

const footerClass = 'bg-white text-teal-400 py-6';
const linkClass = 'text-teal-600';
const hoverClass = 'hover:underline';
const flexCenterClass = 'flex justify-center';
const spaceX4Class = 'space-x-4';
const spaceX8Class = 'space-x-8';
const textCenterClass = 'text-center';

const SocialMediaLink = ({ name, url, img }) => (
  <a href={url} className={linkClass}>
    <img style={{width: "50px", height:"50px", borderRadius:'10px'}} src={img} alt={name} className="inline-block" />
  </a>
);

const NavLink = ({ name, url }) => (
  <a href={url} className={`${linkClass} ${hoverClass}`}>{name}</a>
);

const Footer = () => (
  <div className={footerClass}>
    <div className={`${flexCenterClass} ${spaceX4Class} mb-4`}>
      {socialMediaLinks.map((link, index) => (
        <SocialMediaLink key={index} name={link.name} url={link.url} img={link.img}/>
      ))}
    </div>
    <div className={`${flexCenterClass} ${spaceX8Class} mb-4`}>
      {navLinks.map((link, index) => (
        <NavLink key={index} name={link.name} url={link.url} />
      ))}
    </div>
    <div className={textCenterClass}>
      <p>Copyright ©2024; Designed by LUQMAN</p>
    </div>
  </div>
);

export default Footer;
