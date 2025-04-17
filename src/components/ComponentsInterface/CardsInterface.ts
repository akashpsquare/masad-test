import { ReactNode } from 'react';

export interface CardsProps{
  label?: string;
  icon?: ReactNode;
  iconSize?: string;
  children?: ReactNode;
  customStyle?:string;
}