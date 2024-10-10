import { UseCalcReturn } from "@/app/View/calc"
import { FC } from "react"

type Props = UseCalcReturn

export const AfterParty: FC<Props> = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700 font-bold border-cyan-700 border-l-8 pl-2 flex gap-x-1">
          <div>
            後夜祭ガチャ<span className="text-pink-600">(10/21〜10/31)</span>
          </div>
          <div>
            <span className="rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
              ?
            </span>
          </div>
        </div>

        <div>※現時点で詳細不明</div>
      </div>
    </>
  )
}
