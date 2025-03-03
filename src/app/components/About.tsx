'use client'; // Mark this file as a client component

import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Icons for GitHub, LinkedIn
import { SiLeetcode } from 'react-icons/si'; // Icon for Leetcode
import Image from 'next/image'; // Profile Image Component

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-12 px-6 flex flex-col justify-center items-center"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-center justify-center text-center mb-12 w-full max-w-7xl">
        {/* About Text Section (Left) */}
        <div className="lg:w-1/2 text-center lg:text-left lg:mr-12 mb-8 lg:mb-0">
          <h3 className="text-4xl font-extrabold text-white mb-4">About Me</h3>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            I am a passionate Web Developer who enjoys creating engaging, responsive, and performant web applications. I specialize in
            <span className="text-yellow-400">React.js</span>,
            <span className="text-yellow-400">Next.js</span>,
            <span className="text-yellow-400">Node.js</span>, 
            <span className="text-yellow-400">MongoDB</span>. I am always looking to improve my skills and build meaningful projects.
          </p>

          {/* GitHub and Leetcode Stats Section */}
          <div className="mt-16 flex justify-evenly text-center">
            <div className="flex flex-col items-center space-y-4">
              <a
                href="https://www.linkedin.com/in/hafiza-amna-razzaq-1467ba216/"
                target="_blank"
                className="w-16 h-16 bg-yellow-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FaLinkedin size={30} />
              </a>
              <p className="text-xl font-semibold text-white">LinkedIn</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a
                href="https://github.com/Amna1993"
                target="_blank"
                className="w-16 h-16 bg-yellow-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FaGithub size={30} />
              </a>
              <p className="text-xl font-semibold text-white">25+ GitHub Repos</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a
                href="https://leetcode.com/u/amnarazzaqawan/"
                target="_blank"
                className="w-16 h-16 bg-yellow-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <SiLeetcode size={30} />
              </a>
              <p className="text-xl font-semibold text-white">100+ Leetcode Solved</p>
            </div>
          </div>
        </div>

        {/* Profile Image Section (Right) */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-full bg-transparent relative mb-6 mx-auto lg:mx-0">
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] absolute transform -translate-x-1/2 translate-y-1/3 left-1/2 rounded-full blur-[20px]"></div>
            <Image
              src="/images/me.jpeg" // Replace with your actual profile image
              alt="IMAGE"
              width={250}
              height={250}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16 space-y-12">
        <h3 className="text-3xl font-semibold text-center mb-6">Experience</h3>

        {/* Teaching Experience */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="sm:w-1/4 text-center sm:text-left">
            <h4 className="text-2xl font-semibold">MERN Stack Development</h4>
            <p className="text-sm text-gray-400">Georgian@iLac, 2023-2025</p>
          </div>
          <div className="sm:w-3/4 text-center sm:text-left mt-4 sm:mt-0">
            <p className="text-lg sm:text-xl">
              As a **MERN Stack Development** instructor, I have been teaching the **fundamentals of full-stack web development** using **MongoDB**, **Express.js**, **React.js**, and **Node.js** to students. I help them build and deploy modern web applications while focusing on practical and industry-relevant skills.
            </p>
          </div>
        </div>

        {/* Frontend Developer Experience */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="sm:w-1/4 text-center sm:text-left">
            <h4 className="text-2xl font-semibold">Frontend Developer</h4>
            <p className="text-sm text-gray-400">CloudOps24, 2019-2022</p>
          </div>
          <div className="sm:w-3/4 text-center sm:text-left mt-4 sm:mt-0">
            <p className="text-lg sm:text-xl">
              I worked as a **Frontend Developer** at **CloudOps24**, where I was responsible for creating modern, **responsive web applications** using **React.js**, **HTML5**, and **CSS3**. I collaborated with a team to enhance user experience and performance while maintaining high code quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
