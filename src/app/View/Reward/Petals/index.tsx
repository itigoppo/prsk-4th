"use client"
import { RequiredBadge } from "@/app/components/atoms/RequiredBadge"
import {
  EnergySavingsLeaf,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from "@mui/icons-material"
import { Stack } from "@mui/material"
import { FC } from "react"
import { UseCalcReturn } from "../../calc"

type Props = UseCalcReturn

export const Petals: FC<Props> = ({ state, dispatch }) => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700">
          <Stack alignItems="center" direction="row" gap={1}>
            <EnergySavingsLeaf />
            花びら
          </Stack>
        </div>

        {[
          {
            label: "願いの雫*1",
            checked: state.reward.petals.numberOfRewardDroplet,
            maximum: 5,
            required: {
              white: 25,
              blue: 0,
              green: 0,
              red: 0,
              orange: 0,
              purple: 0,
            },
            onClick: (count: number) => {
              dispatch.reward.petals.setNumberOfRewardDroplet(count)
            },
          },
          {
            label: "スキルスコア(上級)*1",
            checked: state.reward.petals.numberOfRewardSkill,
            maximum: 5,
            required: {
              white: 0,
              blue: 25,
              green: 0,
              red: 0,
              orange: 0,
              purple: 0,
            },
            onClick: (count: number) => {
              dispatch.reward.petals.setNumberOfRewardSkill(count)
            },
          },
          {
            label: "練習用スコア(上級)*10",
            checked: state.reward.petals.numberOfRewardPractice,
            maximum: 5,
            required: {
              white: 0,
              blue: 0,
              green: 25,
              red: 0,
              orange: 0,
              purple: 0,
            },
            onClick: (count: number) => {
              dispatch.reward.petals.setNumberOfRewardPractice(count)
            },
          },
          {
            label: "クリスタル*200",
            checked: state.reward.petals.numberOfRewardCrystal,
            maximum: 5,
            required: {
              white: 0,
              blue: 0,
              green: 0,
              red: 25,
              orange: 0,
              purple: 0,
            },
            onClick: (count: number) => {
              dispatch.reward.petals.setNumberOfRewardCrystal(count)
            },
          },
          {
            label: "バーチャルコイン*500",
            checked: state.reward.petals.numberOfRewardVirtualCoin,
            maximum: 5,
            required: {
              white: 0,
              blue: 0,
              green: 0,
              red: 0,
              orange: 25,
              purple: 0,
            },
            onClick: (count: number) => {
              dispatch.reward.petals.setNumberOfRewardVirtualCoin(count)
            },
          },
          {
            label: "ライブボーナスドリンク(大)*3",
            checked: state.reward.petals.numberOfRewardDrink,
            maximum: 5,
            required: {
              white: 0,
              blue: 0,
              green: 0,
              red: 0,
              orange: 0,
              purple: 25,
            },
            onClick: (count: number) => {
              dispatch.reward.petals.setNumberOfRewardDrink(count)
            },
          },
        ].map(({ label, checked, maximum, required, onClick }, index) => (
          <div key={index} className="space-y-2">
            <Stack alignItems="center" direction="row" gap={1}>
              <div className="font-bold border-red-300 border-l-8 pl-2">
                {label}
              </div>
              <RequiredBadge required={required} />
            </Stack>

            <div className="grid grid-cols-3 gap-2">
              {Array(maximum + 1)
                .fill(0)
                .map((__val, index2) => (
                  <div
                    key={index2}
                    onClick={() => {
                      onClick(index2)
                    }}
                    className="hover:cursor-pointer"
                  >
                    <Stack alignItems="center" direction="row" gap={0.5}>
                      {checked === index2 ? (
                        <RadioButtonChecked className="text-teal-600" />
                      ) : (
                        <RadioButtonUnchecked />
                      )}
                      <span>{index2}回交換</span>
                    </Stack>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
