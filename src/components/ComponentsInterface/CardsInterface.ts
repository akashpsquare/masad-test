import { ReactNode } from 'react';


export interface CardsProps{
  
  children?: ReactNode;
  customStyle?:string;
 
}
export interface EmptyCardProp{
  label: string;
  icon: ReactNode;
}
export interface CardProp{

  data?:{
    id: number,
    name: string,
    price: number,
  }[];
  variant?:string,
  headerlabel?: string;
  headericon?: ReactNode;
  headerlabeltag?: string;
  headercount?: number;
}


export interface InputProps {
  value: string,
  label: string,
  type?: 'text' | 'number' | 'email' | 'file',
  placeholder: string,
 name: string,
  required?: boolean,
  customCss?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

