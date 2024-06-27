

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import first from '~/courtcase/application/first.jpg'
import second from '~/courtcase/application/second.jpg'
import third from '~/courtcase/application/third.jpg'
import forth from '~/courtcase/application/forth.jpg'
import fith from '~/courtcase/application/fith.jpg'
import sixth from '~/courtcase/application/sixth.jpg'
import oneanswer from '~/components/answer/one_answer.jpg'
import twoanswer from '~/components/answer/two_answer.jpg'
import threeanswer from '~/components/answer/three_answer.jpg'
import four_answer from '~/components/answer/four_answer.jpg'
import five_answer from '~/components/answer/five_answer.jpg'
import six_answer from '~/components/answer/six_answer.jpg'
import seven_answer from '~/components/answer/seven_answer.jpg'
import eight_answer from '~/components/answer/eight_answer.jpg'
import nine_answer from '~/components/answer/nine_answer.jpg'
import ten_answer from '~/components/answer/ten_answer.jpg'
import eleven_answer from '~/components/answer/eleven_answer.jpg'
import twelve_answer from '~/components/answer/twelve_answer.jpg'
import thirteen_answer from '~/components/answer/thirteen_answer.jpg'
import fourteen_answer from '~/components/answer/fourteen_answer.jpg'
import fifteen_answer from '~/components/answer/fifteen_answer.jpg'
import sixteen_answer from '~/components/answer/sixteen_answer.jpg'
import seventeen_answer from '~/components/answer/seventeen_answer.jpg'
import eighteen_answer from '~/components/answer/eighteen_answer.jpg'
import twenty_answer from '~/components/answer/twenty_answer.jpg'
import twentyone_answer from '~/components/answer/twentyone_answer.jpg'
import twentytwo_answer from '~/components/answer/twentytwo_answer.jpg'
import twentythree_answer from '~/components/answer/twentythree_answer.jpg'
import twentyfour_answer from '~/components/answer/twentyfour_answer.jpg'
import twentyfive_answer from '~/components/answer/twentyfive_answer.jpg'
import twentysix_answer from '~/components/answer/twentysix_answer.jpg'
import twentyseven_answer from '~/components/answer/twentyseven_answer.jpg'
import twentyeight_answer from '~/components/answer/twentyeight_answer.jpg'
import twentynine_answer from '~/components/answer/twentynine_answer.jpg'

