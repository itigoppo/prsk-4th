import { useFortuneFlowerContext } from "@/app/4th/Context"
import { eventRankRange } from "@/app/4th/View/constant"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC, useMemo } from "react"

type Props = { times: number }

export const Confirm: FC<Props> = ({ times }) => {
  const { state } = useFortuneFlowerContext()

  const hasRewards = useMemo(() => {
    switch (times) {
      case 1:
        return state.acquisition.anniversaryEventRank > 0
      case 2:
        return state.acquisition.oclockEventRank > 0
      case 3:
        return state.acquisition.vbsEventRank > 0
      default:
        return false
    }
  }, [
    times,
    state.acquisition.anniversaryEventRank,
    state.acquisition.oclockEventRank,
    state.acquisition.vbsEventRank,
  ])

  const lowerLimit = useMemo(() => {
    switch (times) {
      case 1:
        return state.acquisition.anniversaryEventRank
      case 2:
        return state.acquisition.oclockEventRank
      case 3:
        return state.acquisition.vbsEventRank
      default:
        return 0
    }
  }, [
    times,
    state.acquisition.anniversaryEventRank,
    state.acquisition.oclockEventRank,
    state.acquisition.vbsEventRank,
  ])

  const upperLimit = useMemo(() => {
    const index = eventRankRange.findIndex(({ rank }) => rank === lowerLimit)
    return index === 0 ? 1 : eventRankRange[index - 1].rank + 1
  }, [lowerLimit])

  return (
    <>
      {hasRewards && (
        <>
          <div className="space-y-2 text-sm">
            <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
              <div>
                イベントランキング /{" "}
                {times === 1 && (
                  <>
                    混合寧々バナー(
                    <span className="text-pink-600">09/30〜10/09</span>)
                  </>
                )}
                {times === 2 && (
                  <>
                    25箱瑞希バナー(
                    <span className="text-pink-600">
                      <s>10/11</s>10/12〜10/19
                    </span>
                    )
                  </>
                )}
                {times === 3 && (
                  <>
                    VBS箱彰人バナー(
                    <span className="text-pink-600">10/21〜10/29</span>)
                  </>
                )}
              </div>
            </div>

            <Stack alignItems="center" direction="row" gap={1}>
              <Stars className="text-lime-500" />
              {upperLimit} - {lowerLimit}位
            </Stack>
          </div>
        </>
      )}
    </>
  )
}
