import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"
import { Item } from ".."

type Props = {
  items: Item[]
}

export const Form: FC<Props> = ({ items }) => {
  return (
    <div className="space-y-2 text-sm">
      <Alert severity="info">手に入れたいアイテムの交換回数にチェック</Alert>
      <Alert severity="warning">
        各色ジェム(上限100)及びコイン(上限なし)は必要数ワールドピース1で端数調整用のため入れていません
      </Alert>
      {items.map(({ label, selected, maximum, required, onClick }, index) => (
        <div key={index} className="space-y-2">
          <Stack alignItems="center" direction="row" gap={1}>
            <div className="border-l-8 border-red-300 pl-2 font-bold">
              {label}
            </div>
            <RequiredBadge
              required={{
                wild: required,
                white: 0,
                blue: 0,
                green: 0,
                red: 0,
                orange: 0,
                purple: 0,
              }}
            />
          </Stack>

          <div className="grid grid-cols-3 gap-2">
            {Array(maximum + 1)
              .fill(0)
              .map((__val, index2) => (
                <div
                  key={index2}
                  onClick={() => {
                    onClick(index2)
                  }}
                  className="hover:cursor-pointer"
                >
                  <Stack alignItems="center" direction="row" gap={0.5}>
                    {selected === index2 ? (
                      <RadioButtonChecked className="text-teal-600" />
                    ) : (
                      <RadioButtonUnchecked />
                    )}
                    <span>{index2}回交換</span>
                  </Stack>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
