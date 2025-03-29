import { useWorldBloomContext } from "@/app/4_5th/Context"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

export const Form: FC = () => {
  const { state, dispatch } = useWorldBloomContext()

  return (
    <div className="space-y-4 text-sm">
      <Alert severity="info">手に入れたいアイテムの交換回数にチェック</Alert>

      <Stack alignItems="center" direction="row" gap={1}>
        <div className="border-l-8 border-red-300 pl-2 font-bold">
          ワールドピース
        </div>

        <RequiredBadge
          required={{
            wild: 10,
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
        {Array(15 + 1)
          .fill(0)
          .map((__val, index) => (
            <div
              key={index}
              onClick={() => {
                dispatch.acquisition.setNumberOfEventBadge(index)
              }}
              className="hover:cursor-pointer"
            >
              <Stack alignItems="center" direction="row" gap={0.5}>
                {state.acquisition.numberOfEventBadge === index ? (
                  <RadioButtonChecked className="text-teal-600" />
                ) : (
                  <RadioButtonUnchecked />
                )}
                <span>{index}回交換</span>
              </Stack>
            </div>
          ))}
      </div>
    </div>
  )
}
