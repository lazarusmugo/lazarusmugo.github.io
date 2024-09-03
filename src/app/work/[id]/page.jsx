import React from "react";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import { CarouselCustomNavigation } from "../../../components/projects/Carousel";
import { Nav } from "../../../components/projects/Nav";
import StackIcon from "tech-stack-icons";

export default function ProjectDetails({ params }) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-screen font-sans ">
        <section className="w-full p-8 bg-gray-200 ">
          <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-40">
            <div className="text-center mb-10 lg:mb-20">
              <p className="text-2xl lg:text-3xl font-extrabold my-2 text-gray-800">
                {project.name}
              </p>
            </div>

            <div className="mb-12 relative">
              <CarouselCustomNavigation images={project.images} />
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10 mt-20 md:mt-28 lg:justify-between">
              <div className="lg:w-[60%]">
                <p className="text-md lg:text-lg leading-relaxed text-gray-800 mb-8">
                  {project.description}
                </p>

                <div className="relative items-start justify-start inline-block px-6 py-3 mt-3 text-custom-blue border border-custom-blue hover:text-white font-bold overflow-hidden group">
                  <span className="absolute inset-0 bg-custom-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <a className="relative" href={project.link}>
                    Visit Project
                  </a>
                </div>
              </div>

              <div className="lg:w-[30%] mt-8 lg:mt-0">
                <h3 className="text-xl  text-center md:text-start md:text-2xl font-semibold mb-4 text-custom-blue">
                  Technologies Used
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.technologyStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md"
                    >
                      <StackIcon
                        name={tech.toLowerCase()}
                        className="h-8 w-8"
                        style={{ marginRight: "1rem" }}
                      />
                      <span className="text-lg font-medium text-gray-800">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-me" className="w-full p-8 bg-gray-100">
          <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-20">
            <div className="text-center mb-10 lg:mb-20">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-custom-blue mb-4">
                Send me a message!
              </h2>
              <p className="text-lg lg:text-xl text-custom-purple">
                Got a question or proposal, or just want to say hello? Go ahead.
              </p>
            </div>

            <form
              action="https://formsubmit.co/mugolazarusk@gmail.com"
              method="POST"
              className="space-y-8 lg:w-1/2 mx-auto"
            >
              <input
                type="hidden"
                name="_next"
                value="https://lazarusmugo.github.io"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="lg:flex lg:space-x-8">
                <div className="lg:flex-1">
                  <label
                    className="block text-md font-medium text-custom-purple mb-4  lg:text-lg"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full border-b-2 border-custom-purple placeholder-gray-600 focus:border-custom-blue  focus:outline-none bg-transparent text-custom-blue h-12 lg:h-16 text-lg"
                    required
                  />
                </div>

                <div className="lg:flex-1 pt-8 lg:pt-0">
                  <label
                    className="block text-md lg:text-lg font-medium text-custom-purple mb-4"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full border-b-2 border-custom-purple placeholder-gray-600 focus:border-custom-blue focus:outline-none bg-transparent text-custom-blue h:12 lg:h-16 text-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-md font-medium text-custom-purple mb-4  lg:text-lg"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi, I think we need a landing page at Company X. How soon can you hop on to discuss this?"
                  className="w-full border-b-2 border-custom-purple placeholder-gray-600 focus:border-custom-blue focus:outline-none h-28 lg:h-14 bg-transparent text-custom-blue text:lg"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="relative inline-block px-20 py-5 mt-6 text-custom-blue border border-custom-blue hover:text-white font-bold overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-custom-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative">Shoot</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="w-full bg-custom-purple text-white md:h-[600px] h-[400px] md:text-xl">
          <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-20 ">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="md:text-start text-center md:mb-40 mb-20">
                <p className="font-extrabold pb-10 text-xl md:text-4xl">
                  SAY HELLO
                </p>
                <a
                  href="mailto:mugolazarusk@gmail.com"
                  className="hover:underline text-custom-green"
                >
                  mugolazarusk@gmail.com
                </a>
              </div>

              <div className="flex md:pt-16 text-custom-green space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/lazarus-mugo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/lazarusmugo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
            <hr className="my-2 border-t-2 border-custom-green opacity-50" />
            <div className="flex justify-between items-center mt-4 text-custom-green pt-10 flex-col ">
              <p>
                &copy; {new Date().getFullYear()} Mugo Lazarus. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
