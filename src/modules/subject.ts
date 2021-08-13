import { Maybe } from 'fputils'

export interface ISubject {
  id: number;
  custom_id?: string;
  type: 'customer' | 'supplier' | 'both';
  name: string;
  street?: string;
  city?: string;
  zip?: string;
  country?: string;
  registration_no?: string;
  vat_no?: string;
  bank_account?: string;
  iban?: string;
  variable_symbol?: string
  full_name?: string;
  email?: string;
  email_copy?: string;
  phone?: string;
  web?: string;
  private_note?: string;
  html_url: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export interface ICreateSubject {
  custom_id?: string;
  type?: 'customer' | 'supplier' | 'both';
  name: string;
  street?: string;
  city?: string;
  zip?: string;
  country?: string;
  registration_no?: string;
  vat_no?: string;
  bank_account?: string;
  iban?: string;
  variable_symbol?: string;
  enabled_reminders?: boolean;
  full_name?: string;
  email?: string;
  email_copy?: string;
  phone?: string;
  web?: string;
  private_note?: string;
  avatar_url?: string;
}

export type Subjects = () => Promise<Maybe<ISubject[]>>;
export const subjects = (fetchJson: any) => async (): Promise<Maybe<ISubject[]>> => fetchJson('subjects.json');

export type CreateSubject = (props: ICreateSubject) => Promise<Maybe<ISubject>>;
export const createSubject = (fetchJson: any): CreateSubject => async ({ name }) => fetchJson('subjects.json', {
  method: 'POST',
  body: JSON.stringify({ name })
});
