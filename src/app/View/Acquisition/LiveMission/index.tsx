"use client"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import {
  CheckBox,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material"
import { Button, Stack, TextField } from "@mui/material"
import clsx from "clsx"
import { ChangeEvent, FC, useEffect, useState } from "react"
import { UseCalcReturn } from "../../calc"
import { liveMissionSchedule, premiumLiveMissionSchedule } from "../../constant"

type Props = UseCalcReturn

export const LiveMission: FC<Props> = ({ state, dispatch }) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [expanded, setExpanded] = useState<boolean>(false)

  const points = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
    1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600,
    2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800,
    3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000,
    5100, 5200, 5300, 5400, 5500, 5600, 5700, 5800, 5900, 6000, 6100, 6200,
    6300, 6400, 6500, 6600, 6700, 6800, 6900, 7000, 7100, 7200, 7300, 7400,
    7500, 7600, 7700, 7800, 7900, 8000, 8100, 8200, 8300, 8400, 8500, 8600,
    8700, 8800, 8900, 9000, 9100, 9200, 9300, 9400, 9500, 9600, 9700, 9800,
    9900, 10000, 10250, 10500, 10750, 11000, 11250, 11500, 11750, 12000, 12250,
    12500, 12750, 13000, 13250, 13500, 13750, 14000, 14250, 14500, 14750, 15000,
    15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 19500, 20000,
  ]

  const getLiveMission = (
    point: number,
  ): {
    white: number
    blue: number
    green: number
    red: number
    orange: number
    purple: number
  } => {
    const liveMission = liveMissionSchedule.filter(
      (schedule) => schedule.point === point,
    )
    return liveMission.length !== 0
      ? {
          white: liveMission[0].white,
          blue: liveMission[0].blue,
          green: liveMission[0].green,
          red: liveMission[0].red,
          orange: liveMission[0].orange,
          purple: liveMission[0].purple,
        }
      : {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        }
  }
  const getPremiumLiveMission = (
    point: number,
  ): {
    white: number
    blue: number
    green: number
    red: number
    orange: number
    purple: number
  } => {
    const liveMission = premiumLiveMissionSchedule.filter(
      (schedule) => schedule.point === point,
    )
    return liveMission.length !== 0
      ? {
          white: liveMission[0].white,
          blue: liveMission[0].blue,
          green: liveMission[0].green,
          red: liveMission[0].red,
          orange: liveMission[0].orange,
          purple: liveMission[0].purple,
        }
      : {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        }
  }

  useEffect(() => {
    setIsComplete(state.acquisition.liveMission >= 20000)
  }, [state.acquisition.liveMission])

  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2">
          ライブミッション(〜10/31)
        </div>

        <div className="space-y-2">
          <div className="flex gap-1">
            <div
              onClick={() => {
                setIsComplete((state) => !state)
                if (isComplete) {
                  dispatch.acquisition.setLiveMission(0)
                } else {
                  dispatch.acquisition.setLiveMission(20000)
                }
              }}
              className="hover:cursor-pointer"
            >
              <Stack alignItems="center" direction="row" gap={1}>
                {isComplete ? (
                  <CheckBoxOutlined className="text-teal-600" />
                ) : (
                  <CheckBoxOutlineBlank />
                )}
                <div>コンプリート</div>
              </Stack>
            </div>

            <RequiredBadge
              required={{
                white: liveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.white
                }, 0),
                blue: liveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.blue
                }, 0),
                green: liveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.green
                }, 0),
                red: liveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.red
                }, 0),
                orange: liveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.orange
                }, 0),
                purple: liveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.purple
                }, 0),
              }}
            />
          </div>
          <div className="flex gap-1">
            <div
              onClick={() => {
                dispatch.acquisition.setIsPremiumLiveMission((state) => !state)
              }}
              className="hover:cursor-pointer"
            >
              <Stack alignItems="center" direction="row" gap={1}>
                {state.acquisition.isPremiumLiveMission ? (
                  <CheckBoxOutlined className="text-teal-600" />
                ) : (
                  <CheckBoxOutlineBlank />
                )}
                <div>プレパス加入済み</div>
              </Stack>
            </div>

            <RequiredBadge
              required={{
                white: premiumLiveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.white
                }, 0),
                blue: premiumLiveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.blue
                }, 0),
                green: premiumLiveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.green
                }, 0),
                red: premiumLiveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.red
                }, 0),
                orange: premiumLiveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.orange
                }, 0),
                purple: premiumLiveMissionSchedule.reduce(function (acc, obj) {
                  return acc + obj.purple
                }, 0),
              }}
            />
          </div>
        </div>

        <div>
          <TextField
            label="到達済みライブP(max:20,000)"
            variant="outlined"
            type="number"
            value={state.acquisition.liveMission}
            size="small"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (
                e.currentTarget.value.length > 0 ||
                e.currentTarget.value === ""
              ) {
                dispatch.acquisition.setLiveMission(0)
              }
              const parsedValue = parseInt(e.currentTarget.value, 10)
              if (isNaN(parsedValue)) return
              dispatch.acquisition.setLiveMission(parsedValue)

              if (parsedValue >= 20000) {
                setIsComplete(true)
              } else {
                setIsComplete(false)
              }
            }}
          />
        </div>

        <Button
          variant={expanded ? "contained" : "outlined"}
          size="small"
          onClick={() => {
            setExpanded((state) => !state)
          }}
          endIcon={expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        >
          達成状況を見る
        </Button>

        <div className={clsx("grid grid-cols-2 gap-2", !expanded && "hidden")}>
          {points
            .filter((point) => {
              return (
                liveMissionSchedule.filter(
                  (schedule) => schedule.point === point,
                ).length !== 0 ||
                (state.acquisition.isPremiumLiveMission &&
                  premiumLiveMissionSchedule.filter(
                    (schedule) => schedule.point === point,
                  ).length !== 0)
              )
            })
            .map((point) => (
              <div key={point}>
                <Stack alignItems="center" direction="row" gap={1}>
                  {state.acquisition.liveMission >= point ? (
                    <CheckBox className="text-slate-300" />
                  ) : (
                    <CheckBoxOutlineBlank className="text-slate-300" />
                  )}
                  <div>{point}</div>
                  <RequiredBadge
                    required={{
                      white:
                        getLiveMission(point).white +
                        (state.acquisition.isPremiumLiveMission
                          ? getPremiumLiveMission(point).white
                          : 0),
                      blue:
                        getLiveMission(point).blue +
                        (state.acquisition.isPremiumLiveMission
                          ? getPremiumLiveMission(point).blue
                          : 0),
                      green:
                        getLiveMission(point).green +
                        (state.acquisition.isPremiumLiveMission
                          ? getPremiumLiveMission(point).green
                          : 0),
                      red:
                        getLiveMission(point).red +
                        (state.acquisition.isPremiumLiveMission
                          ? getPremiumLiveMission(point).red
                          : 0),
                      orange:
                        getLiveMission(point).orange +
                        (state.acquisition.isPremiumLiveMission
                          ? getPremiumLiveMission(point).orange
                          : 0),
                      purple:
                        getLiveMission(point).purple +
                        (state.acquisition.isPremiumLiveMission
                          ? getPremiumLiveMission(point).purple
                          : 0),
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
