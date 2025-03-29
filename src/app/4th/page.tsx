import { Metadata } from "next"
import { Suspense } from "react"
import { View } from "./View"

export const metadata: Metadata = {
  title: "プロセカ4周年フォーチュンフラワーパレード",
  description: "プロジェクトセカイ4周年のお花、花びら計算機",
}

export default function Page() {
  return (
    <Suspense>
      <View />
    </Suspense>
  )
}
