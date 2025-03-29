import { ButtonSurface } from "@/app/components/atoms/ButtonSurface"
import { Expander } from "@/app/components/atoms/Expander"
import { Add } from "@mui/icons-material"
import { FC, useState } from "react"
import { EventBadge } from "./EventBadge"
import { EventRanking } from "./EventRanking"
import { FesBonus } from "./FesBonus"
import { HeartfeltGift } from "./HeartfeltGift"
import { Login } from "./Login"
import { PremiumGift } from "./PremiumGift"
import { StampMission } from "./StampMission"

export const Acquisition: FC = () => {
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false)
  const [isOpenStampMission, setIsOpenStampMission] = useState<boolean>(false)
  const [isOpenEventBadge, setIsOpenEventBadge] = useState<boolean>(false)
  const [isOpenEventRanking, setIsOpenEventRanking] = useState<boolean>(false)
  const [isOpenFesBonus, setIsOpenFesBonus] = useState<boolean>(false)
  const [isOpenPremiumGift, setIsOpenPremiumGift] = useState<boolean>(false)
  const [isOpenHeartfeltGift, setIsOpenHeartfeltGift] = useState<boolean>(false)

  return (
    <>
      <div className="px-4 text-sm">
        <div className="border-b-2 border-slate-700 bg-slate-100 p-4 text-base font-bold text-slate-700">
          獲得場所を選択する
        </div>

        <Expander
          toggleButtonText="全期間 (03/30〜04/08)"
          className="bg-emerald-50"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <ButtonSurface
              onClick={() => {
                setIsOpenLogin((state) => !state)
              }}
              startIcon={<Add />}
            >
              ログインキャンペーン
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenStampMission((state) => !state)
              }}
              startIcon={<Add />}
            >
              スタンプミッション
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventBadge((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベント交換所
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventRanking((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベントランキング
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenFesBonus((state) => !state)
              }}
              startIcon={<Add />}
            >
              ブルフェスガチャボーナス
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenPremiumGift((state) => !state)
              }}
              startIcon={<Add />}
            >
              プレミアムプレゼントガチャ
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenHeartfeltGift((state) => !state)
              }}
              startIcon={<Add />}
            >
              ハートフルギフトガチャ
            </ButtonSurface>
          </div>

          <Login isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} />
          <StampMission
            isOpen={isOpenStampMission}
            setIsOpen={setIsOpenStampMission}
          />
          <EventBadge
            isOpen={isOpenEventBadge}
            setIsOpen={setIsOpenEventBadge}
          />
          <EventRanking
            isOpen={isOpenEventRanking}
            setIsOpen={setIsOpenEventRanking}
          />
          <FesBonus isOpen={isOpenFesBonus} setIsOpen={setIsOpenFesBonus} />
          <PremiumGift
            isOpen={isOpenPremiumGift}
            setIsOpen={setIsOpenPremiumGift}
          />
          <HeartfeltGift
            isOpen={isOpenHeartfeltGift}
            setIsOpen={setIsOpenHeartfeltGift}
          />
        </Expander>
      </div>
    </>
  )
}
