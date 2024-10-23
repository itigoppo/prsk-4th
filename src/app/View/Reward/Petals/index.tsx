import { useFortuneFlowerContext } from "@/app/Context"
import { Close, EnergySavingsLeaf } from "@mui/icons-material"
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
  selected: number
  maximum: number
  required: {
    white: number
    blue: number
    green: number
    red: number
    orange: number
    purple: number
  }
  onClick: (count: number) => void
}

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Petals: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  const items: Item[] = useMemo(() => {
    return [
      {
        label: "願いの雫*1",
        selected: state.reward.petals.numberOfRewardDroplet,
        maximum: 5,
        required: {
          white: 25,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.reward.petals.setNumberOfRewardDroplet(count)
        },
      },
      {
        label: "スキルスコア(上級)*1",
        selected: state.reward.petals.numberOfRewardSkill,
        maximum: 5,
        required: {
          white: 0,
          blue: 25,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.reward.petals.setNumberOfRewardSkill(count)
        },
      },
      {
        label: "練習用スコア(上級)*10",
        selected: state.reward.petals.numberOfRewardPractice,
        maximum: 5,
        required: {
          white: 0,
          blue: 0,
          green: 25,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.reward.petals.setNumberOfRewardPractice(count)
        },
      },
      {
        label: "クリスタル*200",
        selected: state.reward.petals.numberOfRewardCrystal,
        maximum: 5,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 25,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.reward.petals.setNumberOfRewardCrystal(count)
        },
      },
      {
        label: "バーチャルコイン*500",
        selected: state.reward.petals.numberOfRewardVirtualCoin,
        maximum: 5,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 25,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.reward.petals.setNumberOfRewardVirtualCoin(count)
        },
      },
      {
        label: "ライブボーナスドリンク(大)*3",
        selected: state.reward.petals.numberOfRewardDrink,
        maximum: 5,
        required: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 25,
        },
        onClick: (count: number) => {
          dispatch.reward.petals.setNumberOfRewardDrink(count)
        },
      },
    ]
  }, [state, dispatch])

  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700">
          <Stack alignItems="center" direction="row" gap={1}>
            <EnergySavingsLeaf />
            花びら
          </Stack>
        </div>

        <Dialog
          open={isOpen}
          scroll="paper"
          onClose={handleClose}
          fullScreen={fullScreen}
          fullWidth={true}
        >
          <DialogTitle>花びら交換所</DialogTitle>
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
