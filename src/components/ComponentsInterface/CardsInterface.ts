import { ReactNode } from 'react';

export interface CardsProps{

  children?: ReactNode;
  customStyle?:string;
 
}

export interface CardBodyProp{

  data:{}[];
}

export interface CardHeaderProp{
  label: string;
  icon: any;
  labelTag: string;
  count?: number;
}