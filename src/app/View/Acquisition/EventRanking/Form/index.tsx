import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { useFortuneFlowerContext } from "@/app/Context"
import { eventRankRange } from "@/app/View/constant"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

type Props = { times: number }

export const Form: FC<Props> = ({ times }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">達成した順位を選択</Alert>

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
                {eventRankRange[index - 1]?.rank
                  ? eventRankRange[index - 1]?.rank + 1
                  : 1}{" "}
                - {rank !== 0 && `${rank}位`}
              </div>

              <RequiredBadge
                required={{
                  wild: 0,
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
  )
}
