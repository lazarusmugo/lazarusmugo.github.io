"use client";
import Head from 'next/head';

import { NavDesktop } from '../components/navigation/DesktopNavbar'; 
import { NavMobile } from '../components/navigation/MobileNavbar'; 
import { useState } from 'react';
import { Typed } from 'react-typed';
import { ReactTyped } from "react-typed";
import SectionIndicator from '../components/navigation/SectionIndicator';
import Image from 'next/image'

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="A portfolio showcasing my skills, projects, and experiences." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavMobile />
      

      <SectionIndicator /> 

      <main className="flex flex-col items-center justify-center min-h-screen font-sans ">
        <section id="introduction" className="w-full flex flex-col lg:flex-row ">
          <div className="bg-custom-blue w-full lg:w-3/4 lg:p-30 p-10 flex flex-col justify-center lg:h-[700px]">
            <div className="container mx-auto w-full lg:w-3/4">
              <h1 className="text-custom-green font-bold text-xl lg:text-6xl py-8">
                <ReactTyped
                  strings={['Frontend Developer', 'Mobile Application Developer', 'UI/UX Designer']}
                  typeSpeed={120}
                  backSpeed={80}
                  backDelay={3000} 
                  loop 
                />
              </h1>
              <p className="text-gray-200">
                I like to craft solid and scalable frontend and mobile products with great user experiences.
              </p>

              <div className="flex flex-row pt-10">
                <div className="w-full md:w-1/2 py-2">
                  <p className="text-sm font-semibold leading-tight text-gradient-orange text-custom-green ">
                    Highly skilled at progressive enhancement, design systems & UI Engineering.
                  </p>
                </div>
                <div className="w-full md:w-1/2 py-2">
                  <p className="text-sm font-semibold leading-tight text-custom-green">
                    Proven experience building successful products for clients across several countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-custom-green w-full lg:w-[40.1%] lg:flex lg:flex-col lg:justify-center">
            <div className="flex justify-center items-center lg:absolute  lg:top-[40%] lg:left-[] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 p-10 lg:p-0">
            <Image 
                src="/profile2.jpeg" 
                alt="Your Photo" 
                className="rounded-none" 
                width={350} 
                height={300}
              />
            </div>
          </div>
        </section>

        <section id="about-me" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p>
              I am a versatile developer with experience in both frontend and backend technologies. My passion for technology started at a young age, and I have since dedicated myself to learning and growing in this ever-evolving field. I am proficient in HTML, CSS, JavaScript, and have extensive experience working with React, React Native, and other modern frameworks.
              Beyond coding, I am deeply interested in UI/UX design and strive to create interfaces that are not only functional but also visually appealing. I believe that a great user experience is key to the success of any project, and I always keep the end user in mind when designing and developing applications.
              <br/><br/>
              When I am not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects. I also enjoy outdoor activities and spending time with family and friends.
            </p>
          </div>
        </section>

        <section id="skills-and-technologies" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">Skill Sets and Technologies</h2>
            <div>
              <h3 className="text-xl font-semibold">Frontend</h3>
              <ul className="list-disc list-inside">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mobile Development</h3>
              <ul className="list-disc list-inside">
                <li>React Native</li>
                <li>Ionic</li>
                <li>Flutter</li>
                <li>Kotlin</li>
                <li>Swift</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">UI/UX Design</h3>
              <ul className="list-disc list-inside">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>InVision</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <article>
              <h3 className="text-xl font-semibold">Project Title 1</h3>
              <p>
                Description of the project. This project involved creating a comprehensive web application that allows users to manage tasks and collaborate with team members in real-time. The application was built using React for the frontend and Node.js for the backend, with a MongoDB database to store data.
              </p>
              <a href="project-link" className="text-blue-500">View Project</a>
              <a href="github-link" className="ml-4 text-blue-500">GitHub Repository</a>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Project Title 2</h3>
              <p>
                Description of the project. This mobile application was developed to help users track their fitness goals and monitor their progress over time. Built with React Native, the app features a clean and intuitive interface, along with integrations for tracking workouts, nutrition, and sleep.
              </p>
              <a href="project-link" className="text-blue-500">View Project</a>
              <a href="github-link" className="ml-4 text-blue-500">GitHub Repository</a>
            </article>
            {/* Repeat for each project */}
          </div>
        </section>

        <section id="testimonials" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">Testimonials</h2>
            <blockquote className="border-l-4 border-gray-300 pl-4">
              <p>Mugo Lazarus is an exceptional developer who consistently delivers high-quality work. His attention to detail and dedication to his craft are truly impressive.</p>
              <footer>- Client Name, Year</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-4 mt-4">
              <p>Working with Mugo was a great experience. He has a deep understanding of web development and always goes the extra mile to ensure the success of the project.</p>
              <footer>- Colleague Name, Year</footer>
            </blockquote>
            {/* Repeat for each testimonial */}
          </div>
        </section>

        <section id="contact-me" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p>Email: your-email@example.com</p>
            <p>LinkedIn: <a href="linkedin-profile" className="text-blue-500">Your LinkedIn Profile</a></p>
          </div>
        </section>

        <footer className="w-full p-4 bg-gray-800 text-white text-center">
          <p>&copy; {new Date().getFullYear()} Mugo Lazarus. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
};

export default Portfolio;
