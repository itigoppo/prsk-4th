import { useWorldBloomContext } from "@/app/4_5th/Context"
import { Alert } from "@mui/material"
import { FC, useMemo } from "react"
import { StampCard } from "./StampCard"

export const Confirm: FC = () => {
  const { state } = useWorldBloomContext()

  const selectedStamps = useMemo(() => {
    return [
      state.acquisition.stamp.selectedStampLiveBonus,
      state.acquisition.stamp.selectedStampMusic,
      state.acquisition.stamp.selectedStampLive,
      state.acquisition.stamp.selectedStampEvent,
      state.acquisition.stamp.selectedStampMoney,
    ].filter((stamp) => stamp)
  }, [
    state.acquisition.stamp.selectedStampLiveBonus,
    state.acquisition.stamp.selectedStampMusic,
    state.acquisition.stamp.selectedStampLive,
    state.acquisition.stamp.selectedStampEvent,
    state.acquisition.stamp.selectedStampMoney,
  ])

  return (
    <>
      <div className="space-y-4">
        <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
          <div>
            スタンプミッション{" "}
            <span className="text-pink-600">(03/30〜04/08)</span>
          </div>
        </div>
        {selectedStamps.length < 5 && (
          <Alert severity="error">
            カード選択数が足りないYo!!! (
            <span className="font-bold">{selectedStamps.length} / 5</span>
            枚)
          </Alert>
        )}

        <div className="space-y-2">
          <StampCard type="liveBonus" />
          <StampCard type="music" />
          <StampCard type="live" />
          <StampCard type="event" />
          <StampCard type="money" />
        </div>
      </div>
    </>
  )
}
