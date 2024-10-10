import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { UseCalcReturn } from "@/app/View/calc"
import {
  stampGachiRegular,
  stampGachiUnlimited,
  stampIroiroRegular,
  stampIroiroUnlimited,
  stampKizunaCasual,
  stampKizunaRegular,
  StampLevel1Bloom,
  StampLevel1Cheer,
  StampLevel1Connect,
  StampLevel2Bloom,
  StampLevel2Cheer,
  StampLevel2Connect,
  stampLiveCasual,
  stampLiveRegular,
  stampLoginCasual,
  stampLoginRegular,
} from "@/app/View/constant"
import {
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  WarningOutlined,
} from "@mui/icons-material"
import { Stack } from "@mui/material"
import React, { FC } from "react"
import { StampCard } from "./StampCard"

type Props = UseCalcReturn & { times: number }

export const StampMission: FC<Props> = (props) => {
  const { state, dispatch, times } = props

  const selectedStampsBloom = [
    state.acquisition.stamp.bloom.selectedStampIroiro,
    state.acquisition.stamp.bloom.selectedStampLive,
    state.acquisition.stamp.bloom.selectedStampKizuna,
    state.acquisition.stamp.bloom.selectedStampLogin,
    state.acquisition.stamp.bloom.selectedStampGachi,
    state.acquisition.stamp.bloom.isStampShop,
  ].filter((stamp) => stamp)

  const selectedStampsConnect = [
    state.acquisition.stamp.connect.selectedStampIroiro,
    state.acquisition.stamp.connect.selectedStampLive,
    state.acquisition.stamp.connect.selectedStampKizuna,
    state.acquisition.stamp.connect.selectedStampLogin,
    state.acquisition.stamp.connect.selectedStampGachi,
  ].filter((stamp) => stamp)

  const selectedStampsCheer = [
    state.acquisition.stamp.cheer.selectedStampIroiro,
    state.acquisition.stamp.cheer.selectedStampLive,
    state.acquisition.stamp.cheer.selectedStampKizuna,
    state.acquisition.stamp.cheer.selectedStampLogin,
    state.acquisition.stamp.cheer.selectedStampGachi,
  ].filter((stamp) => stamp)

  // BLOOM
  const selectedStampIroiroBloom = (level: StampLevel1Bloom) => {
    if (state.acquisition.stamp.bloom.selectedStampIroiro === level) {
      dispatch.acquisition.stamp.bloom.setSelectedStampIroiro(null)
    } else {
      dispatch.acquisition.stamp.bloom.setSelectedStampIroiro(level)
    }
  }

  const selectedStampGachiBloom = (level: StampLevel1Bloom) => {
    if (state.acquisition.stamp.bloom.selectedStampGachi === level) {
      dispatch.acquisition.stamp.bloom.setSelectedStampGachi(null)
    } else {
      dispatch.acquisition.stamp.bloom.setSelectedStampGachi(level)
    }
  }

  const selectedStampLiveBloom = (level: StampLevel2Bloom) => {
    if (state.acquisition.stamp.bloom.selectedStampLive === level) {
      dispatch.acquisition.stamp.bloom.setSelectedStampLive(null)
    } else {
      dispatch.acquisition.stamp.bloom.setSelectedStampLive(level)
    }
  }

  const selectedStampKizunaBloom = (level: StampLevel2Bloom) => {
    if (state.acquisition.stamp.bloom.selectedStampKizuna === level) {
      dispatch.acquisition.stamp.bloom.setSelectedStampKizuna(null)
    } else {
      dispatch.acquisition.stamp.bloom.setSelectedStampKizuna(level)
    }
  }

  const selectedStampLoginBloom = (level: StampLevel2Bloom) => {
    if (state.acquisition.stamp.bloom.selectedStampLogin === level) {
      dispatch.acquisition.stamp.bloom.setSelectedStampLogin(null)
    } else {
      dispatch.acquisition.stamp.bloom.setSelectedStampLogin(level)
    }
  }

  // CONNECT
  const selectedStampIroiroConnect = (level: StampLevel1Connect) => {
    if (state.acquisition.stamp.connect.selectedStampIroiro === level) {
      dispatch.acquisition.stamp.connect.setSelectedStampIroiro(null)
    } else {
      dispatch.acquisition.stamp.connect.setSelectedStampIroiro(level)
    }
  }

  const selectedStampGachiConnect = (level: StampLevel1Connect) => {
    if (state.acquisition.stamp.connect.selectedStampGachi === level) {
      dispatch.acquisition.stamp.connect.setSelectedStampGachi(null)
    } else {
      dispatch.acquisition.stamp.connect.setSelectedStampGachi(level)
    }
  }

  const selectedStampLiveConnect = (level: StampLevel2Connect) => {
    if (state.acquisition.stamp.connect.selectedStampLive === level) {
      dispatch.acquisition.stamp.connect.setSelectedStampLive(null)
    } else {
      dispatch.acquisition.stamp.connect.setSelectedStampLive(level)
    }
  }

  const selectedStampKizunaConnect = (level: StampLevel2Connect) => {
    if (state.acquisition.stamp.connect.selectedStampKizuna === level) {
      dispatch.acquisition.stamp.connect.setSelectedStampKizuna(null)
    } else {
      dispatch.acquisition.stamp.connect.setSelectedStampKizuna(level)
    }
  }

  const selectedStampLoginConnect = (level: StampLevel2Connect) => {
    if (state.acquisition.stamp.connect.selectedStampLogin === level) {
      dispatch.acquisition.stamp.connect.setSelectedStampLogin(null)
    } else {
      dispatch.acquisition.stamp.connect.setSelectedStampLogin(level)
    }
  }

  // CHEER
  const selectedStampIroiroCheer = (level: StampLevel1Cheer) => {
    if (state.acquisition.stamp.cheer.selectedStampIroiro === level) {
      dispatch.acquisition.stamp.cheer.setSelectedStampIroiro(null)
    } else {
      dispatch.acquisition.stamp.cheer.setSelectedStampIroiro(level)
    }
  }

  const selectedStampGachiCheer = (level: StampLevel1Cheer) => {
    if (state.acquisition.stamp.cheer.selectedStampGachi === level) {
      dispatch.acquisition.stamp.cheer.setSelectedStampGachi(null)
    } else {
      dispatch.acquisition.stamp.cheer.setSelectedStampGachi(level)
    }
  }

  const selectedStampLiveCheer = (level: StampLevel2Cheer) => {
    if (state.acquisition.stamp.cheer.selectedStampLive === level) {
      dispatch.acquisition.stamp.cheer.setSelectedStampLive(null)
    } else {
      dispatch.acquisition.stamp.cheer.setSelectedStampLive(level)
    }
  }

  const selectedStampKizunaCheer = (level: StampLevel2Cheer) => {
    if (state.acquisition.stamp.cheer.selectedStampKizuna === level) {
      dispatch.acquisition.stamp.cheer.setSelectedStampKizuna(null)
    } else {
      dispatch.acquisition.stamp.cheer.setSelectedStampKizuna(level)
    }
  }

  const selectedStampLoginCheer = (level: StampLevel2Cheer) => {
    if (state.acquisition.stamp.cheer.selectedStampLogin === level) {
      dispatch.acquisition.stamp.cheer.setSelectedStampLogin(null)
    } else {
      dispatch.acquisition.stamp.cheer.setSelectedStampLogin(level)
    }
  }

  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
          <div>
            スタンプミッション /{" "}
            {times === 1 && (
              <>
                BLOOM(
                <span className="text-pink-600">
                  09/30〜<s>10/11</s>10/12
                </span>
                )
              </>
            )}
            {times === 2 && (
              <>
                CONNECT(
                <span className="text-pink-600">
                  <s>10/11</s>10/12〜10/21
                </span>
                )
              </>
            )}
            {times === 3 && (
              <>
                CHEER(
                <span className="text-pink-600">10/21〜10/31</span>)
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-bold">カードの選択</div>
          <Stack alignItems="center" direction="row" gap={1}>
            {((times === 1 && selectedStampsBloom.length < 4) ||
              (times === 2 && selectedStampsConnect.length < 4) ||
              (times === 3 && selectedStampsCheer.length < 3) ||
              (times === 1 && selectedStampsBloom.length > 3) ||
              (times === 2 && selectedStampsConnect.length > 3) ||
              (times === 3 && selectedStampsCheer.length > 3)) && (
              <WarningOutlined className="text-yellow-500" />
            )}
            <div>
              現在選択中のカード：
              <span className="font-bold">
                {times === 1 && selectedStampsBloom.length}
                {times === 2 && selectedStampsConnect.length}
                {times === 3 && selectedStampsCheer.length} /{" "}
                {times === 1 ? 4 : 3}
              </span>
              枚
            </div>
          </Stack>
          {[
            {
              name: "イロイロ",
              children: [
                {
                  times: 1,
                  name: "ホワイトレギュラー",
                  stamp: stampIroiroRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampIroiro ===
                    "whiteregular",
                  selected: () => {
                    selectedStampIroiroBloom("whiteregular")
                  },
                },
                {
                  times: 1,
                  name: "ホワイトアンリミテッド",
                  stamp: stampIroiroUnlimited,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampIroiro ===
                    "whiteunlimited",
                  selected: () => {
                    selectedStampIroiroBloom("whiteunlimited")
                  },
                },
                {
                  times: 1,
                  name: "ブルーレギュラー",
                  stamp: stampIroiroRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampIroiro ===
                    "blueregular",
                  selected: () => {
                    selectedStampIroiroBloom("blueregular")
                  },
                },
                {
                  times: 1,
                  name: "ブルーアンリミテッド",
                  stamp: stampIroiroUnlimited,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampIroiro ===
                    "blueunlimited",
                  selected: () => {
                    selectedStampIroiroBloom("blueunlimited")
                  },
                },
                {
                  times: 2,
                  name: "グリーンレギュラー",
                  stamp: stampIroiroRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampIroiro ===
                    "greenregular",
                  selected: () => {
                    selectedStampIroiroConnect("greenregular")
                  },
                },
                {
                  times: 2,
                  name: "グリーンアンリミテッド",
                  stamp: stampIroiroUnlimited,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampIroiro ===
                    "greenunlimited",
                  selected: () => {
                    selectedStampIroiroConnect("greenunlimited")
                  },
                },
                {
                  times: 2,
                  name: "レッドレギュラー",
                  stamp: stampIroiroRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampIroiro ===
                    "redregular",
                  selected: () => {
                    selectedStampIroiroConnect("redregular")
                  },
                },
                {
                  times: 2,
                  name: "レッドアンリミテッド",
                  stamp: stampIroiroUnlimited,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampIroiro ===
                    "redunlimited",
                  selected: () => {
                    selectedStampIroiroConnect("redunlimited")
                  },
                },
                {
                  times: 3,
                  name: "オレンジレギュラー",
                  stamp: stampIroiroRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampIroiro ===
                    "orangeregular",
                  selected: () => {
                    selectedStampIroiroCheer("orangeregular")
                  },
                },
                {
                  times: 3,
                  name: "オレンジアンリミテッド",
                  stamp: stampIroiroUnlimited,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampIroiro ===
                    "orangeunlimited",
                  selected: () => {
                    selectedStampIroiroCheer("orangeunlimited")
                  },
                },
                {
                  times: 3,
                  name: "パープルレギュラー",
                  stamp: stampIroiroRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampIroiro ===
                    "purpleregular",
                  selected: () => {
                    selectedStampIroiroCheer("purpleregular")
                  },
                },
                {
                  times: 3,
                  name: "パープルアンリミテッド",
                  stamp: stampIroiroUnlimited,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampIroiro ===
                    "purpleunlimited",
                  selected: () => {
                    selectedStampIroiroCheer("purpleunlimited")
                  },
                },
              ],
            },
            {
              name: "ガチ",
              children: [
                {
                  times: 1,
                  name: "ホワイトレギュラー",
                  stamp: stampGachiRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampGachi ===
                    "whiteregular",
                  selected: () => {
                    selectedStampGachiBloom("whiteregular")
                  },
                },
                {
                  times: 1,
                  name: "ホワイトアンリミテッド",
                  stamp: stampGachiUnlimited,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampGachi ===
                    "whiteunlimited",
                  selected: () => {
                    selectedStampGachiBloom("whiteunlimited")
                  },
                },
                {
                  times: 1,
                  name: "ブルーレギュラー",
                  stamp: stampGachiRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampGachi ===
                    "blueregular",
                  selected: () => {
                    selectedStampGachiBloom("blueregular")
                  },
                },
                {
                  times: 1,
                  name: "ブルーアンリミテッド",
                  stamp: stampGachiUnlimited,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampGachi ===
                    "blueunlimited",
                  selected: () => {
                    selectedStampGachiBloom("blueunlimited")
                  },
                },
                {
                  times: 2,
                  name: "グリーンレギュラー",
                  stamp: stampGachiRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampGachi ===
                    "greenregular",
                  selected: () => {
                    selectedStampGachiConnect("greenregular")
                  },
                },
                {
                  times: 2,
                  name: "グリーンアンリミテッド",
                  stamp: stampGachiUnlimited,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampGachi ===
                    "greenunlimited",
                  selected: () => {
                    selectedStampGachiConnect("greenunlimited")
                  },
                },
                {
                  times: 2,
                  name: "レッドレギュラー",
                  stamp: stampGachiRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampGachi ===
                    "redregular",
                  selected: () => {
                    selectedStampGachiConnect("redregular")
                  },
                },
                {
                  times: 2,
                  name: "レッドアンリミテッド",
                  stamp: stampGachiUnlimited,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampGachi ===
                    "redunlimited",
                  selected: () => {
                    selectedStampGachiConnect("redunlimited")
                  },
                },
                {
                  times: 3,
                  name: "オレンジレギュラー",
                  stamp: stampGachiRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampGachi ===
                    "orangeregular",
                  selected: () => {
                    selectedStampGachiCheer("orangeregular")
                  },
                },
                {
                  times: 3,
                  name: "オレンジアンリミテッド",
                  stamp: stampGachiUnlimited,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampGachi ===
                    "orangeunlimited",
                  selected: () => {
                    selectedStampGachiCheer("orangeunlimited")
                  },
                },
                {
                  times: 3,
                  name: "パープルレギュラー",
                  stamp: stampGachiRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampGachi ===
                    "purpleregular",
                  selected: () => {
                    selectedStampGachiCheer("purpleregular")
                  },
                },
                {
                  times: 3,
                  name: "パープルアンリミテッド",
                  stamp: stampGachiUnlimited,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampGachi ===
                    "purpleunlimited",
                  selected: () => {
                    selectedStampGachiCheer("purpleunlimited")
                  },
                },
              ],
            },
            {
              name: "ライブ",
              children: [
                {
                  times: 1,
                  name: "ホワイトカジュアル",
                  stamp: stampLiveCasual,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLive ===
                    "whitecasual",
                  selected: () => {
                    selectedStampLiveBloom("whitecasual")
                  },
                },
                {
                  times: 1,
                  name: "ホワイトレギュラー",
                  stamp: stampLiveRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLive ===
                    "whiteregular",
                  selected: () => {
                    selectedStampLiveBloom("whiteregular")
                  },
                },
                {
                  times: 1,
                  name: "ブルーカジュアル",
                  stamp: stampLiveCasual,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLive ===
                    "bluecasual",
                  selected: () => {
                    selectedStampLiveBloom("bluecasual")
                  },
                },
                {
                  times: 1,
                  name: "ブルーレギュラー",
                  stamp: stampLiveRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLive ===
                    "blueregular",
                  selected: () => {
                    selectedStampLiveBloom("blueregular")
                  },
                },
                {
                  times: 2,
                  name: "グリーンカジュアル",
                  stamp: stampLiveCasual,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLive ===
                    "greencasual",
                  selected: () => {
                    selectedStampLiveConnect("greencasual")
                  },
                },
                {
                  times: 2,
                  name: "グリーンレギュラー",
                  stamp: stampLiveRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLive ===
                    "greenregular",
                  selected: () => {
                    selectedStampLiveConnect("greenregular")
                  },
                },
                {
                  times: 2,
                  name: "レッドカジュアル",
                  stamp: stampLiveCasual,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLive ===
                    "redcasual",
                  selected: () => {
                    selectedStampLiveConnect("redcasual")
                  },
                },
                {
                  times: 2,
                  name: "レッドレギュラー",
                  stamp: stampLiveRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLive ===
                    "redregular",
                  selected: () => {
                    selectedStampLiveConnect("redregular")
                  },
                },
                {
                  times: 3,
                  name: "オレンジカジュアル",
                  stamp: stampLiveCasual,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLive ===
                    "orangecasual",
                  selected: () => {
                    selectedStampLiveCheer("orangecasual")
                  },
                },
                {
                  times: 3,
                  name: "オレンジレギュラー",
                  stamp: stampLiveRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLive ===
                    "orangeregular",
                  selected: () => {
                    selectedStampLiveCheer("orangeregular")
                  },
                },
                {
                  times: 3,
                  name: "パープルカジュアル",
                  stamp: stampLiveCasual,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLive ===
                    "purplecasual",
                  selected: () => {
                    selectedStampLiveCheer("purplecasual")
                  },
                },
                {
                  times: 3,
                  name: "パープルレギュラー",
                  stamp: stampLiveRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLive ===
                    "purpleregular",
                  selected: () => {
                    selectedStampLiveCheer("purpleregular")
                  },
                },
              ],
            },
            {
              name: "キズナ",
              children: [
                {
                  times: 1,
                  name: "ホワイトカジュアル",
                  stamp: stampKizunaCasual,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampKizuna ===
                    "whitecasual",
                  selected: () => {
                    selectedStampKizunaBloom("whitecasual")
                  },
                },
                {
                  times: 1,
                  name: "ホワイトレギュラー",
                  stamp: stampKizunaRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampKizuna ===
                    "whiteregular",
                  selected: () => {
                    selectedStampKizunaBloom("whiteregular")
                  },
                },
                {
                  times: 1,
                  name: "ブルーカジュアル",
                  stamp: stampKizunaCasual,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampKizuna ===
                    "bluecasual",
                  selected: () => {
                    selectedStampKizunaBloom("bluecasual")
                  },
                },
                {
                  times: 1,
                  name: "ブルーレギュラー",
                  stamp: stampKizunaRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampKizuna ===
                    "blueregular",
                  selected: () => {
                    selectedStampKizunaBloom("blueregular")
                  },
                },
                {
                  times: 2,
                  name: "グリーンカジュアル",
                  stamp: stampKizunaCasual,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampKizuna ===
                    "greencasual",
                  selected: () => {
                    selectedStampKizunaConnect("greencasual")
                  },
                },
                {
                  times: 2,
                  name: "グリーンレギュラー",
                  stamp: stampKizunaRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampKizuna ===
                    "greenregular",
                  selected: () => {
                    selectedStampKizunaConnect("greenregular")
                  },
                },
                {
                  times: 2,
                  name: "レッドカジュアル",
                  stamp: stampKizunaCasual,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampKizuna ===
                    "redcasual",
                  selected: () => {
                    selectedStampKizunaConnect("redcasual")
                  },
                },
                {
                  times: 2,
                  name: "レッドレギュラー",
                  stamp: stampKizunaRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampKizuna ===
                    "redregular",
                  selected: () => {
                    selectedStampKizunaConnect("redregular")
                  },
                },
                {
                  times: 3,
                  name: "オレンジカジュアル",
                  stamp: stampKizunaCasual,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampKizuna ===
                    "orangecasual",
                  selected: () => {
                    selectedStampKizunaCheer("orangecasual")
                  },
                },
                {
                  times: 3,
                  name: "オレンジレギュラー",
                  stamp: stampKizunaRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampKizuna ===
                    "orangeregular",
                  selected: () => {
                    selectedStampKizunaCheer("orangeregular")
                  },
                },
                {
                  times: 3,
                  name: "パープルカジュアル",
                  stamp: stampKizunaCasual,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampKizuna ===
                    "purplecasual",
                  selected: () => {
                    selectedStampKizunaCheer("purplecasual")
                  },
                },
                {
                  times: 3,
                  name: "パープルレギュラー",
                  stamp: stampKizunaRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampKizuna ===
                    "purpleregular",
                  selected: () => {
                    selectedStampKizunaCheer("purpleregular")
                  },
                },
              ],
            },
            {
              name: "ログイン",
              children: [
                {
                  times: 1,
                  name: "ホワイトカジュアル",
                  stamp: stampLoginCasual,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLogin ===
                    "whitecasual",
                  selected: () => {
                    selectedStampLoginBloom("whitecasual")
                  },
                },
                {
                  times: 1,
                  name: "ホワイトレギュラー",
                  stamp: stampLoginRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLogin ===
                    "whiteregular",
                  selected: () => {
                    selectedStampLoginBloom("whiteregular")
                  },
                },
                {
                  times: 1,
                  name: "ブルーカジュアル",
                  stamp: stampLoginCasual,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLogin ===
                    "bluecasual",
                  selected: () => {
                    selectedStampLoginBloom("bluecasual")
                  },
                },
                {
                  times: 1,
                  name: "ブルーレギュラー",
                  stamp: stampLoginRegular,
                  isChecked:
                    state.acquisition.stamp.bloom.selectedStampLogin ===
                    "blueregular",
                  selected: () => {
                    selectedStampLoginBloom("blueregular")
                  },
                },
                {
                  times: 2,
                  name: "グリーンカジュアル",
                  stamp: stampLoginCasual,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLogin ===
                    "greencasual",
                  selected: () => {
                    selectedStampLoginConnect("greencasual")
                  },
                },
                {
                  times: 2,
                  name: "グリーンレギュラー",
                  stamp: stampLoginRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLogin ===
                    "greenregular",
                  selected: () => {
                    selectedStampLoginConnect("greenregular")
                  },
                },
                {
                  times: 2,
                  name: "レッドカジュアル",
                  stamp: stampLoginCasual,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLogin ===
                    "redcasual",
                  selected: () => {
                    selectedStampLoginConnect("redcasual")
                  },
                },
                {
                  times: 2,
                  name: "レッドレギュラー",
                  stamp: stampLoginRegular,
                  isChecked:
                    state.acquisition.stamp.connect.selectedStampLogin ===
                    "redregular",
                  selected: () => {
                    selectedStampLoginConnect("redregular")
                  },
                },
                {
                  times: 3,
                  name: "オレンジカジュアル",
                  stamp: stampLoginCasual,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLogin ===
                    "orangecasual",
                  selected: () => {
                    selectedStampLoginCheer("orangecasual")
                  },
                },
                {
                  times: 3,
                  name: "オレンジレギュラー",
                  stamp: stampLoginRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLogin ===
                    "orangeregular",
                  selected: () => {
                    selectedStampLoginCheer("orangeregular")
                  },
                },
                {
                  times: 3,
                  name: "パープルカジュアル",
                  stamp: stampLoginCasual,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLogin ===
                    "purplecasual",
                  selected: () => {
                    selectedStampLoginCheer("purplecasual")
                  },
                },
                {
                  times: 3,
                  name: "パープルレギュラー",
                  stamp: stampLoginRegular,
                  isChecked:
                    state.acquisition.stamp.cheer.selectedStampLogin ===
                    "purpleregular",
                  selected: () => {
                    selectedStampLoginCheer("purpleregular")
                  },
                },
              ],
            },
            {
              name: "ショップ",
              isSkip: times === 1 ? false : true,
              isChecked: state.acquisition.stamp.bloom.isStampShop,
              selected: () => {
                dispatch.acquisition.stamp.bloom.setIsStampShop(
                  (state) => !state,
                )
              },
            },
          ]
            .filter(({ isSkip }) => !isSkip)
            .map(({ name, children, selected, isChecked }, index) => (
              <React.Fragment key={index}>
                <div className="font-bold border-red-300 border-l-8 pl-2">
                  {name}
                </div>
                {!children && (
                  <>
                    <div
                      onClick={() => {
                        selected()
                      }}
                      className="hover:cursor-pointer"
                    >
                      <Stack alignItems="center" direction="row" gap={1}>
                        {isChecked ? (
                          <CheckBoxOutlined className="text-teal-600" />
                        ) : (
                          <CheckBoxOutlineBlank />
                        )}
                        <div>
                          {name} <span>※花びらの獲得はありません</span>
                        </div>
                      </Stack>
                    </div>
                  </>
                )}
                <div className="space-y-2">
                  {children &&
                    children
                      .filter(({ times: cardTimes }) => cardTimes === times)
                      .map(
                        (
                          { name: cardName, isChecked, stamp, selected },
                          index2,
                        ) => (
                          <React.Fragment key={index2}>
                            <div
                              onClick={() => {
                                selected()
                              }}
                              className="hover:cursor-pointer"
                            >
                              <Stack
                                alignItems="center"
                                direction="row"
                                gap={0.5}
                              >
                                {isChecked ? (
                                  <CheckBoxOutlined className="text-teal-600" />
                                ) : (
                                  <CheckBoxOutlineBlank />
                                )}
                                <div>{cardName}</div>
                                <RequiredBadge
                                  required={{
                                    white:
                                      cardName.indexOf("ホワイト") !== -1
                                        ? stamp.missions.reduce(function (
                                            acc,
                                            obj,
                                          ) {
                                            return acc + obj.petals
                                          }, 0) + stamp.complete
                                        : 0,
                                    blue:
                                      cardName.indexOf("ブルー") !== -1
                                        ? stamp.missions.reduce(function (
                                            acc,
                                            obj,
                                          ) {
                                            return acc + obj.petals
                                          }, 0) + stamp.complete
                                        : 0,
                                    green:
                                      cardName.indexOf("グリーン") !== -1
                                        ? stamp.missions.reduce(function (
                                            acc,
                                            obj,
                                          ) {
                                            return acc + obj.petals
                                          }, 0) + stamp.complete
                                        : 0,
                                    red:
                                      cardName.indexOf("レッド") !== -1
                                        ? stamp.missions.reduce(function (
                                            acc,
                                            obj,
                                          ) {
                                            return acc + obj.petals
                                          }, 0) + stamp.complete
                                        : 0,
                                    orange:
                                      cardName.indexOf("オレンジ") !== -1
                                        ? stamp.missions.reduce(function (
                                            acc,
                                            obj,
                                          ) {
                                            return acc + obj.petals
                                          }, 0) + stamp.complete
                                        : 0,
                                    purple:
                                      cardName.indexOf("パープル") !== -1
                                        ? stamp.missions.reduce(function (
                                            acc,
                                            obj,
                                          ) {
                                            return acc + obj.petals
                                          }, 0) + stamp.complete
                                        : 0,
                                  }}
                                />
                              </Stack>
                            </div>
                          </React.Fragment>
                        ),
                      )}
                </div>
              </React.Fragment>
            ))}
          <div className="font-bold">ミッションの確認</div>
          {(state.acquisition.stamp.bloom.selectedStampIroiro ||
            state.acquisition.stamp.connect.selectedStampIroiro ||
            state.acquisition.stamp.cheer.selectedStampIroiro) && (
            <StampCard {...props} type="iroiro" />
          )}
          {(state.acquisition.stamp.bloom.selectedStampGachi ||
            state.acquisition.stamp.connect.selectedStampGachi ||
            state.acquisition.stamp.cheer.selectedStampGachi) && (
            <StampCard {...props} type="gachi" />
          )}
          {(state.acquisition.stamp.bloom.selectedStampLive ||
            state.acquisition.stamp.connect.selectedStampLive ||
            state.acquisition.stamp.cheer.selectedStampLive) && (
            <StampCard {...props} type="live" />
          )}
          {(state.acquisition.stamp.bloom.selectedStampKizuna ||
            state.acquisition.stamp.connect.selectedStampKizuna ||
            state.acquisition.stamp.cheer.selectedStampKizuna) && (
            <StampCard {...props} type="kizuna" />
          )}
          {(state.acquisition.stamp.bloom.selectedStampLogin ||
            state.acquisition.stamp.connect.selectedStampLogin ||
            state.acquisition.stamp.cheer.selectedStampLogin) && (
            <StampCard {...props} type="login" />
          )}
        </div>
      </div>
    </>
  )
}
