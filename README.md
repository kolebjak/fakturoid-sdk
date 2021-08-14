# Fakturoid SDK for NodeJS

## Installation

`yarn add fakturoid-sdk` or `npm i fakturoid-sdk`

## Usage

```typescript
import fakturoidSDK from 'fakturoid-sdk';

const fakturoid = fakturoidSDK({
    email: 'email', // account email
    token: 'token', // API token
    slug: 'applecorp', // your account / domain
});

const account = await fakturoid.account();

```

All methods are using Either approach - no error is thrown. Utility functions for handling either are exported. 

```typescript

import fakturoidSDK, { isLeft, isRight } from 'fakturoid-sdk';

const fakturoid = fakturoidSDK({
    email: 'email', // account email
    token: 'token', // API token
    slug: 'applecorp', // your account / domain
});

const account = await fakturoid.account();

// response successful
if(isRight(account)) {
  // Server response available under account.value
  console.log(account.value);
}

// response error
if(isLeft(account)) {
  // Thrown error available under account.value
  console.error(account.value);
}

```

## Available functions

|  Function |  Description  |   |
|---|---|---|
|  `fakturoid.account()`  | Account details |  [docs](https://fakturoid.docs.apiary.io/#reference/account) |
|  `fakturoid.invoices()`  | List of invoices  |  [docs](https://fakturoid.docs.apiary.io/#reference/invoices/invoices-collection/seznam-faktur?console=1) |
|  `fakturoid.createInvoice()`  | Create new invoice |  [docs](https://fakturoid.docs.apiary.io/#reference/invoices/invoices-collection/nova-faktura?console=1) |
|  `fakturoid.subjects()`  | List of subjects |  [docs](https://fakturoid.docs.apiary.io/#reference/subjects/subjects-collection/seznam-vsech-kontaktu?console=1) |
|  `fakturoid.createSubject()`  | Create new subject |  [docs](https://fakturoid.docs.apiary.io/#reference/subjects/subjects-collection/novy-kontakt?console=1) |

