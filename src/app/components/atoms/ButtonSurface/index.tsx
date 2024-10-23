import { Stack } from "@mui/material"
import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: () => void
}

export const ButtonSurface: FC<Props> = ({
  children,
  startIcon,
  endIcon,
  onClick,
}) => {
  return (
    <div
      onClick={!onClick ? undefined : onClick}
      className={clsx(
        "relative inline-flex items-center justify-center rounded bg-teal-500 py-2 text-center text-xs font-bold leading-5 text-white shadow hover:cursor-pointer hover:opacity-70",
        !startIcon && !endIcon && "px-2.5",
        startIcon && "pl-2 pr-2.5",
        endIcon && "pl-2.5 pr-2",
      )}
    >
      {startIcon || endIcon ? (
        <Stack alignItems="center" direction="row" gap={0.5}>
          {startIcon && <>{startIcon}</>}
          {children}
          {endIcon && <>{endIcon}</>}
        </Stack>
      ) : (
        <>{children}</>
      )}
    </div>
  )
}
