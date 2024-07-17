

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import first from '~/components/courtcase/application/Capture.jpg'
import second from '~/components/courtcase/application/Capture2.jpg'
import third from '~/components/courtcase/application/Capture3.jpg'
import forth from '~/components/courtcase/application/Capture4.jpg'
import fith from '~/components/courtcase/application/Capture65.jpg'
import sixth from '~/components/courtcase/application/Capture 6.jpg'



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
    <iframe className='mx-auto' src='/michinskiVsZanthassets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf' width="95%" height="1000px" />


  )
}
