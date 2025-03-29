import { useWorldBloomContext } from "@/app/4_5th/Context"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

export const Form: FC = () => {
  const { state, dispatch } = useWorldBloomContext()

  return (
    <div className="space-y-2 text-sm">
      <Alert severity="info">対象の場合チェック</Alert>

      <div
        onClick={() => {
          dispatch.acquisition.setIsHeartfeltGift((state) => !state)
        }}
        className="hover:cursor-pointer"
      >
        <Stack alignItems="center" direction="row" gap={1}>
          {state.acquisition.isHeartfeltGift ? (
            <CheckBoxOutlined className="text-teal-600" />
          ) : (
            <CheckBoxOutlineBlank />
          )}
          <div>ハートフルギフトガチャを引く</div>
          <div>
            <RequiredBadge
              required={{
                wild: 200,
                white: 0,
                blue: 0,
                green: 0,
                red: 0,
                orange: 0,
                purple: 0,
              }}
            />
          </div>
        </Stack>
      </div>
    </div>
  )
}
