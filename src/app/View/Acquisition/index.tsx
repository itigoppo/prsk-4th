import { UseCalcReturn } from "@/app/View/calc"
import { FC } from "react"
import { AfterParty } from "./AfterParty"
import { Compensation } from "./Compensation"
import { EventBadge } from "./EventBadge"
import { EventRanking } from "./EventRanking"
import { FesBonus } from "./FesBonus"
import { HappinessBonus } from "./HappinessBonus"
import { LiveMission } from "./LiveMission"
import { Login } from "./Login"
import { PremiumGift } from "./PremiumGift"
import { StampMission } from "./StampMission"

type Props = UseCalcReturn

export const Acquisition: FC<Props> = (props) => {
  return (
    <>
      <div className="px-4 text-sm space-y-6">
        <div className="text-base text-slate-700 font-bold">
          獲得場所を選択する
        </div>

        <Compensation {...props} />

        <PremiumGift {...props} />
        <Login {...props} />
        <LiveMission {...props} />
        <FesBonus {...props} />
        <EventBadge {...props} times={1} />
        <EventRanking {...props} times={1} />
        <StampMission {...props} times={1} />

        <HappinessBonus {...props} />
        <EventBadge {...props} times={2} />
        <EventRanking {...props} times={2} />
        <StampMission {...props} times={2} />

        <AfterParty {...props} />
        <EventBadge {...props} times={3} />
        <EventRanking {...props} times={3} />
        <StampMission {...props} times={3} />
      </div>
    </>
  )
}
