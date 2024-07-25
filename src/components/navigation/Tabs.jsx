"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { CardDefault } from "../projects/Cards";
import React from "react";
import { projects } from "../../data/projects"



export function TabsDefault() {
  const categories = [
    { label: "All", value: "All" },
    { label: "Frontend", value: "Frontend" },
    { label: "Mobile", value: "Mobile" },
    { label: "Design", value: "Design" },
  ];
  const [activeTab, setActiveTab] = React.useState("All");


  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="z-0 gap-3 lg:gap-0 lg:w-3/4 mx-auto bg-custom-blue bg-opacity-100 text-custom-green"
        indicatorProps={{
          className: "bg-custom-green",
          styleText: "text-custom-green",
        }}
      >
        {categories.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value ? "text-custom-blue" : "text-white"
            }  lg:py-4 lg:px-5 lg:text-xl font-bold hover:rounded-xl`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="my-5">
        {categories.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <div className="flex flex-wrap lg:gap-8  gap-4 items-center justify-center z-0">
              {projects
                .filter(
                  (project) => project.category === value || value === "All"
                )
                .map((project) => (
                  <CardDefault
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    logo={project.logo}
                    summary={project.summary}
                    link={project.link}
                  />
                ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
