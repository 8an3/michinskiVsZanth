

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";

import one from '~/components/courtcase/reply/one.jpg'
import two from '~/components/courtcase/reply/two.jpg'
import three from '~/components/courtcase/reply/three.jpg'
import four from '~/components/courtcase/reply/four.jpg'
import five from '~/components/courtcase/reply/four.jpg'





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
    { img: five },


  ]
  return (
    <iframe className='mx-auto' src='/michinskiVsZanth/assets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf' width="95%" height="1000px" />


  )
}
