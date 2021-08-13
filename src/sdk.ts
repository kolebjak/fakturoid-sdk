import { Maybe } from 'fputils'
import { getFetchJson } from './fetch'
import { createSubject, subjects } from './lib/subject'

interface ISDKArgs {
  email: string;
  token: string;
  slug: string;
}

const sdk = ({ email, token , slug }: ISDKArgs) => {
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





