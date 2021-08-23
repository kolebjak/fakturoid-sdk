import { Maybe } from 'fputils';
import { getFetchJson } from './fetch';
import { CreateSubject, createSubject, Subjects, subjects } from './modules/subject';
import { CreateInvoice, createInvoice, invoice, Invoice, Invoices, invoices } from './modules/invoice';

export interface IFakturoidSDKArgs {
  email: string;
  token: string;
  slug: string;
}

export interface IFakturoidSDK {
  account: () => Promise<Maybe<any>>;
  // Invoice
  createInvoice: CreateInvoice;
  invoices: Invoices;
  invoice: Invoice;
  // Subject
  subjects: Subjects;
  createSubject: CreateSubject;
}

const sdk = ({ email, token, slug }: IFakturoidSDKArgs): IFakturoidSDK => {
  const fetchJson = getFetchJson({
    slug,
    email,
    token,
    baseUrl: 'https://app.fakturoid.cz/api/v2/accounts',
  });

  const account = async (): Promise<Maybe<any>> => fetchJson('account.json');

  return {
    account,
    invoice: invoice(fetchJson),
    invoices: invoices(fetchJson),
    createInvoice: createInvoice(fetchJson),
    subjects: subjects(fetchJson),
    createSubject: createSubject(fetchJson),
  };
};

export default sdk;
