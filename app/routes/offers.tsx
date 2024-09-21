

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "~/components/utils"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}
export default function NewFile() {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]


  const notifications5050 = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]

  type CardProps = React.ComponentProps<typeof Card>
  const dates = [
    { date: 'Apr 16 2024 10:05 pm' },
    { date: 'Apr 23 2024 12:41 am' },
    { date: 'Apr 25, 7:32 PM' },
    { date: 'Apr 25, 9:13 PM' },
    { date: 'Apr 29 2024 9:01 am' },
    { date: 'May 26, 12:32 AM' },
    { date: 'Jun 26, 3:17 PM' },
    { date: 'Jun 29 2024 1:00 pm' },
    { date: 'Jul 2, 7:48 PM' },
    { date: 'Jul 31 2024 10:54 am' },
    { date: 'Aug 10, 11:17 PM' },
    { date: 'Might be missing an informal offer or two to make changes to our at the time current offers' },
  ]
  return (
    <Tabs defaultValue="Skyler" className="w-[95%]  mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="Skyler">Skyler</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="Natashia">Natashia</TabsTrigger>
      </TabsList>
      <TabsContent value="Skyler">
        <TabsList className="rounded-[6px] ">
          <TabsTrigger className="rounded-[6px] " value="Current Skyler">Current</TabsTrigger>
          <TabsTrigger className="rounded-[6px] " value="July 1, 2024" >July 1, 2024</TabsTrigger>
          <TabsTrigger className="rounded-[6px] " value="Other Dates" >Other Dates</TabsTrigger>
        </TabsList>

        <TabsContent value="Current Skyler">
          <iframe className='mx-auto' src='assets/latestOFfer.pdf' width="95%" height="1000px" />
        </TabsContent>
        <TabsContent value="July 1, 2024">
          <iframe className='mx-auto' src='assets/latestOFfer.pdf' width="95%" height="1000px" />
        </TabsContent>
        <TabsContent value="Other Dates">
          <div className="font-sans p-4">

            <div className="">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Submitted Offers and the dates served
                  </h1>
                  {dates.map((item, index) => (
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                      {item.date}
                    </p>
                  ))}
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

        </TabsContent>
      </TabsContent>

      <TabsContent value="Natashia">
        <TabsList className="rounded-[6px] ">
          <TabsTrigger className="rounded-[6px] " value="Current Cunt">Current</TabsTrigger>
          <TabsTrigger className="rounded-[6px] " value="Notes On Her Current">Notes On Her Current</TabsTrigger>
          <TabsTrigger className="rounded-[6px] " value="apr 21 2024 228 pm  part 1" >apr 21 2024 228 pm  part 1</TabsTrigger>
          <TabsTrigger className="rounded-[6px] " value="apr 21 2024 228 pm  part 2" >apr 21 2024 228 pm  part 2</TabsTrigger>
          <TabsTrigger className="rounded-[6px] " value="was not served no date" >was not served no date</TabsTrigger>
        </TabsList>

        <TabsContent value="Current Cunt">
          <p className='text-center text-xl m-5' >Served may 3 2024 440 pm</p>
          <iframe className='mx-auto' src='assets/may 3 2024 440 pm.pdf' width="95%" height="1000px" />
        </TabsContent>
        <TabsContent value="Notes On Her Current">

          <Card className={cn("w-[80%]", className)} {...props}>
            <CardHeader>
              <CardTitle>Path: </CardTitle>
              <CardDescription>Property 100% hers</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>

          <Card className={cn("w-[80%]", className)} {...props}>
            <CardHeader>
              <CardTitle>Path: </CardTitle>
              <CardDescription> 50 / 50 split</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {notifications5050.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>


        </TabsContent>
        <TabsContent value="apr 21 2024 228 pm  part 1">
          <iframe className='mx-auto' src='assets/apr 21 2024 228 pm  part 1.pdf' width="95%" height="1000px" />
        </TabsContent>
        <TabsContent value="apr 21 2024 228 pm  part 2">
          <iframe className='mx-auto' src='assets/apr 21 2024 228 pm  part 2.pdf' width="95%" height="1000px" />
        </TabsContent>
        <TabsContent value="was not served no date">
          <iframe className='mx-auto' src='assets/was not served no date.pdf' width="95%" height="1000px" />
        </TabsContent>
      </TabsContent>
    </Tabs>
  )
}
