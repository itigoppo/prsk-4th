import { FC } from "react"

type Props = {
  required: {
    white: number
    blue: number
    green: number
    red: number
    orange: number
    purple: number
  }
}

export const RequiredBadge: FC<Props> = ({ required }) => {
  return (
    <div className="flex gap-x-1">
      {required.white !== 0 && (
        <span className="rounded-full bg-white border border-slate-950 text-[10px] leading-4 grid size-5 font-bold place-items-center">
          {required.white}
        </span>
      )}
      {required.blue !== 0 && (
        <span className="rounded-full bg-blue-500 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
          {required.blue}
        </span>
      )}
      {required.green !== 0 && (
        <span className="rounded-full bg-green-500 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
          {required.green}
        </span>
      )}
      {required.red !== 0 && (
        <span className="rounded-full bg-red-500 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
          {required.red}
        </span>
      )}
      {required.orange !== 0 && (
        <span className="rounded-full bg-orange-500 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
          {required.orange}
        </span>
      )}
      {required.purple !== 0 && (
        <span className="rounded-full bg-purple-500 text-white text-[10px] leading-4 grid size-5 font-bold place-items-center">
          {required.purple}
        </span>
      )}
    </div>
  )
}
