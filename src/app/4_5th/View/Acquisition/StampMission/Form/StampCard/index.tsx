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
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import clsx from "clsx"
import { FC, useEffect, useMemo, useState } from "react"

type Props = {
  type: StampType
}

export const StampCard: FC<Props> = ({ type }) => {
  const { state, dispatch } = useWorldBloomContext()

  const [isComplete, setIsComplete] = useState<boolean>(false)

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

  const currentSelected: number[] = useMemo(() => {
    const typeMapping: { [key: string]: number[] } = {
      liveBonus: state.acquisition.stamp.stampLiveBonus,
      music: state.acquisition.stamp.stampMusic,
      live: state.acquisition.stamp.stampLive,
      event: state.acquisition.stamp.stampEvent,
      money: state.acquisition.stamp.stampMoney,
    }

    return typeMapping[type] || []
  }, [state, type])

  useEffect(() => {
    const checked = stamp?.missions.filter((__val, index) =>
      currentSelected.includes(index),
    )
    setIsComplete(checked?.length === stamp?.missions.length)
  }, [currentSelected, stamp?.missions])

  const onClickComplete = () => {
    if (!stamp) {
      return false
    }

    setIsComplete((state) => !state)

    const stampTypeMapping = {
      liveBonus: dispatch.acquisition.stamp.setStampLiveBonus,
      music: dispatch.acquisition.stamp.setStampMusic,
      live: dispatch.acquisition.stamp.setStampLive,
      event: dispatch.acquisition.stamp.setStampEvent,
      money: dispatch.acquisition.stamp.setStampMoney,
    }

    const setStamp = stampTypeMapping[type]
    if (setStamp) {
      if (isComplete) {
        setStamp([])
      } else {
        setStamp(stamp.missions.map((__val, index) => index))
      }
    }
  }

  const onClick = (index: number) => {
    if (!stamp) {
      return false
    }

    const updateSelected = (newSelected: number[]) => {
      const uniqueIndexs = [...new Set(newSelected)]
      const setStamp =
        type === "liveBonus"
          ? dispatch.acquisition.stamp.setStampLiveBonus
          : type === "music"
            ? dispatch.acquisition.stamp.setStampMusic
            : type === "live"
              ? dispatch.acquisition.stamp.setStampLive
              : type === "event"
                ? dispatch.acquisition.stamp.setStampEvent
                : type === "money"
                  ? dispatch.acquisition.stamp.setStampMoney
                  : null

      if (setStamp) {
        setStamp(uniqueIndexs)
      }

      const checked = stamp.missions.filter((__val, idx) =>
        uniqueIndexs.includes(idx),
      )
      setIsComplete(checked.length === stamp.missions.length)
    }

    if (currentSelected.includes(index)) {
      updateSelected(currentSelected.filter((item) => item !== index))
    } else {
      updateSelected(currentSelected.concat([index]))
    }
  }

  return (
    <>
      {stamp && (
        <div className="space-y-2">
          <div className="border-l-8 border-red-300 pl-2 font-bold">
            {label}のミッション
          </div>
          <Alert severity="info">達成したミッションを選択</Alert>

          <div
            onClick={() => {
              onClickComplete()
            }}
            className="hover:cursor-pointer"
          >
            <Stack alignItems="center" direction="row" gap={1}>
              {isComplete ? (
                <CheckBoxOutlined className="text-teal-600" />
              ) : (
                <CheckBoxOutlineBlank />
              )}
              <div className="font-bold text-pink-600">コンプリート</div>
              <RequiredBadge
                required={{
                  wild: stamp.complete,
                  white: 0,
                  blue: 0,
                  green: 0,
                  red: 0,
                  orange: 0,
                  purple: 0,
                }}
              />
            </Stack>
          </div>

          <div
            className={clsx(
              // (type === "login" || type === "kizuna") &&
              //   "grid grid-cols-2 gap-2",
              "border-t border-gray-500 pt-3",
            )}
          >
            {stamp.missions.map((mission, index) => (
              <div
                key={index}
                onClick={() => {
                  onClick(index)
                }}
                className="hover:cursor-pointer"
              >
                <Stack alignItems="center" direction="row" gap={1}>
                  {currentSelected.includes(index) ? (
                    <CheckBoxOutlined className="text-teal-600" />
                  ) : (
                    <CheckBoxOutlineBlank />
                  )}
                  <div className="mt-1">
                    {mission.substitute ?? mission.mission}
                  </div>
                </Stack>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
