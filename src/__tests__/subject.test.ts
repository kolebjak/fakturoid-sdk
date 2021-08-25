import fakturoidSDK from '../sdk';
import { isLeft, isRight } from 'fputils';
import { getEnvVar } from '../utils';

describe('Subject', () => {
  const sdk = fakturoidSDK({
    email: 'drapeerden@icloud.com',
    token: getEnvVar('TOKEN'),
    slug: 'jakubdev',
  });

  it('get a list of subjects', async () => {
    const subjects = await sdk.subjects();
    expect(isRight(subjects)).toBe(true);
    expect(Array.isArray(subjects.value)).toBe(true);
  });

  it('get subject by id', async () => {
    const subject = await sdk.subject(12502822);

    if (isLeft(subject)) {
      fail('Incorrect state.');
    }

    expect(subject.value.id).toBe(12502822);
  });

  it('creates subject', async () => {
    const subject = await sdk.createSubject({
      name: 'Joe Doe',
    });
    expect(isRight(subject)).toBe(true);
  });
});
