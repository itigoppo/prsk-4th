"use client"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import { UseCalcReturn } from "@/app/View/calc"
import { loginSchedule } from "@/app/View/constant"
import {
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import clsx from "clsx"
import { FC, useEffect, useState } from "react"

type Props = UseCalcReturn

export const Login: FC<Props> = ({ state, dispatch }) => {
  const [isAllLogin, setIsAllLogin] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)

  useEffect(() => {
    const checkedDays = loginSchedule.filter((item) =>
      state.acquisition.loginDays.includes(item.day),
    )
    setIsAllLogin(checkedDays.length === loginSchedule.length)
  }, [state.acquisition.loginDays])

  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2">
          ログインキャンペーン(〜10/31)
        </div>

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
            <div>すべての日程でログイン</div>
            <RequiredBadge
              required={{
                white: loginSchedule.reduce(function (acc, obj) {
                  return acc + obj.white
                }, 0),
                blue: loginSchedule.reduce(function (acc, obj) {
                  return acc + obj.blue
                }, 0),
                green: loginSchedule.reduce(function (acc, obj) {
                  return acc + obj.green
                }, 0),
                red: loginSchedule.reduce(function (acc, obj) {
                  return acc + obj.red
                }, 0),
                orange: loginSchedule.reduce(function (acc, obj) {
                  return acc + obj.orange
                }, 0),
                purple: loginSchedule.reduce(function (acc, obj) {
                  return acc + obj.purple
                }, 0),
              }}
            />
          </Stack>
        </div>

        <Button
          variant={expanded ? "contained" : "outlined"}
          size="small"
          onClick={() => {
            setExpanded((state) => !state)
          }}
          endIcon={expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        >
          日程を個別でみる
        </Button>

        <div className={clsx("grid grid-cols-2 gap-2", !expanded && "hidden")}>
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
                    white: schedule.white,
                    blue: schedule.blue,
                    green: schedule.green,
                    red: schedule.red,
                    orange: schedule.orange,
                    purple: schedule.purple,
                  }}
                />
              </Stack>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
