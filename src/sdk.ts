import { Maybe } from 'fputils';
import { getFetchJson } from './fetch';
import { CreateSubject, createSubject, subject, Subject, Subjects, subjects } from './modules/subject';
import { CreateInvoice, createInvoice, invoice, Invoice, Invoices, invoices } from './modules/invoice';
import { account } from './modules/account';

export interface IFakturoidSDKArgs {
  email: string;
  token: string;
  slug: string;
}

export interface IFakturoidSDK {
  // Account
  account: () => Promise<Maybe<any>>;
  // Invoice
  invoice: Invoice;
  invoices: Invoices;
  createInvoice: CreateInvoice;
  // Subject
  subject: Subject;
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

  return {
    account: account(fetchJson),
    invoice: invoice(fetchJson),
    invoices: invoices(fetchJson),
    createInvoice: createInvoice(fetchJson),
    subject: subject(fetchJson),
    subjects: subjects(fetchJson),
    createSubject: createSubject(fetchJson),
  };
};

export default sdk;
