import { useFortuneFlowerContext } from "@/app/Context"
import { loginSchedule } from "@/app/View/constant"
import { Stars } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC } from "react"

export const Confirm: FC = () => {
  const { state } = useFortuneFlowerContext()
  return (
    <>
      <div className="space-y-2 text-sm">
        {loginSchedule.filter((schedule) =>
          state.acquisition.loginDays.includes(schedule.day),
        ).length === 0 && (
          <Alert severity="error">
            ログイン1日もしてないことになってるYo!!!
          </Alert>
        )}

        {loginSchedule.filter((schedule) =>
          state.acquisition.loginDays.includes(schedule.day),
        ).length === loginSchedule.length ? (
          <Stack alignItems="center" direction="row" gap={1}>
            <Stars className="text-lime-500" />
            すべての日程でログイン
          </Stack>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {loginSchedule
              .filter((schedule) =>
                state.acquisition.loginDays.includes(schedule.day),
              )
              .map((schedule, index) => (
                <Stack alignItems="center" direction="row" gap={1} key={index}>
                  <Stars className="text-lime-500" />
                  {schedule.day}
                </Stack>
              ))}
          </div>
        )}
      </div>
    </>
  )
}
