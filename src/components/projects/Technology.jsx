// src/components/TechnologyStackIcons.js

import React from "react";
import { StackIcon } from "../path/to/your/StackIcon";

const TechnologyStackIcons = ({ technologies }) => {
  return (
    <div className="mt-8 mb-16">
      <h2 className="text-2xl font-bold mb-4">Technological Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {technologies.map((technology) => (
          <div key={technology} className="bg-white p-4 rounded-lg shadow-md">
            <StackIcon name={technology} className="w-24 h-24" />
            <p className="text-sm mt-2">{technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStackIcons;
