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
  times: number
}

export const StampMission: FC<Props> = ({ isOpen, setIsOpen, times }) => {
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
        <DialogTitle>
          スタンプミッション / {times === 1 && <>BLOOM (09/30〜10/09)</>}
          {times === 2 && (
            <>
              CONNECT (<s>10/11</s>10/12〜10/19)
            </>
          )}
          {times === 3 && <>CHEER (10/21〜10/29)</>}
        </DialogTitle>
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
          <Form times={times} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>

      <Confirm times={times} />
    </>
  )
}
