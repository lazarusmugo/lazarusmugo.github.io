import { Navbar } from "@/app/components/NavBar";
import { Footer } from "@/app/components/Footer";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/app/components/ProjectDetails";

import { projects } from "@/app/lib/projects";

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = Object.hasOwn(projects, id) ? projects[id] : undefined;

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetails project={project} />
      <Footer />
    </div>
  );
}
