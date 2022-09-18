import {MouseEventHandler} from 'react';

export interface InputFieldProps {
  name: string;
  data: any;
  type?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  onChange: Function;
}

export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  color?: string;
  bg?: string;
  hoverColor?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
}

export interface SpinnerProps {
  size?: number;
}