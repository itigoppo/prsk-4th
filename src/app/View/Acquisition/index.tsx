import { ButtonSurface } from "@/app/components/atoms/ButtonSurface"
import { Expander } from "@/app/components/atoms/Expander"
import { Add } from "@mui/icons-material"
import { FC, useState } from "react"
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

export const Acquisition: FC = () => {
  const [isOpenCompensation, setIsOpenCompensation] = useState<boolean>(false)
  const [isOpenPremiumGift, setIsOpenPremiumGift] = useState<boolean>(false)
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false)
  const [isOpenLiveMission, setIsOpenLiveMission] = useState<boolean>(false)

  const [isOpenFesBonus, setIsOpenFesBonus] = useState<boolean>(false)
  const [isOpenEventBadgeBloom, setIsOpenEventBadgeBloom] =
    useState<boolean>(false)
  const [isOpenEventRankingBloom, setIsOpenEventRankingBloom] =
    useState<boolean>(false)
  const [isOpenStampMissionBloom, setIsOpenStampMissionBloom] =
    useState<boolean>(false)

  const [isOpenHappinessBonus, setIsOpenHappinessBonus] =
    useState<boolean>(false)
  const [isOpenEventBadgeConnect, setIsOpenEventBadgeConnect] =
    useState<boolean>(false)
  const [isOpenEventRankingConnect, setIsOpenEventRankingConnect] =
    useState<boolean>(false)
  const [isOpenStampMissionConnect, setIsOpenStampMissionConnect] =
    useState<boolean>(false)

  const [isOpenAfterParty, setIsOpenAfterParty] = useState<boolean>(false)
  const [isOpenEventBadgeCheer, setIsOpenEventBadgeCheer] =
    useState<boolean>(false)
  const [isOpenEventRankingCheer, setIsOpenEventRankingCheer] =
    useState<boolean>(false)
  const [isOpenStampMissionCheer, setIsOpenStampMissionCheer] =
    useState<boolean>(false)

  return (
    <>
      <div className="px-4 text-sm">
        <div className="border-b-2 border-slate-700 bg-slate-100 p-4 text-base font-bold text-slate-700">
          獲得場所を選択する
        </div>

        <Expander
          toggleButtonText="全期間 (9/30〜10/31)"
          className="bg-emerald-50"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <ButtonSurface
              onClick={() => {
                setIsOpenCompensation((state) => !state)
              }}
              startIcon={<Add />}
            >
              補填
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
                setIsOpenLogin((state) => !state)
              }}
              startIcon={<Add />}
            >
              ログインキャンペーン
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenLiveMission((state) => !state)
              }}
              startIcon={<Add />}
            >
              ライブミッション
            </ButtonSurface>
          </div>

          <Compensation
            isOpen={isOpenCompensation}
            setIsOpen={setIsOpenCompensation}
          />
          <PremiumGift
            isOpen={isOpenPremiumGift}
            setIsOpen={setIsOpenPremiumGift}
          />
          <Login isOpen={isOpenLogin} setIsOpen={setIsOpenLogin} />
          <LiveMission
            isOpen={isOpenLiveMission}
            setIsOpen={setIsOpenLiveMission}
          />
        </Expander>

        <Expander
          toggleButtonText={
            <>
              BLOOM (9/30〜<s>10/11</s>10/12)
            </>
          }
          className="bg-gradient-to-r from-white to-sky-300"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
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
                setIsOpenEventBadgeBloom((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベント交換所
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventRankingBloom((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベントランキング
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenStampMissionBloom((state) => !state)
              }}
              startIcon={<Add />}
            >
              スタンプミッション
            </ButtonSurface>
          </div>

          <FesBonus isOpen={isOpenFesBonus} setIsOpen={setIsOpenFesBonus} />
          <EventBadge
            isOpen={isOpenEventBadgeBloom}
            setIsOpen={setIsOpenEventBadgeBloom}
            times={1}
          />
          <EventRanking
            isOpen={isOpenEventRankingBloom}
            setIsOpen={setIsOpenEventRankingBloom}
            times={1}
          />
          <StampMission
            isOpen={isOpenStampMissionBloom}
            setIsOpen={setIsOpenStampMissionBloom}
            times={1}
          />
        </Expander>

        <Expander
          toggleButtonText={
            <>
              CONNECT (<s>10/11</s>10/12)〜10/21
            </>
          }
          className="bg-gradient-to-r from-green-300 to-red-400"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <ButtonSurface
              onClick={() => {
                setIsOpenHappinessBonus((state) => !state)
              }}
              startIcon={<Add />}
            >
              ハピネスガチャおまけ
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventBadgeConnect((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベント交換所
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventRankingConnect((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベントランキング
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenStampMissionConnect((state) => !state)
              }}
              startIcon={<Add />}
            >
              スタンプミッション
            </ButtonSurface>
          </div>

          <HappinessBonus
            isOpen={isOpenHappinessBonus}
            setIsOpen={setIsOpenHappinessBonus}
          />
          <EventBadge
            isOpen={isOpenEventBadgeConnect}
            setIsOpen={setIsOpenEventBadgeConnect}
            times={2}
          />
          <EventRanking
            isOpen={isOpenEventRankingConnect}
            setIsOpen={setIsOpenEventRankingConnect}
            times={2}
          />
          <StampMission
            isOpen={isOpenStampMissionConnect}
            setIsOpen={setIsOpenStampMissionConnect}
            times={2}
          />
        </Expander>

        <Expander
          toggleButtonText={<>CHEER (10/21-10/31)</>}
          className="bg-gradient-to-r from-orange-300 to-purple-300"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <ButtonSurface
              onClick={() => {
                setIsOpenAfterParty((state) => !state)
              }}
              startIcon={<Add />}
            >
              後夜祭ガチャ
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventBadgeCheer((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベント交換所
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenEventRankingCheer((state) => !state)
              }}
              startIcon={<Add />}
            >
              イベントランキング
            </ButtonSurface>

            <ButtonSurface
              onClick={() => {
                setIsOpenStampMissionCheer((state) => !state)
              }}
              startIcon={<Add />}
            >
              スタンプミッション
            </ButtonSurface>
          </div>

          <AfterParty
            isOpen={isOpenAfterParty}
            setIsOpen={setIsOpenAfterParty}
          />
          <EventBadge
            isOpen={isOpenEventBadgeCheer}
            setIsOpen={setIsOpenEventBadgeCheer}
            times={3}
          />
          <EventRanking
            isOpen={isOpenEventRankingCheer}
            setIsOpen={setIsOpenEventRankingCheer}
            times={3}
          />
          <StampMission
            isOpen={isOpenStampMissionCheer}
            setIsOpen={setIsOpenStampMissionCheer}
            times={3}
          />
        </Expander>
      </div>
    </>
  )
}
