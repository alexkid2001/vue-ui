import { Ref } from 'vue'
export type TEmit = (event: string, ...args: unknown[]) => void
export type TProps = { [key: string]: any }

export interface ILr {
  drawers: Ref[]
  modals: Ref[]
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
}

export interface Interval {
  start: number
  end: number
  fee?: number
  price?: number
  type: number | string
  idx?: number
}

export type SizeVariation = 'large' | 'medium' | 'small'
export type TypeVariation =
  | 'text'
  | 'password'
  | 'email'
  | 'tel'
  | 'url'
  | 'number'

export interface Event<T = EventTarget> {
  target: T
}
