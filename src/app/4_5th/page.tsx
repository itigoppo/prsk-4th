import { Metadata } from "next"
import { Suspense } from "react"
import { View } from "./View"

export const metadata: Metadata = {
  title: "プロセカ4.5周年ワールドブルームキャンペーン",
  description: "プロジェクトセカイ4.5周年のワールドブルームキャンペーン計算機",
}

export default function Page() {
  return (
    <Suspense>
      <View />
    </Suspense>
  )
}
