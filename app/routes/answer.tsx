

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";

import oneanswer from '~/components/courtcase/answer/oneanswer.jpg'
import twoanswer from '~/components/courtcase/answer/twoanswer.jpg'
import threeanswer from '~/components/courtcase/answer/threeanswer.jpg'
import fouranswer from '~/components/courtcase/answer/fouranswer.jpg'
import fiveanswer from '~/components/courtcase/answer/fiveanswer.jpg'
import sixanswer from '~/components/courtcase/answer/sixanswer.jpg'
import sevenanswer from '~/components/courtcase/answer/sevenanswer.jpg'
import eightanswer from '~/components/courtcase/answer/eightanswer.jpg'
import nineanswer from '~/components/courtcase/answer/nineanswer.jpg'
import tenanswer from '~/components/courtcase/answer/tenanswer.jpg'
import elevenanswer from '~/components/courtcase/answer/elevenanswer.jpg'
import twelveanswer from '~/components/courtcase/answer/twelveanswer.jpg'
import thirteenanswer from '~/components/courtcase/answer/thirteenanswer.jpg'
import fourteenanswer from '~/components/courtcase/answer/fourteenanswer.jpg'
import fifteenanswer from '~/components/courtcase/answer/fifteenanswer.jpg'
import sixteenanswer from '~/components/courtcase/answer/sixteenanswer.jpg'
import seventeenanswer from '~/components/courtcase/answer/seventeenanswer.jpg'
import eighteenanswer from '~/components/courtcase/answer/eighteenanswer.jpg'
import twentyanswer from '~/components/courtcase/answer/twentyanswer.jpg'
import twentyoneanswer from '~/components/courtcase/answer/twentyoneanswer.jpg'
import twentytwoanswer from '~/components/courtcase/answer/twentytwoanswer.jpg'
import twentythreeanswer from '~/components/courtcase/answer/twentythreeanswer.jpg'
import twentyfouranswer from '~/components/courtcase/answer/twentyfouranswer.jpg'
import twentyfiveanswer from '~/components/courtcase/answer/twentyfiveanswer.jpg'
import twentysixanswer from '~/components/courtcase/answer/twentysixanswer.jpg'
import twentysevenanswer from '~/components/courtcase/answer/twentysevenanswer.jpg'
import twentyeightanswer from '~/components/courtcase/answer/twentyeightanswer.jpg'
import twentynineanswer from '~/components/courtcase/answer/twentynineanswer.jpg'


