import { Stars } from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"
import { Item } from ".."

type Props = {
  items: Item[]
}

export const Confirm: FC<Props> = ({ items }) => {
  return (
    <>
      {items.filter(({ checked }) => checked).length > 0 && (
        <div className="space-y-4">
          <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
            プレミアムプレゼントガチャ
            <span className="text-pink-600">(〜10/31)</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {items
              .filter(({ checked }) => checked)
              .map(({ label }, index) => (
                <Stack alignItems="center" direction="row" gap={1} key={index}>
                  <Stars className="text-lime-500" />
                  {label}
                </Stack>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
