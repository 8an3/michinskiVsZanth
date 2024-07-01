"use client"


import type { MetaFunction } from "@remix-run/node";
import * as React from "react"
import { cn } from "~/components/utils"
import { Badge } from "~/components/ui/badge"
import { Link, useLocation } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className="font-sans p-4">

      <div className="">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Michinski VS Zanth
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground">
              Natashia Michinski aka Natashia Lynn Michinski represented by Anne Vespry
            </p>
            <p className="mt-6 text-lg leading-8 text-foreground">
              Skyler Zanth, self representing
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/application"
                className="rounded-md bg-background px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
              >
                General application of separation w/ property claims.
              </Link>

            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>

  );
}
