import Digisigner from './dist/index';
import dotenv     from 'dotenv';
import 'isomorphic-fetch';

dotenv.config();

describe('Digisigner class', () => {

  it('is gets a document', () => {
    console.log(Digisigner);

    let digisigner = new Digisigner(process.env.DIGISIGNER_API_KEY);

    return digisigner.downloadDocument(process.env.DIGISIGNER_DOCUMENT_ID)
      .then(res => {
        expect(res).toHaveProperty('success', true);
      });
  });
  
  it ('creates gets a signature request', () => {
    expect.assertions(1); // Necessary for Promises

    let digisigner = new Digisigner(process.env.DIGISIGNER_API_KEY);

    return digisigner.sendSignatureRequest(process.env.DIGISIGNER_DOCUMENT_ID, signers, 'https://google.com')
      .then(res => {
        // console.log(res.response.documents);
        console.log(res.response.documents[0].signers[0]);
        expect(res).toHaveProperty('success', true);
      });
  });
});
