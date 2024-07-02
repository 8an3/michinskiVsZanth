

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
import one from '~/components/courtcase/offers/sky1.jpg'
import two from '~/components/courtcase/offers/sky2.jpg'
import three from '~/components/courtcase/offers/sky3.jpg'
import four from '~/components/courtcase/offers/sky4.jpg'
import five from '~/components/courtcase/offers/sky5.jpg'
import six from '~/components/courtcase/offers/sky6.jpg'
import seven from '~/components/courtcase/offers/sky7.jpg'
import eight from '~/components/courtcase/offers/nat1.jpg'
import nine from '~/components/courtcase/offers/nat2.jpg'
import ten from '~/components/courtcase/offers/nat3.jpg'
import eleven from '~/components/courtcase/offers/nat4.jpg'
import twelve from '~/components/courtcase/offers/nat5.jpg'
import thirteen from '~/components/courtcase/offers/nat6.png'
import fourteen from '~/components/courtcase/offers/nat7.png'
import fifteen from '~/components/courtcase/offers/nat8.png'
import sixteen from '~/components/courtcase/offers/nat9.png'
import seventeen from '~/components/courtcase/offers/nat10.png'
import eighteen from '~/components/courtcase/offers/nat11.png'
import nineteen from '~/components/courtcase/offers/nat12.png'
import twenty from '~/components/courtcase/offers/nat13.png'
import sky66 from '~/components/courtcase/offers/sky66.png'

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
    { img: sky66 },
    { img: six },
    { img: seven },
  ]
  const natOffers = [
    { img: eight },
    { img: nine },
    { img: five },
    { img: ten },
    { img: twelve },
    { img: eleven },
    { img: thirteen },
    { img: fourteen },
    { img: fifteen },
    { img: sixteen },
    { img: seventeen },
    { img: eighteen },
    { img: nineteen },
    { img: twenty },
  ]
  return (
    <Tabs defaultValue="to-do" className="w-[95%]  mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="to-do">Skylers</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="ques for duty counc">Natashia</TabsTrigger>
      </TabsList>
      <TabsContent value="to-do">
        <iframe className='mx-auto' src='/michinskiVsZanth/assets/latestOFfer.pdf' width="95%" height="1000px" />
      </TabsContent>
      <TabsContent value="ques for duty counc">
        <iframe className='mx-auto' src='/michinskiVsZanth/assets/SeparationAgreement-SecondOffertoSettle.pdf' width="95%" height="1000px" />
      </TabsContent>
    </Tabs>
  )
}
