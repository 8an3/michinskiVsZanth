

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
  const responeAnswer = [
    {
      main: 'DEBT: NEW INFO ARISED',
      title: 'ON REFINANCE CONTRACT I PAID FOR HALF HER DEBT LESS THAN A YEAR AGO SEE REFINANCING CONTRACT HIGHTIGHTED AREAS ALSO I WAS SUPPOSED TO GET THE REMAINING AMOUNT MAKE NATASHIA PROVE I GOT THE REMAINING AMOUNT FROM THAT TRANSACTION IF SHE CANT SHE CAN PAY IT NOW'
    },
    {
      main: 'lender auth signature',
      title: 'page 5 of the mortgage commitment, that is not live ink or even a programs signature that is just a copy and paste of that persons signature how is that valid?'
    },
    {
      main: 'If it was just her house',
      title: 'why are some of the documents that the lawyers drafted only say prepared for skyler with natashias name no where to be seen'
    },
    {
      main: 'sharing the house',
      title: 'anne states that natashia and i are sharing the house so that it enables natashia to continue to come and go as she please, but in the court documents they state something different like wtf'
    },
    {
      main: 'temp order to have natashia give notice',
      title: 'june 28 at 9:27 am natashia shows up unnanounced with a contractor, contracter walks into home first without natashia telling me shes there, i thought it was an intruder or a home invader and immediatly got defensive, i asked and who are you? he stares at me for a min and responds with im the insurance guy. natashia is no where to be seen, i dont hear her, nothing, i then asked him, "and..." and he jsut stared at me realizing what was about to happen because the look on his face dropped. and just as im about to jump on him finnaly natashia comes around the corner. this event should not have taken place especially the way it unfolded. this event, shows how little she cares about anyone but herself, especially the safety of others. if we did not separate and were still together i would not have asked who he was and just removed him from the property. her lack of respect, not only of mine, but anyones is shocking to me esepecially at the level that was shown this morning. ADDING: we live out in the country, where there are more  homes with guns then without, its 45 mins past this event and my heart is still pounding from adrenaline'
    },
    {
      main: 'order #1) Restraining order',
      title: `The applicant does not fear me, or fear being around me. I have never abused/harassed the applicant in any way, mental or physical. This false claim is a calculated maneuver to damage my reputation, credibility, and livelihood. To prove this false, I would like to submit a police report as evidence. At thisn time I still have not received the police report that I requested through the information of freedom act, but I’m sure it can be produced quickly at the hearing. The event took place on May 8th and I was provided the report number E240569999. I had called the authorities on the applicant because she vacated the premises more than 30 days prior, and I did not know what to do as she was there taking items from the property. I had called the authorities for guidance but because of the matter at hand they immediately dispatched officers to the scene. Once they arrived we were both questioned. During my questioning I had informed the officer what was happening and what can be done in this situation. The officer told me that since her name is on the title, they can’t remove her even if she hasn’t lived there for more than 30 days. At this time I had also asked about making a report on a stolen item that went missing, because I did not have video proof of the act, I couldn’t submit a report. I also inquired about bringing charges of mental abuse forward and to have a restraining order on Natashia, the officer responded with, “We are not equipped to deal with such matters”. The officer was supposed to have someone reach out to me about this, but never got any correspondence. After I was questioned, the officer asked if she feared for her safety with me, she responded that she did not and that she does not fear me in any way. And that she would remain on the premises to continue packing and removing things after the police officers had left. On the contrary Natashia has mentally abused me for years, seeking me out to instigate fights where she blames, shames, criticizes me and more for various reasons but the subject matter never mattered
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
      `
    },
    {
      main: 'order #2) - Order of removal from premises',
      title: `The applicant claims to exclusive ownership of the home, this is false. I will explain in 3 different ways
as to how this is false.
1) At the time of signing, I was not in the right state of mind. I was still attempting to recover mentally
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
before the contract
2): In the event the court does not accept my mental state at the time of signing, I must clarify my
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
3) When my wages started to get garnished, due to the refinancing, we had to prove that I did not
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
        `
    },
    {
      main: 'I am the sole owner of the house located at ashburn rd.  FALSE',
      title: `in emails from natashia i have proof we tried to get me on the refinancing even after i was not approved, if she we were trying to get me off at that time this would not have happened, see full email chain or search for subject Fwd: 1180876 Natashia Michinski Justin Zanth -found the email from the refinancing company, ALL THE EMAILS FROM NATASHIA TO THE FINANCE COMPANY, she claims why we are refinancing and even goes to ask i shouldnt get my own lawyer since i dont need one <br /> --subject Re: MICHINSKI 23-1003308<br /> --We are common law spouses. <br /> What is left over after paying my stuff will go towards dept in his name. <br /> We are not separating, why does he need his own lawyer, sorry the broker never mentioned this. And will we then be paying twice the amount in lawyer fees? The reason we are doing this is because of financial crisis. ------------- <br /> --also states we are spouses<br /> -also states that her debts would be paid first, which proves my statements about incurred debt true also gives the amoutns <br />--states the reason, and states we are not separating it was just to appease the banks wishes and we were getting because of finance issues <br />--as you can she, she replied for me and i was unaware that i was supposed to get my own lawyer, i was not apart of these emails the only reason i got them was because of the law office who wanted to garnish my wages due to the refinancing and the were forwarded to me due to the attachment i needed`
    },
    {
      main: 'since sept 2019 we live as a common law relationship FALSE',
      title: 'natashia has repeatedly stated we are spouses and even signed off on them in contracts, even the refinancing contract she signed off on, names me numerous occasions as a spouse'
    },
    {
      main: 'in august 2023 the respondant and i broke up FALSE',
      title: 'broke up april 6 2024 see august text message exchange march/april text message'
    },
    {
      main: 'the respondant has refused to move out of the house FALSE',
      title: 'at the TIME i agreed to move out when there was a signed offer in place, shes trying to steal my % of the home, she expects me to trust her aftrer that and leave without a signed offer?? although my sitauation has since changed and i have no where to go, if i leave im living out on the street, and there a plethora of other events that natashia did to ensure she wins this case that would horrible to leave here before the home is sold.'
    },
    {
      main: 'i have asked the respondant to leave on several occasions',
      title: `I have not refused to leave, I informed her and her counsel I would leave once a separation
      agreement was signed. As I can no longer trust her, how does she expect me to trust that she
      will keep to her word at this point? Evidence of this is in our offers of settlement. At this time it
      has come to my attention that I do not have anywhere to go and would be living on the street if
      removed before the sale of our family home. Natashia emptied our joint account, which my pay
      deposited into, right before she left on an unannounced vacation. Also how can i add rule 18 of the family law rules, i offered a reasonable offer to settle while natashia hasnt and also refused my offer. The only reason she sent a second offer is because natashia was being so unreasonable, her lawyer convinced her to offer more to me... this is how rediculous natashia was during the negotiations`
    },
    {
      main: 'I have told the respondant that if he continues to live there he will owe rent',
      title: `Every week my entire pay check went into an account where she controlled the finances and paid our bills with, I only took money out for gas to get to work, if i were to take any other money out, even if it was still for gas at times, she would mentally abuse me(proof has been provided but can submit more if neccessary). She threatens to charge me rent, but yet does not follow any rule/guideline/law set forth by the landlord and tenant act. When she first threatened me with this, the day after our separation.
      Among other laws, not once did she give me notice that she was coming over to enter the residence to take things. A landlord needs to provide 24-48 notice to enter the domicile.(GPS data will be used as evidence as she was here, and she cannot provide a notice to enter because I never received one) natashia has a history of diminishing everything i do, whether its money, cleaning up around the house, it doesnt matter what it is, she always finds a way to diminish my contribution to it. If I clean a bathroom for 10 mins or an hour and a half she puts me down, gives me shit and more. I mentioned it in the answer but ill go over it again here. I needed an oil change in fear of getting yelled and bitched at, i held off as long as i could to get it done. I brought it up when i couldnt wait any longer and she lost it on me, saying why didnt u take the money out last week. 6 months later, another oil change is needed, i take the money out just like she instructed... same thing happens, she states you stole money from me(even though it was out of our joint account), how dare you, you better prove it with receipts, you need to pay it back(even though she already gets my entire check), anyways you see where this is going. this was a recurring theme. For the last 3 years i beleived her, because of my mental disabilty. I thought i was going crazy, how can do so much wrong all of a sudden, i was doing so well... but it was because of her, it took us to break up for me to see that, well a friend told me but i never would have told her. she terrorized me for years, i had massive mental break downs because of it. i jsut wanted to be better for her, but no matter how hard i tried or did to become better i was never good enough and now shes trying to steal from me and ruin me. after the first hearing i threw up, when i read the reply the first half way through i threw up. I just never thought i could be with someone liek this and I always thought i could recoginize it but because i was so focused on beomcing better for her i just didnt see it and because it came out of no where it effected me hard, especially when i see the lies shes saying about me and our relationship`
    },
    {
      main: 'Unfortunately, the police have viewed this as a domestic issue and refused toi enforce the notice',
      title: 'correct because I did not abuse her and after showing the police officers the mountain of evidence supporting that the house is both of ours, they laughed it off and left to their next call'
    },
    {
      main: 'I have temp removed myself from my house as I was not feeling safe FALSE',
      title: `see notice of motion, pic of her by driveway with no car here <br />-- police report <br /> -- gps data <br /> -- audio file when you were laying on the coach sick and she instigated a fight <br /> -- comes over to the house alone, no woman would do that if they feared their spouse`
    },
    {
      main: 'Since i left, the respondant has engage in email harrasment FALSE',
      title: 'explained in notice of motion go over may emails       Natashia calls it scattered emails instead of harassment during the audio recording made while u were home sick - PUT THIS IN THE RIGHT PLACE IN NOTES'
    },
    {
      main: 'I do not have and cannot afford a second residence MOST LIKELY FALSE',
      title: 'Natashia left the first night and hasnt been back  she has moved 100% of her items out of the house , she took all the food even, in hopes she could just starve me and ill leave shes even removed her lawn mower'
    },
    {
      main: 'When it was time to renegotiate the mortgage in August 2023, the respondent was dealing badly with his own personal debt and I did not want to risk that attaching to my home. FALSE',
      title: 'see notice of motion, as well as the only reason her debt load looks better than mine is because she dumped her entire DEBT onto our mortgage, she dumped it into the mortgage because of our aggrement we had about our debt how is it fair i pay half her debt, but she doesnt pay for half of mine? its not, we should stick to the agreement we had originally'
    },
    {
      main: 'The respondent is living in my home. FALSE',
      title: 'This is not a good enough reason to ask for a restraining order and its our home, not hers, currently her lawwyer is telling me we have a shared residence so they can charge me rent while natashia can come and go as she pleases i have the email to support this'
    },
    {
      main: 'The respondent takes no care for the home FALSE',
      title: 'I can take a tour with you any day you want to show you how clean the home is. Natashia left a massive mess especially the final day she moved with the movers she hired.'
    },
    {
      main: 'I have removed some of my property from the home FALSE',
      title: 'She removed all items, hired a moving company and even removed her ride on lawn mower even though she does not have the means to transport it'
    },
    {
      main: 'The respondent and I cohabited between December 1, 2016 and August 2023. During the latter part of that cohabitation, we were common law partners as per Canada Revenue and properly filed taxes as such. This does not create “Family Property”. FALSE',
      title: 'April 6 is when she moved out not august, after she served me with the notice of no trespass'
    },
    {
      main: 'The house at 15490 Ashburn Road, in Berwick, ON was purchased in September 2019 entirely from my lottery winnings and a gift of $5,000 from my mother. FALSE',
      title: 'see notice of motion'
    },
    {
      main: 'The claim regarding “item’s taken” is for items owned by me including items I purchased, and items gifted to me by my family. FALSE',
      title: 'for example the floor ac units, i bought at a gatineau store, i had a truck at the time so it was easier for me to get them, bought with my cards and i picked them up, by natashias definition that she gave me, whoever bought them owns them, even though i dont agree with that, so by her reasoning they are mine, but were some of the first items to be taken, this was a pattern i noticed because a lot of the items first taken were mine, along with forcing me into a situation to take my dog as well'
    },
    {
      main: 'The applicant has not prevented the respondent from working, and has throughout the relationship supported the respondent in keeping his employment, including by assisting in financing his car, and paying for his gas to attend at work. FALSE',
      title: 'infact she has, i am extremely professionally motivated to the point where i had job making in excess of 300k a year, does this sound like the type of person who doesnt want to work. im also the top sales person in the power sports industry and have been for years. im so motivated to ensure that im the best in sales, i started to create a customer management software that is better than any other on the market even rivaling (and better program to use) against massive corporations, like the company that owns auto trader. i do not have a back ground in programming but this is how motivated i am. usually this is an undertaking for teams of developers, im doing it all by myself. this project was also to help in our debt loads, for the last year i worked 18-24 hours a day. im not exxagerating, for a long time natashia and i devoted weekends to just us. we would get dinner ready and watch a movie. i was so tired the moment we were done eating i would fall asleep on the couch with natashia, sometimes i would fall asleep seated straight up, according to natashia. i risked my health to better our lives this last year... this is the thanks i get, a separation where shes trying to devestate me. if the court needs proof, i can show them the website and the 100s of thousands of lines of code needed to produce it. i did the math, in my current position worst case scenario if she gets away with her claims i would feel this financially for 8+ years'
    },
    {
      main: 'The respondent can have immediate freedom from the applicant merely by moving out of her home. FALSE',
      title: 'i wish it were that easy, you want me to completly trust a lying, theiving, abuser jsut on her word alone? no'
    },
    {
      main: 'The parties are not married, they own no joint property, and they have no joint debt. FALSE',
      title: 'seee notice of motion I PAID FOR HALF HER DEBT LESS THAN A YEAR IN EXCESS OF 40,000 I WAS TO GET THE REMAINING AMOUNT that i would like proven was trasnfered to me like promised any amount she cannot prove to transfer to me i would like now'
    },
    {
      main: 'These other matters are unknown to the applicant; however, it is her position that the respondent must give vacant possession ',
      title: 'how does she not know these things? isnt this ur job counsel? and this is a false statement because, i sent all offers to natashia and her counsel. why? because natashia confided in me that her counsel didnt tell her everything, she told me this while when she came over and instigated a fight and i tried to steer the conversation to our offer of settlement and questioned her ona  couple of items, after a while i looked at her and asked, did ur laywer not tell you? she replied tell me what? ever since then ive included both of them for this reason so not only is natashia lying but it would seem her counsel is as well. to what end? i have no idea this is rediculous like how can i fairly compete against a team that does not want to follow the rules set forth by the court i dont even need to provide any more evidence in regards to this because i have already submitted enough to prove that this is a false statement, i even resent emails to either one of them when i forgot to include one or the other'
    },
    {
      main: 'Breach of contract penalty. The applicant has not entered into any contracts with the respondent during their cohabitation.',
      title: `this is something moving forward, she lies, steals, and abuses me. She obviously does not care about the law or the concequences involved with her actions. She needs a firm leash to control her or else she will continue to do what she is doing after this has concluded`
    },
  ]
  return (
    <Tabs defaultValue="to-do" className="w-[95%]  mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="to-do">Documents</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="ques for duty counc">Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="to-do">
        <Card className='max-h-[900px] h-[900px]  overflow-y-scroll mx-auto'>
          <CardHeader>
            <CardTitle>Answer</CardTitle>
            <CardDescription>Length of answer due to the acts of perjury the applciant was making and had to prove them in order show what she really is</CardDescription>
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
                    <img className="shrink-0 w-[700px] h-[900px] object-cover rounded-lg shadow-xl bg-white" src={item.img} />
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
            <CardTitle>Responses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {responeAnswer.map((item) => (
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
