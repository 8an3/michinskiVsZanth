

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

import { cn } from "~/components/utils";
import { Button, buttonVariants } from "~/components/ui/button";

export default function NewFile() {
  const [pictures, setPictures] = useState('')
  let pdf = ''
  switch (pictures) {
    case 'Form 10 Answer':
      pdf = '/assets/Form10Answer-Respondent-JustinSkylerZanth03-JUN-2024.pdf'
      break;
    case 'Form 10 answer part 2':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Refinance talks between natashia and company':
      pdf = '/assets/Gmail-Re_MICHINSKI23-1003308.pdf'
      break;
    case '2022 email to refinance':
      pdf = '/assets/Gmail-Fwd_1180876NatashiaMichinskiJustinZanth.pdf'
      break;
    case 'Proof of disability':
      pdf = '/assets/Screenshot_20240531-051421.png'
      break;
    case 'Proof of disability - 2':
      pdf = '/assets/disability.pdf'
      break;
    case 'Current credit score':
      pdf = '/assets/Zanth2.jpg'
      break;
    case 'August Text Messages':
      pdf = '/assets/Screenshot_20240531-125655.png'
      break;
    case 'August Text Messages - 2':
      pdf = '/assets/Screenshot_20240531-125717.png'
      break;
    case 'August Text Messages - 3':
      pdf = '/assets/Screenshot_20240531-125746.png'
      break;
    case 'August Text Messages - 4':
      pdf = '/assets/Screenshot_20240531-125804.png'
      break;
    case 'August Text Messages - 5':
      pdf = '/assets/Screenshot_20240531-125814.png'
      break;
    case 'August Text Messages - 6':
      pdf = '/assets/Screenshot_20240531-125820.png'
      break;
    case 'August Text Messages - 7':
      pdf = '/assets/Screenshot_20240531-125832.png'
      break;
    case 'August Text Messages - 8':
      pdf = '/assets/Screenshot_20240531-125841.png'
      break;
    case 'Livingroom':
      pdf = '/assets/PXL_20240531_114754028.jpg'
      break;
    case 'Where is her car?':
      pdf = '/assets/whereishercar.jpg'
      break;
    case 'Reply with notes regarding lies':
      pdf = '/assets/replywithnotestodisputeallthelies.jpg'
      break;
    case 'First notice of motion':
      pdf = '/assets/PDFsam_merge.pdf'
      break;
    case 'First motion - evidence':
      pdf = '/assets/supportingevidencetonoticeofmotion.jpg'
      break;
    case 'Latest offer - skyler':
      pdf = '/assets/latestOFfer.jpg'
      break;
    case 'Latest offer - natashia':
      pdf = '/assets/SeparationAgreement-SecondOffertoSettle.pdf'
      break;
    case 'Application':
      pdf = '/assets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf'
      break;
    case 'Answer':
      pdf = '/assets/Form10Answer-Respondent-JustinSkylerZanth03-JUN-2024.pdf'
      break;
    case 'Case conference - skyler':
      pdf = '/assets/caseconference.pdf'
      break;
    case 'Have to provide proof of gas purchase':
      pdf = '/assets/Screenshot_20240531-210644.jpg'
      break;
    case 'Refusing to transfer money':
      pdf = '/assets/Screenshot_20240531-043036.png'
      break;
    case 'Need to provide evidence of purchases':
      pdf = '/assets/Screenshot_20240531-051421.png'
      break;
    case 'Proof breakup happened 2024':
      pdf = '/assets/Screenshot_20240531-010928.png'
      break;
    case 'Proof breakup happened 2024 - 2':
      pdf = '/assets/Screenshot_20240531-012247.png'
      break;
    case 'Cra screen shot':
      pdf = '/assets/2020.jpg'
      break;
    case 'Applicant uncooperative with window loan':
      pdf = '/assets/cannotpayforwindowsapparently.pdf'
      break;
    case 'Olivers contract':
      pdf = '/assets/IMG_20240419_110407.jpg'
      break;
    case 'First cheque on home':
      pdf = '/assets/firstcheque.png'
      break;
    case 'Emails - natashia':
      pdf = '/assets/natashiaAndIEmails.pdf'
      break;
    case 'Emails - anne':
      pdf = '/assets/emailsanne.pdf'
      break;
    case '2nd Refinance contract':
      pdf = '/assets/docssigned.pdf'
      break;
    case '2021 mortgage commitment':
      pdf = '/assets/FirstRefinancingContract.pdf'
      break;
    case '2019 mortgage commitment':
      pdf = '/assets/2019MortgageCommitment.pdf'
      break;
    case 'Have to provide proof of truth':
      pdf = '/assets/needtoprovemnotlyingemail.pdf'
      break;
    case 'Have to provide proof of truth - 2':
      pdf = '/assets/needtoproveimnotlyingemail2.pdf'
      break;
    case 'Notice of no trespass':
      pdf = '/assets/noticeofnotrespass.jpg'
      break;
    case 'Largest and only home improv in skylers name':
      pdf = '/assets/biggesthomeimprovementtohome.pdf'
      break;
    case 'Bills in skylers name':
      pdf = '/assets/billinskylersname.pdf'
      break;
    case 'Various Articles':
      pdf = '/assets/variousarticlessupporting5050spliot.pdf'
      break;
    case 'Initial purchase':
      pdf = '/assets/OriginalPurchaseAgreementForAshburnRd.pdf'
      break;
    case 'Home inspection':
      pdf = '/assets/homeinspection.pdf'
      break;
    case 'I should move out':
      pdf = '/assets/Capture23.jpg'
      break;
    case 'I should move out - 2':
      pdf = '/assets/Capture233r.jpg'
      break;
    case 'Reply':
      pdf = '/assets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf'
      break;
    case 'Various articles supporting 50/50':
      pdf = '/assets/variousarticlessupporting5050spliot.pdf'
      break;
    case 'Other text messages':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Natashia does not fear me':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Prepared for Skyler':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'I controlled finances before':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Window loan authorization':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Transfer file to Natashia':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Removed prematurely':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'Con and other pre purchase':
      pdf = '/assets/form10answerpart2.pdf'
      break;
    case 'notice of motion - 2':
      pdf = '/assets/noticeofmotion2.docx.pdf'
      break;


    default:

      pdf = ''

  }


  const navItems = [
    { title: "Application" },
    { title: "Answer" },
    { title: "Reply with notes regarding lies" },
    { title: "Form 10 Answer" },
    { title: "Form 10 answer part 2" },
    { title: "Refinance talks between natashia and company" },
    { title: "2022 email to refinance" },
    { title: "Proof of disability" },
    { title: "Proof of disability - 2" },
    { title: "Current credit score" },
    { title: "August Text Messages" },
    { title: "August Text Messages - 2" },
    { title: "August Text Messages - 3" },
    { title: "August Text Messages - 4" },
    { title: "August Text Messages - 5" },
    { title: "August Text Messages - 6" },
    { title: "August Text Messages - 7" },
    { title: "August Text Messages - 8" },
    { title: "Livingroom" },
    { title: "Where is her car?" },
    { title: "First notice of motion" },
    { title: "First motion - evidence" },
    { title: "notice of motion - 2" },
    { title: "Latest offer - skyler" },
    { title: "Latest offer - natashia" },
    { title: "Case conference - skyler" },
    { title: "Case conference - natashia" },
    { title: "Have to provide proof of gas purchase" },
    { title: "Refusing to transfer money" },
    { title: "Need to provide evidence of purchases" },
    { title: "Proof breakup happened 2024" },
    { title: "Proof breakup happened 2024 - 2" },
    { title: "Cra screen shot" },
    { title: "Applicant uncooperative with window loan" },
    { title: "Olivers contract" },
    { title: "First cheque on home" },
    { title: "Emails - natashia" },
    { title: "Emails - anne" },
    { title: "2nd Refinance contract" },
    { title: "2021 mortgage commitment" },
    { title: "2019 mortgage commitment" },
    { title: "Other text messages" },
    { title: "Natashia does not fear me" },
    { title: "Prepared for Skyler" },
    { title: "Have to provide proof of truth" },
    { title: "Have to provide proof of truth - 2" },
    { title: "Notice of no trespass" },
    { title: "Largest and only home improv in skylers name" },
    { title: "Bills in skylers name" },
    { title: "Con and other pre purchase" },
    { title: "Various Articles" },
    { title: "Initial purchase" },
    { title: "I controlled finances before" },
    { title: "Window loan authorization" },
    { title: "Transfer file to Natashia" },
    { title: "Removed prematurely" },
    { title: "Various articles supporting 50/50" },
    { title: "Home inspection" },
    { title: "I should move out" },
    { title: "I should move out - 2" },

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
        <aside className="-mx-4 lg:w-1/8 text-foreground  h-[950px] max-h-[950px] overflow-y-scroll">
          <p className='text-foreground'>Menu</p>
          <hr className="text-foreground w-[90%] mb-5" />
          <SidebarNav items={navItems} />
        </aside>
        <div className="flex-1  w-auto">
          <Card className='max-h-[1000px] h-[1000px] w-[95%] overflow-y-scroll mx-auto'>
            <CardHeader>
              <CardTitle>Exhibits</CardTitle>
              <CardDescription>Evidence submitted by Skyler</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="relative rounded-xl overflow-auto">

                <iframe className='mx-auto' src={pdf} width="95%" height="1000px" />

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
