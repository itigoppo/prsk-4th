import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"
import { UseCalcReturn } from "../../calc"

type Props = UseCalcReturn

export const HappinessBonus: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
          <div>
            ハピネスガチャ<span className="text-pink-600">(10/12〜10/21)</span>
          </div>
          <div>
            <span className="rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
              2
            </span>
          </div>
        </div>

        <div
          onClick={() => {
            dispatch.acquisition.setIsHappiness((state) => !state)
          }}
          className="hover:cursor-pointer"
        >
          <Stack alignItems="center" direction="row" gap={1}>
            {state.acquisition.isHappiness ? (
              <CheckBoxOutlined className="text-teal-600" />
            ) : (
              <CheckBoxOutlineBlank />
            )}
            <div>おまけにワイルドフォーチュンフラワーを選択した</div>
          </Stack>
        </div>
      </div>
    </>
  )
}
