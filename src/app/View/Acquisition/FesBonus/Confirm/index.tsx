import { useFortuneFlowerContext } from "@/app/Context"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useFortuneFlowerContext()

  const wild = Math.floor(state.acquisition.fesBonus / 50)

  return (
    <>
      {wild > 0 && (
        <div className="space-y-4">
          <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
            <div>
              ブルフェスガチャボーナス
              <span className="text-pink-600">(9/30〜10/12)</span>
            </div>
          </div>

          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />
            {state.acquisition.fesBonus}ガチャボーナス
          </Stack>
        </div>
      )}
    </>
  )
}
