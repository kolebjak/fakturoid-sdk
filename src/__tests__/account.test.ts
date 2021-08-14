import fakturoidSDK from '../sdk';
import { isRight } from 'fputils';

describe('Account', () => {
  const sdk = fakturoidSDK({
    email: 'email',
    token: 'token',
    slug: 'applecorp',
    baseUrl: 'https://private-anon-99f626641b-fakturoid.apiary-mock.com/api/v2/accounts/',
  });

  it('get account', async () => {
    const account = await sdk.account();
    expect(isRight(account)).toBe(true);
    expect(account.value.subdomain).toBe('testdph');
  });
});
