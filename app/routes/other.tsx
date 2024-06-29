

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

import one from '~/components/courtcase/answerToReply/1.jpg'
import two from '~/components/courtcase/answerToReply/2.jpg'
import three from '~/components/courtcase/answerToReply/3.jpg'
import four from '~/components/courtcase/answerToReply/4.jpg'


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
    <Tabs defaultValue="to-do" className="w-[95%] md:w-[800px] mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="to-do">Documents</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="ques for duty counc">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="to-do">
        <Card className='max-h-[900px] h-[900px]   overflow-y-scroll mx-auto'>
          <CardHeader>
            <CardTitle>Notes on Reply</CardTitle>
            <CardDescription>As if they submitted a document where 100% of what was said is a lie</CardDescription>
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
      </TabsContent>
      <TabsContent value="ques for duty counc">
        <Card className='max-h-[800px] h-[800px] overflow-y-scroll'>

          <CardHeader>
            <CardTitle>other</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Reason for Breakup
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    the only reason were really breaking up is because of money, thats what she said at the end. Worst part about it is, for the last year i've been working 18 hours a day sometimes 24 without any sleep, go to my 9-5 come home and immediatly jump on the computer to work on a side business i started. I worked so hard, when we decided weekends were just us time, sat night after coming home we would sit to eat and have a movie lined up, without fail every single time, the moment i was done eating i would falll asleep seated straight up thats how tired i was. In comparison natashia, the odd time picked up an extra shift. Im not saying she doesnt work hard, but theres not even a comparison when you look at how much work was put into our relationmship because i wanted to take care of all our debt before wee got married, and so did she. All that hard work and the time i  sacrificed to try to get us out of that debt, she hands me a notice of no trespass as her way of showing how grateful she is. Because instead of trying that hard, i could be in bars every night, or strip clubs, or the casino or with another woman but no i was 100% devoted to her and our relationship where i valued that anhd her happiness over my own health, even to this day i still cant beleive this is happening, especially with how hard natashia is trying to get away with her claims she says i dont contribute? after the notice of no trespass, i have paid off a 3600 debt with rbc and taken care of another 52,000 with scotia bank. I dont disagree that the last couple of years were rough, but just as they were about to get better and nothing but sunny days, she quits out on the last rainy day of the season.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Why I did the paperwork the way i did
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    i need to do the paperwork the way ive done it because of my medical condition and its effect on my memory 3  times now since the start of this separation i've asked natashia and her counsel to refrain from attacking me on this front and each time they fail to adhere to my simple request they already have a huge advantage over me in regards to this case and these types of attacks are not needed, its not my fault i have the medical conditions that afflicts me, i did not ask for this with how severe my adhd and how misunderstood this disease is, i do not wish this upon anyone because out of all the mental disabilities its the one that's approached and talked wrong almost every single time is there any thing that i can do to put forward to ensure this type of behaviour does not continue for the remainder of this separation? I expected this behavoiur from natashia due to the separation but not from anne, this level of professionalism is just uncalled. im not a lawyer and from the looks of it i cant even talk to duty councel because i dont currently have a phone, because i have no idea how much more money this case will cost me.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  window loan
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    in an attempt to make make the house appear to be more rightfully hers along with trying make me seem uncooperative, the last couple natashia has claimed that she cannot pay the loan for the home imrptovment project we did because shes not authoirized to do anything on the account, even to pay it, which isnt true confirmed by reps of the company. So they have been asking me to switch it over to natashia, at this time, i did not have a cell phone and they have really been sticking to this point for the above reasons. Every time the companyt sent me notices i forwarded it to them, and each time she asked to switch it over to her name. At this time i dont even have a means to pay it because,  i didnt have access to my bank accounts, when natashia removed me from her  cell plan, i was on her plan due to discounted rates, rbc couldnt get ahold of me and in light of that they cancelled all my credit accounts with them so i couldnt get etranfers for food or anything.  and because our money went to natashias debts and not miine, my account was already maxed in overdraft, along with natqashia emptying our  joint accunt before leaving for vacation, going into this separation i already did not have any money. Ive paid it off on june 21st and now have access to my accounts, but at this time were about to get our home repoed because to be blunt, natashia is actng like a 12 year old and not getting her way.<br />
                    along with getting confirmation,  in writing from the company, i had a friend pay 5$ towards the account in arrers to prove to natashia you do not need to be authorized in order to pay it, every bill on the planet is like this. its not like this is something that started this year, everyone knows you dont need authorization to pay. I dont understand the logic behind this point. At this time, i eleive, im now dealing with the 3 or 4 rep from the company because our file keeps getting passed down the line closer to being reposessed. with how responsive the current rep, i think were at the end of the line because he even responds on weekends.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Issue with both of them
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    the signed acknowledgement of service, but answered the way she did, like what is her problem? is it because you think im weird due to my mental disability? fine whatever but that should not effect how you deal with me in this professional setting especially without a lawyer to represent me. it seems to me especially over the last 2-3 weeks each time one of them makes contact there some sort of issue, like how natashia was present when i was last served, or complaints on the way i did the paperwork the way i did, or being so irresponsible with their contractors with no notice whatsoever, and not even being present when their in the home while the contractor is walking around i thought it was a home invasion and some one was going to get seriously hurt, due to my adhd my adrenaline spikes more than anyone ive ever known and for that one reason ive made myself stay out of fights since i aws 16 years old, and there is so many more instances that just shouldnt have happened
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Issue with both of them
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    the signed acknowledgement of service, but answered the way she did, like what is her problem? is it because you think im weird due to my mental disability? fine whatever but that should not effect how you deal with me in this professional setting especially without a lawyer to represent me. it seems to me especially over the last 2-3 weeks each time one of them makes contact there some sort of issue, like how natashia was present when i was last served, or complaints on the way i did the paperwork the way i did, or being so irresponsible with their contractors with no notice whatsoever, and not even being present when their in the home while the contractor is walking around i thought it was a home invasion and some one was going to get seriously hurt, due to my adhd my adrenaline spikes more than anyone ive ever known and for that one reason ive made myself stay out of fights since i aws 16 years old, and there is so many more instances that just shouldnt have happened
                  </p>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>


  )
}
