import { ButtonSurface } from "@/app/components/atoms/ButtonSurface"
import { Add } from "@mui/icons-material"
import { FC, useState } from "react"
import { Pieces } from "./Pieces"

export const Reward: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="space-y-4 px-4 text-sm">
        <div className="border-b-2 border-slate-700 bg-slate-100 p-4 text-base font-bold text-slate-700">
          報酬を選択する
        </div>

        <div className="flex gap-4">
          <ButtonSurface
            onClick={() => {
              setIsOpen((state) => !state)
            }}
            startIcon={<Add />}
          >
            ワールドピース交換所
          </ButtonSurface>
        </div>

        <Pieces isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  )
}
