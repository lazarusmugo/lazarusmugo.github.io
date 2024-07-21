"use client";
import Head from "next/head";

import { NavDesktop } from "../components/navigation/DesktopNavbar";
import { NavMobile } from "../components/navigation/MobileNavbar";
import { useState } from "react";
import { Typed } from "react-typed";
import { ReactTyped } from "react-typed";
import SectionIndicator from "../components/navigation/SectionIndicator";
import Image from "next/image";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my skills, projects, and experiences."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavMobile />

      <SectionIndicator />

      <main className="flex flex-col items-center justify-center min-h-screen font-sans ">
        <section
          id="introduction"
          className="w-full flex flex-col lg:flex-row "
        >
          <div className="bg-custom-blue w-full lg:w-3/4 lg:p-30 p-4  py-10 flex flex-col justify-center h-[500px] lg:h-[700px]">
            <div className="container mx-auto w-[80%] lg:w-[60%]">
              <h1 className="text-custom-green  font-extrabold text-4xl lg:text-6xl pt-8 h-[180px] w-[40%] lg:w-[30%] lg:h-[250px]">
                <ReactTyped
                  strings={[
                    "Frontend Developer.",
                    "Mobile Apps Developer.",
                    "UI/UX Designer.",
                  ]}
                  typeSpeed={120}
                  backSpeed={80}
                  backDelay={3000}
                  loop
                />
              </h1>
              <p className="text-white lg:text-2xl lg:w-3/4 w-full ">
                I like to craft solid and scalable frontend and mobile products
                with great user experiences.
              </p>

              <div className="flex flex-row pt-10 lg:pt-20 lg:w-[80%] justify-between">
                <div className="w-full md:w-1/2 py-2 lg:w-[40%]">
                  <p className="text-xs lg:text-lg font-semibold leading-tight text-gradient-orange text-custom-green ">
                    Highly skilled at progressive enhancement, design systems &
                    UI Engineering.
                  </p>
                </div>
                <div className="w-full md:w-1/2 py-2 lg:w-[40%] ">
                  <p className="text-xs lg:text-lg font-semibold leading-tight text-custom-green">
                    Proven experience building successful products for clients
                    across different domains.
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

        <section id="about-me" className="w-full bg-white">
          <div className="w-full bg-white">
            {/* Technologies section */}
            <div className="w-full bg-white py-6 lg:py-28">
              <div className="container mx-auto px-10 lg:px-0 w-full lg:w-3/4">
                <div className="flex flex-col space-y-8 lg:space-y-0">
                  <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-4 w-full">
                    <div className="w-full lg:w-1/2 p-4 pt-8 flex flex-col items-start">
                      <h3 className="text-custom-blue text-start text-3xl font-extrabold mb-4 lg:text-5xl ">
                        Frontend
                      </h3>
                      <p className="text-custom-purple text-start text-sm lg:text-lg">
                        Diving headfirst into the world of frontend development,
                        I thrive on crafting responsive and interactive user
                        interfaces that not only perform flawlessly but also
                        prioritize accessibility. With every line of code, I aim
                        to bridge the gap between technology and usability,
                        ensuring that digital experiences are seamless and
                        enjoyable for all users.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end lg:justify-end lg:space-x-4 w-full">
                    <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
                      <h3 className="text-custom-blue text-3xl font-extrabold mb-4 lg:text-5xl ">
                        Mobile
                      </h3>
                      <p className="text-custom-purple text-start text-sm lg:text-lg">
                        As a mobile developer, I&apos;m passionate about
                        bringing ideas to life on the go. I specialize in
                        developing cross-platform mobile applications that offer
                        smooth user experiences and unmatched functionality.
                        Whether it&apos;s iOS or Android, my goal is to create
                        apps that resonate with users, providing them with tools
                        and services that enrich their daily lives.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-4 w-full">
                    <div className="w-full lg:w-1/2 p-4 flex flex-col items-start">
                      <h3 className="text-custom-blue text-3xl font-extrabold mb-4 lg:text-5xl ">
                        Design
                      </h3>
                      <p className="text-custom-purple text-start text-sm lg:text-lg">
                        I&apos;m probably not the typical designer positioned
                        behind an Illustrator artboard adjusting pixels, but I
                        design. I utilize tools like Figma and Canva to create
                        intuitive and visually appealing interfaces that enhance
                        user engagement and satisfaction. My goal is to ensure
                        that every design decision contributes to a fluent and
                        enjoyable user experience while maintaining a modern and
                        fashionable aesthetic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Over the Years Section */}
            <div className="bg-custom-blue  p-8 mt-8  lg:py-40 flex flex-col items-center">
              <div className="container mx-auto  w-full lg:w-3/4">
                <h2 className="lg:text-6xl font-extrabold text-4xl text-custom-green mb-4 lg:mb-12">
                  Over the years,
                </h2>

                <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
                  <div className="flex flex-col items-center gap-4  text-sm lg:text-lg lg:w-[40%]">
                    <p className="text-white text-start ">
                      I&apos;ve built products for companies and businesses
                      around the globe ranging from marketing websites to
                      complex solutions and enterprise apps with a focus on
                      fast, elegant, and accessible user experiences.
                    </p>

                    <p className="text-white  text-start">
                      Currently, I work at TAJJI LTD as the team lead for mobile
                      development. My role involves overseeing the development
                      of the Tajji Boma mobile application, ensuring that it
                      provides seamless and intuitive experiences for managing
                      residential and commercial properties.
                    </p>

                    <p className="text-white  text-start ">
                      Before becoming the mobile team lead, I started at TAJJI
                      LTD as a frontend engineering intern. During my
                      internship, I worked on developing the landing page and
                      the Progressive Web App (PWA) for Tajji Boma, using
                      SvelteKit, Tailwind CSS, TypeScript, and JavaScript.
                    </p>

                    <p className="text-white  text-start ">
                      As a freelance UI/UX Designer, I worked with 10xbeast, an
                      AI-powered email marketing platform. My role involved
                      creating designs on Figma that met user goals and
                      contributed to the product&apos;s success. The platform
                      helps businesses create effective marketing emails using
                      AI.
                    </p>

                    <p className="text-white  text-start">
                      At Golden Heart Nursing, I served as a Frontend Developer.
                      I utilized JavaScript, Tailwind CSS, and TypeScript with
                      Svelte to build their website. The focus was on delivering
                      a highly responsive and user-friendly web application that
                      enhanced accessibility for their healthcare staffing
                      services.
                    </p>
                  </div>
                  <Image
                    src="/profile2.jpeg"
                    alt="Your Photo"
                    className="rounded-none"
                    width={350}
                    height={300}
                  />
                </div>
              </div>
            </div>
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
                Description of the project. This project involved creating a
                comprehensive web application that allows users to manage tasks
                and collaborate with team members in real-time. The application
                was built using React for the frontend and Node.js for the
                backend, with a MongoDB database to store data.
              </p>
              <a href="project-link" className="text-blue-500">
                View Project
              </a>
              <a href="github-link" className="ml-4 text-blue-500">
                GitHub Repository
              </a>
            </article>
            <article>
              <h3 className="text-xl font-semibold">Project Title 2</h3>
              <p>
                Description of the project. This mobile application was
                developed to help users track their fitness goals and monitor
                their progress over time. Built with React Native, the app
                features a clean and intuitive interface, along with
                integrations for tracking workouts, nutrition, and sleep.
              </p>
              <a href="project-link" className="text-blue-500">
                View Project
              </a>
              <a href="github-link" className="ml-4 text-blue-500">
                GitHub Repository
              </a>
            </article>
            {/* Repeat for each project */}
          </div>
        </section>

        <section id="testimonials" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">Testimonials</h2>
            <blockquote className="border-l-4 border-gray-300 pl-4">
              <p>
                Mugo Lazarus is an exceptional developer who consistently
                delivers high-quality work. His attention to detail and
                dedication to his craft are truly impressive.
              </p>
              <footer>- Client Name, Year</footer>
            </blockquote>
            <blockquote className="border-l-4 border-gray-300 pl-4 mt-4">
              <p>
                Working with Mugo was a great experience. He has a deep
                understanding of web development and always goes the extra mile
                to ensure the success of the project.
              </p>
              <footer>- Colleague Name, Year</footer>
            </blockquote>
            {/* Repeat for each testimonial */}
          </div>
        </section>

        <section id="contact-me" className="w-full p-8">
          <div className="container mx-auto w-full lg:w-3/4">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p>Email: your-email@example.com</p>
            <p>
              LinkedIn:{" "}
              <a href="linkedin-profile" className="text-blue-500">
                Your LinkedIn Profile
              </a>
            </p>
          </div>
        </section>

        <footer className="w-full p-4 bg-gray-800 text-white text-center">
          <p>
            &copy; {new Date().getFullYear()} Mugo Lazarus. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
};

export default Portfolio;
