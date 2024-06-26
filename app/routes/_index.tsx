"use client"


import type { MetaFunction } from "@remix-run/node";
import * as React from "react"


import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"
import { Badge } from "~/registry/new-york/ui/badge"
import { Link } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  const pathname = usePathname()

  return (
    <div className="font-sans p-4">
      <div className="mr-4 hidden md:flex">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
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
              pathname?.startsWith("/answer")
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
              pathname?.startsWith("/reply")
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
              pathname?.startsWith("/noticeOfMotion")
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
              pathname?.startsWith("/exhibitsp")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Exhibits
          </Link>
          <Link
            to={siteConfig.links.github}
            className={cn(
              "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
            )}
          >
            GitHub
          </Link>
        </nav>
      </div>

    </div>
  );
}