/*
import thirtyone_answer from '~/components/courtcase/answer/thirtyone_answer.pdf'
import thirtytwo_answer from '~/components/courtcase/answer/thirtytwo_answer.pdf'
import thirtythree_answer from '~/components/courtcase/answer/thirtythree_answer.pdf'
import thirtyfour_answer from '~/components/courtcase/answer/thirtyfour_answer.pdf'
import thirtyfive_answer from '~/components/courtcase/answer/thirtyfive_answer.pdf'
import thirtysix_answer from '~/components/courtcase/answer/thirtysix_answer.pdf'
import thirtyseven_answer from '~/components/courtcase/answer/thirtyseven_answer.pdf'
import thirtyeight_answer from '~/components/courtcase/answer/thirtyeight_answer.pdf'
import thirtynine_answer from '~/components/courtcase/answer/thirtynine_answer.pdf'
import forty_answer from '~/components/courtcase/answer/forty_answer.pdf'
import fortyone_answer from '~/components/courtcase/answer/fortyone_answer.pdf'
import fortytwo_answer from '~/components/courtcase/answer/fortytwo_answer.pdf'
import fortythree_answer from '~/components/courtcase/answer/fortythree_answer.pdf'
import fortyfour_answer from '~/components/courtcase/answer/fortyfour_answer.pdf'
import fortyfive_answer from '~/components/courtcase/answer/fortyfive_answer.pdf'
import fortysix_answer from '~/components/courtcase/answer/fortysix_answer.pdf'
import fortyseven_answer from '~/components/courtcase/answer/fortyseven_answer.pdf'
import fortyeight_answer from '~/components/courtcase/answer/fortyeight_answer.pdf'
import fortynine_answer from '~/components/courtcase/answer/fortynine_answer.pdf'
import fifty_answer from '~/components/courtcase/answer/fifty_answer.pdf'
import fiftyone_answer from '~/components/courtcase/answer/fiftyone_answer.pdf'
import fiftytwo_answer from '~/components/courtcase/answer/fiftytwo_answer.pdf'
import fiftythree_answer from '~/components/courtcase/answer/fiftythree_answer.pdf'
import fiftyfour_answer from '~/components/courtcase/answer/fiftyfour_answer.pdf'
import fiftyfive_answer from '~/components/courtcase/answer/fiftyfive_answer.pdf'
import fiftysix_answer from '~/components/courtcase/answer/fiftysix_answer.pdf'
import fiftyseven_answer from '~/components/courtcase/answer/fiftyseven_answer.pdf'
import fiftyeight_answer from '~/components/courtcase/answer/fiftyeight_answer.pdf'
import fiftynine_answer from '~/components/courtcase/answer/fiftynine_answer.pdf'
import sixty_answer from '~/components/courtcase/answer/sixty_answer.pdf'
import sixtyone_answer from '~/components/courtcase/answer/sixtyone_answer.pdf'
import sixtytwo_answer from '~/components/courtcase/answer/sixtytwo_answer.pdf'
import sixtythree_answer from '~/components/courtcase/answer/sixtythree_answer.pdf'
import sixtyfour_answer from '~/components/courtcase/answer/sixtyfour_answer.pdf'
import sixtyfive_answer from '~/components/courtcase/answer/sixtyfive_answer.pdf'
import sixtysix_answer from '~/components/courtcase/answer/sixtysix_answer.pdf'
import sixtyseven_answer from '~/components/courtcase/answer/sixtyseven_answer.pdf'
import sixtyeight_answer from '~/components/courtcase/answer/sixtyeight_answer.pdf'
import sixtynine_answer from '~/components/courtcase/answer/sixtynine_answer.pdf'
import seventy_answer from '~/components/courtcase/answer/seventy_answer.pdf'
import seventyone_answer from '~/components/courtcase/answer/seventyone_answer.pdf'
import seventytwo_answer from '~/components/courtcase/answer/seventytwo_answer.pdf'
import seventythree_answer from '~/components/courtcase/answer/seventythree_answer.pdf'
import seventyfour_answer from '~/components/courtcase/answer/seventyfour_answer.pdf'
import seventyfive_answer from '~/components/courtcase/answer/seventyfive_answer.pdf'
import seventysix_answer from '~/components/courtcase/answer/seventysix_answer.pdf'
import seventyseven_answer from '~/components/courtcase/answer/seventyseven_answer.pdf'
import seventyeight_answer from '~/components/courtcase/answer/seventyeight_answer.pdf'
import seventynine_answer from '~/components/courtcase/answer/seventynine_answer.pdf'
import eighty_answer from '~/components/courtcase/answer/eighty_answer.pdf'
import eightyone_answer from '~/components/courtcase/answer/eightyone_answer.pdf'
import eightytwo_answer from '~/components/courtcase/answer/eightytwo_answer.pdf'
import eightythree_answer from '~/components/courtcase/answer/eightythree_answer.pdf'
import eightyfour_answer from '~/components/courtcase/answer/eightyfour_answer.pdf'
import eightyfive_answer from '~/components/courtcase/answer/eightyfive_answer.pdf'
import eightysix_answer from '~/components/courtcase/answer/eightysix_answer.pdf'
import eightyseven_answer from '~/components/courtcase/answer/eightyseven_answer.pdf'
import eightyeight_answer from '~/components/courtcase/answer/eightyeight_answer.pdf'
import eightynine_answer from '~/components/courtcase/answer/eightynine_answer.pdf'
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
    <Card className='max-h-[900px] h-[900px] w-[95%] overflow-y-scroll mx-auto'>
      <CardHeader>
        <CardTitle>Answer</CardTitle>
        <CardDescription>Length of answer due to the acts of perjury the applciant was making and had to prove them in order show what she really is</CardDescription>
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
                <img className="shrink-0 w-[600px] h-[800px] object-cover rounded-lg shadow-xl bg-white" src={item.img} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>

  )
}
