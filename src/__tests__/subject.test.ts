import fakturoidSDK from '../sdk';
import { isRight } from 'fputils';

describe('Subject', () => {
  const sdk = fakturoidSDK({
    email: 'email',
    token: 'token',
    slug: 'applecorp',
    baseUrl: 'https://private-anon-99f626641b-fakturoid.apiary-mock.com/api/v2/accounts/',
  });

  it('get a list of subjects', async () => {
    const subjects = await sdk.subjects();
    expect(isRight(subjects)).toBe(true);
    expect(Array.isArray(subjects.value)).toBe(true);
  });

  it('creates subject', async () => {
    const subject = await sdk.createSubject({
      name: 'Joe Doe',
    });
    expect(isRight(subject)).toBe(true);
  });
});
