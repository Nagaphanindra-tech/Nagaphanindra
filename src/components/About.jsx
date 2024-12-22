import React from 'react';
import profilePic from '../assets/PhaniProfile.jpg'; // Ensure the correct file path

const About = () => {
  return (
    <section id="about" className="about flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 lg:px-8 space-y-6 lg:space-y-0">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-sm font-light leading-relaxed max-w-lg">
          I am a skilled Frontend Engineer with over 3 years of experience in designing and developing high-quality web applications. Proficient in modern web technologies such as HTML5, CSS3, JavaScript, and advanced libraries like React, Redux Toolkit, and Redux Saga, I specialize in building user-centric, scalable, and performance-optimized interfaces.
        </p>
      </div>
      
      {/* Profile Picture Section */}
      <div className="lg:w-1/2 flex justify-end">
        <img
          src={profilePic}
          alt="Aithagoni Nagaphanindra"
          className="rounded-lg shadow-lg max-w-full lg:max-w-xs"
        />
      </div>
    </section>
  );
};

export default About;
