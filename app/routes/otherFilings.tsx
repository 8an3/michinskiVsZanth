

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import first from '~/courtcase/application/Capture.jpg'
import second from '~/courtcase/application/Capture2.jpg'
import third from '~/courtcase/application/Capture3.jpg'
import forth from '~/courtcase/application/Capture4.jpg'
import fith from '~/courtcase/application/Capture65.jpg'
import sixth from '~/courtcase/application/Capture 6.jpg'



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
  const imageList = [
    {
      img: first
    },
    {
      img: second
    },
    {
      img: third
    },
    {
      img: forth
    },
    {
      img: fith
    },
    {
      img: sixth
    }
  ]
  return (
    <Card className='max-h-[800px] h-[800px] overflow-y-scroll'>
      <CardHeader>
        <CardTitle>General Application</CardTitle>
        <CardDescription>Natashia trying to serve me with the following documents</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="relative rounded-xl overflow-auto">
          <div className="flex ml-[50%] items-end justify-start pt-10 mb-6">
            <div className="ml-2 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">snap point</div>
            <div className="absolute top-0 bottom-0 left-1/2 border-l border-indigo-500"></div>
          </div>
          <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
            {imageList.map((item) => (
              <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                <img className="shrink-0 w-[600px] h-[750px] object-cover rounded-lg shadow-xl bg-white" src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

  )
}
