
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

const calculateWeeksSince = (startDate) => {
  const currentDate = new Date();
  const timeDifference = currentDate - startDate;
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.floor(timeDifference / millisecondsPerWeek);
};

export default function Todo() {
  const [weeksSince, setWeeksSince] = useState(0);

  useEffect(() => {
    const startDate = new Date('2024-04-20');
    const weeks = calculateWeeksSince(startDate);
    setWeeksSince(weeks);
  }, []);

  const courtFiling = 175
  const notary = 50 * 10
  const refinanceLeftOver = 15000
  const rbcChecking = 3435
  const rbcLoc = 7937
  const scotiaVisa = 2573
  const car = 14032
  const other = 167 + 259
  const windows = 21000
  const scotiaLoc = 42000
  const scotiaCheck = 1300

  const wages = 1807 * weeksSince
  const findJob = 1807 * 8
  const replaceItems = 5500
  const houseSale = (525000 - 443643.85) / 2
  const missed2022 = 37000
  const missed2023 = 64457.13
  const rent = 1100 * (weeksSince / 4)
  const total = courtFiling +
    notary +
    refinanceLeftOver +
    rbcChecking +
    rbcLoc +
    scotiaVisa +
    car +
    other +
    windows +
    scotiaLoc +
    scotiaCheck +
    wages +
    findJob +
    replaceItems +
    houseSale +
    missed2022 +
    missed2023 - rent

  const moneyPutIn = ((1125.50 + 300) * 12 * 60) + 5000
  const charges = [
    { name: 'money to be received that I put into the house, deposit and monthly mortgage, up till july 31 2024', price: moneyPutIn },

    { name: '1500 sq foot stone patio ', price: 50000 },
    { name: 'arborist work in the forest', price: 7000 },
    { name: 'insulation installation, upstairs and garage', price: 5500 },
    { name: 'yearly furnace and ac maintenance', price: 1800 },
    { name: 'window replacement, front foyer', price: 2500 },
    { name: 'landscaping', price: 5500 },
    { name: 'shutter removal', price: 850 },
    { name: 'fridge removal and installation of new fridge, w/ pu', price: 500 },
    { name: 'trim installation, patio door and others', price: 1800 },
    { name: 'toilet replacement', price: 950 },
    { name: 'wallpaper removal and painting', price: 2500 },
    { name: 'communications tower for internet', price: 3500 },
    { name: 'stump removal', price: 7500 },
    { name: 'maintenance of all engines and equipment in and around the house', price: 8000 },
    { name: 'driveway repair', price: 1500 },
    { name: 'firewood', price: 800 },
    { name: 'snow removal', price: 11500 },
    { name: 'driving services to your hometown', price: 0 },
    { name: 'test', price: 0 },
    { name: 'roof and gutter repair', price: 0 },
    { name: 'plumbing', price: 0 },
    { name: 'pest removal', price: 0 },
    { name: 'top to bottom cleaning of the house including the cleaning and take down of everything in the garage, after you moved out (you left a disaster after the movers had come through)', price: 800 },
    { name: 'furniture mover, buying all the items she did online and after we moved in to fill the home', price: 0 },
    { name: 'the completion of all the work to buy the house (since its not my house, I would have been an agent acting on your behalf, labor hours and repayment of all the services I paid for to purchase the home)', price: 0 },
  ]
  const totalSum = charges.reduce((acc, charge) => acc + charge.price, 0);
  const scenario2 = totalSum + (replaceItems / 2) + findJob + wages + courtFiling + notary + refinanceLeftOver + rbcChecking +
    rbcLoc +
    scotiaVisa +
    car +
    other +
    windows +
    scotiaLoc +
    scotiaCheck
  return (
    <div>
      <Card className='max-h-[800px] h-[800px] overflow-y-scroll w-[600px] mx-auto'>
        <CardContent className="space-y-2">
          <div className="font-semibold mb-3">Scenario 1: 50 / 50 split -- Scenario 2: its her house and you charge her for work done</div>
          <li className="flex items-center justify-between">
            <span className="text-[#8a8a93]">
              Scenario 1
            </span>
            <span>
              <p className='text-right'>
                ${total} without rest of wages during abuse ${total - missed2022 - missed2023}
              </p>
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-[#8a8a93]">
              Scenario 2
            </span>
            <span>
              <p className='text-right'>
                ${scenario2}
              </p>
            </span>
          </li>
          <hr className=" text-muted-foreground w-[95%] mx-auto" />
          <div className="font-semibold mt-5">Need to charge the applicant money due to the constant threats of charging me money, and not accepting offers.</div>
          <div className="font-semibold mt-3 text-muted-foreground "> rule 18 of the family law rules, no reasonable offer given by applicant. all court fees will be paid by the opposing party, get a lawyer asap as you no longer have to pay for one</div>
          <hr className=" text-muted-foreground w-[95%] mx-auto" />
          <div className="font-semibold mt-5">Additional notes on oliver</div>
          <div className="font-semibold mt-3 text-muted-foreground ">bringing up natashias logic/reasoning regarding items taken from home, she states that if she bought it, no matter whos money it was, it belongs to her and she will be taking it from the separation. With that being said, i bought oliver with my own money from my own account, just from natashias reasoning oliver needs to be returned to me. The rings are no where to be found, but with natashias history of theft im assumming she took them. I do not have video evidence of this but they cannot be found as i have tried to look for them on numerous occasions. if they turn up i can return them to her, with saying that i bought them with my own money from my own account before she started to controll the finances with her reasoning i should get them back anyways.</div>
          <hr className=" text-muted-foreground w-[95%] mx-auto" />
          <ul className="grid gap-3">
            <div className="font-semibold mb-3">If its her house, she needs to be charged for all work done and material costs</div>
            {charges.map((item, index) => (
              <li className="flex items-center justify-between">
                <span className="text-[#8a8a93]">
                  {item.name}
                </span>
                <span>
                  <p className='text-right'>
                    ${item.price}
                  </p>
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between">
              <span className="text-foreground">
                Total
              </span>
              <span>
                <p className='text-right'>
                  ${totalSum}
                </p>
              </span>
            </li>

            <hr className=" text-muted-foreground w-[95%] mx-auto" />

            <div className="font-semibold mb-3">  I was supposed to get money on refinance, the balance of what natashia did need after the 40k,    have natashia provide evidence anything that you did not get, you get now </div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                Filing for court
              </span>
              <span>
                <p className='text-right'>
                  ${courtFiling}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                Notary fees
              </span>
              <span>
                <p className='text-right'>
                  ${notary}
                </p>
              </span>
            </li>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />

            <div className="font-semibold mb-3"> I paid half her debt less than a year ago,  natashia now needs to step up and do her part for my debt,  DO A CREDIT CHECK TO SEE WHAT ELSE THERE IS </div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                At this time
              </span>
              <span>
                <p className='text-right'>
                  ${refinanceLeftOver}
                </p>
              </span>
            </li>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3">  purposly making my accounts go into arrears</div>

            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                rbc checking
              </span>
              <span>
                <p className='text-right'>
                  ${rbcChecking}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                rbc Loc
              </span>
              <span>
                <p className='text-right'>
                  ${rbcLoc}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                car
              </span>
              <span>
                <p className='text-right'>
                  ${car}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                windows
              </span>
              <span>
                <p className='text-right'>
                  ${windows}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                scotia loc
              </span>
              <span>
                <p className='text-right'>
                  ${scotiaLoc}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                scotia chequeing
              </span>
              <span>
                <p className='text-right'>
                  ${scotiaCheck}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                scotia visa
              </span>
              <span>
                <p className='text-right'>
                  ${scotiaVisa}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                other
              </span>
              <span>
                <p className='text-right'>
                  ${other}
                </p>
              </span>
            </li>

            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3"> cost to repair damaged credit, once car and windows goes to collections at the end of june this number will rise</div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                windows
              </span>
              <span>
                <p className='text-right'>
                  $
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                car
              </span>
              <span>
                <p className='text-right'>
                  $
                </p>
              </span>
            </li>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />

            <div className="font-semibold mb-3">items taken from home</div>

            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                might be more, but...
              </span>
              <span>
                <p className='text-right'>
                  ${replaceItems}
                </p>
              </span>
            </li>

            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3">    restitution of wages, based of 94k a year, 1807 a week + 8 weeks </div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                only fair
              </span>
              <span>
                <p className='text-right'>
                  ${wages + findJob}
                </p>
              </span>
            </li>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3">Proceeds from house sale.</div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                House
              </span>
              <span>
                <p className='text-right'>
                  ${houseSale}
                </p>
              </span>
            </li>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3">resitution of wages during abusive events</div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                2022
              </span>
              <span>
                <p className='text-right'>
                  ${missed2022}
                </p>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                2023
              </span>
              <span>
                <p className='text-right'>
                  ${missed2023}
                </p>
              </span>
            </li>


            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3">Anne you said we share the space which enables natashia to come and go as she pleases, fine we'll split the mortgage, so 600 a month</div>
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                to date
              </span>
              <span>
                <p className='text-right'>
                  -${rent}
                </p>
              </span>
            </li>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <div className="font-semibold mb-3">total</div>
            <hr className=" text-muted-foreground w-[95%] mx-auto" />
            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                to date
              </span>
              <span>
                <p className='text-right'>
                  ${total}
                </p>
              </span>
            </li>


            <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />

            <li className="flex items-center justify-between">
              <span className="text-[#8a8a93]">
                i should not have to pay rent, natashia and her counsel promised me that i would get a fair offer the first week and promised me it would be fair so much so they told me to start packing, since then i have sent natashia 6 offers,
                natashia sent 1, the second her lawywer had to talk her into it because it was so unfair. at any time she could had stop trying to lie to get the entire house and end this fairly, the length of time of this separtion falls entirelyt on natashia and her counsel. i should not have to pay natashia anything in regards about any matter pertaining to this case since shes the one lying about her false claims, shes the one dragging it out this long not me all these are her actions
              </span>
              <span>
                <p className='text-right'>
                </p>
              </span>
            </li>
            <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />

          </ul>

          <div className="font-semibold mt-5">To-Do</div>
          <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />
          <p>
            - next court data: july 2nd @ 8:45 am
          </p>
          <p>
            - 13 july next report to court
          </p>
          <div className="font-semibold mt-5">ORDERS REQUESTED IN MOTIONS</div>
          <hr className="my-4 text-muted-foreground w-[95%] mx-auto" />
          <p>
            This can be requested during case conference.
          </p>
          <p>
            REJECTED NEED TO REAPPLY - Request of information loan provider
          </p>
          <p>
            REJECTED NEED TO REAPPLY - Strike of pleading restraining order
          </p>
          <p>
            REJECTED NEED TO REAPPLY - Strike of pleading order of removal from premises
          </p>
          <p>
            REJECTED NEED TO REAPPLY - order to bring loan out of arrears
          </p>
          <p>
            REJECTED NEED TO REAPPLY - request of information pertaining to her support of claims
          </p>
          <p>
            REJECTED NEED TO REAPPLY - temp order for applicant to provide notice before entering domicile
          </p>
          <p>
            DONE AND SUBMITTED-- MEET WITH NOTARY THEN FILE -- file a motion on Monday to get Natashia to pay the arrears - need to inquire about car finance loan natashia still hasnt given the information maybe theres a special motion for that
          </p>
          <p>
            REFUSED -- request evidence -- All correspondence between Natashia and the finance company we refinanced our home with.
            Natashia denied counsel for me, without my knowing. There are other irregularities with the
            paperwork I have in regards to this. As I was apart of the refinance of our home just as much as
            natashia was I don’t expect any push back or refusal to comply.
          </p>
          <p>
            REFUSED -- request evidence -- Any and all correspondence in regards to refinancing our home with any financing provider that would
            have taken place in 2022 or 2023 as we started to look at refinancing in 2022. Text messages, dates and times
            of calls, emails, physical mail and so on. I should have access to this because the refinancing included us
            both, and with Natashia’s behaviour coming to light in regards to the decisions she was making for me at that
            time, that she should not have done. Natashia refused legal counsel on my behalf without my knowing, which
            was a huge mistake on her part.
          </p>
          <p>
            REFUSED -- request evidence -- All of Natashias finance documents, from when I found out about my medical condition till today's date. I
            should receive these without defiance because Natashia was in control of the finances since that event took
            place. She paid my debts, her debts, bills everything and because she is not not only affecting my credit
            negatively now, I want to make sure everything was done correctly. If denied I will bring this to court who will
            approve it. If anything is redacted, I will file a motion in regards to this request. To be clear, bank statements,
            credit card statements, everything that had to do with our finances.
          </p>
          <p>
            REFUSED -- request evidence -- When we refinanced the home last time, Natashia stated that I would be getting the remaining balance after her
            Loans, the ones she specifically told the bank with their amounts that I half paid for the moment they were put
            on the mortgage, were taken care of. I know my debts, never saw the amount that it should have after
            reviewing the documents. Natashia needs to provide all financial documents proving I was paid that amount.
            I was supposed that she set forth when she talked to the finance company. If you can’t prove it then,
            I will bring this information to the court.
          </p>

          <p>
            IN NEW MOTION - Order of action: I would ask the court to order Natashia to get all documents that she has submitted thus far to be sworn with a notary instead of just her lawyer, due to the amount of false statements made and continue this for any document she submits moving forward. I feel that because Natashia has obtained a lawyer she feels that she can get away with committing acts of perjury she wouldn’t otherwise try to commit. This would bring to light the truth of the matter without having to dig too deep into the evidence and waste everyone's time. This is not to much to ask because I’ve had to do this for everything I have submitted, if she does comply and submits the same paperwork, I have evidence to almost everything this she has stated to be false.
          </p>

          <p>
            IN PROGRESS - request evidence --   follow up with jean as he will also have stuff for u
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
