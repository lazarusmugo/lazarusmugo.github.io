"use client";
import React from "react";
import { useRouter } from "next/router"; // Corrected import for useRouter

const ProjectPage = ({ params }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center absolute top-4 left-4 z-50">
        <button
          onClick={() => router.back()}
          className="relative inline-block px-20 py-5 mt-6 text-custom-blue border border-custom-blue hover:text-white font-bold overflow-hidden group"
        >
          <span className="absolute inset-0 bg-custom-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative">Go Back</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;

