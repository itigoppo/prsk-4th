import { useFortuneFlowerContext } from "@/app/4th/Context"
import { Stars } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useFortuneFlowerContext()

  return (
    <>
      <div className="space-y-2 text-sm">
        {state.acquisition.liveMission === 0 ? (
          <Alert severity="error">ライブ1回もしてないことになってるYo!!!</Alert>
        ) : (
          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />

            <div>
              {state.acquisition.liveMission}pt獲得
              {state.acquisition.isPremiumLiveMission && (
                <span>(プレパス加入済み)</span>
              )}
              {state.acquisition.liveMission >= 20000 && (
                <span className="text-pink-500">[コンプリート！]</span>
              )}
            </div>
          </Stack>
        )}
      </div>
    </>
  )
}
