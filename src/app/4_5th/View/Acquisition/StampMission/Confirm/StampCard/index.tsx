import { useWorldBloomContext } from "@/app/4_5th/Context"
import {
  Stamp,
  stampEventCasual,
  stampEventRegular,
  stampEventUnlimited,
  stampLiveBonusCasual,
  stampLiveBonusRegular,
  stampLiveBonusUnlimited,
  stampLiveCasual,
  stampLiveRegular,
  stampLiveUnlimited,
  stampMoneyDiamond,
  stampMoneyGold,
  stampMoneyStandard,
  stampMusicCasual,
  stampMusicRegular,
  stampMusicUnlimited,
  StampType,
} from "@/app/4_5th/View/constant"
import { Check, Stars } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import clsx from "clsx"
import { FC, useMemo } from "react"

type Props = {
  type: StampType
}

export const StampCard: FC<Props> = ({ type }) => {
  const { state } = useWorldBloomContext()

  const stamp: Stamp | null = useMemo(() => {
    const stampMapping = {
      liveBonus: {
        casual: stampLiveBonusCasual,
        regular: stampLiveBonusRegular,
        unlimited: stampLiveBonusUnlimited,
      },
      music: {
        casual: stampMusicCasual,
        regular: stampMusicRegular,
        unlimited: stampMusicUnlimited,
      },
      live: {
        casual: stampLiveCasual,
        regular: stampLiveRegular,
        unlimited: stampLiveUnlimited,
      },
      event: {
        casual: stampEventCasual,
        regular: stampEventRegular,
        unlimited: stampEventUnlimited,
      },
      money: {
        standard: stampMoneyStandard,
        gold: stampMoneyGold,
        diamond: stampMoneyDiamond,
      },
    }
    const level =
      type === "liveBonus"
        ? state.acquisition.stamp.selectedStampLiveBonus
        : type === "music"
          ? state.acquisition.stamp.selectedStampMusic
          : type === "live"
            ? state.acquisition.stamp.selectedStampLive
            : type === "event"
              ? state.acquisition.stamp.selectedStampEvent
              : type === "money"
                ? state.acquisition.stamp.selectedStampMoney
                : null

    return level && type in stampMapping
      ? (stampMapping[type] as Record<string, Stamp>)[level] || null
      : null
  }, [state, type])

  const label = useMemo(() => {
    const typeMapping: {
      [key: string]: { label: string; level: string | null }
    } = {
      liveBonus: {
        label: "ライブボーナス",
        level: state.acquisition.stamp.selectedStampLiveBonus,
      },
      music: {
        label: "楽曲",
        level: state.acquisition.stamp.selectedStampMusic,
      },
      live: {
        label: "ライブ",
        level: state.acquisition.stamp.selectedStampLive,
      },
      event: {
        label: "イベントP",
        level: state.acquisition.stamp.selectedStampEvent,
      },
      money: {
        label: "ガチャ/ショップ",
        level: state.acquisition.stamp.selectedStampMoney,
      },
    }
    const typeInfo = typeMapping[type]
    if (typeInfo) {
      const { label: typeLabel, level } = typeInfo

      if (level) {
        const levelLabels: { [key: string]: string } = {
          casual: `カジュアル${typeLabel}カード`,
          regular: `レギュラー${typeLabel}カード`,
          unlimited: `アンリミテッド${typeLabel}カード`,
          standard: `スタンダード${typeLabel}カード`,
          gold: `ゴールド${typeLabel}カード`,
          diamond: `ダイヤモンド${typeLabel}カード`,
        }

        return levelLabels[level] || null
      }
    }

    return null
  }, [type, state])

  const isSelected = useMemo(() => {
    if (type === "liveBonus") {
      return !!state.acquisition.stamp.selectedStampLiveBonus
    }
    if (type === "music") {
      return !!state.acquisition.stamp.selectedStampMusic
    }
    if (type === "live") {
      return !!state.acquisition.stamp.selectedStampLive
    }
    if (type === "event") {
      return !!state.acquisition.stamp.selectedStampEvent
    }
    if (type === "money") {
      return !!state.acquisition.stamp.selectedStampMoney
    }

    return false
  }, [type, state])

  const currentSelected: number[] = useMemo(() => {
    switch (type) {
      case "liveBonus":
        return state.acquisition.stamp.stampLiveBonus
      case "music":
        return state.acquisition.stamp.stampMusic
      case "live":
        return state.acquisition.stamp.stampLive
      case "event":
        return state.acquisition.stamp.stampEvent
      case "money":
        return state.acquisition.stamp.stampMoney
      default:
        break
    }

    return []
  }, [state, type])

  const selectedMissions = useMemo(() => {
    return stamp?.missions.filter((__val, index) =>
      currentSelected.includes(index),
    )
  }, [currentSelected, stamp?.missions])

  return (
    <>
      {isSelected && (
        <>
          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />
            {label}({selectedMissions?.length}/{stamp?.missions.length}達成)
          </Stack>

          {(!selectedMissions || selectedMissions.length === 0) && (
            <Alert severity="error">
              ミッション1つも達成してないことになってるYo!!!
            </Alert>
          )}

          {selectedMissions && (
            <div
              className={clsx(
                "pl-6",
                // (type === "login" || type === "kizuna") &&
                //   "grid grid-cols-2 gap-2",
              )}
            >
              {selectedMissions.map((mission, index) => (
                <div key={index}>
                  <Stack alignItems="center" direction="row" gap={1}>
                    <Check className="text-lime-500" />
                    <div>{mission.substitute ?? mission.mission}</div>
                  </Stack>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
