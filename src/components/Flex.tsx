import React, { CSSProperties, HTMLAttributes } from "react";
import { Spacing, spacing } from "../providers/ThemeProvider";

type FlexProps = Omit<CSSProperties, "gap"> & HTMLAttributes<HTMLDivElement> & {
  gap?: Spacing
};

export const Column = ({
  style,
  flexDirection,
  width,
  height,
  backgroundColor,
  alignItems,
  justifyContent,
  gap,
  ...props
}: FlexProps) => (
  <div
    {...props}
    style={{
      display: "flex",
      flexDirection: flexDirection ?? "column",
      width,
      height,
      backgroundColor,
      alignItems,
      justifyContent,
      gap: gap ? spacing[gap] : 0,
      ...style
    }}
  />
)

export const Row = ({ flexDirection, ...props }: FlexProps) => (
  <Column {...props} flexDirection={flexDirection ?? "row"} />
)
