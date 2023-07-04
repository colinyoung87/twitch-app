'use client'

import { Column, Row } from "@/components/Flex";
import { Heading, Text } from "@/components/Typography";
import {  } from "@/components/Typography";
import { useTheme } from "@mui/material";

export default () => {
  const theme = useTheme();
  return (
    <Column>
      <Heading>Ya gotta login</Heading>
      <Text>We'll get to that shortly...</Text>
    </Column>
  )
}
