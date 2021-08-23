import fakturoidSDK from '../sdk';
import { isRight } from 'fputils';
import { getEnvVar } from '../utils';

describe('Account', () => {
  const sdk = fakturoidSDK({
    email: 'drapeerden@icloud.com',
    token: getEnvVar('TOKEN'),
    slug: 'jakubdev',
    baseUrl: 'https://app.fakturoid.cz/api/v2/accounts/',
  });

  it('get account', async () => {
    const account = await sdk.account();
    expect(isRight(account)).toBe(true);
    expect(account.value.subdomain).toBe('jakubdev');
  });
});
