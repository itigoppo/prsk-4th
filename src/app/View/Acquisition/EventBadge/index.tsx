import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { UseCalcReturn } from "@/app/View/calc"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

type Props = UseCalcReturn & { times: number }

export const EventBadge: FC<Props> = ({ state, dispatch, times }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
          <div>
            イベント交換所 /{" "}
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
          <div className="font-bold border-red-300 border-l-8 pl-2">
            {times === 1 && <>緑色の花びら</>}
            {times === 2 && <>橙色の花びら</>}
            {times === 3 && <>白色の花びら</>}
          </div>

          <RequiredBadge
            required={{
              white: times === 3 ? 5 : 0,
              blue: times === 3 ? 0 : 0,
              green: times === 1 ? 5 : 0,
              red: times === 1 ? 0 : 0,
              orange: times === 2 ? 5 : 0,
              purple: times === 2 ? 0 : 0,
            }}
          />
        </Stack>

        <div className="grid grid-cols-3 gap-2">
          {Array(10 + 1)
            .fill(0)
            .map((__val, index) => (
              <div
                key={index}
                onClick={() => {
                  if (times === 1) {
                    dispatch.acquisition.setNumberOfEventBadgeGreen(index)
                  }
                  if (times === 2) {
                    dispatch.acquisition.setNumberOfEventBadgeOrange(index)
                  }
                  if (times === 3) {
                    dispatch.acquisition.setNumberOfEventBadgeWhite(index)
                  }
                }}
                className="hover:cursor-pointer"
              >
                <Stack alignItems="center" direction="row" gap={0.5}>
                  {(times === 1 &&
                    state.acquisition.numberOfEventBadgeGreen === index) ||
                  (times === 2 &&
                    state.acquisition.numberOfEventBadgeOrange === index) ||
                  (times === 3 &&
                    state.acquisition.numberOfEventBadgeWhite === index) ? (
                    <RadioButtonChecked className="text-teal-600" />
                  ) : (
                    <RadioButtonUnchecked />
                  )}
                  <span>{index}回交換</span>
                </Stack>
              </div>
            ))}
        </div>

        <Stack alignItems="center" direction="row" gap={1}>
          <div className="font-bold border-red-300 border-l-8 pl-2">
            {times === 1 && <>赤色の花びら</>}
            {times === 2 && <>紫色の花びら</>}
            {times === 3 && <>青色の花びら</>}
          </div>

          <RequiredBadge
            required={{
              white: times === 3 ? 0 : 0,
              blue: times === 3 ? 5 : 0,
              green: times === 1 ? 0 : 0,
              red: times === 1 ? 5 : 0,
              orange: times === 2 ? 0 : 0,
              purple: times === 2 ? 5 : 0,
            }}
          />
        </Stack>

        <div className="grid grid-cols-3 gap-2">
          {Array(10 + 1)
            .fill(0)
            .map((__val2, index2) => (
              <div
                key={index2}
                onClick={() => {
                  if (times === 1) {
                    dispatch.acquisition.setNumberOfEventBadgeRed(index2)
                  }
                  if (times === 2) {
                    dispatch.acquisition.setNumberOfEventBadgePurple(index2)
                  }
                  if (times === 3) {
                    dispatch.acquisition.setNumberOfEventBadgeBlue(index2)
                  }
                }}
                className="hover:cursor-pointer"
              >
                <Stack alignItems="center" direction="row" gap={0.5}>
                  {(times === 1 &&
                    state.acquisition.numberOfEventBadgeRed === index2) ||
                  (times === 2 &&
                    state.acquisition.numberOfEventBadgePurple === index2) ||
                  (times === 3 &&
                    state.acquisition.numberOfEventBadgeBlue === index2) ? (
                    <RadioButtonChecked className="text-teal-600" />
                  ) : (
                    <RadioButtonUnchecked />
                  )}
                  <span>{index2}回交換</span>
                </Stack>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
