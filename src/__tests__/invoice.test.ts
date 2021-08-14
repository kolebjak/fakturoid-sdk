import fakturoidSDK from '../sdk';
import { isRight } from 'fputils';

describe('Invoice', () => {
  const sdk = fakturoidSDK({
    email: 'email',
    token: 'token',
    slug: 'applecorp',
    baseUrl: 'https://private-anon-99f626641b-fakturoid.apiary-mock.com/api/v2/accounts/',
  });

  // TODO: fakturoid returns invalid json from mock server
  xit('get list of invoices', async () => {
    const invoices = await sdk.invoices();
    expect(isRight(invoices)).toBe(true);
  });

  xit('create invoice', async () => {
    const invoice = await sdk.createInvoice({
      subject_id: 6,
      lines: [
        {
          name: 'Random item',
          quantity: 1,
          unit_price: 1000,
          vat_rate: 21,
        },
      ],
    });

    expect(isRight(invoice)).toBe(true);
  });
});
