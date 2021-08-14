import { Maybe } from 'fputils';
import { getFetchJson } from './fetch';
import { CreateSubject, createSubject, Subjects, subjects } from './modules/subject';
import { CreateInvoice, createInvoice, Invoices, invoices } from './modules/invoice';

export interface IFakturoidSDKArgs {
  email: string;
  token: string;
  slug: string;
  baseUrl?: string;
}

export interface IFakturoidSDK {
  account: () => Promise<Maybe<any>>;
  invoices: Invoices;
  createInvoice: CreateInvoice;
  subjects: Subjects;
  createSubject: CreateSubject;
}

const sdk = ({ email, token, slug, baseUrl }: IFakturoidSDKArgs): IFakturoidSDK => {
  const fetchJson = getFetchJson({
    slug,
    email,
    token,
    baseUrl: baseUrl ?? 'https://app.fakturoid.cz/api/v2/accounts',
  });

  const account = async (): Promise<Maybe<any>> => fetchJson('account.json');

  return {
    account,
    invoices: invoices(fetchJson),
    createInvoice: createInvoice(fetchJson),
    subjects: subjects(fetchJson),
    createSubject: createSubject(fetchJson),
  };
};

export default sdk;
