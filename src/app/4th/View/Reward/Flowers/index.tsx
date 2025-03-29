import { useFortuneFlowerContext } from "@/app/4th/Context"
import { Close, FilterVintageOutlined } from "@mui/icons-material"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Dispatch, FC, SetStateAction, useMemo } from "react"
import { Confirm } from "./Confirm"
import { Form } from "./Form"

export type Item = {
  label: string
  checked: boolean
  required: {
    white: number
    blue: number
    green: number
    red: number
    orange: number
    purple: number
  }
  onClick: () => void
}

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Flowers: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  const items: Item[] = useMemo(() => {
    return [
      {
        label: "4周年記念服セット",
        checked: state.reward.flowers.isRewardCostume,
        required: {
          white: 100,
          blue: 100,
          green: 100,
          red: 100,
          orange: 100,
          purple: 100,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardCostume((state) => !state)
        },
      },
      {
        label: "スキルアップ用スコア(コンプリート)",
        checked: state.reward.flowers.isRewardSkill,
        required: {
          white: 100,
          blue: 100,
          green: 100,
          red: 100,
          orange: 100,
          purple: 100,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardSkill((state) => !state)
        },
      },
      {
        label: "VS想いの小瓶",
        required: {
          white: 100,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        checked: state.reward.flowers.isRewardVsBottle,
        onClick: () => {
          dispatch.reward.flowers.setIsRewardVsBottle((state) => !state)
        },
      },
      {
        label: "L/n想いの小瓶",
        checked: state.reward.flowers.isRewardLnBottle,
        required: {
          white: 0,
          blue: 100,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardLnBottle((state) => !state)
        },
      },
      {
        label: "MMJ想いの小瓶",
        checked: state.reward.flowers.isRewardMmjBottle,
        required: {
          white: 0,
          blue: 0,
          green: 100,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardMmjBottle((state) => !state)
        },
      },
      {
        label: "VBS想いの小瓶",
        checked: state.reward.flowers.isRewardVbsBottle,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 100,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardVbsBottle((state) => !state)
        },
      },
      {
        label: "WxS想いの小瓶",
        checked: state.reward.flowers.isRewardWsBottle,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 100,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardWsBottle((state) => !state)
        },
      },
      {
        label: "25想いの小瓶",
        checked: state.reward.flowers.isReward25Bottle,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 100,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsReward25Bottle((state) => !state)
        },
      },
      {
        label: "VS想いの純結晶",
        checked: state.reward.flowers.isRewardVsCrystal,
        required: {
          white: 100,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardVsCrystal((state) => !state)
        },
      },
      {
        label: "L/n想いの純結晶",
        checked: state.reward.flowers.isRewardLnCrystal,
        required: {
          white: 0,
          blue: 100,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardLnCrystal((state) => !state)
        },
      },
      {
        label: "MMJ想いの純結晶",
        checked: state.reward.flowers.isRewardMmjCrystal,
        required: {
          white: 0,
          blue: 0,
          green: 100,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardMmjCrystal((state) => !state)
        },
      },
      {
        label: "VBS想いの純結晶",
        checked: state.reward.flowers.isRewardVbsCrystal,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 100,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardVbsCrystal((state) => !state)
        },
      },
      {
        label: "WxS想いの純結晶",
        checked: state.reward.flowers.isRewardWsCrystal,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 100,
          purple: 0,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsRewardWsCrystal((state) => !state)
        },
      },
      {
        label: "25想いの純結晶",
        checked: state.reward.flowers.isReward25Crystal,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 100,
        },
        onClick: () => {
          dispatch.reward.flowers.setIsReward25Crystal((state) => !state)
        },
      },
    ]
  }, [state, dispatch])

  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700">
          <Stack alignItems="center" direction="row" gap={1}>
            <FilterVintageOutlined />
            フォーチュンフラワー
          </Stack>
        </div>

        <Dialog
          open={isOpen}
          scroll="paper"
          onClose={handleClose}
          fullScreen={fullScreen}
          fullWidth={true}
        >
          <DialogTitle>フォーチュンフラワー交換所</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: "absolute",
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <Close />
          </IconButton>

          <DialogContent sx={{ m: 0, p: 1 }}>
            <Form items={items} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>OK</Button>
          </DialogActions>
        </Dialog>

        <Confirm items={items} />
      </div>
    </>
  )
}
