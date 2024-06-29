

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import one from '~/components/courtcase/exhibits/2022 email to refianance 2.jpg'
import two from '~/components/courtcase/exhibits/2022 email to refianance.jpg'
import three from '~/components/courtcase/exhibits/first cheque on home.jpg'
import four from '~/components/courtcase/exhibits/june 21 8 am.jpg'
import oneanswer from '~/components/courtcase/exhibits/june 21 920 am.jpg'
import twoanswer from '~/components/courtcase/exhibits/may 1 1014 pm.jpg'
import threeanswer from '~/components/courtcase/exhibits/may 2 810 pm.jpg'
import fouranswer from '~/components/courtcase/exhibits/may 10 809 pm.jpg'
import fiveanswer from '~/components/courtcase/exhibits/may 9 735 pm.jpg'
import sixanswer from '~/components/courtcase/exhibits/may 14 124 am.jpg'
import sevenanswer from '~/components/courtcase/exhibits/may 19 718 pm.jpg'
import eightanswer from '~/components/courtcase/exhibits/may 22 248 pm.jpg'
import nineanswer from '~/components/courtcase/exhibits/may 26 213pm.jpg'
import tenanswer from '~/components/courtcase/exhibits/may 26 329 pm.jpg'
import elevenanswer from '~/components/courtcase/exhibits/may 26 1232 am.jpg'
import twelveanswer from '~/components/courtcase/exhibits/may 29 1031 pm.jpg'
import thirteenanswer from '~/components/courtcase/exhibits/proof for disabilty.jpg'
import fourteenanswer from '~/components/courtcase/exhibits/screen shot of emails 2.jpg'
import fifteenanswer from '~/components/courtcase/exhibits/screen shot of emails.jpg'
import creditScore from '~/components/courtcase/exhibits/creditScore.jpg'
import cantTakeOutMoney from '~/components/courtcase/exhibits/cantTakeOutMoney.jpg'
import haveToPayBack from '~/components/courtcase/exhibits/haveToPayBack.jpg'
import livingroom from '~/components/courtcase/exhibits/livingroom.jpg'
import june11206am from '~/components/courtcase/exhibits/june 1 1206 am.jpg'
import june8736pm from '~/components/courtcase/exhibits/june 8 736 pm.jpg'
import june81224pm from '~/components/courtcase/exhibits/june 8 1224 pm.jpg'
import oliverContract from '~/components/courtcase/exhibits/oliverContract.jpg'
import proofofgas from '~/components/courtcase/exhibits/proof of gas.jpg'
import proofofgas2 from '~/components/courtcase/exhibits/proof of gas2.jpg'
import refinance21 from '~/components/courtcase/exhibits/refinance21.jpg'
import refinance22 from '~/components/courtcase/exhibits/refinance22.jpg'
import refinance23 from '~/components/courtcase/exhibits/refinance23.jpg'
import refinance24 from '~/components/courtcase/exhibits/refinance24.jpg'
import refinance25 from '~/components/courtcase/exhibits/refinance25.jpg'
import refinance26 from '~/components/courtcase/exhibits/refinance26.jpg'
import refinance27 from '~/components/courtcase/exhibits/refinance27.jpg'
import refinance28 from '~/components/courtcase/exhibits/refinance28.jpg'
import refinance29 from '~/components/courtcase/exhibits/refinance29.jpg'
import refinance210 from '~/components/courtcase/exhibits/refinance210.jpg'
import refinance211 from '~/components/courtcase/exhibits/refinance211.jpg'
import refinance212 from '~/components/courtcase/exhibits/refinance212.jpg'
import refinance213 from '~/components/courtcase/exhibits/refinance213.jpg'
import refinance214 from '~/components/courtcase/exhibits/refinance214.jpg'
import refinance215 from '~/components/courtcase/exhibits/refinance215.jpg'
import refinance216 from '~/components/courtcase/exhibits/refinance216.jpg'
import refinance217 from '~/components/courtcase/exhibits/refinance217.jpg'
import refinance218 from '~/components/courtcase/exhibits/refinance218.jpg'
import refinance219 from '~/components/courtcase/exhibits/refinance219.jpg'
import refinance220 from '~/components/courtcase/exhibits/refinance220.jpg'
import refinance221 from '~/components/courtcase/exhibits/refinance221.jpg'
import { cn } from "~/components/utils";
import { Button, buttonVariants } from "~/components/ui/button";

