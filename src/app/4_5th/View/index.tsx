"use client"
import { WorldBloomContextProvider } from "@/app/4_5th/Context"
import { FC } from "react"
import { Acquisition } from "./Acquisition"
import { Result } from "./Result"
import { Reward } from "./Reward"

export const View: FC = () => {
  return (
    <WorldBloomContextProvider>
      <div className="min-h-screen space-y-4 bg-gray-100 py-4">
        <header className="mx-auto max-w-7xl px-4 md:max-w-md">
          プロセカ4.5周年
          <br />
          ワールドブルームキャンペーン計算機
        </header>

        <main className="mx-auto max-w-7xl md:max-w-md">
          <div className="space-y-4 bg-white pt-4 shadow-sm">
            <Reward />
            <Acquisition />
            <Result />
          </div>
        </main>

        <footer className="mt-2 pb-10 text-center text-xs">
          © 2025{" "}
          <a href="https://x.com/itigoppo" target="_brank">
            Hisato S.
          </a>
        </footer>
      </div>
    </WorldBloomContextProvider>
  )
}
