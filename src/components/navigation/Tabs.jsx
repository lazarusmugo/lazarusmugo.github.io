

"use-client";
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
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CardDefault } from "../projects/Cards";
import React from "react";

export const projects = [
  {
    id: "project-1",
    name: "Tajji Boma",
    logo: "/tajji_logo.png",
    link: "https://tajji.io/",
    category: "Mobile",
    summary: "A mobile application for Tajji Boma.",
  },
  {
    id: "project-2",
    name: "10XBEAST",
    logo: "/10x.png",
    link: "https://10xbeast.com/",
    category: "Design",
    summary: "A design-focused project for 10XBEAST.",
  },
  {
    id: "project-3",
    name: "Golden Heart Nursing",
    logo: "/golden_heart_logo.svg",
    link: "https://goldenheartnursing.co/",
    category: "Frontend",
    summary: "A frontend project for Golden Heart Nursing.",
  },
  {
    id: "project-4",
    name: "Tajji Asili",
    logo: "/tajji_logo.png",
    link: "https://tajji.io/",
    category: "Mobile",
    summary: "Another mobile application for Tajji Asili.",
  },
  {
    id: "project-5",
    name: "Juristone",
    logo: "/juristone_logo.png",
    link: "https://juristone.ai/",
    category: "Frontend",
    summary: "An AI-based project for Juristone.",
  },
  // {
  //   id: "project-6",
  //   name: "Be Safe",
  //   logo: "/be_safe_logo.png",
  //   link: "https://github.com/lazarusmugo/be_safe",
  //   category: "Mobile",
  //   summary: "A mobile safety application.",
  // },
  {
    id: "project-7",
    name: "Tajji's Landing Page",
    logo: "/tajji_logo.png",
    link: "https://tajji.io/",
    category: "Frontend",
    summary: "Tajji's Landing Page",
  },
];

export function TabsDefault() {
  const categories = [
    { label: "All", value: "All" },
    { label: "Frontend", value: "Frontend" },
    { label: "Mobile", value: "Mobile" },
    { label: "Design", value: "Design" },
  ];
  const [activeTab, setActiveTab] = React.useState("All");

  const router = useRouter();

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
            }  lg:py-4 lg:px-4 lg:text-xl font-bold hover:rounded-xl`}
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
                  />
                ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
