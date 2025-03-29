import { useFortuneFlowerContext } from "@/app/4th/Context"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useFortuneFlowerContext()
  return (
    <>
      {state.acquisition.hasCmpensationAnnivCard && (
        <div className="space-y-4">
          <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
            <div>補填</div>
          </div>

          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />
            混合寧々バナーのピックアップカードを所持している
          </Stack>
        </div>
      )}
    </>
  )
}
