import { ReactNode } from 'react';


export interface CardsProps{
  
  children: ReactNode;
  customStyle:string;
 
}
export interface EmptyCardProp{
  label: string;
  icon: ReactNode;
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


export interface CardProp{


  benefit?: string[];
  headerlabel?: string;
  headericon?: ReactNode;
  headerlabeltag?: string;
  headercount?: number;
}


export interface CardBodyProps {
  data:{
    id: number,
    name: string,
    price: number,
  }[];
  variant: 'service' | 'product' | 'reminder'| 'benefit';
  benefitdata?: string[];
  reminderdate?: string | number;

}

export interface CardHeaderProps {
  headerlabel: string;
  headertitle?: string;
  headericon: ReactNode;
  headerlabeltag?: string;
  headercount?: number;
  variant: 'service' | 'form' | 'product' | 'reminder'| 'benefit';
}
export interface SubHeaderProps {
  label: string;
  description: string;
  memberType: string;
  month: number;
  price: number;
  editIcon: string;
  memberIcon: string;
}

export interface BenefitContainerProps {
  benefit: string[]; 
  count: number;
}