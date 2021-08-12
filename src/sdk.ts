import { Maybe } from 'fputils'
import { getFetchJson } from './fetch'

interface ISDKArgs {
  email: string;
  token: string;
  slug: string;
}

interface ICreateSubject {
  name: string;
}

const sdk = ({ email, token , slug }: ISDKArgs) => {
  const fetchJson = getFetchJson({ slug, email, token });

  const account = async (): Promise<Maybe<any>> => fetchJson('account.json');
  const invoices = async (): Promise<Maybe<any>> => fetchJson('invoices.json');
  const subjects = async (): Promise<Maybe<any>> => fetchJson('subjects.json');

  const createSubject = async ({ name }: ICreateSubject): Promise<Maybe<any>> => fetchJson('subjects.json', {
    method: 'POST',
    body: JSON.stringify({ name })
  });

  return {
    account,
    invoices,
    subjects,
    createSubject,
  }
}

export default sdk;





