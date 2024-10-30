import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"
import { Item } from ".."

type Props = {
  items: Item[]
}

export const Form: FC<Props> = ({ items }) => {
  return (
    <div className="space-y-2 text-sm">
      <Alert severity="info">ガチャを回す予定、回したユニットをチェック</Alert>

      <div className="grid grid-cols-3 gap-2">
        {items.map(({ label, checked, rewards, onClick }, index) => (
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
              <RequiredBadge required={{ wild: 0, ...rewards }} />
            </Stack>
          </div>
        ))}
      </div>
    </div>
  )
}
