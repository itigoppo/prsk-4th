import { useFortuneFlowerContext } from "@/app/Context"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useFortuneFlowerContext()
  return (
    <>
      {state.acquisition.isHappiness && (
        <div className="space-y-4">
          <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
            <div>
              ハピネスガチャ
              <span className="text-pink-600">(10/12〜10/21)</span>
            </div>
          </div>

          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />
            おまけにワイルドフォーチュンフラワーを選択した
          </Stack>
        </div>
      )}
    </>
  )
}
