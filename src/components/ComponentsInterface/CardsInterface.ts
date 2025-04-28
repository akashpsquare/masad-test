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

export type CardBodyProps =
  | {
      variant: 'service' | 'product';
      data: {
        id: number;
        name: string;
        price: number;
      }[];
      benefitdata?: never;
      reminderdata?: never;
      discountdata?: never;
    }
  | {
      variant: 'benefit';
      benefitdata: string[];
      data?: never;
      reminderdata?: never;
      discountdata?: never;
    }
  | {
      variant: 'reminder';
      reminderdata: string | number;
      data?: never;
      benefitdata?: never;
      discountdata?: never;
    }
  | {
      variant: 'discount';
      discountdata: DiscountData[];
      data?: never;
      benefitdata?: never;
      reminderdata?: never;
    };

export interface DiscountData {
  eventName: string;
  message: string;
  startTime: string | number;
  endTime: string | number;
  startDate: string | number;
  endDate: string | number;
  currency: string;
  offerExpiry: string | number;
  expiryMessage: string | number;
}


export interface CardHeaderProps {
  headerlabel: string;
  headertitle?: string;
  headericon: ReactNode;
  headerlabeltag?: string;
  headercount?: number;
  variant: 'service' | 'form' | 'product' | 'reminder'| 'benefit' | 'discount';
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

