

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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}
export default function NewFile() {

  return (
    <Tabs defaultValue="Updated" className="w-[95%]  mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="Updated">Updated</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="Orignial">Orignial</TabsTrigger>
      </TabsList>

      <TabsContent value="Updated">
        <iframe className='mx-auto' src='assets/Application(General)AMENDEDForm08-Applicant-Michinski-12-AUG-2024.pdf' width="95%" height="1000px" />
      </TabsContent>

      <TabsContent value="Orignial">
        <iframe className='mx-auto' src='assets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf' width="95%" height="1000px" />
      </TabsContent>
    </Tabs>

  )
}
