

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
import one from '~/components/courtcase/motion/1.jpg'
import two from '~/components/courtcase/motion/2.jpg'
import three from '~/components/courtcase/motion/3.jpg'
import four from '~/components/courtcase/motion/4.jpg'
import five from '~/components/courtcase/motion/5.jpg'
import six from '~/components/courtcase/motion/6.jpg'
import seven from '~/components/courtcase/motion/7.jpg'
import eight from '~/components/courtcase/motion/8.jpg'
import nine from '~/components/courtcase/motion/9.jpg'
import ten from '~/components/courtcase/motion/10.jpg'
import eleven from '~/components/courtcase/motion/11.jpg'
import twelve from '~/components/courtcase/motion/12.jpg'
import thirteen from '~/components/courtcase/motion/13.jpg'
import fourteen from '~/components/courtcase/motion/14.jpg'

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
    { img: six },
    { img: seven },
    { img: eight },
    { img: nine },
    { img: five },
    { img: ten },
    { img: twelve },
    { img: eleven },
    { img: thirteen },
    { img: fourteen },


  ]
  return (
    <Tabs defaultValue="to-do" className="w-[95%]  mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="to-do">Notice of motion</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="to-doevidence">Notice of motion - evidence</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="notice2">Notice of motion 2</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="ques for duty counc">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="to-do">
        <iframe className='mx-auto' src='/michinskiVsZanth/assets/PDFsam_merge.pdf' width="95%" height="1000px" />

      </TabsContent>
      <TabsContent value="to-doevidence">
        <iframe className='mx-auto' src='/michinskiVsZanth/assets/supportingevidencetonoticeofmotion.pdf' width="95%" height="1000px" />

      </TabsContent>
      <TabsContent value="notice2">
        <iframe className='mx-auto' src='/michinskiVsZanth/assets/noticeofmotion2.pdf' width="95%" height="1000px" />

      </TabsContent>
      <TabsContent value="ques for duty counc">
        <Card className='max-h-[800px] h-[800px] overflow-y-scroll'>

          <CardHeader>
            <CardTitle>notice of motion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>this is rediculous like how can i fairly compete against a team that does not want to follow the rules set forth by the court i dont even need to provide any more evidence in regards to this because i have already submitted enough to prove that false statements are being made, repeatedly</p>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Request of information - Loan provider
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Applicant refusing to respond to questions about the loans I have. For the last 3 years we have lived at
                    our home, she was in control of the finances. At this time, to my understanding, the loan in question
                    has not been paid since the start of our separation for the last 3 months and I’m worried that my
                    vehicle will be repoed in order to satisfy the late payments. At the start of the separation the applicant,
                    due to the circumstances, informed me that she would be paying the loan till our separation has
                    concluded. Multiple times, the applicant and her counsel informed me that the separation would take
                    less than a week to conclude and I should start packing. Obviously, this is not the case. Our home is
                    an hour outside of Ottawa, and the nearest town is a 7 hour round trip walk. As you can see a vehicle is
                    necessary where we live.

                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Strike of pleading - Restraining order
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    The applicant does not fear me, or fear being around me. I have never abused/harassed the applicant
                    in any way, mental or physical. This false claim is a calculated maneuver to damage my reputation,
                    credibility, and livelihood. To prove this false, I would like to submit a police report as evidence. At this time I still have not received the police report that I requested through the information of freedom act,  but I’m sure it can be produced quickly at the hearing. The event took place on May 8th and I was  provided the report number E240569999. I had called the authorities on the applicant because she vacated the premises more than 30 days prior, and I did not know what to do as she was there taking items from the property. I had called the authorities for guidance but because of the matter at hand they immediately dispatched officers to the scene. Once they arrived we were both questioned. During my questioning I had informed the officer what was happening and what can be done in this situation.  The officer told me that since her name is on the title, they can’t remove her even if she hasn’t lived there for more than 30 days. At this time I had also asked about making a report on a stolen item that went missing, because I did not have video proof of the act, I couldn’t submit a report. I also inquired about bringing charges of mental abuse forward and to have a restraining order on Natashia, the officer responded with, “We are not equipped to deal with such matters”. The officer was supposed to have someone reach out to me about this, but never got any correspondence. After I was questioned, the officer asked if she feared for her safety with me, she responded that she did not and that she does
                    not fear me in any way. And that she would remain on the premises to continue packing and removing
                    things after the police officers had left.
                    On the contrary Natashia has mentally abused me for years, seeking me out to instigate fights where
                    she blames, shames, criticizes me and more for various reasons but the subject matter never mattered
                    even if it was contradictory to the subject matter from a previous interaction. Even during our
                    separation these events took place regularly. For example I was home sick with food poisoning, I was
                    on the couch watching tv in the living room, where she had no belongings left to take and in a part of
                    the house that was far from anything she planned to take. Obviously I was not in the condition to start
                    something, but she entered the living room and instigated a fight. I have an audio recording of the
                    event that I’m more than happy to share, during this audio recording I also asked for her to clarify and
                    give me events that took place where I had harassed and/or abused her, she could not come up with
                    such an event.
                    Later in the document she claims I harassed her by email, we discussed this during that audio
                    recording and she did not call it harassment. She called it scattered emails, which I will go into later.
                    I was unaware of the abuse she did against me till after our relationship and discussed it with a friend
                    because during our relationship Natashia asked me not to talk to anyone regarding our relationship,
                    good or bad, because she wasn't. Out of respect and love I complied.
                    Being a man I was never taught how to recognize these events, and just took everything on the chin.
                    There were night’s where my mental state couldn’t handle these events to the point I would beg her not
                    to start, or if my mental state deteriorated to the point I couldn’t take it any longer I would beg her to
                    stop. Typically she wouldn’t but for example one night I begged her not to start and she just stared at
                    me for several minutes not talking, turned quickly and ran around the entire house and came back to
                    me telling me everything I had done wrong and threatened that it needed to be taken care of before I
                    went to bed.
                    If she fears for her safety so much to request this of the court, then why did she come to the residence
                    after separating almost daily to pack and remove things from the property once we separated?
                    FLR 14 (March 1, 2018) Page 4 of 9
                    She threatened to change the locks, so I asked for a leave of absence(2 weeks into our separation)
                    from work to deal with the separation. So at this time I was home every day, and she still came over
                    every day. Most days she was here she instigated fights and we can prove she was here by the gps
                    data on her phone as she has a up to date modern Iphone that records every where you go in order to
                    provide you services.
                    To further prove this to be an unneeded request, the first night of our separation I called the authorities
                    on Natashia because she took my dog Oliver. The authorities came, there was no evidence that I was
                    abusing her and they happily left to go to their next call. The same thing happened during the call I
                    talked about earlier.
                    I will also submit a photo, where Natashia had driven her lawn mower from an unknown place of origin
                    to the house. She had no way of escaping if I had become aggressive or abusive because she had no
                    vehicle there. This is not the type of behaviour of someone in fear. This event took place Friday June
                    14th of this year. It shows her on the property by the driveway where her vehicle is not seen. I also
                    witnessed the applicant driving down the road on her lawn mower once she was done.
                    In regards to the scattered emails, I’m mentally disabled with ADHD(registered with the federal
                    government) and autism. The applicant has been aware of this since we started dating 8 or 9 years
                    ago. In an effort not to forget any matter or detail in regards to this case, as soon as something
                    important came up I would email her or her counsel. Natashia is used to this type of behaviour
                    because we both worked on making my memory better. This claim is weaponizing my disability against
                    me in order to strengthen her claims against me. Natashia works in the medical industry, and has
                    received training to deal with patients, even ones with disabilities. Instead of using this training to help
                    our situation, she used it to help abuse me for the last 3 years of our relationship. I say 3 years
                    because I cannot remember events like this taking place before that time. I will submit all
                    correspondence from the month of may to prove this, as I already included it in my answer. You will
                    notice every email had a reason and I was not looking to instigate anything with Natashia. The last mail
                    I sent that month to her was in regards to finding a solution for our separation. Once she learned that I
                    was looking for a fair solution, she stopped responding. 9 days before that, I inquired about an account
                    with a lien on the home that went into arrears. 2 days prior to that, I had another notice about the
                    account in arrears and sent it to her. May 22nd I asked if she stopped making payments on the car, and
                    asked which company it was with. 3 days prior to that, I emailed about a possible offer we were talking
                    about in person when she came by the house. During the month of may I reached out to her 12 times,
                    by email. I do not have a phone so I cannot text or call her. I do not know where she is currently
                    residing so I cannot just show up at her residence. As you can see, I have not harassed or abused her
                    in any way, even in the eyes of the police officers that had come by. If more evidence is needed, I can
                    submit it.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Strike of pleading - Order of removal from premises
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    The applicant claims to exclusive ownership of the home, this is false. I will explain in 3 different ways
                    as to how this is false.
                    1- At the time of signing, I was not in the right state of mind. I was still attempting to recover mentally
                    from my recent medical diagnosis. I was depressed, distraught, experiencing severe anxiety, and had
                    attempted suicide multiple times. On the day of signing, my mental state was particularly poor. During
                    the session, I was not fully present; I sat out most of it while the lawyer explained everything to
                    Natashia. I only joined the session briefly to sign the documents and requested a quick explanation. I
                    was told that we were putting the house in her name to satisfy the bank's requirements, and that in the
                    event of a separation, the house would remain jointly owned. I have now discovered this was not the
                    case. Natashia was aware of my mental state at the time, as she had previously advised me to take
                    time off work to address my issues. Despite my concerns about our financial situation, she convinced
                    me that we could afford it. To avoid straining our relationship, I compartmentalized my struggles. If
                    Natashia disputes my mental health condition at that time, I can obtain a written statement from my
                    doctor. From my years in sales, I know that a contract is not valid if the signer is not in the right state
                    of mind, such as being intoxicated or under duress. This scenario meets those requirements, making
                    the contract invalid if it states anything other than a 50/50 financial split of our family home, as it was
                    before the contract.
                    FLR 14 (March 1, 2018) Page 5 of 9
                    2- In the event the court does not accept my mental state at the time of signing, I must clarify my
                    intentions. When we refinanced the home, it was to pay off debt and improve our lives. It was not
                    clearly explained to me, and I never intended to completely sign over my financial share of the home to
                    Natashia. Given the frequency of failed relationships, doing so would be financially irresponsible. We
                    had previously refinanced the home without issues (see First Refinancing Contract from answer), and
                    there were no problems when we initially bought the house (see Original Purchase Agreement For
                    Ashburn Rd from answer). At that time, I completely trusted Natashia. I don't know if she had been
                    planning this all along or is now taking advantage of the situation. I do know she was planning the
                    separation for some time based on her actions leading up to it. She began removing items from the
                    property before her vacation, cleaned out our joint checking account, and served me a notice of no
                    trespass immediately upon her return. It took me two and a half weeks to contact legal aid, only to find
                    out I didn’t qualify. Drafting the notice must have taken her lawyer some time. Given the
                    circumstances, legally a resulting trust would be in effect. The contract was explained to me as being
                    required by the bank, and no money was transferred to me. Further proof of this can be shown through
                    the fact that we tried to refinance prior without success multiple times and each time tried to include
                    me on the title, I will submit proof of one of the times as evidence. Natashia is attempting to take
                    advantage of a situation of unjust enrichment (see Second Refinancing Contract to prove no money
                    was transferred). With accordance to the law, the only fair settlement is for Natashia to return 50% of
                    the financial value of the home to me once it is sold. As she was only to hold it for me to appease the
                    bank's requirements. If needed I do have a large pdf with various supporting documents.
                    3- When my wages started to get garnished, due to the refinancing, we had to prove that I did not
                    receive any funds from the refinancing. Natashia forwarded me a ledger to support this. In that email
                    exchange Natashia explains to the refinance company why we are refinancing. That we were only
                    refinancing to better our financial situation and that's it. She also refused, without my knowing, legal
                    counsel for me as we were not separating. This was to only appease the requirements set forth from
                    the bank because it was the bank's idea to have me off of the title, not Natashias. From these events it
                    proves our intentions at the time, that the house was still both ours and not just hers and we would
                    still both live there since we were still planning to get married, once our financial situation improved,
                    and in the event of a separation, we would both get 50% of the sale of the house proceeds. Again a
                    resulting trust is in place. Not only that but in the refinance contract Natashia signed off on, it states
                    that I’m her spouse. Along with that there are a number of other questionable irregularities with the
                    contract.
                    I will mention this here, as it shows her support of her claims, to be false.
                    ● The first initial cheque to purchase the home was in my name, from my account, I have
                    supporting evidence.
                    ● I can also produce supporting evidence that I was the one who did all of the work to purchase
                    the home, as every receipt/email was in my name. I did this because Natashia worked overnight
                    at the hospital and I wanted her to get as much sleep as possible.(Evidence in large pdf.)
                    ● I was in control of the finances for the first 3 years of our time in our home, so every bill was in
                    my name. If it was just her house, this would not have happened.(Evidence in large pdf.)
                    ● We did not separate in August of 2023, but in April of 2024, I have supporting evidence. She
                    informed me of our separation through a non-court ordered notice of no trespass to our family
                    home. Given to me on April 6th 2024 when she returned from her unannounced vacation.
                    ● I have not refused to leave, I informed her and her counsel I would leave once a separation
                    agreement was signed. As I can no longer trust her, how does she expect me to trust that she
                    will keep to her word at this point? Evidence of this is in our offers of settlement. At this time it
                    has come to my attention that I do not have anywhere to go and would be living on the street if
                    removed before the sale of our family home. Natashia emptied our joint account, which my pay
                    deposited into, right before she left on an unannounced vacation.
                    ● She threatens to charge me rent, but yet does not follow any rule/guideline/law set forth by the
                    landlord and tenant act. When she first threatened me with this, the day after our separation.
                    Among other laws, not once did she give me notice that she was coming over to enter the
                    residence to take things. A landlord needs to provide 24-48 notice to enter the domicile.(GPS
                    data will be used as evidence as she was here, and she cannot provide a notice to enter
                    because I never received one)
                    FLR 14 (March 1, 2018) Page 6 of 9
                    ● She can't afford a second place? Yet she has the means to live outside of our residence, along
                    with storing every item she has taken from the house? The house is quite large, and she has
                    taken almost everything, so storing that level of possessions takes a lot of space. The
                    separation started on April 6th, due to the time and amount of items taken from the property.
                    I'm assuming she is already living at her next residence. The reason she took so much is
                    because we had a verbal agreement neither one of us would remove anything without the other
                    being there. She broke this agreement the following day, Monday, as I was at work. She
                    continued this behaviour till there was nothing else for her to take, even all the food after she
                    made sure I had no money for the separation.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  order to bring loan out of arrears
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Natashia stated at the beginning of our separation that she would be keeping the bills up to date, as she was
                    aware that I had lost my job due to the separation. Multiple times I have asked for this account to be brought
                    up to date. One of them is the home improvement loan where all the windows in our house were replaced and
                    the loan was initially 45-50,000$. Natashia and her counsel informed me that I need to switch the account to
                    her or authorize her to do so, this is not the case. I have no phone, so at this time there was no way for me to
                    do either one they asked. It’s weird because any bill can be paid online, by anyone. The company does not
                    care where the money came from. To prove this, since I can’t call the company up, I had a friend make a small
                    payment to the account which was accepted. Last week someone from the company finally emailed me. I
                    informed them what was happening and asked if any account, no matter the owner, could make a payment. He
                    promptly replied that yes, all you have to do is add them as a payee with the account number and we can
                    make any payment we wish. I was told if it doesn’t get paid before months end, then the account would move
                    onto the next step. It has been in arrears now for 3 months. Natashia and her counsel had not responded to
                    any email I have sent, since talking to this employee. Since Natashia was supposed to keep all accounts up to
                    date anyways, I would like the court to order Natashia to bring up any account in arrears to be brought up to
                    date before any further action is taken from these companies.
                    To be as cooperative as possible, I offered Natashia a second option. She can send me the money and I can
                    pay it. I did not have access to my bank accounts because as a result of her no longer paying my phone bill, it
                    was under her account due to discounted rates offered by her employer, the bank cancelled all of my credit
                    accounts. My chequing account then went into arrears of 3500$ because it was in overdraft,(Reason for
                    account being in overdraft explained in answer with evidence) and because the bank could no longer contact
                    me, they cancelled everything and removed my number from my profile. This in turn also denied me access to
                    all federal government services, since my bank account was linked to my federal account. On friday of last
                    week, I was able to bring this account into arrears, finally giving me access to my bank accounts for the first
                    time in 3 months. I will pay these accounts when I can, but with no job this will take a while. So long that these
                    accounts will have already gone to the next step.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Request of information - Evidence pertaining to her support of claims
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    As you can see she has bullied/threatened me to leave our family home in multiple ways. She has yet to
                    provide any evidence to support any of her claims. She has not verbally or in writing told me, even when
                    requested. I’m asking the court to order Natashia to provide evidence to support her claims, as almost all of
                    them are false.
                    I am self representing so I do not know where or how to ask for this but in my answer I go over how to settle
                    this separation in a fair manner. How can we move forward with this? Some of the points are important, like the
                    restraining order I would like against Natashia. Thankfully once her counsel found out the gps data can be
                    used against her, she stopped entering the residence, but this only happened for the last 2 weeks, meanwhile
                    she still comes to the property even to this day
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Evidence submitted
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Request of information - Loan provider
                    <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />

                    ● Email requesting the information
                    ● Screenshot of email correspondence showing a lack of response to the question
                    Strike of pleading - Restraining order
                    <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />

                    ● Police report(currently not in my posession)
                    ● Screenshot of inbox showing a list of emails sent during the month of may
                    ● Emails sent during the month
                    ● Audio recording(I don’t know how to submit this at this time)
                    FLR 14 (March 1, 2018) Page 7 of 9
                    ● GPS data(I do not have this as it is in Natashias possession but this information would be
                    critical in proving she was at our residence.)
                    ● Photo of Natashia on property with no vehicle
                    Order to bring loan out of arrears
                    <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />

                    ● Email to Natashia and her counsel, showing no response
                    ● Email stating false claim from Natashia and her counsel
                    Strike of pleading - Order of removal from premises
                    <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />

                    ● Disability certificate
                    ● First Refinancing Contract(if space allows me, but can be provided at the hearing)
                    ● Second Refinancing Contract(if space allows me, but can be provided at the hearing)
                    ● Email correspondence between Natashia and refinancing company
                    ● Initial payment for our home
                    ● Text message sent in April asking if we are separating due to her actions
                    ● Screenshots of text messages sent during the month of August 2023
                    ● Non-court ordered notice of no trespass
                    ● Proof we tried to finance with both of our names before, multiple times(I have one piece of
                    evidence regarding this currently, I’m waiting for more to come into my possession because I
                    know we tried to refinance through my usual contact as well)
                    ● Paperwork needed to refinance on prior attempts
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
