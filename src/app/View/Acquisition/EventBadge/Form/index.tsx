import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { useFortuneFlowerContext } from "@/app/Context"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

type Props = { times: number }

export const Form: FC<Props> = ({ times }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">手に入れたいアイテムの交換回数にチェック</Alert>

      <Stack alignItems="center" direction="row" gap={1}>
        <div className="border-l-8 border-red-300 pl-2 font-bold">
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
        <div className="border-l-8 border-red-300 pl-2 font-bold">
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
  )
}
