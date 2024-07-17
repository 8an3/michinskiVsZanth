import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"


export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}
export default function NewFile() {
  const questionsDC = [
    {
      main: 'FAIR COMPETITION DURING CASE???',
      title: `I find it extremely unfair to compete against a party that consistently disregards the court's rules. I have already provided ample evidence to demonstrate that almost all of her claims are false. Despite my requests, they fail to provide proof, either verbally or in writing.

      For instance, regarding the abuse allegations made by Natashia, I asked her on audio to provide an example, and she could not identify a single event. Court proceedings are supposed to be conducted fairly and in good faith. Their entire case is built on a lie, and they are fabricating additional lies to support the initial falsehood.

      It's not just Natashia who is lying; her counsel is also engaging in these deceptive practices. This undermines the very concept of justice. The scales of justice are being unfairly tilted in their favor through dishonest tactics, such as submitting crucial paperwork just an hour and a half before the deadline, giving me no time to prepare never mind study the necessary topics in law.

      how is it i have to swear to a notary that everything ive written on my court filings are true, everyhing ive lined out in the documents are in fact true and get it signed off on, while at the same time natashia can just out right lie on her court filings with no repercussions? seems odd to me, or is it because I dont have a lawyer i can use as a shield, for example oh there was a miscommunication between my lawyer and i. her lawyer is representing her, not shielding her completely for making false claims on documents she was sworn to tell the truth? the applicants certifacate clearly states that by signing it everything stated is true, and it isnt.

      I am currently without representation, not by choice, adding to that Im also mentally disabled, and can barely come up with money to help me due to natashias actions, which further puts me at a disadvantage. The dishonest tactics employed by Natashia and her counsel should not be allowed to influence the outcome of this case. I would like the court to put forth some action or order against natashia, i dont know what because im representing myself, but something needs to be done.`
    },
    {
      main: 'in response to her case conference breif',
      title: `she controlled the finances where my cheque deposited into the account she controlled, she should already have all the information shes requesting this makes no sense. this just further proves her need/wants to control me or wanting to knwo exactly what i did when, i had to take money out of the account she controlled to purchase gas, does she want to know exactly where i purcahsed this gas from, not only that but whenever i did take money out she immediatly texted me asking me why i was taking money out and i had to respond or else it was a huge fight even if it was 40$, 20$, 10$ so she already knows when i took out money and why. if the amount was ever over 50$ we always got into a huge fight over it, even if it was for gas which is why i tended to take out smaller amounts for gas so we didnt have as many fights...

      it took her 2 months to move with a moving company and she expects me to move in 2 days with no money, no means to move or store my belongings and no where to live?...

      the threat to her changing the locks was never lifted, and she continously still comes to the house every week to see if im still here, with her actions, along with how she removed all the money from our account at the start of the separation, i dont have the means to pay for car insurance currently how am i supposed to look for a job? i just got access to my bank account again recently because i had to pay for the over draft(since we only ever paid her debts almost 100% of the time) that was removed from my account since she cancelled my phone, i still havent even been able to afford a phone plan but i have been working harder then ever on a project i plan to sell, but i need a cell phone to finish testing before bringing to market...

      she controlled the finances for the last 3 years, ofcourse she is going to say that only she paid for everything in order for her to make herself look better in this matter. with my chque depositing into the account she controlled, what happened to all that money from my bi weekly pay cheques? ofcourse i know i took money out for gas, but this is her diminishing my contributions like she has been doing for the last couple of years. no matter what i did, whether it was chores around the house, or anything else for that matter she always diminished what i contributed to our relationship. i have the records of this account since it was opened but because the bank has such poor record keeping theres virtually no way to tell what money went where...

      why are you asking to be served but not have me file with the court? is there something you want to hide?...

      if im a "tenant" i shouldnt have to pay the property tax portion of the mortgage payment, the portion of the mortgage that is the house is about 1200...

      Her certificate... she was not here at the house when that was signed because I was here but she says she certified it in berwick, it even states where she signed it which is well over 30-50km away from our house.
      `
    },
    {
      main: 'account number 261',
      title: 'she put a value of 10k on it at valuation date what does that mean?'
    },
    {
      main: 'certifiate for finances',
      title: 'Her certificate... she was not here at the house when that was signed because I was here but she says she certified it in berwick, it even states where she signed it which is well over 30-50km away from our house'
    },
    {
      main: 'why do i need a affidavit of sdervice ontop of a notarized document',
      title: 'for example i handed ina 13.1 and the court rejected it because i did not have a 6b attached, but its notarized why do i need a second notarized document to accompany this? especially when the applicant has lied from the begining'
    },
    {
      main: 'SPOUSE/COMMON LAW CAN THESE PEOPLE MAKE UP THEIR MINDS?',
      title: 'labeled as spouse on page 4 of second refinancing docs and other places on thiks contract'
    },
    {
      main: 'in second offer, they want me to sign',
      title: 'off on that I did not want legal advice. which is not true like get the fuck out of here, the only reason i cannot afford legal advice is because of natashia i will never sign that because i have been trying to get legal advice every step of this process'
    },
    {
      main: 'LAWYERS CERTIFICATE',
      title: 'why isnt annes signature on the lawyer cert on natashia paperwork? what is the significance of the lawyer cert?'
    },
    {
      main: 'COUNSEL COMMITS PERJURY',
      title: 'what happens when councel lies?'
    },
    {
      main: 'FILE TO MOTION',
      title: 'wwhat is the procedure to file a motion?'
    },
    {
      main: 'CUNT PRESENT DURING SERVING',
      title: 'paperwork for court filing dated for may 1st, was contacted by vespry 15 and natashia countless 10 + times, not once was this court filing mentioned till may 30th by email, she claimed someone was sent to my house numerous times, but I never saw them, prior to this point vespry contacted me 8 times by email and knew this was a reliable way to contact me along with natashia stopping by the house 3-4 times a week since then, she never mentioned it once to me. Yes i know she cant deliver the documents herself to me. But she didnt even let me know what was going on till after the 30 days was reached. This would suggest both natashia and her lawyer are trying to continue these negotiations while sabatoging my part in this matter especially without counsel. why was natashia present when I was served? I was told by her counsel she could not be invloved in this process, through my research I cant find an answer to this and her counsel failed twice in answering this. The first attempt in questioning about this she completely ignored me, the second attempt she brushed over this part of the question. So just clarification because I want to learn this the right way. So why was natashia present when I was served when her cousel advised she couldnt be? she claims natashia couldnt deliver the whole month of may, but then delivers a week after i was served? this gave me no time to prepare, for a case they shouldnt even have to employ these tactics, they have forced me into more and more of a disadvatange. meanwhile i had 15*** points of contact with anne that month after she filed, when you send someone something over an hour out of town, what do you usually do? you notify them right? and make sure that they are there to receive what ever you are sending them? ya this proves thier intentions. if shes allowed to do it then her counsel lied in writing, if not than how can that service be valid?'
    },
    {
      main: 'PRIVATE PROSECUTION',
      title: 'how do i go about privetly prosecuting natashia, in regards to fraud, theft and spousal abuse?'
    },
    {
      main: 'UNFINISHED PAPERWORK',
      title: 'Natashia forgot to do the financial paperwork because shes make a exclusive claim on the property, multiple times on the paperwork it says this is needed'
    },
    {
      main: 'OLIVER',
      title: 'can I file to get my dog back early?'
    },
    {
      main: 'PAPERWORK MISTAKES IN CONTRACTS',
      title: 'massive mistake on the page where Natashia solemnly declares on the contract that made me give her my half'
    },
    {
      main: 'SPOUSE IN CONTRACTS',
      title: 'on same contract under conditions of approval it calls me a spouse, so which the fuck is it? mortgage commitment page 1 refinance contract page 4'
    },
    {
      main: 'RULE 18 OF FAMILY LAW RULES',
      title: 'how can i add rule 18 of the family law rules, i offered a reasonable offer to settle while natashia hasnt and also refused my offer.'
    },
    {
      main: 'CONTROLLED FINANCES FOR FIRST HALF',
      title: 'i controlled the finances for the first half of our time in this house, have proof. it was obviously not hers, shes either trying to steal it with years of planning or trying to take advantage of the situation'
    },
    {
      main: 'TRUST HER AFTER STEALING?',
      title: 'Natashia asking to trust her with the value from the home, and leave early, after she stole my % from me....ya ok'
    },
    {
      main: 'NATASHIA WAS GIVEN LOGIN DETAILS BY TEXT MESSAGE FIND THESE',
      title: 'in a text message you give her login details for one of our services I think it Disney in order for her to make changes on the account proving her lying again'
    },

    {
      main: 'AFFIDAVIT EACH TIME?',
      title: 'is there a way to not have to get a affidavit each time? especially since natashia has yet to tell the truth on more than one item. Is she shielded from perjury just because she has a lawyer and I dont? if not how can i submit the evidence, since this case shouldnt even see the light of day due to the purjery'
    },
    {
      main: 'START NEGOTIATIONS WHERE WE LEFT OFF',
      title: 'how can i make it so natashia starts where we left off in the negations instead of starting over like she is trying to do? like were just wasting the time of the members of the court '
    },
    {
      main: 'FAIR OFFERED PROMISED, NOT DELIVERED',
      title: 'natashia and her lawyer promised a fair offer in the first week. promised it so hard that they told me to start packing, the offer they came forth was so unfair is there anything i can do about this?'
    },
    {
      main: 'UNNESSACRY AGGRESIVE LAWYER PRACTICES',
      title: ''
    },
    {
      main: 'EARLY RESTRAINING ORDER - NOTICE OF MOTION -- KINDA',
      title: 'can I ask for the restraining order early?'
    },
    {
      main: 'PERJURY - IN NOTICE OF MOTION',
      title: 'more fabricated claims and information on reply to answer, do I reply to the reply? or how do I respond to this?'
    },
    {
      main: 'EVENT OF FALSE CLAIMS - IN NOTICE OF MOTION',
      title: 'what happens if claims are all/mostly false?'
    },
    {
      main: 'DISMISSING CLAIMS - IN NOTICE OF MOTION KINDA',
      title: 'how come I cant ask for things to be dismissed based on evidence?'
    },
    {
      main: 'REFUSING INFORMATION REGARDING - LOANS IN NOTICE OF MOTION',
      title: 'applicant refuses to give me information regarding who to make payments to as she was in control of the finance for the last 3 years of our relationship(have email to prove)'
    },
    {
      main: 'THROW CASE OUT DUE TO PERJURY - IN NOTICE OF MOTION',
      title: 'is there a way to throw the case out early due to the perjury? '
    },
    {
      main: 'CAR/LOAN REPO SEE IF THERES A WAY TO GET HER TO GIVE MONEY FOR ALL MISSED PAYMENTS - IN NOTICE OF MOTION KINDA',
      title: 'because i lost my job due to our separration and she agreed to pay evreything till the seapration was concluded, one day she instigated a fight and told me i was mooching off of her, for the majoirty of our relationship i made more than her, but becase of my mental state and the abuse my professinal life wasnt as good as it was before. she contributed more than before, along with her history of stretching the truth, when she came over in person to start the fight she laid in to me saying im mooching off of her and that im just looking to have her supoort me and on on, i didnt think it would take this long because her lawyer promised me i would have a fair offer the first week they even told me to start packing because i wanted that fight to stop i just couldnt take it anymore i just told her to sotp paying and leave me alone but because of the legnth of time im about to get my car repo can i put a motion in the court to have her pay to keep it current'
    },
    {
      main: 'NOTE - EMPLOYMENT',
      title: 'get proof of employement to show problems only started with the abuse and medical condition'
    },
    {
      main: 'NOTE - TALKING ABOUT MARRIAGE',
      title: 'even if i get everything on my court filing she will have effected life negatively after this has concluded because i lost my job because of the separation, theres not many places a sales person can earn a 100k or more without a high school education so i will this effect for so many years to come, yet there has not proven action that I took to effect her negatively. she chose to end it like this, this could had gone alot more differently if she did not make that decision.   the funny thing if she would have waited a week i dont think she would have broken up with me because i had taken care of it with the help of a family memeber. this just showed me who she really is when i asked her to marry me, i would have meant my vows till death do us part. the comical thing is, it took her years to convince me to purpose she pushed me for it every chance she got to the point where it really bothered me at time. if you say you love me why cant you respect my wishes, were togethe. if get married  its the same result, were together. marriage is such a bad decsion is western society today because of the remifications that come after the fact. that is why i asked for the ring back, she begged me for it but now your taking back your answer to that question changing it, and you want to keep the symbolic item that represents that agreement as well? that makes no sense when a woman or man renegs on thir agreement the ring should be returned due to what it represents. her attitude with every, due to her selfishness, single descision or action is that she needs to feel like she got the best out of everything whether she deserves or not, more often than not she doesnt. all the time during our relationship she was like, it never bothered me till it got to the point of rediculousness. We fought about this only once in the 9 years we were together'
    },

  ]
  return (
    <div>
      <Card className='max-h-[800px] h-[800px] overflow-y-scroll'>
        <CardHeader>
          <CardTitle>Questions for Duty Council</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {questionsDC.map((item) => (
            <Accordion type="single" collapsible className="w-full"  >
              <AccordionItem value={item.main} key={item.title}>
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
    </div>
  )
}
