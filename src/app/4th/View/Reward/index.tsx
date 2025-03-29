import { ButtonSurface } from "@/app/components/atoms/ButtonSurface"
import { Add } from "@mui/icons-material"
import { FC, useState } from "react"
import { Flowers } from "./Flowers"
import { Petals } from "./Petals"

export const Reward: FC = () => {
  const [isOpenFlowers, setIsOpenFlowers] = useState<boolean>(false)
  const [isOpenPetals, setIsOpenPetals] = useState<boolean>(false)

  return (
    <>
      <div className="space-y-4 px-4 text-sm">
        <div className="border-b-2 border-slate-700 bg-slate-100 p-4 text-base font-bold text-slate-700">
          報酬を選択する
        </div>

        <div className="flex gap-4">
          <ButtonSurface
            onClick={() => {
              setIsOpenFlowers((state) => !state)
            }}
            startIcon={<Add />}
          >
            フォーチュンフラワー交換所
          </ButtonSurface>

          <ButtonSurface
            onClick={() => {
              setIsOpenPetals((state) => !state)
            }}
            startIcon={<Add />}
          >
            花びら交換所
          </ButtonSurface>
        </div>

        <Flowers isOpen={isOpenFlowers} setIsOpen={setIsOpenFlowers} />
        <Petals isOpen={isOpenPetals} setIsOpen={setIsOpenPetals} />
      </div>
    </>
  )
}
