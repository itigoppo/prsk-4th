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
        <span className="grid size-5 place-items-center rounded-full border border-slate-950 bg-white text-[10px] font-bold leading-4">
          {required.white}
        </span>
      )}
      {required.blue !== 0 && (
        <span className="grid size-5 place-items-center rounded-full bg-blue-500 text-[10px] font-bold leading-4 text-white">
          {required.blue}
        </span>
      )}
      {required.green !== 0 && (
        <span className="grid size-5 place-items-center rounded-full bg-green-500 text-[10px] font-bold leading-4 text-white">
          {required.green}
        </span>
      )}
      {required.red !== 0 && (
        <span className="grid size-5 place-items-center rounded-full bg-red-500 text-[10px] font-bold leading-4 text-white">
          {required.red}
        </span>
      )}
      {required.orange !== 0 && (
        <span className="grid size-5 place-items-center rounded-full bg-orange-500 text-[10px] font-bold leading-4 text-white">
          {required.orange}
        </span>
      )}
      {required.purple !== 0 && (
        <span className="grid size-5 place-items-center rounded-full bg-purple-500 text-[10px] font-bold leading-4 text-white">
          {required.purple}
        </span>
      )}
    </div>
  )
}
