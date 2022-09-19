import {ReactNode} from 'react';

export interface HomeFeatureProps {
  title: string;
  Icon: any;
  children: ReactNode;
}

export interface FooterProps {
  title: string;
  href: string;
  newTab?: boolean;
}