export interface AddressInterface {
  line_1: string;
  line_2: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
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
  first_name: string;
  last_name: string;
  title: string;
  email: string;
  phone_number: string;
  cover_letter: string;
  address: AddressInterface;
  skills: SkillsInterface[];
  languages: string[];
  work_history: WorkHistoryInterface[];
  links: LinksInterface[];
  education_history: EducationHistoryInterface[];
}