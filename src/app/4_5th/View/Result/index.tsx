import { pagesPath } from "@/lib/$path"
import { BlurCircular, WarningOutlined } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"
import clsx from "clsx"
import { FC } from "react"
import { useWorldBloomContext } from "../../Context"

export const Result: FC = () => {
  const { state } = useWorldBloomContext()

  const selectedStamps = [
    state.acquisition.stamp.selectedStampLiveBonus,
    state.acquisition.stamp.selectedStampMusic,
    state.acquisition.stamp.selectedStampLive,
    state.acquisition.stamp.selectedStampEvent,
    state.acquisition.stamp.selectedStampMoney,
  ].filter((stamp) => stamp)

  return (
    <>
      <div className="sticky bottom-0 z-50 bg-slate-600 px-4 py-2 text-xs text-white">
        <div className="relative space-y-2">
          <div className="absolute right-1 top-1">
            <Button
              variant="contained"
              href={pagesPath.$4_5th.$url().path}
              size="small"
              color="error"
            >
              reset
            </Button>
          </div>
          <div className="space-y-1">
            <div>ワールドピース残数</div>
          </div>
          <div>
            {(selectedStamps.length < 5 || selectedStamps.length > 5) && (
              <>
                <Stack alignItems="center" direction="row" gap={1}>
                  <WarningOutlined
                    className="text-yellow-500"
                    fontSize="small"
                  />
                  <div>
                    <div>
                      スタンプカードの枚数を見直してください (
                      {selectedStamps.length}/5)
                    </div>
                  </div>
                </Stack>
              </>
            )}
          </div>

          <div className="mt-2 grid grid-cols-7 gap-2 text-sm">
            {[
              {
                icon: <BlurCircular fontSize="small" />,
                color: "text-white",
                count: state.result.worldPieces,
              },
            ].map(({ icon, color, count }, index) => (
              <div key={index} className={clsx(color)}>
                <Stack alignItems="center" gap={0.5} direction="row">
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
