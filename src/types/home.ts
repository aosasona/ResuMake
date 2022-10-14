import {ReactNode} from 'react';

export interface HomeFeatureProps {
  title: string;
  Icon: any;
  url?: string;
  children: ReactNode;
}

export interface FooterProps {
  title: string;
  href: string;
  newTab?: boolean;
}

export interface FAQProps {
  question: string;
  children: ReactNode;
}