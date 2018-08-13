const Digisigner = require('./dist/index');
const dotenv = require('dotenv');
require('isomorphic-fetch');
// import Digisigner from './dist/index';
// import dotenv     from 'dotenv';
// import 'isomorphic-fetch';

dotenv.config();

describe('Digisigner class', () => {

  it('is gets a document', () => {
    let digisigner = new Digisigner(process.env.DIGISIGNER_API_KEY);

    return digisigner.downloadDocument(process.env.DIGISIGNER_DOCUMENT_ID)
      .then(res => {
        expect(res).toHaveProperty('success', true);
      });
  });
  
  it ('creates gets a signature request', () => {
    expect.assertions(1); // Necessary for Promises

    let digisigner = new Digisigner(process.env.DIGISIGNER_API_KEY);
  
    let signers = [
      {
        email: "stephenaorr@gmail.com",
        role: "Signer 1",
        existing_fields: [
          // provider_full_name_2
          {
            "api_id": "470e385d-66f4-43c5-81fe-3156ebe641bb",
            "content": "Stephen Orr",
            "read_only": true
          },
          // cell_number
          {
            "api_id": "dfa75dbd-e2a6-4f8e-aa51-d89367d5df6d",
            "content": "3143086391",
            "read_only": false
          },
          // email
          {
            "api_id": "a38cdfd5-8da5-43dc-b295-9465668134ab",
            "content": "stephen@fyresite.com",
            "read_only": false
          },
          // address_2
          {
            "api_id": "ee47e83d-db29-4658-91e0-a65a92969618",
            "content": "Apt 24",
            "label": "address_2",
            "read_only": false
          },
          // address_1
          {
            "api_id": "273b89db-7b93-4ea7-8fd6-62dc75c03650",
            "content": "123 Fake St.",
            "label": "address_1",
            "read_only": false
          },
          // name_authorized_person
          {
            "api_id": "6acd8932-5928-4e98-ac79-fd969ff7f2dc",
            "content": "Stephen Orr",
            "read_only": false
          },
          // provider_full_name
          {
            "api_id": "526ae178-c7c9-4cab-b768-83fcbb26f657",
            "content": "Stephen Orr",
            "read_only": false
          },
          // month
          {
            "api_id": "8a8ccad7-250d-402f-b564-d1bd7d6f5d51",
            "content": "February",
            "read_only": false
          },
          // day
          {
            "api_id": "eae5fec4-6be9-4572-a7fe-175f0ae457fa",
            "content": "27",
            "read_only": false
          }
        ]
      }
    ];

    return digisigner.sendSignatureRequest(process.env.DIGISIGNER_DOCUMENT_ID, signers, '', 'https://google.com')
      .then(res => {
        // console.log(res.response);
        // console.log(res.response.documents[0].signers[0]);
        expect(res).toHaveProperty('success', true);
      });
  });
});
