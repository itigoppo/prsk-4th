import { useWorldBloomContext } from "@/app/4_5th/Context"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useWorldBloomContext()

  return (
    <>
      {state.acquisition.numberOfEventBadge > 0 && (
        <>
          <div className="space-y-2 text-sm">
            <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
              <div>
                イベント交換所 / L/n箱志歩バナー(
                <span className="text-pink-600">03/30〜04/06</span>)
              </div>
            </div>
            {[
              {
                label: "ワールドピース",
                numberOfEventBadge: state.acquisition.numberOfEventBadge,
              },
            ]
              .filter(({ numberOfEventBadge }) => numberOfEventBadge !== 0)
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
