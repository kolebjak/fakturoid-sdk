import { Maybe } from 'fputils';
import { FetchJson } from '../fetch';

export interface ILine {
  id: number;
  name: string;
  quantity: number;
  unit_name?: string;
  unit_price: number;
  vat_rate: number;
  unit_price_without_vat: number;
  unit_price_with_vat: number;
}

export interface ICreateLine {
  name: string;
  quantity: number;
  unit_name?: string;
  unit_price: number;
  vat_rate: number;
}

export interface IInvoice {
  custom_id?: string;
  id: number;
  proforma?: boolean;
  partial_proforma?: boolean;
  number?: string;
  variable_symbol?: string;
  your_name: string;
  your_street: string;
  /**
   * @deprecated
   */
  your_street2: string;
  your_city: string;
  your_zip: string;
  your_country: string;
  your_registration_no: string;
  your_vat_no: string;
  your_local_vat_no: string;
  client_name: string;
  client_street: string;
  /**
   * @deprecated
   */
  client_street2: string;
  client_city: string;
  client_zip: string;
  client_country: string;
  client_registration_no: string;
  client_vat_no: string;
  client_local_vat_no: string;
  subject_id: number;
  subject_custom_id?: number;
  generator_id?: number;
  related_id?: number;
  correction?: boolean;
  correction_id?: number;
  token: string;
  status: string;
  order_number?: string;
  issued_on?: string;
  taxable_fulfillment_due?: string;
  due?: string;
  due_on: string;
  sent_at: string;
  paid_at: string;
  reminder_sent_at: string;
  accepted_at: string;
  cancelled_at: string;
  note?: string;
  footer_note?: string;
  private_note?: string;
  tags?: string[];
  bank_account_id?: number;
  bank_account?: string;
  iban?: string;
  swift_bic?: string;
  payment_method?: 'bank' | 'cash' | 'cod' | 'paypal' | 'card';
  currency?: string;
  exchange_rate?: string;
  paypal?: boolean;
  gopay?: boolean;
  language?: 'cz' | 'sk' | 'en' | 'de' | 'fr' | 'it' | 'es' | 'ru' | 'hu' | 'pl' | 'ro';
  transferred_tax_liability?: boolean;
  supply_code?: number;
  eu_electronic_service?: boolean;
  vat_price_mode?: string;
  round_total?: boolean;
  subtotal: number;
  native_subtotal: number;
  total: number;
  native_total: number;
  remaining_amount: number;
  remaining_native_amount: number;
  paid_amount: number;
  eet?: boolean;
  eet_cash_register?: string;
  eet_store?: number;
  eet_records?: string[];
  attachment?: string;
  html_url: string;
  public_html_url: string;
  url: string;
  pdf_url: string;
  subject_url: string;
  created_at: string;
  updated_at: string;
  lines: ILine[];
}

export interface ICreateInvoice {
  custom_id?: string;
  proforma?: boolean;
  partial_proforma?: boolean;
  number?: string;
  variable_symbol?: string;
  subject_id: number;
  subject_custom_id?: number;
  generator_id?: number;
  related_id?: number;
  correction?: boolean;
  correction_id?: number;
  order_number?: string;
  issued_on?: string;
  taxable_fulfillment_due?: string;
  due?: string;
  note?: string;
  footer_note?: string;
  private_note?: string;
  tags?: string[];
  bank_account_id?: number;
  bank_account?: string;
  iban?: string;
  swift_bic?: string;
  payment_method?: 'bank' | 'cash' | 'cod' | 'paypal' | 'card';
  currency?: string;
  exchange_rate?: string;
  paypal?: boolean;
  gopay?: boolean;
  language?: 'cz' | 'sk' | 'en' | 'de' | 'fr' | 'it' | 'es' | 'ru' | 'hu' | 'pl' | 'ro';
  transferred_tax_liability?: boolean;
  supply_code?: number;
  eu_electronic_service?: boolean;
  vat_price_mode?: string;
  round_total?: boolean;
  eet?: boolean;
  eet_cash_register?: string;
  eet_store?: number;
  eet_records?: string[];
  attachment?: string;
  lines: ICreateLine[];
}

export type Invoices = () => Promise<Maybe<IInvoice[]>>;
export const invoices =
  (fetchJson: FetchJson<IInvoice[]>): Invoices =>
  async (): Promise<Maybe<IInvoice[]>> =>
    fetchJson('invoices.json');

export type CreateInvoice = (props: ICreateInvoice) => Promise<Maybe<IInvoice>>;
export const createInvoice =
  (fetchJson: FetchJson<IInvoice>): CreateInvoice =>
  async (props) =>
    fetchJson('invoices.json', {
      method: 'POST',
      body: JSON.stringify(props),
    });
