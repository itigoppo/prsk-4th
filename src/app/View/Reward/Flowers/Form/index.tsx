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
      <Alert severity="info">手に入れたいアイテムにチェック</Alert>

      {items.map(({ label, checked, required, onClick }, index) => (
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
  )
}
