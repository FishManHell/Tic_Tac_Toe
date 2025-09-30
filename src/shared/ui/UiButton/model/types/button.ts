export enum BtnMods {
  CROSS = 'cross',
  ZERO = 'zero',
  START = 'start',
  DISABLED = 'disabled',
}

export interface ButtonProps {
  mod?: BtnMods
  disabled?: boolean
  class?: string
}
