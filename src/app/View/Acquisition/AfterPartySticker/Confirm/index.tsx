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
      {items.filter(({ selected }) => selected !== 0).length !== 0 && (
        <div className="space-y-2 text-sm">
          <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
            <div>
              フラワーアソートガチャ交換所
              <span className="text-pink-600">(10/27〜10/31)</span>
            </div>
          </div>

          {items
            .filter(({ selected }) => selected !== 0)
            .map(({ label, selected }, index) => (
              <Stack alignItems="center" direction="row" gap={1} key={index}>
                <Stars className="text-lime-500" />
                {label} ({selected}回交換)
              </Stack>
            ))}
        </div>
      )}
    </>
  )
}
