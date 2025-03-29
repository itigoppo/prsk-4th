import { useWorldBloomContext } from "@/app/4_5th/Context"
import { Expander } from "@/app/components/atoms/Expander"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import React, { FC } from "react"
import {
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
} from "../../../constant"
import { StampCard } from "./StampCard"

export const Form: FC = () => {
  const { state, dispatch } = useWorldBloomContext()

  // ライボ
  const selectedStampLiveBonus = (level: StampLevel1) => {
    if (state.acquisition.stamp.selectedStampLiveBonus === level) {
      dispatch.acquisition.stamp.setSelectedStampLiveBonus(null)
    } else {
      dispatch.acquisition.stamp.setSelectedStampLiveBonus(level)
    }
  }
  // 楽曲
  const selectedStampMusic = (level: StampLevel1) => {
    if (state.acquisition.stamp.selectedStampMusic === level) {
      dispatch.acquisition.stamp.setSelectedStampMusic(null)
    } else {
      dispatch.acquisition.stamp.setSelectedStampMusic(level)
    }
  }
  // ライブ
  const selectedStampLive = (level: StampLevel1) => {
    if (state.acquisition.stamp.selectedStampLive === level) {
      dispatch.acquisition.stamp.setSelectedStampLive(null)
    } else {
      dispatch.acquisition.stamp.setSelectedStampLive(level)
    }
  }
  // イベントP
  const selectedStampEvent = (level: StampLevel1) => {
    if (state.acquisition.stamp.selectedStampEvent === level) {
      dispatch.acquisition.stamp.setSelectedStampEvent(null)
    } else {
      dispatch.acquisition.stamp.setSelectedStampEvent(level)
    }
  }
  // 課金
  const selectedStampMoney = (level: StampLevel2) => {
    if (state.acquisition.stamp.selectedStampMoney === level) {
      dispatch.acquisition.stamp.setSelectedStampMoney(null)
    } else {
      dispatch.acquisition.stamp.setSelectedStampMoney(level)
    }
  }

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">挑戦したいカードを選択</Alert>

      <div>
        {[
          {
            name: "ライブボーナス",
            children: [
              {
                name: "カジュアルライブボーナス",
                stamp: stampLiveBonusCasual,
                isChecked:
                  state.acquisition.stamp.selectedStampLiveBonus === "casual",
                selected: () => {
                  selectedStampLiveBonus("casual")
                },
              },
              {
                name: "レギュラーライブボーナス",
                stamp: stampLiveBonusRegular,
                isChecked:
                  state.acquisition.stamp.selectedStampLiveBonus === "regular",
                selected: () => {
                  selectedStampLiveBonus("regular")
                },
              },
              {
                name: "アンリミテッドライブボーナス",
                stamp: stampLiveBonusUnlimited,
                isChecked:
                  state.acquisition.stamp.selectedStampLiveBonus ===
                  "unlimited",
                selected: () => {
                  selectedStampLiveBonus("unlimited")
                },
              },
            ],
            stampCard: <StampCard type="liveBonus" />,
          },
          {
            name: "楽曲",
            children: [
              {
                name: "カジュアル楽曲",
                stamp: stampMusicCasual,
                isChecked:
                  state.acquisition.stamp.selectedStampMusic === "casual",
                selected: () => {
                  selectedStampMusic("casual")
                },
              },
              {
                name: "レギュラー楽曲",
                stamp: stampMusicRegular,
                isChecked:
                  state.acquisition.stamp.selectedStampMusic === "regular",
                selected: () => {
                  selectedStampMusic("regular")
                },
              },
              {
                name: "アンリミテッド楽曲",
                stamp: stampMusicUnlimited,
                isChecked:
                  state.acquisition.stamp.selectedStampMusic === "unlimited",
                selected: () => {
                  selectedStampMusic("unlimited")
                },
              },
            ],
            stampCard: <StampCard type="music" />,
          },
          {
            name: "ライブ",
            children: [
              {
                name: "カジュアルライブ",
                stamp: stampLiveCasual,
                isChecked:
                  state.acquisition.stamp.selectedStampLive === "casual",
                selected: () => {
                  selectedStampLive("casual")
                },
              },
              {
                name: "レギュラーライブ",
                stamp: stampLiveRegular,
                isChecked:
                  state.acquisition.stamp.selectedStampLive === "regular",
                selected: () => {
                  selectedStampLive("regular")
                },
              },
              {
                name: "アンリミテッドライブ",
                stamp: stampLiveUnlimited,
                isChecked:
                  state.acquisition.stamp.selectedStampLive === "unlimited",
                selected: () => {
                  selectedStampLive("unlimited")
                },
              },
            ],
            stampCard: <StampCard type="live" />,
          },
          {
            name: "イベントP",
            children: [
              {
                name: "カジュアルイベントP",
                stamp: stampEventCasual,
                isChecked:
                  state.acquisition.stamp.selectedStampEvent === "casual",
                selected: () => {
                  selectedStampEvent("casual")
                },
              },
              {
                name: "レギュラーイベントP",
                stamp: stampEventRegular,
                isChecked:
                  state.acquisition.stamp.selectedStampEvent === "regular",
                selected: () => {
                  selectedStampEvent("regular")
                },
              },
              {
                name: "アンリミテッドイベントP",
                stamp: stampEventUnlimited,
                isChecked:
                  state.acquisition.stamp.selectedStampEvent === "unlimited",
                selected: () => {
                  selectedStampEvent("unlimited")
                },
              },
            ],
            stampCard: <StampCard type="event" />,
          },
          {
            name: "ガチャ/ショップ",
            children: [
              {
                name: "スタンダードガチャ/ショップ",
                stamp: stampMoneyStandard,
                isChecked:
                  state.acquisition.stamp.selectedStampMoney === "standard",
                selected: () => {
                  selectedStampMoney("standard")
                },
              },
              {
                name: "ゴールドガチャ/ショップ",
                stamp: stampMoneyGold,
                isChecked:
                  state.acquisition.stamp.selectedStampMoney === "gold",
                selected: () => {
                  selectedStampMoney("gold")
                },
              },
              {
                name: "ダイヤモンドガチャ/ショップ",
                stamp: stampMoneyDiamond,
                isChecked:
                  state.acquisition.stamp.selectedStampMoney === "diamond",
                selected: () => {
                  selectedStampMoney("diamond")
                },
              },
            ],
            stampCard: <StampCard type="money" />,
          },
        ].map(({ name, children, stampCard }, index) => (
          <Expander
            toggleButtonText={name}
            className="bg-slate-100"
            key={index}
            isDefaultClose={index === 0 ? false : true}
          >
            {children && (
              <div className="space-y-2">
                {children.map(
                  ({ name: cardName, isChecked, stamp, selected }, index2) => (
                    <React.Fragment key={index2}>
                      <div
                        onClick={() => {
                          selected()
                        }}
                        className="hover:cursor-pointer"
                      >
                        <Stack alignItems="center" direction="row" gap={0.5}>
                          {isChecked ? (
                            <CheckBoxOutlined className="text-teal-600" />
                          ) : (
                            <CheckBoxOutlineBlank />
                          )}
                          <div>{cardName}</div>
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
                    </React.Fragment>
                  ),
                )}
              </div>
            )}
            {stampCard}
          </Expander>
        ))}
      </div>
    </div>
  )
}
