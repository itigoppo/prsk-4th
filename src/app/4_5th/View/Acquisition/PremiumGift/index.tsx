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
import { Dispatch, FC, SetStateAction } from "react"
import { Confirm } from "./Confirm"
import { Form } from "./Form"

export type Item = {
  label: string
  checked: boolean
  rewards: number
  onClick: () => void
}

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const PremiumGift: FC<Props> = ({ isOpen, setIsOpen }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Dialog
        open={isOpen}
        scroll="paper"
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth={true}
      >
        <DialogTitle>プレミアムプレゼントガチャ(03/30〜04/08)</DialogTitle>
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
          <Form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>

      <Confirm />
    </>
  )
}
