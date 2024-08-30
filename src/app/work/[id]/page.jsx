// app/work/[id]/page.jsx
import React from "react";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export default function ProjectDetails({ params }) {
  const project = projects.find((project) => project.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <section className="w-full p-8 bg-gray-200">
      <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-20">
        <div className="text-center mb-10 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-custom-blue mb-4">
            {project.name}
          </h2>
          <img src={project.logo} alt={project.name} className="mb-4 mx-auto" />
          <p className="text-lg lg:text-xl text-custom-purple">
            {project.summary}
          </p>
          <a
            href={project.link}
            className="mt-4 inline-block px-8 py-3 text-white bg-custom-green rounded-lg"
          >
            Visit Project
          </a>
        </div>
      </div>
    </section>
  );
}


// app/work/[id]/page.jsx
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
