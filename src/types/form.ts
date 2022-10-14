import {MouseEventHandler, ReactNode} from 'react';

export interface InputFieldProps {
  name: string;
  data: any;
  type?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  isNested?: boolean;
  onChange: (e: any) => void;
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
  isNested?: boolean;
  onChange: (e: any) => void;
}

export interface SelectorProps {
  name: string;
  value: string;
  options: any[];
  placeholder?: string;
  onChange: any;
}

export interface DateInputProps {
  name: string;
  value: string;
  label: string;
  disabled?: boolean;
  min?: string;
  max?: string;
  onChange: any;
}

export interface SpinnerProps {
  size?: number;
}