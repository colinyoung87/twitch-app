'use client'

import { Column, Row } from "@/components/Flex";
import { Heading } from "@/components/Typography";
import { iconSize } from "@/providers/ThemeProvider";
import { Text } from "@/components/Typography";
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import { useTheme } from "@mui/material";

export default () => {
  const theme = useTheme();
  return (
    <Row alignItems="center" gap="large">
      <ScreenShareIcon sx={{ fontSize: iconSize.huge, fill: theme.palette.text.primary }} />
      <Column gap="small">
        <Heading color={theme.palette.text.primary}>Hello, Twitch!</Heading>
        <Text color={theme.palette.text.primary}>I'm just some text that sits below...</Text>
      </Column>
    </Row>
  )
}
