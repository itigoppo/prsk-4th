import { useFortuneFlowerContext } from "@/app/4th/Context"
import { Stars } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC, useMemo } from "react"
import { StampCard } from "./StampCard"

type Props = { times: number }

export const Confirm: FC<Props> = ({ times }) => {
  const { state } = useFortuneFlowerContext()

  const selectedStampsBloom = useMemo(() => {
    return [
      state.acquisition.stamp.bloom.selectedStampIroiro,
      state.acquisition.stamp.bloom.selectedStampLive,
      state.acquisition.stamp.bloom.selectedStampKizuna,
      state.acquisition.stamp.bloom.selectedStampLogin,
      state.acquisition.stamp.bloom.selectedStampGachi,
      state.acquisition.stamp.bloom.isStampShop,
    ].filter((stamp) => stamp)
  }, [
    state.acquisition.stamp.bloom.selectedStampIroiro,
    state.acquisition.stamp.bloom.selectedStampLive,
    state.acquisition.stamp.bloom.selectedStampKizuna,
    state.acquisition.stamp.bloom.selectedStampLogin,
    state.acquisition.stamp.bloom.selectedStampGachi,
    state.acquisition.stamp.bloom.isStampShop,
  ])

  const selectedStampsConnect = useMemo(() => {
    return [
      state.acquisition.stamp.connect.selectedStampIroiro,
      state.acquisition.stamp.connect.selectedStampLive,
      state.acquisition.stamp.connect.selectedStampKizuna,
      state.acquisition.stamp.connect.selectedStampLogin,
      state.acquisition.stamp.connect.selectedStampGachi,
    ].filter((stamp) => stamp)
  }, [
    state.acquisition.stamp.connect.selectedStampIroiro,
    state.acquisition.stamp.connect.selectedStampLive,
    state.acquisition.stamp.connect.selectedStampKizuna,
    state.acquisition.stamp.connect.selectedStampLogin,
    state.acquisition.stamp.connect.selectedStampGachi,
  ])

  const selectedStampsCheer = useMemo(() => {
    return [
      state.acquisition.stamp.cheer.selectedStampIroiro,
      state.acquisition.stamp.cheer.selectedStampLive,
      state.acquisition.stamp.cheer.selectedStampKizuna,
      state.acquisition.stamp.cheer.selectedStampLogin,
      state.acquisition.stamp.cheer.selectedStampGachi,
    ].filter((stamp) => stamp)
  }, [
    state.acquisition.stamp.cheer.selectedStampIroiro,
    state.acquisition.stamp.cheer.selectedStampLive,
    state.acquisition.stamp.cheer.selectedStampKizuna,
    state.acquisition.stamp.cheer.selectedStampLogin,
    state.acquisition.stamp.cheer.selectedStampGachi,
  ])

  const isSelectedShop = useMemo(() => {
    if (times === 1 && state.acquisition.stamp.bloom.isStampShop) {
      return true
    }

    return false
  }, [times, state.acquisition.stamp.bloom.isStampShop])

  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
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
        {((times === 1 && selectedStampsBloom.length < 4) ||
          (times === 2 && selectedStampsConnect.length < 3) ||
          (times === 3 && selectedStampsCheer.length < 3)) && (
          <Alert severity="error">
            カード選択数が足りないYo!!! (
            <span className="font-bold">
              {times === 1 && selectedStampsBloom.length}
              {times === 2 && selectedStampsConnect.length}
              {times === 3 && selectedStampsCheer.length} /{" "}
              {times === 1 ? 4 : 3}
            </span>
            枚)
          </Alert>
        )}
        {((times === 1 && selectedStampsBloom.length > 4) ||
          (times === 2 && selectedStampsConnect.length > 3) ||
          (times === 3 && selectedStampsCheer.length > 3)) && (
          <Alert severity="error">
            カード選択数が多いYo!!! (
            <span className="font-bold">
              {times === 1 && selectedStampsBloom.length}
              {times === 2 && selectedStampsConnect.length}
              {times === 3 && selectedStampsCheer.length} /{" "}
              {times === 1 ? 4 : 3}
            </span>
            枚)
          </Alert>
        )}

        <div className="space-y-2">
          <StampCard times={times} type="iroiro" />
          <StampCard times={times} type="gachi" />
          <StampCard times={times} type="live" />
          <StampCard times={times} type="kizuna" />
          <StampCard times={times} type="login" />
          {isSelectedShop && (
            <>
              <Stack alignItems="center" direction="row" gap={1}>
                <Stars className="text-lime-500" />
                ブルー ショップカード
              </Stack>
            </>
          )}
        </div>
      </div>
    </>
  )
}
