"use client"
import { FC } from "react"
import { FortuneFlowerContextProvider } from "../Context"
import { Acquisition } from "./Acquisition"
import { Result } from "./Result"
import { Reward } from "./Reward"

export const View: FC = () => {
  return (
    <FortuneFlowerContextProvider>
      <div className="min-h-screen space-y-4 bg-gray-100 py-4">
        <header className="mx-auto max-w-7xl px-4 md:max-w-md">
          プロセカ4周年
          <br />
          フォーチュンフラワーパレード計算機
        </header>

        <main className="mx-auto max-w-7xl md:max-w-md">
          <div className="space-y-4 bg-white pt-4 shadow-sm">
            <Reward />
            <Acquisition />
            <Result />
          </div>
        </main>

        <footer className="mt-2 pb-10 text-center text-xs">
          © 2024{" "}
          <a href="https://x.com/itigoppo" target="_brank">
            Hisato S.
          </a>
        </footer>
      </div>
    </FortuneFlowerContextProvider>
  )
}
