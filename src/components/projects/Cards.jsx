"use-client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { useRouter } from "next/navigation";

export function CardDefault({ id, name, logo, summary }) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/${id}`)}
      className="mt-6 w-96 cursor-pointer"
    >
      <CardHeader floated={false} className=" h-60 lg:h-60">
        <img src={logo} alt="profile-picture" className="h-full w-full " />
      </CardHeader>

      <CardBody>
        <p className="font-bold text-custom-blue text-xl py-4">{name}</p>

        <p className="text-custom-purple">{summary}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <a
          href={`/${id}`}
          className="relative items-start justify-start inline-block px-6 py-3 mt-3 text-custom-blue border border-custom-blue hover:text-white font-bold overflow-hidden group"
        >
          <span className="absolute inset-0 bg-custom-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative">Read More</span>
        </a>
      </CardFooter>
    </Card>
  );
}
