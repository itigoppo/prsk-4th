"use client"

import { useRouter, useSearchParams } from "next/navigation"
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  eventRankRange,
  loginSchedule,
  stampEventCasual,
  stampEventRegular,
  stampEventUnlimited,
  StampLevel1,
  StampLevel2,
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
} from "../View/constant"

const WorldBloomContext = createContext<
  | {
      state: {
        result: {
          worldPieces: number
        }
        reward: {
          numberOfRewardGachaTicket: number
          numberOfRewardPureCrystal: number
          numberOfRewardSkill: number
          numberOfRewardDroplet: number
          numberOfRewardCrystal: number
          numberOfRewardDrink: number
          numberOfRewardVirtualCoin: number
          numberOfRewardPractice: number
          numberOfRewardMiracleGem: number
        }
        acquisition: {
          loginDays: string[]
          numberOfEventBadge: number
          leoneedEventRank: number
          fesBonus: number
          isPremiumGift: boolean
          isHeartfeltGift: boolean
          stamp: {
            selectedStampLiveBonus: StampLevel1
            stampLiveBonus: number[]
            selectedStampMusic: StampLevel1
            stampMusic: number[]
            selectedStampLive: StampLevel1
            stampLive: number[]
            selectedStampEvent: StampLevel1
            stampEvent: number[]
            selectedStampMoney: StampLevel2
            stampMoney: number[]
          }
        }
      }
      dispatch: {
        reward: {
          setNumberOfRewardGachaTicket: Dispatch<SetStateAction<number>>
          setNumberOfRewardPureCrystal: Dispatch<SetStateAction<number>>
          setNumberOfRewardSkill: Dispatch<SetStateAction<number>>
          setNumberOfRewardDroplet: Dispatch<SetStateAction<number>>
          setNumberOfRewardCrystal: Dispatch<SetStateAction<number>>
          setNumberOfRewardDrink: Dispatch<SetStateAction<number>>
          setNumberOfRewardVirtualCoin: Dispatch<SetStateAction<number>>
          setNumberOfRewardPractice: Dispatch<SetStateAction<number>>
          setNumberOfRewardMiracleGem: Dispatch<SetStateAction<number>>
        }
        acquisition: {
          setLoginDays: Dispatch<SetStateAction<string[]>>
          setNumberOfEventBadge: Dispatch<SetStateAction<number>>
          setLeoneedEventRank: Dispatch<SetStateAction<number>>
          setFesBonus: Dispatch<SetStateAction<number>>
          setIsPremiumGift: Dispatch<SetStateAction<boolean>>
          setIsHeartfeltGift: Dispatch<SetStateAction<boolean>>
          stamp: {
            setSelectedStampLiveBonus: Dispatch<SetStateAction<StampLevel1>>
            setStampLiveBonus: Dispatch<SetStateAction<number[]>>
            setSelectedStampMusic: Dispatch<SetStateAction<StampLevel1>>
            setStampMusic: Dispatch<SetStateAction<number[]>>
            setSelectedStampLive: Dispatch<SetStateAction<StampLevel1>>
            setStampLive: Dispatch<SetStateAction<number[]>>
            setSelectedStampEvent: Dispatch<SetStateAction<StampLevel1>>
            setStampEvent: Dispatch<SetStateAction<number[]>>
            setSelectedStampMoney: Dispatch<SetStateAction<StampLevel2>>
            setStampMoney: Dispatch<SetStateAction<number[]>>
          }
        }
      }
    }
  | undefined
>(undefined)

