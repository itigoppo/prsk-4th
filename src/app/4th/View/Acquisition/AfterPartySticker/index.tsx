import { useFortuneFlowerContext } from "@/app/4th/Context"
import { Close } from "@mui/icons-material"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
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
  reward: {
    wild: number
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

export const AfterPartySticker: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  const items: Item[] = useMemo(() => {
    return [
      {
        label: "ワイルドフォーチュンフラワー",
        selected: state.acquisition.numberOfRewardAfterPartyStickerWild,
        maximum: 4,
        reward: {
          wild: 1,
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerWild(count)
        },
      },
      {
        label: "白色の花びら",
        selected: state.acquisition.numberOfRewardAfterPartyStickerWhite,
        maximum: 10,
        reward: {
          wild: 0,
          white: 10,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerWhite(count)
        },
      },
      {
        label: "青色の花びら",
        selected: state.acquisition.numberOfRewardAfterPartyStickerBlue,
        maximum: 10,
        reward: {
          wild: 0,
          white: 0,
          blue: 10,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerBlue(count)
        },
      },
      {
        label: "緑色の花びら",
        selected: state.acquisition.numberOfRewardAfterPartyStickerGreen,
        maximum: 10,
        reward: {
          wild: 0,
          white: 0,
          blue: 0,
          green: 10,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerGreen(count)
        },
      },
      {
        label: "赤色の花びら",
        selected: state.acquisition.numberOfRewardAfterPartyStickerRed,
        maximum: 10,
        reward: {
          wild: 0,
          white: 0,
          blue: 0,
          green: 0,
          red: 10,
          orange: 0,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerRed(count)
        },
      },
      {
        label: "橙色の花びら",
        selected: state.acquisition.numberOfRewardAfterPartyStickerOrange,
        maximum: 10,
        reward: {
          wild: 0,
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 10,
          purple: 0,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerOrange(count)
        },
      },
      {
        label: "紫色の花びら",
        selected: state.acquisition.numberOfRewardAfterPartyStickerPurple,
        maximum: 10,
        reward: {
          wild: 0,
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 10,
        },
        onClick: (count: number) => {
          dispatch.acquisition.setNumberOfRewardAfterPartyStickerPurple(count)
        },
      },
    ]
  }, [state, dispatch])

  return (
    <>
      <Dialog
        open={isOpen}
        scroll="paper"
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth={true}
      >
        <DialogTitle>フラワーアソートガチャ交換所(10/27〜10/31)</DialogTitle>
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
    </>
  )
}
