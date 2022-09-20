import {MouseEventHandler, ReactNode} from 'react';

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
  text?: string;
  color?: string;
  bg?: string;
  hoverColor?: string;
  hoverBg?: string;
  px?: number;
  py?: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
}

export interface CheckBoxProps {
  name: string;
  label: string;
  data: any;
  onChange: Function;
}

export interface SpinnerProps {
  size?: number;
}