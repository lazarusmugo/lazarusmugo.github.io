import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";


export const projects = [
  {
    id: "project-1",
    name: "Tajji Boma",
    logo: "/tajji_logo.png",
    link: "https://tajji.io/",
    category: "Mobile",
  },
  {
    id: "project-2",
    name: "10XBEAST",
    logo: "/10xbeast_logo.svg",
    link: "https://10xbeast.com/",
    category: "Design",
  },
  {
    id: "project-3",
    name: "Golden Heart Nursing",
    logo: "/golden_heart_logo.svg",
    link: "https://goldenheartnursing.co/",
    category: "Frontend",
  },
  {
    id: "project-4",
    name: "Tajji Asili",
    logo: "/tajji_logo.png",
    link: "https://tajji.io/",
    category: "Mobile",
  },
  {
    id: "project-5",
    name: "Juristone",
    logo: "/juristone_logo.png",
    link: "https://juristone.ai/",
    category: "All",
  },
  {
    id: "project-6",
    name: "Be Safe",
    logo: "/be_safe_logo.png",
    link: "https://github.com/lazarusmugo/be_safe",
    category: "Mobile",
  },
];

export function TabsDefault() {
  const categories = [
    { label: "All", value: "All" },
    { label: "Frontend", value: "Frontend" },
    { label: "Mobile", value: "Mobile" },
    { label: "Design", value: "Design" },
  ];

  return (
    <Tabs value="All">
      <TabsHeader
        className="z-0 gap-3 lg:gap-0 lg:w-3/4 mx-auto  bg-custom-blue bg-opacity-50 "
        indicatorProps={{
          className: "bg-custom-blue",
        }}
      >
        {categories.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="lg:py-4 lg:px-4 lg:text-lg  font-bold hover:rounded-xl text-white "
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="my-5">
        {categories.map(({ value }) => (
          <TabPanel key={value} value={value}>
            <div className="flex flex-wrap gap-4 items-center justify-center z-0">
              {projects
                .filter(
                  (project) => project.category === value || value === "All"
                )
                .map((project) => (
                  <div key={project.id} className="w-full sm:w-1/2 lg:w-1/4 ">
                    <div className="bg-gray-300 p-4 rounded-t-lg flex justify-center items-center h-[200px] ">
                      <Image
                        src={project.logo}
                        alt={`${project.name} Logo`}
                        className="rounded-none"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="bg-white p-4 rounded-b-lg shadow-md text-center">
                      <h3 className="text-lg text-custom-purple font-extrabold">
                        {project.name}
                      </h3>
                      <a
                        href={project.link}
                        className="text-blue-500 mt-2 inline-block truncate max-w-full "
                      >
                        {project.link}
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
