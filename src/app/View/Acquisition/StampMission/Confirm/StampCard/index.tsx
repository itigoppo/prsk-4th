import { useFortuneFlowerContext } from "@/app/Context"
import {
  Stamp,
  stampGachiRegular,
  stampGachiUnlimited,
  stampIroiroRegular,
  stampIroiroUnlimited,
  stampKizunaCasual,
  stampKizunaRegular,
  stampLiveCasual,
  stampLiveRegular,
  stampLoginCasual,
  stampLoginRegular,
} from "@/app/View/constant"
import { Check, Stars } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import clsx from "clsx"
import { FC, useMemo } from "react"

type Props = {
  times: number
  type: "iroiro" | "gachi" | "live" | "kizuna" | "login"
}

export const StampCard: FC<Props> = ({ times, type }) => {
  const { state } = useFortuneFlowerContext()

  const stamp: Stamp | null = useMemo(() => {
    if (type === "iroiro") {
      let level = null
      switch (times) {
        case 1:
          level = state.acquisition.stamp.bloom.selectedStampIroiro
          break
        case 2:
          level = state.acquisition.stamp.connect.selectedStampIroiro
          break
        case 3:
          level = state.acquisition.stamp.cheer.selectedStampIroiro
          break
        default:
          break
      }

      switch (level) {
        case "whiteregular":
        case "blueregular":
        case "greenregular":
        case "redregular":
        case "orangeregular":
        case "purpleregular":
          return stampIroiroRegular
        case "whiteunlimited":
        case "blueunlimited":
        case "greenunlimited":
        case "redunlimited":
        case "orangeunlimited":
        case "purpleunlimited":
          return stampIroiroUnlimited
        default:
          break
      }
    }

    if (type === "gachi") {
      let level = null
      switch (times) {
        case 1:
          level = state.acquisition.stamp.bloom.selectedStampGachi
          break
        case 2:
          level = state.acquisition.stamp.connect.selectedStampGachi
          break
        case 3:
          level = state.acquisition.stamp.cheer.selectedStampGachi
          break
        default:
          break
      }

      switch (level) {
        case "whiteregular":
        case "blueregular":
        case "greenregular":
        case "redregular":
        case "orangeregular":
        case "purpleregular":
          return stampGachiRegular
        case "whiteunlimited":
        case "blueunlimited":
        case "greenunlimited":
        case "redunlimited":
        case "orangeunlimited":
        case "purpleunlimited":
          return stampGachiUnlimited
        default:
          break
      }
    }

    if (type === "live") {
      let level = null
      switch (times) {
        case 1:
          level = state.acquisition.stamp.bloom.selectedStampLive
          break
        case 2:
          level = state.acquisition.stamp.connect.selectedStampLive
          break
        case 3:
          level = state.acquisition.stamp.cheer.selectedStampLive
          break
        default:
          break
      }

      switch (level) {
        case "whitecasual":
        case "bluecasual":
        case "greencasual":
        case "redcasual":
        case "orangecasual":
        case "purplecasual":
          return stampLiveCasual
        case "whiteregular":
        case "blueregular":
        case "greenregular":
        case "redregular":
        case "orangeregular":
        case "purpleregular":
          return stampLiveRegular
        default:
          break
      }
    }

    if (type === "kizuna") {
      let level = null
      switch (times) {
        case 1:
          level = state.acquisition.stamp.bloom.selectedStampKizuna
          break
        case 2:
          level = state.acquisition.stamp.connect.selectedStampKizuna
          break
        case 3:
          level = state.acquisition.stamp.cheer.selectedStampKizuna
          break
        default:
          break
      }

      switch (level) {
        case "whitecasual":
        case "bluecasual":
        case "greencasual":
        case "redcasual":
        case "orangecasual":
        case "purplecasual":
          return stampKizunaCasual
        case "whiteregular":
        case "blueregular":
        case "greenregular":
        case "redregular":
        case "orangeregular":
        case "purpleregular":
          return stampKizunaRegular
        default:
          break
      }
    }

    if (type === "login") {
      let level = null
      switch (times) {
        case 1:
          level = state.acquisition.stamp.bloom.selectedStampLogin
          break
        case 2:
          level = state.acquisition.stamp.connect.selectedStampLogin
          break
        case 3:
          level = state.acquisition.stamp.cheer.selectedStampLogin
          break
        default:
          break
      }

      switch (level) {
        case "whitecasual":
        case "bluecasual":
        case "greencasual":
        case "redcasual":
        case "orangecasual":
        case "purplecasual":
          return stampLoginCasual
        case "whiteregular":
        case "blueregular":
        case "greenregular":
        case "redregular":
        case "orangeregular":
        case "purpleregular":
          return stampLoginRegular
        default:
          break
      }
    }

    return null
  }, [state, times, type])

  const label = useMemo(() => {
    if (times === 1 && (type === "iroiro" || type === "gachi")) {
      let level = null
      let typeLabel = null
      switch (type) {
        case "iroiro":
          typeLabel = "イロイロ"
          level = state.acquisition.stamp.bloom.selectedStampIroiro
          break
        case "gachi":
          typeLabel = "ガチ"
          level = state.acquisition.stamp.bloom.selectedStampGachi
          break
      }

      switch (level) {
        case "whiteregular":
          return `ホワイト ${typeLabel}カード レギュラー`
        case "whiteunlimited":
          return `ホワイト ${typeLabel}カード アンリミテッド`
        case "blueregular":
          return `ブルー ${typeLabel}カード レギュラー`
        case "blueunlimited":
          return `ブルー ${typeLabel}カード アンリミテッド`
        default:
          break
      }
    }
    if (
      times === 1 &&
      (type === "live" || type === "kizuna" || type === "login")
    ) {
      let level = null
      let typeLabel = null
      switch (type) {
        case "live":
          typeLabel = "ライブ"
          level = state.acquisition.stamp.bloom.selectedStampLive
          break
        case "kizuna":
          typeLabel = "キズナ"
          level = state.acquisition.stamp.bloom.selectedStampKizuna
          break
        case "login":
          typeLabel = "ログイン"
          level = state.acquisition.stamp.bloom.selectedStampLogin
          break
      }

      switch (level) {
        case "whitecasual":
          return `ホワイト ${typeLabel}カード カジュアル`
        case "whiteregular":
          return `ホワイト ${typeLabel}カード レギュラー`
        case "bluecasual":
          return `ブルー ${typeLabel}カード カジュアル`
        case "blueregular":
          return `ブルー ${typeLabel}カード レギュラー`
        default:
          break
      }
    }

    if (times === 2 && (type === "iroiro" || type === "gachi")) {
      let level = null
      let typeLabel = null
      switch (type) {
        case "iroiro":
          typeLabel = "イロイロ"
          level = state.acquisition.stamp.connect.selectedStampIroiro
          break
        case "gachi":
          typeLabel = "ガチ"
          level = state.acquisition.stamp.connect.selectedStampGachi
          break
      }

      switch (level) {
        case "greenregular":
          return `グリーン ${typeLabel}カード レギュラー`
        case "greenunlimited":
          return `グリーン ${typeLabel}カード アンリミテッド`
        case "redregular":
          return `レッド ${typeLabel}カード レギュラー`
        case "redunlimited":
          return `レッド ${typeLabel}カード アンリミテッド`
        default:
          break
      }
    }
    if (
      times === 2 &&
      (type === "live" || type === "kizuna" || type === "login")
    ) {
      let level = null
      let typeLabel = null
      switch (type) {
        case "live":
          typeLabel = "ライブ"
          level = state.acquisition.stamp.connect.selectedStampLive
          break
        case "kizuna":
          typeLabel = "キズナ"
          level = state.acquisition.stamp.connect.selectedStampKizuna
          break
        case "login":
          typeLabel = "ログイン"
          level = state.acquisition.stamp.connect.selectedStampLogin
          break
      }

      switch (level) {
        case "greencasual":
          return `グリーン ${typeLabel}カード カジュアル`
        case "greenregular":
          return `グリーン ${typeLabel}カード レギュラー`
        case "redcasual":
          return `レッド ${typeLabel}カード カジュアル`
        case "redregular":
          return `レッド ${typeLabel}カード レギュラー`
        default:
          break
      }
    }

    if (times === 3 && (type === "iroiro" || type === "gachi")) {
      let level = null
      let typeLabel = null
      switch (type) {
        case "iroiro":
          typeLabel = "イロイロ"
          level = state.acquisition.stamp.cheer.selectedStampIroiro
          break
        case "gachi":
          typeLabel = "ガチ"
          level = state.acquisition.stamp.cheer.selectedStampGachi
          break
      }

      switch (level) {
        case "orangeregular":
          return `オレンジ ${typeLabel}カード レギュラー`
        case "orangeunlimited":
          return `オレンジ ${typeLabel}カード アンリミテッド`
        case "purpleregular":
          return `パープル ${typeLabel}カード レギュラー`
        case "purpleunlimited":
          return `パープル ${typeLabel}カード アンリミテッド`
        default:
          break
      }
    }
    if (
      times === 3 &&
      (type === "live" || type === "kizuna" || type === "login")
    ) {
      let level = null
      let typeLabel = null
      switch (type) {
        case "live":
          typeLabel = "ライブ"
          level = state.acquisition.stamp.cheer.selectedStampLive
          break
        case "kizuna":
          typeLabel = "キズナ"
          level = state.acquisition.stamp.cheer.selectedStampKizuna
          break
        case "login":
          typeLabel = "ログイン"
          level = state.acquisition.stamp.cheer.selectedStampLogin
          break
      }

      switch (level) {
        case "orangecasual":
          return `オレンジ ${typeLabel}カード カジュアル`
        case "orangeregular":
          return `オレンジ ${typeLabel}カード レギュラー`
        case "purplecasual":
          return `パープル ${typeLabel}カード カジュアル`
        case "purpleregular":
          return `パープル ${typeLabel}カード レギュラー`
        default:
          break
      }
    }

    return null
  }, [times, type, state])

  const isSelected = useMemo(() => {
    if (type === "iroiro") {
      switch (times) {
        case 1:
          return !!state.acquisition.stamp.bloom.selectedStampIroiro
        case 2:
          return !!state.acquisition.stamp.connect.selectedStampIroiro
        case 3:
          return !!state.acquisition.stamp.cheer.selectedStampIroiro
      }
    }
    if (type === "gachi") {
      switch (times) {
        case 1:
          return !!state.acquisition.stamp.bloom.selectedStampGachi
        case 2:
          return !!state.acquisition.stamp.connect.selectedStampGachi
        case 3:
          return !!state.acquisition.stamp.cheer.selectedStampGachi
      }
    }
    if (type === "live") {
      switch (times) {
        case 1:
          return !!state.acquisition.stamp.bloom.selectedStampLive
        case 2:
          return !!state.acquisition.stamp.connect.selectedStampLive
        case 3:
          return !!state.acquisition.stamp.cheer.selectedStampLive
      }
    }
    if (type === "kizuna") {
      switch (times) {
        case 1:
          return !!state.acquisition.stamp.bloom.selectedStampKizuna
        case 2:
          return !!state.acquisition.stamp.connect.selectedStampKizuna
        case 3:
          return !!state.acquisition.stamp.cheer.selectedStampKizuna
      }
    }
    if (type === "login") {
      switch (times) {
        case 1:
          return !!state.acquisition.stamp.bloom.selectedStampLogin
        case 2:
          return !!state.acquisition.stamp.connect.selectedStampLogin
        case 3:
          return !!state.acquisition.stamp.cheer.selectedStampLogin
      }
    }

    return false
  }, [times, type, state])

  const currentSelected: number[] = useMemo(() => {
    if (times === 1) {
      switch (type) {
        case "iroiro":
          return state.acquisition.stamp.bloom.stampIroiro
        case "gachi":
          return state.acquisition.stamp.bloom.stampGachi
        case "live":
          return state.acquisition.stamp.bloom.stampLive
        case "kizuna":
          return state.acquisition.stamp.bloom.stampKizuna
        case "login":
          return state.acquisition.stamp.bloom.stampLogin
        default:
          break
      }
    }
    if (times === 2) {
      switch (type) {
        case "iroiro":
          return state.acquisition.stamp.connect.stampIroiro
        case "gachi":
          return state.acquisition.stamp.connect.stampGachi
        case "live":
          return state.acquisition.stamp.connect.stampLive
        case "kizuna":
          return state.acquisition.stamp.connect.stampKizuna
        case "login":
          return state.acquisition.stamp.connect.stampLogin
        default:
          break
      }
    }
    if (times === 3) {
      switch (type) {
        case "iroiro":
          return state.acquisition.stamp.cheer.stampIroiro
        case "gachi":
          return state.acquisition.stamp.cheer.stampGachi
        case "live":
          return state.acquisition.stamp.cheer.stampLive
        case "kizuna":
          return state.acquisition.stamp.cheer.stampKizuna
        case "login":
          return state.acquisition.stamp.cheer.stampLogin
        default:
          break
      }
    }

    return []
  }, [times, state, type])

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
                (type === "login" || type === "kizuna") &&
                  "grid grid-cols-2 gap-2",
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
