

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";

import one from '~/components/courtcase/other/1.jpg'
import two from '~/components/courtcase/other/2.jpg'
import three from '~/components/courtcase/other/3.jpg'
import four from '~/components/courtcase/other/4.jpg'





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
    { img: one },
    { img: two },
    { img: three },
    { img: four },
  ]
  return (
    <Card className='max-h-[900px] h-[900px] w-[95%] overflow-y-scroll mx-auto'>
      <CardHeader>
        <CardTitle>Private service</CardTitle>
        <CardDescription> </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="relative rounded-xl overflow-auto">
          <div className="flex ml-[50%] items-end justify-start pt-10 mb-6">
            <div className="ml-2 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10"></div>
            <div className="absolute top-0 bottom-0 left-1/2 border-l border-indigo-500"></div>
          </div>
          <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
            {imageList.map((item) => (
              <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                <img className="shrink-0 w-[600px] h-[800px] object-cover rounded-lg shadow-xl bg-white" src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

  )
}
