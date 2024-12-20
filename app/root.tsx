import {
  Links,
  Meta,
  Outlet,
  Link,
  Scripts,
  ScrollRestoration,
  useLocation,
  MetaFunction
} from "@remix-run/react";
import "./tailwind.css";
import { cn } from "~/components/utils"
import { Badge } from "~/components/ui/badge"

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

      </head>
      <body>
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
                to="/replyToReplyToAnswer"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("replyToReplyToAnswer")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Notes on Reply
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
                to="/offers"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("offers")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Offers
              </Link>
              <Link
                to="/otherFilings"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("otherFilings")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Private Service
              </Link>
              <Link
                to="/caseConferenceBrief"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("caseConferenceBrief")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Case Conference Brief
              </Link>
              <Link
                to="/questionsForCounsel"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("questionsForCounsel")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Updates / Questions for Counsel
              </Link>
              <Link
                to="/todo"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("todo")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                To-do and Notes
              </Link>
              <Link
                to="/other"
                className={cn(
                  "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                )}
              >
                Other
              </Link>
              <Link
                to="/pdf77766"
                className={cn(
                  "hidden text-background transition-colors hover:text-foreground/80 lg:block"
                )}
              >
                Other
              </Link>
            </nav>
          </div>
        </div>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
export const meta: MetaFunction = () => {
  return [
    { title: "Michinski VS Zanith" },
    { name: "description", content: "Welcome to Michinski VS Zanith" },
  ];
};