export default function NewFile() {
  const [pictures, setPictures] = useState('')
  let imageList = []
  switch (pictures) {
    case 'First cheque on home':
      imageList = [
        { img: three },
      ]
      break;
    case 'Emails':
      imageList = [
        { img: fourteenanswer },
        { img: fifteenanswer },
        { img: four },
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
        { img: june11206am },
        { img: june8736pm },
        { img: june81224pm },
        { img: twelveanswer },
        { img: twelveanswer },
        { img: twelveanswer },
      ]
      break;
    case 'Refinance between natashia and company':
      imageList = [
        { img: three },
      ]
      break;
    case '2022 email to refinance':
      imageList = [
        { img: one },
        { img: two },
      ]
      break;
    case 'Proof of disability':
      imageList = [
        { img: thirteenanswer },
      ]
      break;
    case 'Current credit score':
      imageList = [
        { img: creditScore },
      ]
      break;
    case 'Text Messages':
      imageList = [
        { img: three },
      ]
      break;
    case 'August Text Messages':
      imageList = [
        { img: three },
      ]
      break;
    case 'Livingroom':
      imageList = [
        { img: livingroom },
      ]
      break;
    case 'Olivers contract':
      imageList = [
        { img: oliverContract },
      ]
      break;
    case 'Have to provide proof of gas purchase':
      imageList = [
        { img: cantTakeOutMoney },
        { img: haveToPayBack },
        { img: proofofgas },
        {
          img: proofofgas2

        },
      ]
      break;
    case '2nd Refinance contract':
      imageList = [
        { img: refinance21 },
        { img: refinance22 },
        { img: refinance23 },
        { img: refinance24 },
        { img: refinance25 },
        { img: refinance26 },
        { img: refinance27 },
        { img: refinance28 },
        { img: refinance29 },
        { img: refinance210 },
        { img: refinance211 },
        { img: refinance212 },
        { img: refinance213 },
        { img: refinance214 },
        { img: refinance215 },
        { img: refinance216 },
        { img: refinance217 },
        { img: refinance218 },
        { img: refinance219 },
        { img: refinance220 },
        { img: refinance221 },
      ]
      break;
    default:
      imageList = [

      ]
  }

  const navItems = [
    {
      title: "First cheque on home",
    },
    {
      title: "Emails",
    },
    {
      title: "Refinance between natashia and company",
    },
    {
      title: "2022 email to refinance",
    },
    {
      title: "Proof of disability",
    },
    {
      title: "Current credit score",
    },
    {
      title: "Text Messages",
    },
    {
      title: "August Text Messages",
    },
    {
      title: "Livingroom",
    },
    {
      title: "Olivers contract",
    },
    {
      title: "Have to provide proof of gas purchase",
    },
    {
      title: "2nd Refinance contract",
    },
    {
      title: "Invoice in skylers name",
    },
    {
      title: "Largest and only home improv in skylers name",
    },
    {
      title: "Bills in skylers name",
    },
    {
      title: "Con and other pre purchase",
    },
    {
      title: "Various Articles",
    },
    {
      title: "Initial purchase",
    },
    {
      title: "Insurance by Natashia",
    },
    {
      title: "Proof of breakup 2024",
    },
    {
      title: "Cra screen shot",
    },
    {
      title: "2021 mortgage commitment",
    },
    {
      title: "2019 mortgage commitment",
    },
    {
      title: "Notice of no trespass",
    },
    {
      title: "Natashia does not fear me",
    },
    {
      title: "I controlled finances before",
    },
    {
      title: "Have to provide proof of truth",
    },
    {
      title: "Window loan authorization",
    },
    {
      title: "Applicant uncooperative with window loan",
    },
    {
      title: "Transfer file to Natashia",
    },
    {
      title: "Removed prematurely",
    },


  ]


  function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    return (
      <nav
        className={cn(
          "flex space-x-2 flex-col lg:space-x-0 lg:space-y-1",
          className
        )}
        {...props}
      >
        {items.map((item) => (

          <Button
            onClick={() => setPictures(item.title)}
            variant='ghost'
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pictures === item.title
                ? "bg-[#232324] hover:bg-muted/50 w-[90%]  border-l-[#0969da]  "
                : "hover:bg-muted/50 text-[#a1a1aa]  w-[90%]  ",
              "justify-start w-[90%] rounded-[6px]"
            )} >
            {item.title}
          </Button>
        ))
        }
      </nav >
    )
  }

  return (
    <div className=" space-y-6 p-10 pb-16 h-screen w-screen">

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/8 text-foreground  h-[600px] max-h-[600px] overflow-y-scroll">
          <p className='text-foreground'>Menu</p>
          <hr className="text-foreground w-[90%] mb-5" />
          <SidebarNav items={navItems} />
        </aside>
        <div className="flex-1  w-auto">
          <Card className='max-h-[900px] h-[900px] w-[95%] overflow-y-scroll mx-auto'>
            <CardHeader>
              <CardTitle>Exhibits</CardTitle>
              <CardDescription>Evidence submitted by Skyler</CardDescription>
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
        </div>
      </div>
    </div>
  )
}

export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    to: string
    title: string
  }[]
}