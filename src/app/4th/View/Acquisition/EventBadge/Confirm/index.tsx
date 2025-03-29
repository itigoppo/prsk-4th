import { useFortuneFlowerContext } from "@/app/4th/Context"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC, useMemo } from "react"

type Props = { times: number }

export const Confirm: FC<Props> = ({ times }) => {
  const { state } = useFortuneFlowerContext()

  const hasRewards = useMemo(() => {
    switch (times) {
      case 1:
        return (
          state.acquisition.numberOfEventBadgeGreen > 0 ||
          state.acquisition.numberOfEventBadgeRed > 0
        )
      case 2:
        return (
          state.acquisition.numberOfEventBadgeOrange > 0 ||
          state.acquisition.numberOfEventBadgePurple > 0
        )
      case 3:
        return (
          state.acquisition.numberOfEventBadgeWhite > 0 ||
          state.acquisition.numberOfEventBadgeBlue > 0
        )
      default:
        return false
    }
  }, [
    times,
    state.acquisition.numberOfEventBadgeWhite,
    state.acquisition.numberOfEventBadgeBlue,
    state.acquisition.numberOfEventBadgeGreen,
    state.acquisition.numberOfEventBadgeRed,
    state.acquisition.numberOfEventBadgeOrange,
    state.acquisition.numberOfEventBadgePurple,
  ])

  return (
    <>
      {hasRewards && (
        <>
          <div className="space-y-2 text-sm">
            <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
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
            {[
              {
                label: "白色の花びら",
                numberOfEventBadge: state.acquisition.numberOfEventBadgeWhite,
                isSkip: times !== 3,
              },
              {
                label: "青色の花びら",
                numberOfEventBadge: state.acquisition.numberOfEventBadgeBlue,
                isSkip: times !== 3,
              },
              {
                label: "緑色の花びら",
                numberOfEventBadge: state.acquisition.numberOfEventBadgeGreen,
                isSkip: times !== 1,
              },
              {
                label: "赤色の花びら",
                numberOfEventBadge: state.acquisition.numberOfEventBadgeRed,
                isSkip: times !== 1,
              },
              {
                label: "橙色の花びら",
                numberOfEventBadge: state.acquisition.numberOfEventBadgeOrange,
                isSkip: times !== 2,
              },
              {
                label: "紫色の花びら",
                numberOfEventBadge: state.acquisition.numberOfEventBadgePurple,
                isSkip: times !== 2,
              },
            ]
              .filter(
                ({ isSkip, numberOfEventBadge }) =>
                  !isSkip && numberOfEventBadge !== 0,
              )
              .map(({ label, numberOfEventBadge }, index) => (
                <Stack alignItems="center" direction="row" gap={1} key={index}>
                  <Stars className="text-lime-500" />
                  {label} ({numberOfEventBadge}回交換)
                </Stack>
              ))}
          </div>
        </>
      )}
    </>
  )
}
