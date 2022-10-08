import {Dispatch, SetStateAction} from "react";

export interface AddressInterface {
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
}

export interface SkillsInterface {
  name: string;
  level: number;
}

export interface WorkAddressInterface {
  state: string;
  country: string;
}

export enum WorkType {
  FullTime = 'Full Time',
  PartTime = 'Part Time',
  Contract = 'Contract',
  Internship = 'Internship',
  Volunteer = 'Volunteer',
  Temporary = 'Temporary',
  Freelance = 'Freelance',
}

export interface WorkHistoryInterface {
  company: string;
  role: string;
  start_date: string;
  end_date: string;
  description: string;
  current: boolean;
  remote: boolean;
  address: WorkAddressInterface;
  employment_type: WorkType;
}

export interface LinksInterface {
  name: string;
  url: string;
}

export interface EducationHistoryInterface {
  name: string;
  degree: string;
  start_date: string;
  end_date: string;
  current: boolean;
  description: string;
}

export interface ResumeData {
  id?: string;
  first_name: string;
  last_name: string;
  title: string;
  email: string;
  phone_number: string;
  cover_letter: string;
  address: AddressInterface | null;
  skills: SkillsInterface[] | null;
  languages: string[] | null;
  work_history: WorkHistoryInterface[] | [];
  links: LinksInterface[] | null;
  education_history: EducationHistoryInterface[] | [];
  template: string;
  show_email: boolean;
}

export interface ResumeThemeInterface {
  bg?: string;
  colors?: {
	primary: string;
	secondary: string;
	tertiary: string;
  }
}

export interface ResumePageProps {
  theme?: ResumeThemeInterface;
  data: ResumeData;
}

export interface ResumeEditorProps {
  data: ResumeData;
  setData: Dispatch<SetStateAction<ResumeData>>;
}

export interface ResumeToolBarProps {
  data: ResumeData;
  currentResumeData: ResumeData;
  theme: ResumeThemeInterface;
  showToolbar: boolean;
  showColorPicker: boolean;
  setShowToolbar: Dispatch<SetStateAction<boolean>>;
  setShowColorPicker: Dispatch<SetStateAction<boolean>>;
  handleSave: () => void;
  setTheme: Dispatch<SetStateAction<ResumeThemeInterface>>;
}

export interface ToolbarToggleProps {
  visible: boolean;
  onClick: () => void;
}

export interface ColorPickerProps {
  theme: ResumeThemeInterface;
  setTheme: Dispatch<SetStateAction<ResumeThemeInterface>>;
  onClose: () => void;
}