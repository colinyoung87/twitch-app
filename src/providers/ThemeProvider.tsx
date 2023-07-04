'use client'

import React, { PropsWithChildren } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

export const iconSize = {
  small: 16,
  medium: 32,
  large: 64,
  huge: 120
}

export type IconSize = keyof typeof iconSize;

export const spacing = {
  tiny: 4,
  small: 10,
  medium: 20,
  large: 32,
}

export type Spacing = keyof typeof spacing;

const theme = createTheme({
  palette: {
    primary: {
      main: "#6441A5"
    },
    text: {
      primary: "#ffffff",
    }
  }
});
export const ThemeProvider = (props: PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme} {...props} />
  )
}
