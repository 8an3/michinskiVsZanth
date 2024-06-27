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
      <div className="mr-4 hidden md:flex">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">
            Michinski Vs. Zanth
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            to="/application"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/application" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Application
          </Link>
          <Link
            to="/answer"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("answer")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Answer
          </Link>
          <Link
            to="/reply"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("reply")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Reply
          </Link>
          <Link
            to="/noticeOfMotion"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("noticeOfMotion")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Notice of Motion
          </Link>
          <Link
            to="/exhibits"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("exhibitsp")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Exhibits
          </Link>
          <Link
            to="/exhibits"
            className={cn(
              "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
            )}
          >
            GitHub
          </Link>
        </nav>
      </div>
      <div className="">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Michinski VS Zanth
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground">
              Natashia Michinski represented by Anne Vespry - Skyler Zanth, self representing
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <link
                href="#"
                className="rounded-md bg-background px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
              >
                General application of separation.
              </link>
              <a href="#" className="text-sm font-semibold leading-6 text-foreground">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
