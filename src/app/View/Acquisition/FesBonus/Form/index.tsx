import { useFortuneFlowerContext } from "@/app/Context"
import { Alert, TextField } from "@mui/material"
import { ChangeEvent, FC } from "react"

export const Form: FC = () => {
  const { state, dispatch } = useFortuneFlowerContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">到達したガチャボーナスを入力してください</Alert>

      <div className="flex gap-x-1 border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
        <div>ガチャボーナス(50毎に1ワイルドフォーチュンフラワー)</div>
        <div>
          <span className="grid size-5 place-items-center rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-[10px] font-bold leading-4 text-white">
            n
          </span>
        </div>
      </div>

      <div>
        <TextField
          label="到達済みガチャボーナス"
          variant="outlined"
          type="number"
          value={state.acquisition.fesBonus}
          size="small"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (
              e.currentTarget.value.length > 0 ||
              e.currentTarget.value === ""
            ) {
              dispatch.acquisition.setFesBonus(0)
            }
            const parsedValue = parseInt(e.currentTarget.value, 10)
            if (isNaN(parsedValue)) return
            dispatch.acquisition.setFesBonus(parsedValue)
          }}
        />
      </div>
    </div>
  )
}
