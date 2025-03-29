import { useWorldBloomContext } from "@/app/4_5th/Context"
import { eventRankRange } from "@/app/4th/View/constant"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC, useMemo } from "react"

export const Confirm: FC = () => {
  const { state } = useWorldBloomContext()

  const lowerLimit = useMemo(() => {
    return state.acquisition.leoneedEventRank
  }, [state.acquisition.leoneedEventRank])

  const upperLimit = useMemo(() => {
    const index = eventRankRange.findIndex(({ rank }) => rank === lowerLimit)
    return index === 0 ? 1 : eventRankRange[index - 1].rank + 1
  }, [lowerLimit])

  return (
    <>
      {state.acquisition.leoneedEventRank > 0 && (
        <>
          <div className="space-y-2 text-sm">
            <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
              <div>
                イベントランキング / L/n箱志歩バナー(
                <span className="text-pink-600">03/30〜04/06</span>)
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
