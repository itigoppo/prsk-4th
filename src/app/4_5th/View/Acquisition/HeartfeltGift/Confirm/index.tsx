import { useWorldBloomContext } from "@/app/4_5th/Context"
import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useWorldBloomContext()
  return (
    <>
      {state.acquisition.isHeartfeltGift && (
        <div className="space-y-4">
          <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
            ハートフルギフトガチャ
            <span className="text-pink-600">(03/30〜04/08)</span>
          </div>

          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />
            ハートフルギフトガチャを引く
          </Stack>
        </div>
      )}
    </>
  )
}
