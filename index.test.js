import Digisigner from './dist/index';
import dotenv     from 'dotenv';
import 'isomorphic-fetch';

dotenv.config();

describe('Digisigner class', () => {

  it('is an instance of Digisigner class', () => {
    expect(new Digisigner(process.env.DIGISIGNER_API_KEY)).toBeInstanceOf(Digisigner);
  });

  it ('gets the fields from the document', () => {
    expect.assertions(1);

    let digisigner = new Digisigner(process.env.DIGISIGNER_API_KEY);

    return digisigner.getFields(process.env.DIGISIGNER_DOCUMENT_ID)
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
        role: "Signer 1"
      }
    ];

    return digisigner.sendSignatureRequest(process.env.DIGISIGNER_DOCUMENT_ID, signers)
      .then(res => {
        expect(res).toHaveProperty('success', true);
      });
  });
});
