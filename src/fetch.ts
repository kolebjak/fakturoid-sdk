import fetch, { RequestInit } from 'node-fetch'
import { Left, Maybe, Right } from 'fputils'

const getAuthorization = (email: string, token: string) => `Basic ${new Buffer( `${email}:${token}`).toString('base64')}`;
const baseUrl = 'https://app.fakturoid.cz/api/v2/accounts';

interface IFetchJsonArgs {
  slug: string;
  email: string;
  token: string
}

export const getFetchJson = ({ slug, email, token }: IFetchJsonArgs) => async <T>(url: string, init?: RequestInit): Promise<Maybe<T>> => {
  try {
    const res = await fetch(`${baseUrl}/${slug}/${url}`, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: getAuthorization(email, token),
        'Content-Type': 'application/json',
      }
    });

    if(!res.ok) {
      return Left(new Error(`Response is not OK. Status: ${res.status}`));
    }

    return Right(await res.json());
  } catch (e) {
    return Left(e);
  }
};
