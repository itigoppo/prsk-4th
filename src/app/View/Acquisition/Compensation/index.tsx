import { UseCalcReturn } from "@/app/View/calc"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

type Props = UseCalcReturn

export const Compensation: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
          <div>補填</div>
          <div>
            <span className="rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
              1
            </span>
          </div>
        </div>

        <div
          onClick={() => {
            dispatch.acquisition.setHasCmpensationAnnivCard((state) => !state)
          }}
          className="hover:cursor-pointer"
        >
          <Stack alignItems="center" direction="row" gap={1}>
            {state.acquisition.hasCmpensationAnnivCard ? (
              <CheckBoxOutlined className="text-teal-600" />
            ) : (
              <CheckBoxOutlineBlank />
            )}
            <div>混合寧々バナーのピックアップカードを所持している</div>
          </Stack>
        </div>
      </div>
    </>
  )
}
