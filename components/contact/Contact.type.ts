export interface Field {
  value: string
  error: null | string
}

export enum ButtonState {
  IDLE,
  LOADING,
}

export interface SubmitState {
  buttonState: ButtonState
  error: null | string
  success: null | string
}
