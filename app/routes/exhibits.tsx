

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import first from '~/courtcase/1.jpg'
import second from '~/courtcase/2.jpg'
import third from '~/courtcase/3.jpg'
import forth from '~/courtcase/4.jpg'
import fith from '~/courtcase/5.jpg'
import sixth from '~/courtcase/6.jpg'
import seventh from '~/courtcase/7.jpg'
import eight from '~/courtcase/8.jpg'


export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}
export default function NewFile() {

  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="flex ml-[50%] items-end justify-start pt-10 mb-6">
        <div className="ml-2 rounded font-mono text-[0.625rem] leading-6 px-1.5 ring-1 ring-inset bg-indigo-50 text-indigo-600 ring-indigo-600 dark:bg-indigo-500 dark:ring-0 dark:text-white dark:highlight-white/10">snap point</div>
        <div className="absolute top-0 bottom-0 left-1/2 border-l border-indigo-500"></div>
      </div>
      <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48"></div>
        </div>
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <div className='grid grid-cols-1'>
            <img className="shrink-0 w-[600px] h-[750px] object-cover rounded-lg shadow-xl bg-white" src={first} />
          </div>
        </div>
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <div className='grid grid-cols-1'>
            <img className="shrink-0 w-[700px] h-[300px] object-cover rounded-lg shadow-xl bg-white" src={second} />
            <img className="shrink-0 w-[700px] h-[300px] mt-5 object-cover rounded-lg shadow-xl bg-white" src={third} />
          </div>
        </div>
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <div className='grid grid-cols-1'>
            <img className="shrink-0 w-[700px] h-[300px] object-cover rounded-lg shadow-xl bg-white" src={forth} />
            <img className="shrink-0 w-[700px] h-[300px] mt-5 object-cover rounded-lg shadow-xl bg-white" src={fith} />
          </div>
        </div>
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <img className="shrink-0 w-[600px] h-[750px] object-cover rounded-lg shadow-xl bg-white" src={sixth} />
        </div>
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <img className="shrink-0 w-[600px] h-[750px] object-cover rounded-lg shadow-xl bg-white" src={seventh} />
        </div>
        <div className="snap-center shrink-0 first:pl-8 last:pr-8">
          <img className="shrink-0 w-[600px] h-[750px] object-cover rounded-lg shadow-xl bg-white" src={eight} />
        </div>
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48"></div>
        </div>
      </div>
    </div>

  )
}
