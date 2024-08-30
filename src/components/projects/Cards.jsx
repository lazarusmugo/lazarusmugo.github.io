"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function CardDefault({ id, name, logo, summary }) {
  return (
    <Card className="mt-6 w-96 cursor-pointer">
      <CardHeader floated={false} className="h-40 lg:h-60 lg:w-80 lg:mx-auto">
        <Image
          src={logo}
          alt={name}
          className="rounded-none h-full w-full"
          width={250}
          height={200}
        />
      </CardHeader>
      <CardBody>
        <p className="font-bold text-custom-blue text-xl py-4">{name}</p>
        <p className="text-custom-purple">{summary}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="relative items-start justify-start inline-block px-6 py-3 mt-3 text-custom-blue border border-custom-blue hover:text-white font-bold overflow-hidden group">
          <span className="absolute inset-0 bg-custom-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <a className="relative" href={`/work/${id}`}>
            Learn More
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
