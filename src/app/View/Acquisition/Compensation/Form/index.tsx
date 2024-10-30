import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { useFortuneFlowerContext } from "@/app/Context"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

export const Form: FC = () => {
  const { state, dispatch } = useFortuneFlowerContext()

  return (
    <div className="space-y-2 text-sm">
      <Alert severity="info">対象の場合チェック</Alert>

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
          <div>
            <RequiredBadge
              required={{
                wild: 1,
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
