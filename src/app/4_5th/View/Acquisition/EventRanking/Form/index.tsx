import { useWorldBloomContext } from "@/app/4_5th/Context"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"
import { eventRankRange } from "../../../constant"

export const Form: FC = () => {
  const { state, dispatch } = useWorldBloomContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">達成した順位を選択</Alert>

      <div className="space-y-2">
        {eventRankRange.map(({ rank, pieces }, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch.acquisition.setLeoneedEventRank(rank)
            }}
            className="hover:cursor-pointer"
          >
            <Stack alignItems="center" direction="row" gap={0.5}>
              {state.acquisition.leoneedEventRank === rank ? (
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
                  wild: pieces,
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
        ))}
      </div>
    </div>
  )
}
