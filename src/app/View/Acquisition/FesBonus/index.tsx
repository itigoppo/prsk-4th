import { TextField } from "@mui/material"
import { ChangeEvent, FC } from "react"
import { UseCalcReturn } from "../../calc"

type Props = UseCalcReturn

export const FesBonus: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
          <div>
            ブルフェス<span className="text-pink-600">(〜10/12)</span>
          </div>
          <div>
            <span className="rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
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
    </>
  )
}
