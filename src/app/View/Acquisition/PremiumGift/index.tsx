import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { UseCalcReturn } from "@/app/View/calc"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"

type Props = UseCalcReturn

export const PremiumGift: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2">
          プレミアムプレゼントガチャ(〜10/31)
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            {
              label: "VS",
              checked: state.acquisition.isGachaVs,
              required: {
                white: 100,
                blue: 0,
                green: 0,
                red: 0,
                orange: 0,
                purple: 0,
              },
              onClick: () => {
                dispatch.acquisition.setIsGachaVs((state) => !state)
              },
            },
            {
              label: "L/n",
              checked: state.acquisition.isGachaLn,
              required: {
                white: 0,
                blue: 100,
                green: 0,
                red: 0,
                orange: 0,
                purple: 0,
              },
              onClick: () => {
                dispatch.acquisition.setIsGachaLn((state) => !state)
              },
            },
            {
              label: "MMJ",
              checked: state.acquisition.isGachaMmj,
              required: {
                white: 0,
                blue: 0,
                green: 100,
                red: 0,
                orange: 0,
                purple: 0,
              },
              onClick: () => {
                dispatch.acquisition.setIsGachaMmj((state) => !state)
              },
            },
            {
              label: "VBS",
              checked: state.acquisition.isGachaVbs,
              required: {
                white: 0,
                blue: 0,
                green: 0,
                red: 100,
                orange: 0,
                purple: 0,
              },
              onClick: () => {
                dispatch.acquisition.setIsGachaVbs((state) => !state)
              },
            },
            {
              label: "WxS",
              checked: state.acquisition.isGachaWs,
              required: {
                white: 0,
                blue: 0,
                green: 0,
                red: 0,
                orange: 100,
                purple: 0,
              },
              onClick: () => {
                dispatch.acquisition.setIsGachaWs((state) => !state)
              },
            },
            {
              label: "25",
              checked: state.acquisition.isGacha25,
              required: {
                white: 0,
                blue: 0,
                green: 0,
                red: 0,
                orange: 0,
                purple: 100,
              },
              onClick: () => {
                dispatch.acquisition.setIsGacha25((state) => !state)
              },
            },
          ].map(({ label, checked, required, onClick }, index) => (
            <div
              key={index}
              onClick={() => {
                onClick()
              }}
              className="hover:cursor-pointer"
            >
              <Stack alignItems="center" direction="row" gap={1}>
                {checked ? (
                  <CheckBoxOutlined className="text-teal-600" />
                ) : (
                  <CheckBoxOutlineBlank />
                )}
                <div>{label}</div>
                <RequiredBadge required={required} />
              </Stack>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
