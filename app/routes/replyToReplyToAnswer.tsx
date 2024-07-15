

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
  const replyToAnswer = [
    {
      main: 'FALSE - The  respondent  refuses  to  make  payments  for  occupation  rent,  utilities,  or  contributions  towards the mortgage, and as such is not in the position of being a tenant who has a legal right  to exclude me as landlord. FALSE',
      title: `if natashia wouldn't have gone and made the decisions and threatened me the way she did, i would be paying. my whole cheque went into an account she control, i did not see a dollar of it first before transfering it, it went straight in. natashia does not follow any of the landlord tenant act, along with natashia and her counsel promised i would have a fair offer at the end of week 1. her coounsel was so confident that she told me to start packing
      her email follows
      Dear Mr. Zanth,

Please be aware that your "offer" is not accepted, and there are currently no agreements on the table.

Ms Michinski and I have discussed making an offer to settle, and I will be drafting one shortly. In the meantime, I would suggest that if you honestly "I just want this to end and move on with my life." you should be preparing to move out so that the house can be cleaned, prepared, and listed for sale.`
    },
    {
      main: 'FALSE - The respondent takes no care for the home: he leaves food waste around, does not pick up and rarely takes out garbage, does not flush or clean bathroom, and does not mow the lawn or do any upkeep of the external property. FALSE',
      title: `come by and take a look the house is in immaculate shape, the only things that look out of place or a couple of things because i have no idea when im leaving, im continously told to start packing so... or better yet i can do a video walk through right now for everyone theres no dirt on the floor because i dont wear socks and i hate if the floor is dirty, there is literallyt a fraction of the amount of garbage being put out every week, the dish washer gets used a fraction of what it used to, nothing in the house gets used except my office i now do not have someone to yell at me for working. so the whole house stays clean, i moved my bed into the office because natashia took my ac units and because of how hott it is upstairs i moved my bed downstairs so the entire upper floor doesnt get used, the living room doesnt get used the floors in office kictehn and foyer get vacuumed and washed twice a week.`
    },
    {
      main: 'FALSE - I have removed some of my property from the home, but I have not threatened or abused the respondent.FALSE',
      title: `She threatenend to call the cops on me the first night, and then did just that, handed me a notice of no
Trespass all the while shes asking me to trust her that she wont take evreything once the house
Is sold. Wants me to leave to sell the house, but beleive in her heart that she will give me whats
Fair... yet i do not see a fair offer to be in sight... so this was a straight up lie to try to get away with stealing from me as i said she wants the rules to apply to everyone but herself.`
    },
    {
      main: 'FALSE - the respondent and I were never married, and there is therefore no Family Property. FALSE',
      title: `correspondance between antashia and finance company prove this wrong`
    },
    {
      main: 'FALSE - The respondent and I cohabited between December 1, 2016 and August 2023. During the latter part of that cohabitation, we were common law partners as per Canada Revenue and properly filed taxes as such. This does not create “Family Property”. ',
      title: `the conversations you had with the finance company and refusing legal counsel on my behalf without informing me and Claims all this but first Initial deposit was from my cheque taking the money out of my account, not a joint account. Also i controlled all the finances for the first 3 years we were there, see suppporting evidence But yet i did not try to steal the house from her, yet shes now trying to get away with it. This Was the first deposit to put a hold on it while we did the paperwork  `
    },
    {
      main: 'FALSE - The  house  at  15490  Ashburn  Road,  in  Berwick,  ON  was  purchased  in  September  2019 entirely from my lottery winnings and a gift of $5,000 from my mother. I agreed to add the respondent on title as at that time I thought I could trust him to contribute to the home. At no  time has the respondent contributed more to the home than would be reasonable for room and board.',
      title: `we have went over this`
    },
    {
      main: 'FALSE - When it was time to renegotiate the mortgage in August 2023, the respondent was dealing badly with his own personal debt and I did not want to risk that attaching to my home. He had ... ',
      title: `the reason why my debt was worse is because we had an agreement to do just that. we were to keep her debt clean and tarnish mine in the case we need credit to buyu a vehcile or finance a home repaair and what not... look at the refinance, natashia took allmost all the money from the refinancing.... i wonder why that is, because we had that agreement and because of my memory issues i now ask the court to have natashia bring forth evidence as to what i actually received, because i knwo i did not get 15,000 like she discuseed with the finance company, any thing she cant prove she can pay back now as it was supposed to go to me`
    },
    {
      main: 'FALSE - The claim regarding “item’s taken” is for items owned by me including items I purchased, and items gifted to me by my family. The respondent has moved my possessions to the front ',
      title: `we have went over this before... and have even included some stolen items.... she needs to stop acting like a 12 year because she isnt getting her way in this separation.`
    },
    {
      main: 'FALSE - The  applicant  has  not  prevented  the  respondent  from  working,  and  has  throughout  the relationship supported the respondent in keeping his employment, including by assisting in ',
      title: `through her actions alone within the first couple of separation and how she acted, would u trust her enough to getup and walk away..... no and she did threaten me... the amount of lies is disgusting please start providing evidence like i have in every single claim i have made.... what evidence have i seen come from u guys? none`
    },
    {
      main: 'FALSE - The respondent can have immediate freedom from the applicant merely by moving out of her ',
      title: `continuing on from the previous she threated to change the locks, im not letting her steal the house from me... this is insane`
    },
    {
      main: 'FALSE - The parties are not married, they own no joint property, and they have no joint debt. There is one debt for windows in the home that was taken out in the respondent’s name. The applicant has made several  attempts to  assume or pay off  that loan, however the lender  wishes the ',
      title: `i have the emails to prove that they have not taken one actionable step to pay the loan.
      the applicant isnt on the financing for my car, and she didnt pay for my gas... with that
logic that means every paycheck of mine was hers? because it went into a joint account
she controlled because for the last 3 years of our relationship she controlled the finances,
and before that i was in control of the finances? i will provide more bills to proof this. The
 internet is in my name, the biggest financial investment we made to the home, in my name.
if this house was only hers i would not have financed it in my name thats insane, enbridge
was in my name at the begining that she switched over to hers becasue shes been planning
 this for years
windows
enbridge
internet
millar mechanical
house insurance
i was also paying her car insuracne  for a time
reabel repairs
first initial deposit for ashburn came from my account see pdf
all the contractors we had here to do everything for the purchase of the home and after the
purchase... on and on`
    },
    {
      main: ' i apolgize if i seem annoyed, but you can understand why, i havent rechecked but i think every point is false...',
      title: `For all the other things she claims and cant prove, I have proved she is more than happy
To fabricate claims, she happy stealing for me and her employer, she would steal so much
From her employer she would  bring extra bags from home to stuff as much as she could
In contrast to natashia, i have provided evidence for every claim i have made thus
Far. For anything we do not have aphyical evidence for, who are you going to beleive
A known caught in the act liar and theif? Or someone who can break the law in any way
What so ever, or else he would loose out on the professional goals he set for himself? Not
Only a clean record, but you do multiple lie detector tests, contstantly which is why im so upfront
And honest, to get ready for that. For the theif part, if your unaware, she stole constantly from her employer. So much stuff that she left some
Behind when she moved out. Instead of throwing out good medial supplies, some even in its orignal
Wrapping i decided to return it to the hospital in hopes that it could be used to help patients. The only
Reason i did not do it before now, as you probaly already know, was because of how abusive she was and
I did not want to give her any more ammo against me to stasrt afights, diminish what i do or contribute,
Withheld sex as a punishment etc. To prove im not making any of this up i willk walk you through a scenario of
What she would take, when and what it was used for. I do not drink so i was doubly appalled when i found
out she was going to taking things from the hospital, syrngs and other times to be like party favours at a party
Her and her friends would put together parties and would use the medical supplies to make drinks or make
Decarations with them, for example syrngs would be used sometimes for jello shots if as witness is needed i
Can produce one. Natashia was the only one that i know of that stole from the hosptial, the ones i knew anyways
Some of them moving up in to higher positions, and wouldn’t risk lying about such a trivial event. When I found
Out natashia was doing this, i asked her why? Why couldnt you just buy this, not risk your career and a
Criminal record. I personally wanted nothing to do with it, and not wanting to risk a fight or anything like that
I just never mentioned it again. to end it looks like anne wrote this for her client, so that would mean anne lied about everything for her client.`
    },
  ]
  return (
    <Tabs defaultValue="to-do" className="w-[95%] md:w-[800px] mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="to-do">Documents</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="ques for duty counc">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="to-do">
        <iframe className='mx-auto' src='/assets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf' width="95%" height="1000px" />

      </TabsContent>
      <TabsContent value="ques for duty counc">
        <Card className='max-h-[800px] h-[800px] overflow-y-scroll'>
          <CardHeader>
            <CardTitle>Responses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {replyToAnswer.map((item) => (
              <Accordion type="single" collapsible className="w-full" >
                <AccordionItem value={item.main} key={item.main}>
                  <AccordionTrigger>
                    {item.main}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.title}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>


  )
}
