export interface HeaderProps {
  title?: string;
  subtitle?: string;
  text?: string;
  background?: Background;
}

export type Background = "dark" | "light"

export enum HeaderBackground {
  DARK = '#181818',
  LIGHT = '#F9F9F9'
}

export enum HeadingColor {
  BLACK = '#181818',
  WHITE = '#F9F9F9'
}