export const WorldBloomContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  // ピース
  const [worldPieces, setWorldPieces] = useState<number>(0)

  const searchParams = useSearchParams()

  // 交換所 ==================
  // ガチャチケ
  const initialNumberOfRewardGachaTicket = parseInt(
    searchParams.get("numberOfRewardGachaTicket") ?? "0",
    10,
  )
  const [numberOfRewardGachaTicket, setNumberOfRewardGachaTicket] =
    useState<number>(initialNumberOfRewardGachaTicket)

  // 純結晶
  const initialNumberOfRewardPureCrystal = parseInt(
    searchParams.get("numberOfRewardPureCrystal") ?? "0",
    10,
  )
  const [numberOfRewardPureCrystal, setNumberOfRewardPureCrystal] =
    useState<number>(initialNumberOfRewardPureCrystal)

  // スキスコ
  const initialNumberOfRewardSkill = parseInt(
    searchParams.get("numberOfRewardSkill") ?? "0",
    10,
  )
  const [numberOfRewardSkill, setNumberOfRewardSkill] = useState<number>(
    initialNumberOfRewardSkill,
  )

  // 雫
  const initialNumberOfRewardDroplet = parseInt(
    searchParams.get("numberOfRewardDroplet") ?? "0",
    10,
  )
  const [numberOfRewardDroplet, setNumberOfRewardDroplet] = useState<number>(
    initialNumberOfRewardDroplet,
  )

  // 石
  const initialNumberOfRewardCrystal = parseInt(
    searchParams.get("numberOfRewardCrystal") ?? "0",
    10,
  )
  const [numberOfRewardCrystal, setNumberOfRewardCrystal] = useState<number>(
    initialNumberOfRewardCrystal,
  )

  // ライボ
  const initialNumberOfRewardDrink = parseInt(
    searchParams.get("numberOfRewardDrink") ?? "0",
    10,
  )
  const [numberOfRewardDrink, setNumberOfRewardDrink] = useState<number>(
    initialNumberOfRewardDrink,
  )

  // バチャコ
  const initialNumberOfRewardVirtualCoin = parseInt(
    searchParams.get("numberOfRewardVirtualCoin") ?? "0",
    10,
  )
  const [numberOfRewardVirtualCoin, setNumberOfRewardVirtualCoin] =
    useState<number>(initialNumberOfRewardVirtualCoin)

  // 練スコ
  const initialNumberOfRewardPractice = parseInt(
    searchParams.get("numberOfRewardPractice") ?? "0",
    10,
  )
  const [numberOfRewardPractice, setNumberOfRewardPractice] = useState<number>(
    initialNumberOfRewardPractice,
  )

  // 虹ジェム
  const initialNumberOfRewardMiracleGem = parseInt(
    searchParams.get("numberOfRewardMiracleGem") ?? "0",
    10,
  )
  const [numberOfRewardMiracleGem, setNumberOfRewardMiracleGem] =
    useState<number>(initialNumberOfRewardMiracleGem)

  // 獲得場所 =================

  // ログイン
  const initialLoginDays = searchParams.getAll("loginDays")
  const [loginDays, setLoginDays] = useState<string[]>(initialLoginDays)

  // スタンプミッション
  // ライボ
  const searchParamSelectedStampLiveBonus = searchParams.get(
    "selectedStampLiveBonus",
  )
  let initialSelectedStampLiveBonus: StampLevel1 = null
  if (
    searchParamSelectedStampLiveBonus === "casual" ||
    searchParamSelectedStampLiveBonus === "regular" ||
    searchParamSelectedStampLiveBonus === "unlimited"
  ) {
    initialSelectedStampLiveBonus = searchParamSelectedStampLiveBonus
  }
  const [selectedStampLiveBonus, setSelectedStampLiveBonus] =
    useState<StampLevel1>(initialSelectedStampLiveBonus)

  const initialStampLiveBonus = searchParams.getAll("stampLiveBonus")
  const [stampLiveBonus, setStampLiveBonus] = useState<number[]>(
    initialStampLiveBonus.map((item) => parseInt(item ?? "0", 10)),
  )

  // 楽曲
  const searchParamSelectedStampMusic = searchParams.get("selectedStampMusic")
  let initialSelectedStampMusic: StampLevel1 = null
  if (
    searchParamSelectedStampMusic === "casual" ||
    searchParamSelectedStampMusic === "regular" ||
    searchParamSelectedStampMusic === "unlimited"
  ) {
    initialSelectedStampMusic = searchParamSelectedStampMusic
  }
  const [selectedStampMusic, setSelectedStampMusic] = useState<StampLevel1>(
    initialSelectedStampMusic,
  )

  const initialStampMusic = searchParams.getAll("stampMusic")
  const [stampMusic, setStampMusic] = useState<number[]>(
    initialStampMusic.map((item) => parseInt(item ?? "0", 10)),
  )

  // ライブ
  const searchParamSelectedStampLive = searchParams.get("selectedStampLive")
  let initialSelectedStampLive: StampLevel1 = null
  if (
    searchParamSelectedStampLive === "casual" ||
    searchParamSelectedStampLive === "regular" ||
    searchParamSelectedStampLive === "unlimited"
  ) {
    initialSelectedStampLive = searchParamSelectedStampLive
  }
  const [selectedStampLive, setSelectedStampLive] = useState<StampLevel1>(
    initialSelectedStampLive,
  )

  const initialStampLive = searchParams.getAll("stampLive")
  const [stampLive, setStampLive] = useState<number[]>(
    initialStampLive.map((item) => parseInt(item ?? "0", 10)),
  )

  // イベントP
  const searchParamSelectedStampEvent = searchParams.get("selectedStampEvent")
  let initialSelectedStampEvent: StampLevel1 = null
  if (
    searchParamSelectedStampEvent === "casual" ||
    searchParamSelectedStampEvent === "regular" ||
    searchParamSelectedStampEvent === "unlimited"
  ) {
    initialSelectedStampEvent = searchParamSelectedStampEvent
  }
  const [selectedStampEvent, setSelectedStampEvent] = useState<StampLevel1>(
    initialSelectedStampEvent,
  )

  const initialStampEvent = searchParams.getAll("stampEvent")
  const [stampEvent, setStampEvent] = useState<number[]>(
    initialStampEvent.map((item) => parseInt(item ?? "0", 10)),
  )

  // 課金
  const searchParamSelectedStampMoney = searchParams.get("selectedStampMoney")
  let initialSelectedStampMoney: StampLevel2 = null
  if (
    searchParamSelectedStampMoney === "standard" ||
    searchParamSelectedStampMoney === "gold" ||
    searchParamSelectedStampMoney === "diamond"
  ) {
    initialSelectedStampMoney = searchParamSelectedStampMoney
  }
  const [selectedStampMoney, setSelectedStampMoney] = useState<StampLevel2>(
    initialSelectedStampMoney,
  )

  const initialStampMoney = searchParams.getAll("stampMoney")
  const [stampMoney, setStampMoney] = useState<number[]>(
    initialStampMoney.map((item) => parseInt(item ?? "0", 10)),
  )

  // イベント交換所
  const initialNumberOfEventBadge = parseInt(
    searchParams.get("numberOfEventBadge") ?? "0",
    10,
  )
  const [numberOfEventBadge, setNumberOfEventBadge] = useState<number>(
    initialNumberOfEventBadge,
  )

  // イベントランキング
  const initialLeoneedEventRank = parseInt(
    searchParams.get("leoneedEventRank") ?? "0",
    10,
  )
  const [leoneedEventRank, setLeoneedEventRank] = useState<number>(
    initialLeoneedEventRank,
  )

  // ブルフェス
  const initialFesBonus = parseInt(searchParams.get("fesBonus") ?? "0", 10)
  const [fesBonus, setFesBonus] = useState<number>(initialFesBonus)

  // 服ガチャ
  const initialIsPremiumGift = !!searchParams.get("isPremiumGift")
  const [isPremiumGift, setIsPremiumGift] =
    useState<boolean>(initialIsPremiumGift)

  // ハートフルギフトガチャ
  const initialIsHeartfeltGift = !!searchParams.get("isHeartfeltGift")
  const [isHeartfeltGift, setIsHeartfeltGift] = useState<boolean>(
    initialIsHeartfeltGift,
  )

  // 必要数集計 ==============
  useEffect(() => {
    let total = 0

    // 報酬 ================
    // ガチャチケ
    total -= numberOfRewardGachaTicket * 300
    // 純結晶
    total -= numberOfRewardPureCrystal * 200
    // スキスコ
    total -= numberOfRewardSkill * 30
    // 雫
    total -= numberOfRewardDroplet * 30
    // 石
    total -= numberOfRewardCrystal * 10
    // ライボ
    total -= numberOfRewardDrink * 10
    // バチャコ
    total -= numberOfRewardVirtualCoin * 10
    // 練スコ
    total -= numberOfRewardPractice * 10
    // 虹ジェム
    total -= numberOfRewardMiracleGem * 5

    // 消費 =================
    // ログイン
    if (loginDays.length > 0) {
      loginSchedule.map((schedule) => {
        if (loginDays.includes(schedule.day)) {
          total += schedule.pieces
        }
      })
    }
    // スタンプミッション
    // ライボ
    if (selectedStampLiveBonus && stampLiveBonus.length !== 0) {
      // カジュアル
      if (selectedStampLiveBonus === "casual") {
        const checkedMissions = stampLiveBonusCasual.missions.filter(
          (__val, index) => stampLiveBonus.includes(index),
        )
        total +=
          checkedMissions.length === stampLiveBonusCasual.missions.length
            ? stampLiveBonusCasual.complete
            : 0
      }
      // レギュラー
      if (selectedStampLiveBonus === "regular") {
        const checkedMissions = stampLiveBonusRegular.missions.filter(
          (__val, index) => stampLiveBonus.includes(index),
        )
        total +=
          checkedMissions.length === stampLiveBonusRegular.missions.length
            ? stampLiveBonusRegular.complete
            : 0
      }
      // アンリミテッド
      if (selectedStampLiveBonus === "unlimited") {
        const checkedMissions = stampLiveBonusUnlimited.missions.filter(
          (__val, index) => stampLiveBonus.includes(index),
        )
        total +=
          checkedMissions.length === stampLiveBonusUnlimited.missions.length
            ? stampLiveBonusUnlimited.complete
            : 0
      }
    }
    // 楽曲
    if (selectedStampMusic && stampMusic.length !== 0) {
      // カジュアル
      if (selectedStampMusic === "casual") {
        const checkedMissions = stampMusicCasual.missions.filter(
          (__val, index) => stampMusic.includes(index),
        )
        total +=
          checkedMissions.length === stampMusicCasual.missions.length
            ? stampMusicCasual.complete
            : 0
      }
      // レギュラー
      if (selectedStampMusic === "regular") {
        const checkedMissions = stampMusicRegular.missions.filter(
          (__val, index) => stampMusic.includes(index),
        )
        total +=
          checkedMissions.length === stampMusicRegular.missions.length
            ? stampMusicRegular.complete
            : 0
      }
      // アンリミテッド
      if (selectedStampMusic === "unlimited") {
        const checkedMissions = stampMusicUnlimited.missions.filter(
          (__val, index) => stampMusic.includes(index),
        )
        total +=
          checkedMissions.length === stampMusicUnlimited.missions.length
            ? stampMusicUnlimited.complete
            : 0
      }
    }
    // ライブ
    if (selectedStampLive && stampLive.length !== 0) {
      // カジュアル
      if (selectedStampLive === "casual") {
        const checkedMissions = stampLiveCasual.missions.filter(
          (__val, index) => stampLive.includes(index),
        )
        total +=
          checkedMissions.length === stampLiveCasual.missions.length
            ? stampLiveCasual.complete
            : 0
      }
      // レギュラー
      if (selectedStampLive === "regular") {
        const checkedMissions = stampLiveRegular.missions.filter(
          (__val, index) => stampLive.includes(index),
        )
        total +=
          checkedMissions.length === stampLiveRegular.missions.length
            ? stampLiveRegular.complete
            : 0
      }
      // アンリミテッド
      if (selectedStampLive === "unlimited") {
        const checkedMissions = stampLiveUnlimited.missions.filter(
          (__val, index) => stampLive.includes(index),
        )
        total +=
          checkedMissions.length === stampLiveUnlimited.missions.length
            ? stampLiveUnlimited.complete
            : 0
      }
    }
    // イベントP
    if (selectedStampEvent && stampEvent.length !== 0) {
      // カジュアル
      if (selectedStampEvent === "casual") {
        const checkedMissions = stampEventCasual.missions.filter(
          (__val, index) => stampEvent.includes(index),
        )
        total +=
          checkedMissions.length === stampEventCasual.missions.length
            ? stampEventCasual.complete
            : 0
      }
      // レギュラー
      if (selectedStampEvent === "regular") {
        const checkedMissions = stampEventRegular.missions.filter(
          (__val, index) => stampEvent.includes(index),
        )
        total +=
          checkedMissions.length === stampEventRegular.missions.length
            ? stampEventRegular.complete
            : 0
      }
      // アンリミテッド
      if (selectedStampEvent === "unlimited") {
        const checkedMissions = stampEventUnlimited.missions.filter(
          (__val, index) => stampEvent.includes(index),
        )
        total +=
          checkedMissions.length === stampEventUnlimited.missions.length
            ? stampEventUnlimited.complete
            : 0
      }
    }
    // 課金
    if (selectedStampMoney && stampMoney.length !== 0) {
      // スタンダード
      if (selectedStampMoney === "standard") {
        const checkedMissions = stampMoneyStandard.missions.filter(
          (__val, index) => stampMoney.includes(index),
        )
        total +=
          checkedMissions.length === stampMoneyStandard.missions.length
            ? stampMoneyStandard.complete
            : 0
      }
      // ゴールド
      if (selectedStampMoney === "gold") {
        const checkedMissions = stampMoneyGold.missions.filter((__val, index) =>
          stampMoney.includes(index),
        )
        total +=
          checkedMissions.length === stampMoneyGold.missions.length
            ? stampMoneyGold.complete
            : 0
      }
      // ダイヤモンド
      if (selectedStampMoney === "diamond") {
        const checkedMissions = stampMoneyDiamond.missions.filter(
          (__val, index) => stampMoney.includes(index),
        )
        total +=
          checkedMissions.length === stampMoneyDiamond.missions.length
            ? stampMoneyDiamond.complete
            : 0
      }
    }

    // イベント交換所
    total += numberOfEventBadge * 10

    // イベントランキング
    const anniversaryEvent = eventRankRange.find(
      ({ rank }) => rank === leoneedEventRank,
    )
    if (anniversaryEvent) {
      total += anniversaryEvent.pieces
    }

    // ブルフェス
    if (fesBonus) {
      total += Math.floor(fesBonus / 50) * 100
    }
    // 服ガチャ
    total += isPremiumGift ? 200 : 0
    // ハートフルギフトガチャ
    total += isHeartfeltGift ? 200 : 0

    // ピース数
    setWorldPieces(total)
  }, [
    setWorldPieces,
    numberOfRewardGachaTicket,
    numberOfRewardPureCrystal,
    numberOfRewardSkill,
    numberOfRewardDroplet,
    numberOfRewardCrystal,
    numberOfRewardDrink,
    numberOfRewardVirtualCoin,
    numberOfRewardPractice,
    numberOfRewardMiracleGem,
    loginDays,
    selectedStampLiveBonus,
    stampLiveBonus,
    selectedStampMusic,
    stampMusic,
    selectedStampLive,
    stampLive,
    selectedStampEvent,
    stampEvent,
    selectedStampMoney,
    stampMoney,
    numberOfEventBadge,
    leoneedEventRank,
    fesBonus,
    isPremiumGift,
    isHeartfeltGift,
  ])

  // URL置き換え =================
  const router = useRouter()
  useEffect(() => {
    const urlSearchParams = new URLSearchParams()
    // 報酬 ================

    // ガチャチケ
    if (numberOfRewardGachaTicket) {
      urlSearchParams.set(
        "numberOfRewardGachaTicket",
        numberOfRewardGachaTicket.toString(),
      )
    }
    // 純結晶
    if (numberOfRewardPureCrystal) {
      urlSearchParams.set(
        "numberOfRewardPureCrystal",
        numberOfRewardPureCrystal.toString(),
      )
    }
    // スキスコ
    if (numberOfRewardSkill) {
      urlSearchParams.set("numberOfRewardSkill", numberOfRewardSkill.toString())
    }
    // 雫
    if (numberOfRewardDroplet) {
      urlSearchParams.set(
        "numberOfRewardDroplet",
        numberOfRewardDroplet.toString(),
      )
    }
    // 石
    if (numberOfRewardCrystal) {
      urlSearchParams.set(
        "numberOfRewardCrystal",
        numberOfRewardCrystal.toString(),
      )
    }
    // ライボ
    if (numberOfRewardDrink) {
      urlSearchParams.set("numberOfRewardDrink", numberOfRewardDrink.toString())
    }
    // バチャコ
    if (numberOfRewardVirtualCoin) {
      urlSearchParams.set(
        "numberOfRewardVirtualCoin",
        numberOfRewardVirtualCoin.toString(),
      )
    }
    // 練スコ
    if (numberOfRewardPractice) {
      urlSearchParams.set(
        "numberOfRewardPractice",
        numberOfRewardPractice.toString(),
      )
    }
    // 虹ジェム
    if (numberOfRewardMiracleGem) {
      urlSearchParams.set(
        "numberOfRewardMiracleGem",
        numberOfRewardMiracleGem.toString(),
      )
    }

    // 獲得場所 =================
    // ログイン
    loginDays.map((loginDay) => {
      urlSearchParams.append("loginDays", loginDay)
    })

    // スタンプミッション
    // ライボ
    if (selectedStampLiveBonus) {
      urlSearchParams.set("selectedStampLiveBonus", selectedStampLiveBonus)
      stampLiveBonus.map((index) => {
        urlSearchParams.append("stampLiveBonus", index.toString())
      })
    }
    // 楽曲
    if (selectedStampMusic) {
      urlSearchParams.set("selectedStampMusic", selectedStampMusic)
      stampMusic.map((index) => {
        urlSearchParams.append("stampMusic", index.toString())
      })
    }
    // ライブ
    if (selectedStampLive) {
      urlSearchParams.set("selectedStampLive", selectedStampLive)
      stampLive.map((index) => {
        urlSearchParams.append("stampLive", index.toString())
      })
    }
    // イベントP
    if (selectedStampEvent) {
      urlSearchParams.set("selectedStampEvent", selectedStampEvent)
      stampEvent.map((index) => {
        urlSearchParams.append("stampEvent", index.toString())
      })
    }
    // 課金
    if (selectedStampMoney) {
      urlSearchParams.set("selectedStampMoney", selectedStampMoney)
      stampMoney.map((index) => {
        urlSearchParams.append("stampMoney", index.toString())
      })
    }

    // イベント交換所
    if (numberOfEventBadge) {
      urlSearchParams.set("numberOfEventBadge", numberOfEventBadge.toString())
    }

    // イベントランキング
    if (leoneedEventRank) {
      urlSearchParams.set("leoneedEventRank", leoneedEventRank.toString())
    }

    // ブルフェス
    if (fesBonus) {
      urlSearchParams.set("fesBonus", fesBonus.toString())
    }

    // 服ガチャ
    if (isPremiumGift) {
      urlSearchParams.set("isPremiumGift", "1")
    }

    // ハートフルギフトガチャ
    if (isHeartfeltGift) {
      urlSearchParams.set("isHeartfeltGift", "1")
    }

    router.push(`?${urlSearchParams.toString()}`, { scroll: false })
  }, [
    router,
    numberOfRewardGachaTicket,
    numberOfRewardPureCrystal,
    numberOfRewardSkill,
    numberOfRewardDroplet,
    numberOfRewardCrystal,
    numberOfRewardDrink,
    numberOfRewardVirtualCoin,
    numberOfRewardPractice,
    numberOfRewardMiracleGem,
    loginDays,
    selectedStampLiveBonus,
    stampLiveBonus,
    selectedStampMusic,
    stampMusic,
    selectedStampLive,
    stampLive,
    selectedStampEvent,
    stampEvent,
    selectedStampMoney,
    stampMoney,
    numberOfEventBadge,
    leoneedEventRank,
    fesBonus,
    isPremiumGift,
    isHeartfeltGift,
  ])

  return (
    <WorldBloomContext.Provider
      value={{
        state: {
          result: {
            worldPieces,
          },
          reward: {
            numberOfRewardGachaTicket,
            numberOfRewardPureCrystal,
            numberOfRewardSkill,
            numberOfRewardDroplet,
            numberOfRewardCrystal,
            numberOfRewardDrink,
            numberOfRewardVirtualCoin,
            numberOfRewardPractice,
            numberOfRewardMiracleGem,
          },
          acquisition: {
            loginDays,
            numberOfEventBadge,
            leoneedEventRank,
            fesBonus,
            isPremiumGift,
            isHeartfeltGift,
            stamp: {
              selectedStampLiveBonus,
              stampLiveBonus,
              selectedStampMusic,
              stampMusic,
              selectedStampLive,
              stampLive,
              selectedStampEvent,
              stampEvent,
              selectedStampMoney,
              stampMoney,
            },
          },
        },
        dispatch: {
          reward: {
            setNumberOfRewardGachaTicket,
            setNumberOfRewardPureCrystal,
            setNumberOfRewardSkill,
            setNumberOfRewardDroplet,
            setNumberOfRewardCrystal,
            setNumberOfRewardDrink,
            setNumberOfRewardVirtualCoin,
            setNumberOfRewardPractice,
            setNumberOfRewardMiracleGem,
          },
          acquisition: {
            setLoginDays,
            setNumberOfEventBadge,
            setLeoneedEventRank,
            setFesBonus,
            setIsPremiumGift,
            setIsHeartfeltGift,
            stamp: {
              setSelectedStampLiveBonus,
              setStampLiveBonus,
              setSelectedStampMusic,
              setStampMusic,
              setSelectedStampLive,
              setStampLive,
              setSelectedStampEvent,
              setStampEvent,
              setSelectedStampMoney,
              setStampMoney,
            },
          },
        },
      }}
    >
      {children}
    </WorldBloomContext.Provider>
  )
}

export const useWorldBloomContext = () => {
  const context = useContext(WorldBloomContext)
  if (context === undefined)
    throw new Error("Function 'useWorldBloomContext' must be used in Provider.")
  return context
}
