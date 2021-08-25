import { Maybe } from 'fputils';
import { FetchJson } from '../fetch';

export interface IAccount {
  subdomain: string;
  plan: string;
  plan_price: number;
  email: string;
  invoice_email: string | null;
  phone: string | null;
  web: string | null;
  name: string;
  full_name: string | null;
  registration_no?: string;
  vat_no?: string;
  vat_mode: 'vat_payer' | 'non_vat_payer' | 'identified_person';
  vat_price_mode: 'without_vat' | 'from_total_with_vat';
  street: string;
  street2: string | null;
  city: string;
  zip: string;
  country: string;
  bank_account: string;
  iban?: string;
  swift_bic?: string;
  currency: string;
  unit_name?: string;
  vat_rate: number;
  displayed_note?: string;
  invoice_note: string | null;
  due: number;
  invoice_language: string;
  custom_email_text: string;
  overdue_email_text: string;
  invoice_paypal: boolean;
  invoice_gopay: boolean;
  html_url: string;
  url: string;
  updated_at: string;
  created_at: string;

  // --- TODO: not specified https://fakturoid.docs.apiary.io/#reference/account
  invoice_payment_method: string | null;
  invoice_proforma: boolean;
  invoice_number_format: string;
  proforma_number_format: string;
  send_overdue_email: boolean;
  send_invoice_from_proforma_email: boolean;
  send_thank_you_email: boolean;
  eet: boolean;
  eet_invoice_default: boolean;
  // TODO ----
}

export type Account = () => Promise<Maybe<IAccount>>;
export const account =
  (fetchJson: FetchJson<IAccount>): Account =>
  async () =>
    fetchJson('account.json');
