import { Alert } from "@mui/material"
import { FC } from "react"

export const Form: FC = () => {
  // const { state, dispatch } = useFortuneFlowerContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">対象の場合チェック</Alert>

      <div>※現時点で詳細不明</div>

      {/* <div
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
            <span className="grid size-5 place-items-center rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-[10px] font-bold leading-4 text-white">
              2
            </span>
          </div>
        </Stack>
      </div> */}
    </div>
  )
}
