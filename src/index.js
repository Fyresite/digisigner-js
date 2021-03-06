import base64 from 'base-64';
import 'isomorphic-fetch';
import https from 'https';

// Include all the classes
import Document from './classes/Document';
import Existing_Field from './classes/Existing_Field';
import Field from './classes/Field';
import Signature_Request from './classes/Signature_Request';
import Signer from './classes/Signer';

class Digisigner {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
  }

  downloadDocument(document_id) {
    return new Promise((resolve, reject) => {

      var options = {
        "method": "GET",
        "hostname": "api.digisigner.com",
        "port": null,
        "path": `/v1/documents/${document_id}`,
        "headers": {
          "content-length": "0",
          "authorization": `Basic ${base64.encode(`${this.API_KEY}:`)}`
        }
      };
      
      var req = https.request(options, function (res) {
        var chunks = [];
      
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
      
        res.on("end", function () {
          var body = Buffer.concat(chunks);
          resolve({
            success: true,
            response: body
          });
        });

        res.on('error', err => {
          console.log(err);
          reject(err);
        });
      });

      req.end();
    });
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

  sendSignatureRequest(signature_request) {
    return new Promise((resolve, reject) => {
      let method = 'POST';
      let headers = new Headers();
      let body = signature_request.toJSON();
  
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

export {
  Document,
  Existing_Field,
  Field,
  Signature_Request,
  Signer
};

export default Digisigner;