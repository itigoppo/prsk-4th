"use client"
import { pagesPath } from "@/lib/$path"
import Link from "next/link"
import { FC } from "react"

export const View: FC = () => {
  return (
    <div className="min-h-screen space-y-4 bg-gray-100 py-4">
      <header className="mx-auto max-w-7xl px-4 md:max-w-md">
        プロセカn周年キャンペーンの計算機
      </header>

      <main className="mx-auto max-w-7xl md:max-w-md">
        <div className="space-y-4 bg-white py-4 shadow-sm">
          <ul className="space-y-4 px-4 text-sm">
            {[
              {
                label: "4.5周年ワールドブルームキャンペーン('25/03/30〜04/08)",
                url: pagesPath.$4_5th.$url(),
              },
              {
                label: "4周年フォーチュンパレード('24/09/30〜10/31)",
                url: pagesPath.$4th.$url(),
              },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="mt-2 pb-10 text-center text-xs">
        © 2024-2025{" "}
        <a href="https://x.com/itigoppo" target="_brank">
          Hisato S.
        </a>
      </footer>
    </div>
  )
}
