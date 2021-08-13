import { Maybe } from 'fputils'
import { getFetchJson } from './fetch'
import { CreateSubject, createSubject, Subjects, subjects } from './modules/subject'

export interface IFakturoidSDKArgs {
  email: string;
  token: string;
  slug: string;
}

export interface IFakturoidSDK {
  account: () => any,
  invoices: () => any,
  subjects: Subjects,
  createSubject: CreateSubject,
}

const sdk = ({ email, token , slug }: IFakturoidSDKArgs): IFakturoidSDK => {
  const fetchJson = getFetchJson({ slug, email, token });

  const account = async (): Promise<Maybe<any>> => fetchJson('account.json');
  const invoices = async (): Promise<Maybe<any>> => fetchJson('invoices.json');


  return {
    account,
    invoices,
    subjects: subjects(fetchJson),
    createSubject: createSubject(fetchJson),
  }
}

export default sdk;





