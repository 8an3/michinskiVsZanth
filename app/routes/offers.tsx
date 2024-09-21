

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "~/components/utils"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { FaCheck } from "react-icons/fa";
import { ChevronLeft, ChevronRight, Copy, X, CreditCard, File, Home, LineChart, ListFilter, MoreVertical, Package, Send, FileText, Package2, PanelLeft, Plus, Search, Settings, ShoppingCart, Truck, Users2, Eye, PanelTop, } from "lucide-react"


export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}
export default function NewFile() {
  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]


  const notifications5050 = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]

  type CardProps = React.ComponentProps<typeof Card>
  const dates = [
    { date: 'Apr 16 2024 10:05 pm' },
    { date: 'Apr 23 2024 12:41 am' },
    { date: 'Apr 25, 7:32 PM' },
    { date: 'Apr 25, 9:13 PM' },
    { date: 'Apr 29 2024 9:01 am' },
    { date: 'May 26, 12:32 AM' },
    { date: 'Jun 26, 3:17 PM' },
    { date: 'Jun 29 2024 1:00 pm' },
    { date: 'Jul 2, 7:48 PM' },
    { date: 'Jul 31 2024 10:54 am' },
    { date: 'Aug 10, 11:17 PM' },
    { date: 'Might be missing an informal offer or two to make changes to our at the time current offers' },
  ]

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(''), 3000); // Reset after 3 seconds
      })
      .catch((error) => {
        // console.error('Failed to copy text: ', error);
      });
  };
  const [copiedText, setCopiedText] = useState('');
  const timerRef = React.useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, [])


  const property = [
    { data: 'Natashia has possession of the white Chrysler 300, according to the courts. She will sign off that all payments / amounts owed, if any, at the time of the separation will be her responsibilty. The vehicle will be left at the house with any items that belong with the care. In the event, that Natashia finally proves it is in fact, not her I will take the care once the separation has concluded.' },
    { data: 'Replacement costs of items already taken - $10,500' },
    { data: 'If I do get removed before theres a signed separation agreement, Im assuming you want me to wait till everything has concluded in this case to return the stolen items?' },
    { data: 'section total - $10,500' },
  ]

  const fiftyfiftysplit = [
    { data: 'Due to the events that have unfolded Skyler will remain at the property till sold. Natashia already has a place to live, proven by the length of time she has been away from our “shared” residence and Skyler does not. If skyler skyler were to leave, he would be living on the street, or in his car. Along with the un-likelihood that Natashia will re-hire a moving company to move all of her belongings back. Because of financial and logistics of unrealistaclly moving everything back to the point of being unreasonable, along with the fact that Natashia already having a place to stay while Skyler does not, Skyler will remain at the property till sold. ' },
    { data: 'both parties have to agree on any deal brought forward from any potential customer to buy the home.' },
    { data: 'The proceeds from the sale of the family home will be handled as follows:' },
    { data: '(a) The parties will direct the lawyer on the sale to pay these expenses from the family home sale proceeds:' },
    { data: '(i) real estate commission; (ii) adjustments for taxes, utilities, municipal fees or levies; (iii) amounts required to discharge registered encumbrances; (iv) legal fees and disbursements relating to the sale; and (v) all other sale adjustments.' },
    { data: '(b) From the net proceeds (ie. after paying the expenses in (a) above), before distribution between the parties, the parties will: Separation Agreement Page 6 All debts incurred during therelationship to be paid in full. Including any debts That Natashia has that Skyler is unaware of. Along with Skylers debts, RBC Credit Line, RBC Chequing account, Scotia Bank Visa and ScotiaLine, Scotia Bank Savings account and car loan.' },
    { data: 'Debts include - RBC LOC $7937, Scotia VisaLine $2573, Chrysler 300 $14032, other $426, ScotiaLine LOC $42000, Scotia Chequing account $1300, RBC Chequing $3435' },
    { data: 'Compensation for Skylers damaged credit due to previous agreement with Natashia. Where both parties would split the cost of the higher interest cost to repair his credit. Along with the damaging actions during the relationship, ie she would use my money if any left over and put it on bills in her name, even on months we did not direct any funds towards the ones in my name, in order to keep one of our credit levels in a postion to do anything, if needed for larder expenses.' },
    { data: 'After paying the amounts in (a) and (b) above, the remaining proceeds will be evenly disbursed to Natashia and Skyler' },
    { data: 'The amount stated in the contract that skyler was to get from the last refinance minus any amount natashia can prove I recieved from that refinancing.' },
    { data: 'A copy of all receipts pertaining to the sale of the home will be provided to Skyler Along with any other paperwork that outlines the use of the funds from the sale Of the house. Any amount that is irregular will be covered by Natashia.' },
    { data: 'Once the sale of the home has concluded, Natashia will transfer Skylers proceeds to Him within 5 business days and will ensure he receives any and all paperwork previously discussed before the transfer has taken place.' },
    { data: 'Section total - remaining proceeds from house after paying debts, then split in half' },

  ]
  const Debt = [
    { data: 'Debts include' },
    { data: 'RBC LOC - $7937' },
    { data: 'Scotia VisaLine - $2573' },
    { data: 'Chrysler 300 - $14032' },
    { data: 'Other - $426' },
    { data: 'ScotiaLine LOC - $42000' },
    { data: 'Scotia Chequing account - $1300' },
    { data: 'RBC Chequing - $3435' },
    { data: 'Home Improvement Loan - $33850' },

    { data: 'To quickly put... all the arguments to rest, really quickly. Because she used email to deal with all communications with the finance companies. Show me the conversation where it was natashias idea to have me removed off of the financing like she claims now, if she hasnt deleted it i know already, we can find the conversation where the bank told her to do it. because it was one bank that told her to do this... not her running to 4 - 5 banks with the same financing strategy, otherwise we would have had the chance to go with 4 - 5 banks, not stuck with one.' },
    { data: 'There was a very specific reason, why we did not use our mortgage broker, because we already had one who did 3 mortgages for us up to that point and had a good relationship with. it makes no sense, not to use him, he knows us, our credit history, employment history, everything. a mortage application with him at that point was for example, we want to buy this house and sell ours, ok Ill see if i can get it approved talk to you later. it literally makes no sense to go find another broker. there was no money transferred, we did not in fact break up till the following year(with proof). natashia even goes so far as to deny me legal counsel with this finance company to get the deal approved, without my knowledge of this even happening. she now claims the whole reason was because we broke up, but in the email you said we werent breaking up and for that no reason to get a second lawyer to protect them because we had no intentions of one person taking all of the interst in the house or completely putting the other into a disadvantgeous state to need a lawyer.' },
    { data: 'Again this in turn shows her true character, shes willing to do whatever it takes to get her way, whether its lying, stealing and / or cheating people. Not only to the finance company and her spouse, but lie straight to the represntatives of the court, without any remorse and just concentrating on how to get away with it, with zero thought into the consequeces if shes caught or the concequnses these effects have on other people. This level of behaviour shows that shes mentally capable to adminster the level of abuse I discussed already, that she did to me for 3 years. And entirely ok with whatever effect it has on them, as long as she gets her way. From stealing $100,000s,(with proof, thats why were here, shes already committed the act, the last judge confirmed this) stealing from hospitals(with proof), lying in court and its judges(with proof), rejecting legal counsel for other people with out them knowing(with proof), abusing someone mentally and financially for years(with proof) I can keep going but what is going to take for people to see this? The proof is here, in emails she wrote herself, physical evidence of items you cant buy as a consumer and can only find in hospitals, proof shes lied about so much not only on the documents that she has submitted but also other ways too, how can you take her word when she says we did not have an agreement about the debts in our relationship? Look at the transactions, theres only two ways it makes sense when you look at them. Shes either robbing me blind, or we in fact had that verbal agreement.' },


    { data: 'Now this also in turn proves a couple of her other claims wrong, with the conversations she had with all these finance companies. the reason we were looking to refinance, and you can see from her actions what i have claimed to be true. we did infact have that agreement about our debts, which is why i had no problem pay for half her debts when we refinanced with that company. Ontop of that, she was not entirely transparent about her conversations she had with those companies regarding the amounts being dispersed to us. 55 or so thousand went to natashia and whatever amount left over was to be given to me for my debts. If i remember correctly, which i know i am because i checked my bank records, i received under a $1000 from that transaction probably around the 750 mark' },

    { data: 'Compensation for Skylers damaged credit due to previous agreement with Natashia. Where both parties would split the cost of the higher interest cost to repair his credit. Along with the damaging actions during the relationship, ie she would use my money if any left over and put it on bills in her name, even on months we did not direct any funds towards the ones in my name, in order to keep one of our credit levels in a postion to do anything, if needed for larger expenses.' },
  ]
  const FamilyHome = [
    { data: 'Natashia to return all of my payments that was put towards the house including the initial deposit made by me to secure the house. Repayment of all services needed to purchase the home, ie inspections and such. Along with a real estate industry standard fee for being her agent, in finding the right home for her, with countless walkthroughs of properties before finding the one for her and concluding all needed tasks in puchasing that home for her in the form of taking care of all legal matters, inspections, walkthroughs once secured to ensure the buying process went without a hitch and much more .' },
    { data: 'Agent fee - $5000' },
    { data: 'Payments made towards house - $102,636' },
    { data: 'Initial Deposit - $5000' },
    { data: 'Payment of services rendered for the home ie installing a 1500 sq foot paver stone patio - $ ' },
    { data: 'Second refinance breakdown' },
    { data: 'From second refinance contract natashia to recieve $38,997 for her debts into our mortgage, remainder to go to me' },
    { data: 'house total came to $393649.29, total mortage set to $450,000' },
    { data: 'remainder comes to $17354' },
    { data: 'Section total - $129,990 not including services rendered, we will talk about that when we meet next' },
  ]

  const RestrainingOrder = [
    { data: 'A restraining order will be awarded to Skyler against Natashia she cannot talk to, be within 500 meters of himself or Oliver or within 500 meters of his residence or workplace.' },
    { data: 'With her extreme measures the day she broke up with me, and stole a dog that was not hers no matter what way you look at it, Oliver needs to be on the restraining order as well.' },
    { data: 'The last date this beahvoiur took place was sept 20th. To top it off, she even disables the ac units for the house when its still 35+ degrees out. At the same time, went around and unplugged everything. In comparison, there is zero hostility from me towards her. I have not touched a single item that was hers since the start of the separation, I avoid her as much as I can when she is here and continue to tell her to leave me alone when she just continiously tries to instigate a fight in some form, even going so far as fabricating things on the spot. Were so far into the separation and having spent so much time apart, this attitude and behaviour is completely uncalled for. She cant name a single instance I have done her wrong. That can even extend years back into our relationship, where she spent the last 3 years mentally and financially abusing me. To the point where I wanted to admit myself to a mental hospital because of how bad the abuse was. The only reason I didnt was because we would go further into debt due to it, and she would absolutely loose it on me.' },
    { data: 'On both of her offers she clearly states and puts forth to come to an agreement in regards to freedom from the other, and she turns around and acts the complete opposite and seeks me out to try to start arguments, that dont need to happen. What I mean by that is, she seeks to start fights and continue them and no matter the amount of time passed, you have not gained an inch towards a resolution or solution to help the matter at hand.' },
  ]

  const Rent = [
    { data: 'Due to every decision made by natashia that has continued to drag this out as long as she can, I dont feel its right to pay rent. I could have left the first day, she chose otherwise.' },
    { data: 'We can use this as a tactic to "give them" something to help negotiations but I dont want to feel like im under house arrest 24 / 7 i would not still be here if it wasnt for her threats' },
  ]

  const Courtcosts = [
    { data: '50 / 50 split - natashia will cover my court costs' },
    { data: '100% ownership - at this time, we will each cover our own costs. If the negotiations for our separation, slow down or come to a halt after removing me from the home and thinks the problem will go away, she will cover the costs of both of our lawyers. it clearly shows she was just trying to remove me from the property and not conclude the negotations. 2 offers in, 7 months does not show in any way that she wants to conclude these negotiations. not only that but also halting the process of the removal due to unforeseen consequnces because of the employed strategy by natashia and her lawyer, after they had already gotten the approval.' },
    { data: 'Section total - TBD' },

  ]

  const Misc = [
    { data: 'Restituion of lost wages' },
    { data: 'Due to the events during the separation, ie threats made, flipping from one strategy to another, and others. The time taken to conclude such a trivial separation could have been dealt with in much shorter time frame If Natashia wasnt so unwilling to cooperate in any capacity, not lifting the threats she made which in turn lost my job because of her actions, even when asked of her in writing, and taking the longest route to try to conclude these negotiations, every decision made getting to where we are now was made by her. That she planned, for an unknown amount of time before she forced the separation with no reason given, and no warning while at the same time preparing for her exit, emptying accunts, making sure she had people help her move when she promised not to take things from the property. Due to her threats Ive had to stay in our house since the near of our separation. In my career, at the level Im at, it is incredibly harder to find employment during the slower winter season. Due to a lower amount of jobs that pay around what I have been for years previous, which also severly limits my prospects to even just get back on my feet. No one wants to hire a sales person to make half or less than what they have gotten previously. Multiple times, I asked natashia to lift her threats, due to this very reason, with out even a response to my pleas, it is now the winter season and I will be lucky to find employement before spring. Making it harder still, even with prior attmepts at securing employment through the regular hiring process, that avenue has been unsuccessful for me due to being head hunted for the last sales positions I have held over the last 10 years, because of how the industry operates. Every employer give the same reason when turning me down, they cant afford it and even if that can they dont want to hire someone who will leave the first chance at a higher pay structure. Even after trying to convince them I wont. Natashia could have lifted the threats, but chose not to, she could have ended this separation at anytime, but chose not to, forcing countless situations onto me, that I dont want to be in. There even more reasons but just for the ones list so far, its only right that she covers the lost wages due to her actions. All of this could have been avoided, and dealt with effiently' },
    { data: '$1807 a week since april 16 2024 plus 12 weeks' },
    { data: 'Oliver' },
    { data: 'On the night of the separation, I had called for my dog, in response Natashia start to throw a fit frantically, grabbed my dog and ran from the premises. Stealing a dog, that was not in her name and not assiated to her in a any way other than being her fiances dog. All the paperwork was in my name, he was bought by me and so on. Ontop of that, when my last dog passed, due to her pressering me to put her down, she wouldnt allow me to purchase another dog to replace her with, and within months of that, steals my last dog that I have. Due to her planning of the separation, she emptied our joint account, where my pay checks directly deposited into, she emptied all valuable belongings from the home, including all food, just mere days after promising that both of us wouldnt take anything off of the premises without the other being there. Which in turn forced me into a financial sitiuation, where I had to make a decision I wouldnt make any other time, but natashia offered it to me pretty conviently, all the while all these events happened in a short window of time planned by natashia. She offered to hand over the engagment rings for oliver. Within weeks, the rings disappear and she claims it was because of my adhd and they will turn up eventually... In a home that was previosly emptied by natashia, theres no where to loose them in the house. Who has a history of theft, even outside of our relationship, with evidence. Due to signing under duress due to events caused by natashia and the reasons listed above natashia is to return oliver back the same day this agreement is signed.' },
    { data: 'Home improvement loan' },
    { data: '100% ownership - The loan to be paid in the total of its original amount, plus all fees that have been associated with the contract. MINUS any amounts natashia can prove she paid with her own money, a clear track from her account to the companies account. The total contract with associated fees comes up to $33,889.40' },
    { data: '50 / 50 split - will be paid off by the proceeds from the house sale before the proceeds get split up to both owners along with paying the other debts first as well.' },
    { data: 'Section total - $1807 a week since april 16 2024 plus 12 weeks && $33,889.40' },

  ]
  const BreachofContract = [
    { data: 'Due to Natshias malicious intent and her actions during the separation alone, this ties in with the same reason for the need of a restraining order because if the separation doesnt go her way, or gets what she wants she will lash out. For example, even to this day she feels the need, to show up unnounced with disruptive contractors, go through my belongings (she has not spent a night here in 7 months, and she took 95% of the belongings in the house already.), steal as much as she can while trying to instigate arguments with me. When she knows she needs to comunicate through her counsel.  A penalty is needed to keep her honest while we conclude the remainder of our separation because without one, she will continue with this behaviour and will just escalate the more things dont go her way. If she were to break any term in this contract she will forfeit 5% of her share of the property. Whether it goes to Skyler or a charity, doesnt matter as it is only to ensure Natashia be kept honest. Someone with no ties to either party will make this decision. For example whoever oversees the signing of this contract at court. I would prefer to get the amount because after much reflection on our relationship, especially the last 3 years, I would like to put it towards sessions with a phsyc once this has concluded' },
    { data: 'The last date this beahvoiur took place was sept 20th. To top it off, she even disables the ac units for the house when its still 35+ degrees out. At the same time, went around and unplugged everything. In comparison, there is zero hostility from me towards her or any type of petty action that would inconvience her. I have not touched a single item that was hers since the start of the separation, I avoid her as much as I can when she is here and continue to tell her to leave me alone when she tries to start fights. Were so far into the separation and having spent so much time apart, this attitude and behaviour is completely uncalled for. She cant name a single instance I have done her wrong during the separation. That can even extend years back into our relationship, where she spent the last 3 years mentally and financially abusing me.' },
  ]
  return (
    <Tabs defaultValue="Skyler" className="w-[95%]  mx-auto my-auto">
      <TabsList className="rounded-[6px] ">
        <TabsTrigger className="rounded-[6px] " value="Skyler">Skyler</TabsTrigger>
        <TabsTrigger className="rounded-[6px] " value="Natashia">Natashia</TabsTrigger>
      </TabsList>
      <TabsContent value="Skyler">

        <Tabs defaultValue="Current Skyler" className="w-full mx-auto my-auto">
          <TabsList className="rounded-[6px] ">
            <TabsTrigger className="rounded-[6px] " value="Current Skyler">Current</TabsTrigger>
            <TabsTrigger className="rounded-[6px] " value="July 1, 2024" >July 1, 2024</TabsTrigger>
            <TabsTrigger className="rounded-[6px] " value="Other Dates" >Other Dates</TabsTrigger>
          </TabsList>
          <TabsContent value="Current Skyler">
            <Card className={cn("w-[80%]",)} >
              <CardHeader>
                <CardTitle>Current Offer</CardTitle>
                <CardDescription>Hover over section to make copy button appear to the right side.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Property</AccordionTrigger>
                      <AccordionContent>
                        {property.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Family Home</AccordionTrigger>
                      <AccordionContent>
                        <p>50 / 50 split of family home</p>
                        {fiftyfiftysplit.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                        <p>100% ownership loss incurred due to events during separation.</p>
                        {FamilyHome.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Restraining Order</AccordionTrigger>
                      <AccordionContent>
                        {RestrainingOrder.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Rent</AccordionTrigger>
                      <AccordionContent>
                        {Rent.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Court costs</AccordionTrigger>
                      <AccordionContent>
                        {Courtcosts.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Debt</AccordionTrigger>
                      <AccordionContent>
                        {Debt.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Misc.</AccordionTrigger>
                      <AccordionContent>
                        {Misc.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Breach of Contract</AccordionTrigger>
                      <AccordionContent>
                        {BreachofContract.map((item, index) => (
                          <li key={index} className=" group flex items-center justify-between">
                            <div className='flex'>
                              <p className="m-2 text-muted-foreground">
                                {item.data}
                              </p>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => copyText(item.data)}
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 ml-2"
                              >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy</span>
                              </Button>
                              {copiedText === item.data && <FaCheck strokeWidth={1.5} className=" ml-2 text-lg hover:text-primary" />}
                            </div>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="July 1, 2024">
            <iframe className='mx-auto' src='assets/latestOFfer.pdf' width="95%" height="1000px" />
          </TabsContent>
          <TabsContent value="Other Dates">
            <div className="font-sans p-4">

              <div className="">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                      Submitted Offers and the dates served
                    </h1>
                    {dates.map((item, index) => (
                      <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {item.date}
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                  aria-hidden="true"
                >
                  <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div>
              </div>
            </div>

          </TabsContent>
        </Tabs>

      </TabsContent>

      <TabsContent value="Natashia">

        <Tabs defaultValue="Current Cunt" className="w-full  mx-auto my-auto">
          <TabsList className="rounded-[6px] ">
            <TabsTrigger className="rounded-[6px] " value="Current Cunt">Current</TabsTrigger>
            <TabsTrigger className="rounded-[6px] " value="Notes On Her Current">Notes On Her Current</TabsTrigger>
            <TabsTrigger className="rounded-[6px] " value="apr 21 2024 228 pm  part 1" >apr 21 2024 228 pm  part 1</TabsTrigger>
            <TabsTrigger className="rounded-[6px] " value="apr 21 2024 228 pm  part 2" >apr 21 2024 228 pm  part 2</TabsTrigger>
            <TabsTrigger className="rounded-[6px] " value="was not served no date" >was not served no date</TabsTrigger>
          </TabsList>

          <TabsContent value="Current Cunt">
            <p className='text-center text-xl m-5' >Served may 3 2024 440 pm</p>
            <iframe className='mx-auto' src='assets/may 3 2024 440 pm.pdf' width="95%" height="1000px" />
          </TabsContent>
          <TabsContent value="Notes On Her Current">

            <Card className={cn("w-[80%]",)} >
              <CardHeader>
                <CardTitle>Path: </CardTitle>
                <CardDescription>Property 100% hers</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>

            <Card className={cn("w-[80%]")} >
              <CardHeader>
                <CardTitle>Path: </CardTitle>
                <CardDescription> 50 / 50 split</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  {notifications5050.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>


          </TabsContent>
          <TabsContent value="apr 21 2024 228 pm  part 1">
            <iframe className='mx-auto' src='assets/apr 21 2024 228 pm  part 1.pdf' width="95%" height="1000px" />
          </TabsContent>
          <TabsContent value="apr 21 2024 228 pm  part 2">
            <iframe className='mx-auto' src='assets/apr 21 2024 228 pm  part 2.pdf' width="95%" height="1000px" />
          </TabsContent>
          <TabsContent value="was not served no date">
            <iframe className='mx-auto' src='assets/was not served no date.pdf' width="95%" height="1000px" />
          </TabsContent>
        </Tabs>

      </TabsContent>
    </Tabs>
  )
}
