import React, { CSSProperties, HTMLAttributes } from "react";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  color?: CSSProperties["color"]
};

const buildTextProps = ({ style, color, ...props }: TextProps) => ({
  ...props,
  style: {
    color: color ?? "white",
    ...style,
  }
})

export const Text = (props: TextProps) => (
  <p {...buildTextProps(props)} />
)

export const Heading = (props: TextProps) => (
  <h1 {...buildTextProps(props)} />
)
