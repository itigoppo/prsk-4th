"use client"
import { FC } from "react"
import { UseCalcReturn } from "../calc"
import { Flowers } from "./Flowers"
import { Petals } from "./Petals"

type Props = UseCalcReturn

export const Reward: FC<Props> = (props) => {
  return (
    <>
      <div className="px-4 text-sm space-y-4">
        <div className="text-base text-slate-700 font-bold">報酬を選択する</div>

        <Flowers {...props} />
        <Petals {...props} />
      </div>
    </>
  )
}
