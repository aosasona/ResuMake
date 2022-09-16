export interface InputFieldProps {
  name: string;
  data: any;
  type?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  onChange: Function;
}