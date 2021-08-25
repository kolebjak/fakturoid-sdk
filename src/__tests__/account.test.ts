import fakturoidSDK from '../sdk';
import { isRight } from 'fputils';
import { getEnvVar } from '../utils';
import { IAccount } from '../modules/account';

describe('Account', () => {
  const sdk = fakturoidSDK({
    email: 'drapeerden@icloud.com',
    token: getEnvVar('TOKEN'),
    slug: 'jakubdev',
  });

  it('get account', async () => {
    const account = await sdk.account();
    expect(isRight(account)).toBe(true);

    const accountResult: IAccount = {
      subdomain: 'jakubdev',
      plan: 'Základ',
      plan_price: 0,
      email: 'drapeerden@icloud.com',
      invoice_email: 'drapeerden@icloud.com',
      phone: null,
      web: null,
      name: 'jakubdev',
      full_name: null,
      registration_no: '',
      vat_no: '',
      vat_mode: 'non_vat_payer',
      vat_price_mode: 'without_vat',
      street: 'ulice',
      street2: null,
      city: 'mesto',
      zip: 'psc',
      country: 'CZ',
      bank_account: '111111111/0800',
      iban: '',
      swift_bic: '',
      currency: 'CZK',
      unit_name: '',
      vat_rate: 0,
      displayed_note: '',
      invoice_note: null,
      due: 14,
      invoice_language: 'cz',
      invoice_payment_method: null,
      invoice_proforma: false,
      invoice_number_format: '#yyyy#-#dddd#',
      proforma_number_format: '1-#yyyy#-#dddd#',
      custom_email_text: 'Hezký den,\n\nvystavil jsem pro Vás fakturu \n#link#\n\nDíky!\n\njakubdev',
      overdue_email_text:
        'Zdravím,\n' +
        '\n' +
        'můj fakturační robot mě upozornil, že faktura č. #no# je po splatnosti.\n' +
        'Fakturu najdete na #link#\n' +
        '\n' +
        'Zkuste se na to mrknout. Díky.\n' +
        '\n' +
        'jakubdev',
      send_overdue_email: false,
      send_invoice_from_proforma_email: false,
      send_thank_you_email: false,
      invoice_paypal: false,
      invoice_gopay: false,
      eet: false,
      eet_invoice_default: false,
      html_url: 'https://app.fakturoid.cz/jakubdev/account',
      url: 'https://app.fakturoid.cz/api/v2/accounts/jakubdev/account.json',
      updated_at: '2021-08-20T20:32:23.548+02:00',
      created_at: '2021-08-04T15:33:50.432+02:00',
    };

    expect(account.value).toStrictEqual(accountResult);
  });
});
