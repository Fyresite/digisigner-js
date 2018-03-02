import base64 from 'base-64';
import 'isomorphic-fetch';

class Digisigner {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  getFields(document_id) {
    return new Promise((resolve, reject) => {
      let method = 'GET';
      let headers = new Headers();
  
      headers.append('Authorization', `Basic ${base64.encode(`${this.API_KEY}`)}`);
      headers.append('Content-Type', 'application/json');

      fetch(`https://api.digisigner.com/v1/documents/${document_id}/fields`, {
        method,
        headers
      })
      .then(res => {
        return res.json();
      })
      .then(json => {
        resolve({
          success: true,
          response: json
        })
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getSignatureRequestStatus(signature_request_id) {
    return new Promise((resolve, reject) => {
      let method = 'GET';
      let headers = new Headers();
  
      headers.append('Authorization', `Basic ${base64.encode(`${this.API_KEY}`)}`);
      headers.append('Content-Type', 'application/json');

      fetch(`https://api.digisigner.com/v1/signature_requests/${signature_request_id}`, {
        method,
        headers
      })
      .then(res => {
        return res.json();
      })
      .then(json => {
        resolve({
          success: true,
          response: json
        });
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  sendSignatureRequest(document_id, signers, title = '') {
    return new Promise((resolve, reject) => {
      let method = 'POST';
      let headers = new Headers();
      let body = {
        embedded: true,
        send_emails: false,
        documents: [
          {
            document_id,
            title,
            signers
          }
        ]
      };
  
      headers.append('Authorization', `Basic ${base64.encode(`${this.API_KEY}`)}`);
      headers.append('Content-Type', 'application/json');

      fetch('https://api.digisigner.com/v1/signature_requests', {
        method,
        headers,
        body: JSON.stringify(body)
      })
      .then(res => {
        return res.json();
      })
      .then(json => {
        resolve({
          success: true,
          response: json
        })
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}

export default Digisigner;