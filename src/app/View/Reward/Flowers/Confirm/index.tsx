import { Stars } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"
import { Item } from ".."

type Props = {
  items: Item[]
}

export const Confirm: FC<Props> = ({ items }) => {
  return (
    <div className="space-y-2 text-sm">
      {items.filter(({ checked }) => checked).length === 0 && (
        <Alert severity="warning">報酬が選択されていません</Alert>
      )}

      {items
        .filter(({ checked }) => checked)
        .map(({ label }, index) => (
          <Stack alignItems="center" direction="row" gap={1} key={index}>
            <Stars className="text-lime-500" />
            {label}
          </Stack>
        ))}
    </div>
  )
}
