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
            <span className="grid size-5 place-items-center rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-[10px] font-bold leading-4 text-white">
              1
            </span>
          </div>
        </Stack>
      </div>
    </div>
  )
}
