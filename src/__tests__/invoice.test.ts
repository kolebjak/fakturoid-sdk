import fakturoidSDK from '../sdk';
import { isRight } from 'fputils';
import { getEnvVar } from '../utils';

describe('Invoice', () => {
  const sdk = fakturoidSDK({
    email: 'drapeerden@icloud.com',
    token: getEnvVar('TOKEN'),
    slug: 'jakubdev',
  });

  it('get list of invoices', async () => {
    const invoices = await sdk.invoices();
    expect(isRight(invoices)).toBe(true);
  });

  it('create invoice', async () => {
    const invoice = await sdk.createInvoice({
      subject_id: 12502822,
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

  describe('invoice()', () => {
    it('should exist', async () => {
      const invoice = await sdk.invoice(19914229);

      expect(isRight(invoice)).toBe(true);
    });
    it('should not exist', async () => {
      const invoice = await sdk.invoice(19914229229229229);

      if (isRight(invoice)) {
        fail('Wrong status.');
      }

      expect(invoice.value.message).toBe('Response is not OK. Status: 404');
    });
  });
});
