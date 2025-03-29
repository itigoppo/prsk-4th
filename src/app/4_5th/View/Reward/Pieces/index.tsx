import { useWorldBloomContext } from "@/app/4_5th/Context"
import { BlurCircular, Close } from "@mui/icons-material"
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
  required: number
  onClick: (count: number) => void
}

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Pieces: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { state, dispatch } = useWorldBloomContext()

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const handleClose = () => {
    setIsOpen(false)
  }

  const items: Item[] = useMemo(() => {
    return [
      {
        label: "[4.5周年記念]★4メンバー確定ガチャチケット*1",
        selected: state.reward.numberOfRewardGachaTicket,
        maximum: 1,
        required: 300,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardGachaTicket(count)
        },
      },
      {
        label: "想いの純結晶*1",
        selected: state.reward.numberOfRewardPureCrystal,
        maximum: 2,
        required: 200,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardPureCrystal(count)
        },
      },
      {
        label: "スキルスコア(上級)*1",
        selected: state.reward.numberOfRewardSkill,
        maximum: 10,
        required: 30,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardSkill(count)
        },
      },
      {
        label: "願いの雫*1",
        selected: state.reward.numberOfRewardDroplet,
        maximum: 10,
        required: 30,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardDroplet(count)
        },
      },
      {
        label: "クリスタル*100",
        selected: state.reward.numberOfRewardCrystal,
        maximum: 5,
        required: 10,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardCrystal(count)
        },
      },
      {
        label: "ライブボーナスドリンク(大)*1",
        selected: state.reward.numberOfRewardDrink,
        maximum: 5,
        required: 10,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardDrink(count)
        },
      },
      {
        label: "バーチャルコイン*300",
        selected: state.reward.numberOfRewardVirtualCoin,
        maximum: 5,
        required: 10,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardVirtualCoin(count)
        },
      },
      {
        label: "練習スコア(上級)*3",
        selected: state.reward.numberOfRewardPractice,
        maximum: 10,
        required: 10,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardPractice(count)
        },
      },
      {
        label: "ミラクルジェム*5",
        selected: state.reward.numberOfRewardMiracleGem,
        maximum: 20,
        required: 5,
        onClick: (count: number) => {
          dispatch.reward.setNumberOfRewardMiracleGem(count)
        },
      },
    ]
  }, [state, dispatch])

  return (
    <>
      <div className="space-y-4">
        <div className="text-cyan-700">
          <Stack alignItems="center" direction="row" gap={1}>
            <BlurCircular />
            ワールドピース
          </Stack>
        </div>

        <Dialog
          open={isOpen}
          scroll="paper"
          onClose={handleClose}
          fullScreen={fullScreen}
          fullWidth={true}
        >
          <DialogTitle>ワールドピース交換所</DialogTitle>
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
