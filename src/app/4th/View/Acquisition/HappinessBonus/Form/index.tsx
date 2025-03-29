import { useFortuneFlowerContext } from "@/app/4th/Context"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

export const Form: FC = () => {
  const { state, dispatch } = useFortuneFlowerContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">対象の場合チェック</Alert>

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
          <div>
            <RequiredBadge
              required={{
                wild: 2,
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
