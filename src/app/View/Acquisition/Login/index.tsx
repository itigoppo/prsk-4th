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

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Login: FC<Props> = ({ isOpen, setIsOpen }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="space-y-4">
        <div className="border-l-8 border-cyan-700 pl-2 font-bold text-cyan-700">
          ログインキャンペーン<span className="text-pink-600">(〜10/31)</span>
        </div>

        <Dialog
          open={isOpen}
          scroll="paper"
          onClose={handleClose}
          fullScreen={fullScreen}
          fullWidth={true}
        >
          <DialogTitle>ログインキャンペーン(〜10/31)</DialogTitle>
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
      </div>
    </>
  )
}
