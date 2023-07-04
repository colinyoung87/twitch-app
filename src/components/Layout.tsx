'use client'

import React from "react";
import { useTheme } from "@mui/material";
import { Column } from "./Flex";

export const Layout = (props: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <html lang="en">
      <body>
        <Column width="100vw" height="100vh" backgroundColor={theme.palette.primary.main} alignItems='center' justifyContent='center'>
          {props.children}
        </Column>
      </body>
    </html>
  )
}
