"use client"
import { FC } from "react"
import { Acquisition } from "./Acquisition"
import { useCalc } from "./calc"
import { Result } from "./Result"
import { Reward } from "./Reward"

export const View: FC = () => {
  const useCalcProps = useCalc()

  return (
    <>
      <div className="min-h-screen bg-gray-100 space-y-4 py-4">
        <header className="mx-auto max-w-7xl md:max-w-md px-4">
          プロセカ4周年
          <br />
          フォーチュンフラワーパレード計算機
        </header>

        <main className="mx-auto max-w-7xl md:max-w-md">
          <div className="bg-white shadow-sm space-y-4 pt-4">
            <Reward {...useCalcProps} />
            <Acquisition {...useCalcProps} />
            <Result {...useCalcProps} />
          </div>
        </main>

        <footer className="mt-2 pb-10 text-center text-xs">
          © 2024{" "}
          <a href="https://x.com/itigoppo" target="_brank">
            Hisato S.
          </a>
        </footer>
      </div>
    </>
  )
}
