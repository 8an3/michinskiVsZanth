

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";

import oneanswer from '~/components/answer/oneanswer.jpg'
import twoanswer from '~/components/answer/twoanswer.jpg'
import threeanswer from '~/components/answer/threeanswer.jpg'
import fouranswer from '~/components/answer/fouranswer.jpg'
import fiveanswer from '~/components/answer/fiveanswer.jpg'
import sixanswer from '~/components/answer/sixanswer.jpg'
import sevenanswer from '~/components/answer/sevenanswer.jpg'
import eightanswer from '~/components/answer/eightanswer.jpg'
import nineanswer from '~/components/answer/nineanswer.jpg'
import tenanswer from '~/components/answer/tenanswer.jpg'
import elevenanswer from '~/components/answer/elevenanswer.jpg'
import twelveanswer from '~/components/answer/twelveanswer.jpg'
import thirteenanswer from '~/components/answer/thirteenanswer.jpg'
import fourteenanswer from '~/components/answer/fourteenanswer.jpg'
import fifteenanswer from '~/components/answer/fifteenanswer.jpg'
import sixteenanswer from '~/components/answer/sixteenanswer.jpg'
import seventeenanswer from '~/components/answer/seventeenanswer.jpg'
import eighteenanswer from '~/components/answer/eighteenanswer.jpg'
import twentyanswer from '~/components/answer/twentyanswer.jpg'
import twentyoneanswer from '~/components/answer/twentyoneanswer.jpg'
import twentytwoanswer from '~/components/answer/twentytwoanswer.jpg'
import twentythreeanswer from '~/components/answer/twentythreeanswer.jpg'
import twentyfouranswer from '~/components/answer/twentyfouranswer.jpg'
import twentyfiveanswer from '~/components/answer/twentyfiveanswer.jpg'
import twentysixanswer from '~/components/answer/twentysixanswer.jpg'
import twentysevenanswer from '~/components/answer/twentysevenanswer.jpg'
import twentyeightanswer from '~/components/answer/twentyeightanswer.jpg'
import twentynineanswer from '~/components/answer/twentynineanswer.jpg'


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
    { img: oneanswer },
    { img: twoanswer },
    { img: threeanswer },
    { img: fouranswer },
    { img: fiveanswer },
    { img: sixanswer },
    { img: sevenanswer },
    { img: eightanswer },
    { img: nineanswer },
    { img: tenanswer },
    { img: elevenanswer },
    { img: twelveanswer },
    { img: thirteenanswer },
    { img: fourteenanswer },
    { img: fifteenanswer },
    { img: sixteenanswer },
    { img: seventeenanswer },
    { img: eighteenanswer },
    { img: twentyanswer },
    { img: twentyoneanswer },
    { img: twentytwoanswer },
    { img: twentythreeanswer },
    { img: twentyfouranswer },
    { img: twentyfiveanswer },
    { img: twentysixanswer },
    { img: twentysevenanswer },
    { img: twentyeightanswer },
    { img: twentynineanswer },

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