/*
import thirtyone_answer from '~/components/answer/thirtyone_answer.pdf'
import thirtytwo_answer from '~/components/answer/thirtytwo_answer.pdf'
import thirtythree_answer from '~/components/answer/thirtythree_answer.pdf'
import thirtyfour_answer from '~/components/answer/thirtyfour_answer.pdf'
import thirtyfive_answer from '~/components/answer/thirtyfive_answer.pdf'
import thirtysix_answer from '~/components/answer/thirtysix_answer.pdf'
import thirtyseven_answer from '~/components/answer/thirtyseven_answer.pdf'
import thirtyeight_answer from '~/components/answer/thirtyeight_answer.pdf'
import thirtynine_answer from '~/components/answer/thirtynine_answer.pdf'
import forty_answer from '~/components/answer/forty_answer.pdf'
import fortyone_answer from '~/components/answer/fortyone_answer.pdf'
import fortytwo_answer from '~/components/answer/fortytwo_answer.pdf'
import fortythree_answer from '~/components/answer/fortythree_answer.pdf'
import fortyfour_answer from '~/components/answer/fortyfour_answer.pdf'
import fortyfive_answer from '~/components/answer/fortyfive_answer.pdf'
import fortysix_answer from '~/components/answer/fortysix_answer.pdf'
import fortyseven_answer from '~/components/answer/fortyseven_answer.pdf'
import fortyeight_answer from '~/components/answer/fortyeight_answer.pdf'
import fortynine_answer from '~/components/answer/fortynine_answer.pdf'
import fifty_answer from '~/components/answer/fifty_answer.pdf'
import fiftyone_answer from '~/components/answer/fiftyone_answer.pdf'
import fiftytwo_answer from '~/components/answer/fiftytwo_answer.pdf'
import fiftythree_answer from '~/components/answer/fiftythree_answer.pdf'
import fiftyfour_answer from '~/components/answer/fiftyfour_answer.pdf'
import fiftyfive_answer from '~/components/answer/fiftyfive_answer.pdf'
import fiftysix_answer from '~/components/answer/fiftysix_answer.pdf'
import fiftyseven_answer from '~/components/answer/fiftyseven_answer.pdf'
import fiftyeight_answer from '~/components/answer/fiftyeight_answer.pdf'
import fiftynine_answer from '~/components/answer/fiftynine_answer.pdf'
import sixty_answer from '~/components/answer/sixty_answer.pdf'
import sixtyone_answer from '~/components/answer/sixtyone_answer.pdf'
import sixtytwo_answer from '~/components/answer/sixtytwo_answer.pdf'
import sixtythree_answer from '~/components/answer/sixtythree_answer.pdf'
import sixtyfour_answer from '~/components/answer/sixtyfour_answer.pdf'
import sixtyfive_answer from '~/components/answer/sixtyfive_answer.pdf'
import sixtysix_answer from '~/components/answer/sixtysix_answer.pdf'
import sixtyseven_answer from '~/components/answer/sixtyseven_answer.pdf'
import sixtyeight_answer from '~/components/answer/sixtyeight_answer.pdf'
import sixtynine_answer from '~/components/answer/sixtynine_answer.pdf'
import seventy_answer from '~/components/answer/seventy_answer.pdf'
import seventyone_answer from '~/components/answer/seventyone_answer.pdf'
import seventytwo_answer from '~/components/answer/seventytwo_answer.pdf'
import seventythree_answer from '~/components/answer/seventythree_answer.pdf'
import seventyfour_answer from '~/components/answer/seventyfour_answer.pdf'
import seventyfive_answer from '~/components/answer/seventyfive_answer.pdf'
import seventysix_answer from '~/components/answer/seventysix_answer.pdf'
import seventyseven_answer from '~/components/answer/seventyseven_answer.pdf'
import seventyeight_answer from '~/components/answer/seventyeight_answer.pdf'
import seventynine_answer from '~/components/answer/seventynine_answer.pdf'
import eighty_answer from '~/components/answer/eighty_answer.pdf'
import eightyone_answer from '~/components/answer/eightyone_answer.pdf'
import eightytwo_answer from '~/components/answer/eightytwo_answer.pdf'
import eightythree_answer from '~/components/answer/eightythree_answer.pdf'
import eightyfour_answer from '~/components/answer/eightyfour_answer.pdf'
import eightyfive_answer from '~/components/answer/eightyfive_answer.pdf'
import eightysix_answer from '~/components/answer/eightysix_answer.pdf'
import eightyseven_answer from '~/components/answer/eightyseven_answer.pdf'
import eightyeight_answer from '~/components/answer/eightyeight_answer.pdf'
import eightynine_answer from '~/components/answer/eightynine_answer.pdf'
*/


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
    },
    { img: oneanswer },
    { img: twoanswer },
    { img: twoanswer2 },
    { img: threeanswer },
    { img: four_answer },
    { img: five_answer },
    { img: six_answer },
    { img: seven_answer },
    { img: eight_answer },
    { img: nine_answer },
    { img: ten_answer },
    { img: eleven_answer },
    { img: twelve_answer },
    { img: thirteen_answer },
    { img: fourteen_answer },
    { img: fifteen_answer },
    { img: sixteen_answer },
    { img: seventeen_answer },
    { img: eighteen_answer },
    { img: twenty_answer },
    { img: twentyone_answer },
    { img: twentytwo_answer },
    { img: twentythree_answer },
    { img: twentyfour_answer },
    { img: twentyfive_answer },
    { img: twentysix_answer },
    { img: twentyseven_answer },
    { img: twentyeight_answer },
    { img: twentynine_answer },
    { img: thirtyone_answer },
    { img: thirtytwo_answer },
    { img: thirtythree_answer },
    { img: thirtyfour_answer },
    { img: thirtyfive_answer },
    { img: thirtysix_answer },
    { img: thirtyseven_answer },
    { img: thirtyeight_answer },
    { img: thirtynine_answer },
    { img: forty_answer },
    { img: fortyone_answer },
    { img: fortytwo_answer },
    { img: fortythree_answer },
    { img: fortyfour_answer },
    { img: fortyfive_answer },
    { img: fortysix_answer },
    { img: fortyseven_answer },
    { img: fortyeight_answer },
    { img: fortynine_answer },
    { img: fifty_answer },
    { img: fiftyone_answer },
    { img: fiftytwo_answer },
    { img: fiftythree_answer },
    { img: fiftyfour_answer },
    { img: fiftyfive_answer },
    { img: fiftysix_answer },
    { img: fiftyseven_answer },
    { img: fiftyeight_answer },
    { img: fiftynine_answer },
    { img: sixty_answer },
    { img: sixtyone_answer },
    { img: sixtytwo_answer },
    { img: sixtythree_answer },
    { img: sixtyfour_answer },
    { img: sixtyfive_answer },
    { img: sixtysix_answer },
    { img: sixtyseven_answer },
    { img: sixtyeight_answer },
    { img: sixtynine_answer },
    { img: seventy_answer },
    { img: seventyone_answer },
    { img: seventytwo_answer },
    { img: seventythree_answer },
    { img: seventyfour_answer },
    { img: seventyfive_answer },
    { img: seventysix_answer },
    { img: seventyseven_answer },
    { img: seventyeight_answer },
    { img: seventynine_answer },
    { img: eighty_answer },
    { img: eightyone_answer },
    { img: eightytwo_answer },
    { img: eightythree_answer },
    { img: eightyfour_answer },
    { img: eightyfive_answer },
    { img: eightysix_answer },
    { img: eightyseven_answer },
    { img: eightyeight_answer },
    { img: eightynine_answer },
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
