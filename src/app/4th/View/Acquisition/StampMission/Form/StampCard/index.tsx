import { useFortuneFlowerContext } from "@/app/4th/Context"
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
} from "@/app/4th/View/constant"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import clsx from "clsx"
import { FC, useEffect, useMemo, useState } from "react"

type Props = {
  times: number
  type: "iroiro" | "gachi" | "live" | "kizuna" | "login"
}

export const StampCard: FC<Props> = ({ times, type }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  const [isComplete, setIsComplete] = useState<boolean>(false)

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

  const color = useMemo(() => {
    if (times === 1 && type === "iroiro") {
      switch (state.acquisition.stamp.bloom.selectedStampIroiro) {
        case "whiteregular":
        case "whiteunlimited":
          return "white"
        case "blueregular":
        case "blueunlimited":
          return "blue"
        default:
          break
      }
    }

    if (times === 1 && type === "gachi") {
      switch (state.acquisition.stamp.bloom.selectedStampGachi) {
        case "whiteregular":
        case "whiteunlimited":
          return "white"
        case "blueregular":
        case "blueunlimited":
          return "blue"
        default:
          break
      }
    }

    if (times === 1 && type === "live") {
      switch (state.acquisition.stamp.bloom.selectedStampLive) {
        case "whitecasual":
        case "whiteregular":
          return "white"
        case "bluecasual":
        case "blueregular":
          return "blue"
        default:
          break
      }
    }

    if (times === 1 && type === "kizuna") {
      switch (state.acquisition.stamp.bloom.selectedStampKizuna) {
        case "whitecasual":
        case "whiteregular":
          return "white"
        case "bluecasual":
        case "blueregular":
          return "blue"
        default:
          break
      }
    }

    if (times === 1 && type === "login") {
      switch (state.acquisition.stamp.bloom.selectedStampLogin) {
        case "whitecasual":
        case "whiteregular":
          return "white"
        case "bluecasual":
        case "blueregular":
          return "blue"
        default:
          break
      }
    }

    if (times === 2 && type === "iroiro") {
      switch (state.acquisition.stamp.connect.selectedStampIroiro) {
        case "greenregular":
        case "greenunlimited":
          return "green"
        case "redregular":
        case "redunlimited":
          return "red"
        default:
          break
      }
    }

    if (times === 2 && type === "gachi") {
      switch (state.acquisition.stamp.connect.selectedStampGachi) {
        case "greenregular":
        case "greenunlimited":
          return "green"
        case "redregular":
        case "redunlimited":
          return "red"
        default:
          break
      }
    }

    if (times === 2 && type === "live") {
      switch (state.acquisition.stamp.connect.selectedStampLive) {
        case "greencasual":
        case "greenregular":
          return "green"
        case "redcasual":
        case "redregular":
          return "red"
        default:
          break
      }
    }

    if (times === 2 && type === "kizuna") {
      switch (state.acquisition.stamp.connect.selectedStampKizuna) {
        case "greencasual":
        case "greenregular":
          return "green"
        case "redcasual":
        case "redregular":
          return "red"
        default:
          break
      }
    }

    if (times === 2 && type === "login") {
      switch (state.acquisition.stamp.connect.selectedStampLogin) {
        case "greencasual":
        case "greenregular":
          return "green"
        case "redcasual":
        case "redregular":
          return "red"
        default:
          break
      }
    }

    if (times === 3 && type === "iroiro") {
      switch (state.acquisition.stamp.cheer.selectedStampIroiro) {
        case "orangeregular":
        case "orangeunlimited":
          return "orange"
        case "purpleregular":
        case "purpleunlimited":
          return "purple"
        default:
          break
      }
    }

    if (times === 3 && type === "gachi") {
      switch (state.acquisition.stamp.cheer.selectedStampGachi) {
        case "orangeregular":
        case "orangeunlimited":
          return "orange"
        case "purpleregular":
        case "purpleunlimited":
          return "purple"
        default:
          break
      }
    }

    if (times === 3 && type === "live") {
      switch (state.acquisition.stamp.cheer.selectedStampLive) {
        case "orangecasual":
        case "orangeregular":
          return "orange"
        case "purplecasual":
        case "purpleregular":
          return "purple"
        default:
          break
      }
    }

    if (times === 3 && type === "kizuna") {
      switch (state.acquisition.stamp.cheer.selectedStampKizuna) {
        case "orangecasual":
        case "orangeregular":
          return "orange"
        case "purplecasual":
        case "purpleregular":
          return "purple"
        default:
          break
      }
    }

    if (times === 3 && type === "login") {
      switch (state.acquisition.stamp.cheer.selectedStampLogin) {
        case "orangecasual":
        case "orangeregular":
          return "orange"
        case "purplecasual":
        case "purpleregular":
          return "purple"
        default:
          break
      }
    }

    return null
  }, [times, type, state])

  const completeRequired = useMemo(() => {
    if (!stamp) {
      return {
        white: 0,
        blue: 0,
        green: 0,
        red: 0,
        orange: 0,
        purple: 0,
      }
    }

    const count =
      stamp.missions.reduce(function (acc, obj) {
        return acc + obj.petals
      }, 0) + stamp.complete

    return {
      white: color === "white" ? count : 0,
      blue: color === "blue" ? count : 0,
      green: color === "green" ? count : 0,
      red: color === "red" ? count : 0,
      orange: color === "orange" ? count : 0,
      purple: color === "purple" ? count : 0,
    }
  }, [stamp, color])

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

    if (times === 1) {
      if (type === "iroiro") {
        if (isComplete) {
          dispatch.acquisition.stamp.bloom.setStampIroiro([])
        } else {
          dispatch.acquisition.stamp.bloom.setStampIroiro(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "gachi") {
        if (isComplete) {
          dispatch.acquisition.stamp.bloom.setStampGachi([])
        } else {
          dispatch.acquisition.stamp.bloom.setStampGachi(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "live") {
        if (isComplete) {
          dispatch.acquisition.stamp.bloom.setStampLive([])
        } else {
          dispatch.acquisition.stamp.bloom.setStampLive(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "kizuna") {
        if (isComplete) {
          dispatch.acquisition.stamp.bloom.setStampKizuna([])
        } else {
          dispatch.acquisition.stamp.bloom.setStampKizuna(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "login") {
        if (isComplete) {
          dispatch.acquisition.stamp.bloom.setStampLogin([])
        } else {
          dispatch.acquisition.stamp.bloom.setStampLogin(
            stamp.missions.map((__val, index) => index),
          )
        }
      }
    }

    if (times === 2) {
      if (type === "iroiro") {
        if (isComplete) {
          dispatch.acquisition.stamp.connect.setStampIroiro([])
        } else {
          dispatch.acquisition.stamp.connect.setStampIroiro(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "gachi") {
        if (isComplete) {
          dispatch.acquisition.stamp.connect.setStampGachi([])
        } else {
          dispatch.acquisition.stamp.connect.setStampGachi(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "live") {
        if (isComplete) {
          dispatch.acquisition.stamp.connect.setStampLive([])
        } else {
          dispatch.acquisition.stamp.connect.setStampLive(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "kizuna") {
        if (isComplete) {
          dispatch.acquisition.stamp.connect.setStampKizuna([])
        } else {
          dispatch.acquisition.stamp.connect.setStampKizuna(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "login") {
        if (isComplete) {
          dispatch.acquisition.stamp.connect.setStampLogin([])
        } else {
          dispatch.acquisition.stamp.connect.setStampLogin(
            stamp.missions.map((__val, index) => index),
          )
        }
      }
    }

    if (times === 3) {
      if (type === "iroiro") {
        if (isComplete) {
          dispatch.acquisition.stamp.cheer.setStampIroiro([])
        } else {
          dispatch.acquisition.stamp.cheer.setStampIroiro(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "gachi") {
        if (isComplete) {
          dispatch.acquisition.stamp.cheer.setStampGachi([])
        } else {
          dispatch.acquisition.stamp.cheer.setStampGachi(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "live") {
        if (isComplete) {
          dispatch.acquisition.stamp.cheer.setStampLive([])
        } else {
          dispatch.acquisition.stamp.cheer.setStampLive(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "kizuna") {
        if (isComplete) {
          dispatch.acquisition.stamp.cheer.setStampKizuna([])
        } else {
          dispatch.acquisition.stamp.cheer.setStampKizuna(
            stamp.missions.map((__val, index) => index),
          )
        }
      }

      if (type === "login") {
        if (isComplete) {
          dispatch.acquisition.stamp.cheer.setStampLogin([])
        } else {
          dispatch.acquisition.stamp.cheer.setStampLogin(
            stamp.missions.map((__val, index) => index),
          )
        }
      }
    }
  }

  const onClick = (index: number) => {
    if (!stamp) {
      return false
    }
    if (currentSelected.includes(index)) {
      if (times === 1) {
        if (type === "iroiro") {
          dispatch.acquisition.stamp.bloom.setStampIroiro(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "gachi") {
          dispatch.acquisition.stamp.bloom.setStampGachi(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "live") {
          dispatch.acquisition.stamp.bloom.setStampLive(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "kizuna") {
          dispatch.acquisition.stamp.bloom.setStampKizuna(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "login") {
          dispatch.acquisition.stamp.bloom.setStampLogin(
            currentSelected.filter((item) => item !== index),
          )
        }
      }

      if (times === 2) {
        if (type === "iroiro") {
          dispatch.acquisition.stamp.connect.setStampIroiro(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "gachi") {
          dispatch.acquisition.stamp.connect.setStampGachi(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "live") {
          dispatch.acquisition.stamp.connect.setStampLive(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "kizuna") {
          dispatch.acquisition.stamp.connect.setStampKizuna(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "login") {
          dispatch.acquisition.stamp.connect.setStampLogin(
            currentSelected.filter((item) => item !== index),
          )
        }
      }

      if (times === 3) {
        if (type === "iroiro") {
          dispatch.acquisition.stamp.cheer.setStampIroiro(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "gachi") {
          dispatch.acquisition.stamp.cheer.setStampGachi(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "live") {
          dispatch.acquisition.stamp.cheer.setStampLive(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "kizuna") {
          dispatch.acquisition.stamp.cheer.setStampKizuna(
            currentSelected.filter((item) => item !== index),
          )
        }
        if (type === "login") {
          dispatch.acquisition.stamp.cheer.setStampLogin(
            currentSelected.filter((item) => item !== index),
          )
        }
      }

      setIsComplete(false)
    } else {
      const uniqueIndexs = [...new Set(currentSelected.concat([index]))]
      if (times === 1) {
        if (type === "iroiro") {
          dispatch.acquisition.stamp.bloom.setStampIroiro(uniqueIndexs)
        }
        if (type === "gachi") {
          dispatch.acquisition.stamp.bloom.setStampGachi(uniqueIndexs)
        }
        if (type === "live") {
          dispatch.acquisition.stamp.bloom.setStampLive(uniqueIndexs)
        }
        if (type === "kizuna") {
          dispatch.acquisition.stamp.bloom.setStampKizuna(uniqueIndexs)
        }
        if (type === "login") {
          dispatch.acquisition.stamp.bloom.setStampLogin(uniqueIndexs)
        }
      }

      if (times === 2) {
        if (type === "iroiro") {
          dispatch.acquisition.stamp.connect.setStampIroiro(uniqueIndexs)
        }
        if (type === "gachi") {
          dispatch.acquisition.stamp.connect.setStampGachi(uniqueIndexs)
        }
        if (type === "live") {
          dispatch.acquisition.stamp.connect.setStampLive(uniqueIndexs)
        }
        if (type === "kizuna") {
          dispatch.acquisition.stamp.connect.setStampKizuna(uniqueIndexs)
        }
        if (type === "login") {
          dispatch.acquisition.stamp.connect.setStampLogin(uniqueIndexs)
        }
      }

      if (times === 3) {
        if (type === "iroiro") {
          dispatch.acquisition.stamp.cheer.setStampIroiro(uniqueIndexs)
        }
        if (type === "gachi") {
          dispatch.acquisition.stamp.cheer.setStampGachi(uniqueIndexs)
        }
        if (type === "live") {
          dispatch.acquisition.stamp.cheer.setStampLive(uniqueIndexs)
        }
        if (type === "kizuna") {
          dispatch.acquisition.stamp.cheer.setStampKizuna(uniqueIndexs)
        }
        if (type === "login") {
          dispatch.acquisition.stamp.cheer.setStampLogin(uniqueIndexs)
        }
      }

      const checked = stamp.missions.filter((__val, index) =>
        uniqueIndexs.includes(index),
      )
      setIsComplete(checked.length === stamp.missions.length)
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
              <RequiredBadge required={{ wild: 0, ...completeRequired }} />
            </Stack>
          </div>

          <div
            className={clsx(
              (type === "login" || type === "kizuna") &&
                "grid grid-cols-2 gap-2",
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
                  <div>{mission.substitute ?? mission.mission}</div>
                  <RequiredBadge
                    required={{
                      wild: 0,
                      white: color === "white" ? mission.petals : 0,
                      blue: color === "blue" ? mission.petals : 0,
                      green: color === "green" ? mission.petals : 0,
                      red: color === "red" ? mission.petals : 0,
                      orange: color === "orange" ? mission.petals : 0,
                      purple: color === "purple" ? mission.petals : 0,
                    }}
                  />
                </Stack>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
