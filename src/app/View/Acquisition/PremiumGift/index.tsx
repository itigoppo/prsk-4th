import { useFortuneFlowerContext } from "@/app/Context"
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
  checked: boolean
  rewards: {
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

export const PremiumGift: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useFortuneFlowerContext()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  const items: Item[] = useMemo(() => {
    return [
      {
        label: "VS",
        checked: state.acquisition.isGachaVs,
        rewards: {
          white: 100,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.acquisition.setIsGachaVs((state) => !state)
        },
      },
      {
        label: "L/n",
        checked: state.acquisition.isGachaLn,
        rewards: {
          white: 0,
          blue: 100,
          green: 0,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.acquisition.setIsGachaLn((state) => !state)
        },
      },
      {
        label: "MMJ",
        checked: state.acquisition.isGachaMmj,
        rewards: {
          white: 0,
          blue: 0,
          green: 100,
          red: 0,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.acquisition.setIsGachaMmj((state) => !state)
        },
      },
      {
        label: "VBS",
        checked: state.acquisition.isGachaVbs,
        rewards: {
          white: 0,
          blue: 0,
          green: 0,
          red: 100,
          orange: 0,
          purple: 0,
        },
        onClick: () => {
          dispatch.acquisition.setIsGachaVbs((state) => !state)
        },
      },
      {
        label: "WxS",
        checked: state.acquisition.isGachaWs,
        rewards: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 100,
          purple: 0,
        },
        onClick: () => {
          dispatch.acquisition.setIsGachaWs((state) => !state)
        },
      },
      {
        label: "25",
        checked: state.acquisition.isGacha25,
        rewards: {
          white: 0,
          blue: 0,
          green: 0,
          red: 0,
          orange: 0,
          purple: 100,
        },
        onClick: () => {
          dispatch.acquisition.setIsGacha25((state) => !state)
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
        <DialogTitle>プレミアムプレゼントガチャ(〜10/31)</DialogTitle>
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
