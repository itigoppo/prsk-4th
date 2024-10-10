import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { UseCalcReturn } from "@/app/View/calc"
import { eventRankRange } from "@/app/View/constant"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

type Props = UseCalcReturn & { times: number }

export const EventRanking: FC<Props> = ({ state, dispatch, times }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
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

        <div className="space-y-2">
          {eventRankRange.map(({ rank, petals }, index) => (
            <div
              key={index}
              onClick={() => {
                if (times === 1) {
                  dispatch.acquisition.setAnniversaryEventRank(rank)
                }
                if (times === 2) {
                  dispatch.acquisition.setOclockEventRank(rank)
                }
                if (times === 3) {
                  dispatch.acquisition.setVbsEventRank(rank)
                }
              }}
              className="hover:cursor-pointer"
            >
              <Stack alignItems="center" direction="row" gap={0.5}>
                {(times === 1 &&
                  state.acquisition.anniversaryEventRank === rank) ||
                (times === 2 && state.acquisition.oclockEventRank === rank) ||
                (times === 3 && state.acquisition.vbsEventRank === rank) ? (
                  <RadioButtonChecked className="text-teal-600" />
                ) : (
                  <RadioButtonUnchecked />
                )}
                <div>
                  {eventRankRange[index - 1]?.rank ?? 1} -{" "}
                  {rank !== 0 && `${rank}位`}
                </div>

                <RequiredBadge
                  required={{
                    white: times === 3 ? petals : 0,
                    blue: times === 3 ? petals : 0,
                    green: times === 1 ? petals : 0,
                    red: times === 1 ? petals : 0,
                    orange: times === 2 ? petals : 0,
                    purple: times === 2 ? petals : 0,
                  }}
                />
              </Stack>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
