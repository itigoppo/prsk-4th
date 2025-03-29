import { useFortuneFlowerContext } from "@/app/4th/Context"
import { pagesPath } from "@/lib/$path"
import { EnergySavingsLeaf, WarningOutlined } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import clsx from "clsx"
import { FC } from "react"

export const Result: FC = () => {
  const { state } = useFortuneFlowerContext()

  const selectedStampsBloom = [
    state.acquisition.stamp.bloom.selectedStampIroiro,
    state.acquisition.stamp.bloom.selectedStampLive,
    state.acquisition.stamp.bloom.selectedStampKizuna,
    state.acquisition.stamp.bloom.selectedStampLogin,
    state.acquisition.stamp.bloom.selectedStampGachi,
    state.acquisition.stamp.bloom.isStampShop,
  ].filter((stamp) => stamp)

  const selectedStampsConnect = [
    state.acquisition.stamp.connect.selectedStampIroiro,
    state.acquisition.stamp.connect.selectedStampLive,
    state.acquisition.stamp.connect.selectedStampKizuna,
    state.acquisition.stamp.connect.selectedStampLogin,
    state.acquisition.stamp.connect.selectedStampGachi,
  ].filter((stamp) => stamp)

  const selectedStampsCheer = [
    state.acquisition.stamp.cheer.selectedStampIroiro,
    state.acquisition.stamp.cheer.selectedStampLive,
    state.acquisition.stamp.cheer.selectedStampKizuna,
    state.acquisition.stamp.cheer.selectedStampLogin,
    state.acquisition.stamp.cheer.selectedStampGachi,
  ].filter((stamp) => stamp)

  return (
    <>
      <div className="sticky bottom-0 z-50 bg-slate-600 px-4 py-2 text-xs text-white">
        <div className="relative space-y-2">
          <div className="absolute right-1 top-1">
            <Button
              variant="contained"
              href={pagesPath.$4th.$url().path}
              size="small"
              color="error"
            >
              reset
            </Button>
          </div>
          <div className="space-y-1">
            <div>花びら残数</div>
            <div>※全て花びら換算(花びら100=フォーチュンフラワー1)</div>
            <div>※補填で白と青は一律+25</div>
          </div>
          <div>
            {(selectedStampsBloom.length < 4 ||
              selectedStampsBloom.length > 4 ||
              selectedStampsConnect.length < 3 ||
              selectedStampsConnect.length > 3 ||
              selectedStampsCheer.length < 3 ||
              selectedStampsCheer.length > 3) && (
              <>
                <Stack alignItems="center" direction="row" gap={1}>
                  <WarningOutlined
                    className="text-yellow-500"
                    fontSize="small"
                  />
                  <div>
                    {(selectedStampsBloom.length < 4 ||
                      selectedStampsBloom.length > 4) && (
                      <div>
                        BLOOM期間のスタンプカード枚数を見直してください (
                        {selectedStampsBloom.length}/4)
                      </div>
                    )}
                    {(selectedStampsConnect.length < 3 ||
                      selectedStampsConnect.length > 3) && (
                      <div>
                        CONNECT期間のスタンプカード枚数を見直してください (
                        {selectedStampsConnect.length}/3)
                      </div>
                    )}
                    {(selectedStampsCheer.length < 3 ||
                      selectedStampsCheer.length > 3) && (
                      <div>
                        CHEER期間のスタンプカード枚数を見直してください (
                        {selectedStampsCheer.length}/3)
                      </div>
                    )}
                  </div>
                </Stack>
              </>
            )}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2 text-sm">
            {[
              {
                icon: (
                  <>
                    <span className="grid size-5 place-items-center rounded-full bg-gradient-to-r from-pink-300 to-purple-400 text-[10px] font-bold leading-4 text-white">
                      wild
                    </span>
                  </>
                ),
                color: "text-pink-300",
                count: state.result.wildFlowers,
              },
              {
                icon: <EnergySavingsLeaf fontSize="small" />,
                color: "text-white",
                count: state.result.whitePetals,
              },
              {
                icon: <EnergySavingsLeaf fontSize="small" />,
                color: "text-blue-500",
                count: state.result.bluePetals,
              },
              {
                icon: <EnergySavingsLeaf fontSize="small" />,
                color: "text-green-500",
                count: state.result.greenPetals,
              },
              {
                icon: <EnergySavingsLeaf fontSize="small" />,
                color: "text-red-500",
                count: state.result.redPetals,
              },
              {
                icon: <EnergySavingsLeaf fontSize="small" />,
                color: "text-orange-500",
                count: state.result.orangePetals,
              },
              {
                icon: <EnergySavingsLeaf fontSize="small" />,
                color: "text-purple-500",
                count: state.result.purplePetals,
              },
            ].map(({ icon, color, count }, index) => (
              <div key={index} className={clsx(color)}>
                <Stack alignItems="center" gap={0.5}>
                  {icon}
                  <span className="font-bold">{count}</span>
                </Stack>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
