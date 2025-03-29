import { useWorldBloomContext } from "@/app/4_5th/Context"
import { loginSchedule } from "@/app/4_5th/View/constant"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material"
import { Alert, Stack } from "@mui/material"
import { FC, useEffect, useState } from "react"

export const Form: FC = () => {
  const { state, dispatch } = useWorldBloomContext()

  const [isAllLogin, setIsAllLogin] = useState<boolean>(false)

  useEffect(() => {
    const checkedDays = loginSchedule.filter((item) =>
      state.acquisition.loginDays.includes(item.day),
    )
    setIsAllLogin(checkedDays.length === loginSchedule.length)
  }, [state.acquisition.loginDays])

  return (
    <div className="space-y-2 text-sm">
      <Alert severity="info">ログインした日をチェック</Alert>

      <div
        onClick={() => {
          setIsAllLogin((state) => !state)
          if (isAllLogin) {
            dispatch.acquisition.setLoginDays([])
          } else {
            dispatch.acquisition.setLoginDays(
              loginSchedule.map((item) => item.day),
            )
          }
        }}
        className="hover:cursor-pointer"
      >
        <Stack alignItems="center" direction="row" gap={1}>
          {isAllLogin ? (
            <CheckBoxOutlined className="text-teal-600" />
          ) : (
            <CheckBoxOutlineBlank />
          )}
          <div className="font-bold text-pink-600">すべての日程でログイン</div>
          <RequiredBadge
            required={{
              wild: loginSchedule.reduce(function (acc, obj) {
                return acc + obj.pieces
              }, 0),
              white: 0,
              blue: 0,
              green: 0,
              red: 0,
              orange: 0,
              purple: 0,
            }}
          />
        </Stack>
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-gray-500 pt-3">
        {loginSchedule.map((schedule, index) => (
          <div
            key={index}
            onClick={() => {
              if (state.acquisition.loginDays.includes(schedule.day)) {
                dispatch.acquisition.setLoginDays(
                  state.acquisition.loginDays.filter(
                    (loginDay) => loginDay !== schedule.day,
                  ),
                )
                setIsAllLogin(false)
              } else {
                const uniqueLoginDays = [
                  ...new Set(
                    state.acquisition.loginDays.concat([schedule.day]),
                  ),
                ]
                dispatch.acquisition.setLoginDays(uniqueLoginDays)

                const checkedDays = loginSchedule.filter((item) =>
                  uniqueLoginDays.includes(item.day),
                )
                setIsAllLogin(checkedDays.length === loginSchedule.length)
              }
            }}
            className="hover:cursor-pointer"
          >
            <Stack alignItems="center" direction="row" gap={1}>
              {state.acquisition.loginDays.includes(schedule.day) ? (
                <CheckBoxOutlined className="text-teal-600" />
              ) : (
                <CheckBoxOutlineBlank />
              )}
              <div>{schedule.day}</div>
              <RequiredBadge
                required={{
                  wild: schedule.pieces,
                  white: 0,
                  blue: 0,
                  green: 0,
                  red: 0,
                  orange: 0,
                  purple: 0,
                }}
              />
            </Stack>
          </div>
        ))}
      </div>
    </div>
  )
}
