'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('base-64');

var _base2 = _interopRequireDefault(_base);

require('isomorphic-fetch');

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Digisigner = function () {
  function Digisigner(API_KEY) {
    _classCallCheck(this, Digisigner);

    this.API_KEY = API_KEY;
  }

  _createClass(Digisigner, [{
    key: 'downloadDocument',
    value: function downloadDocument(document_id) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        var options = {
          "method": "GET",
          "hostname": "api.digisigner.com",
          "port": null,
          "path": "/v1/documents/1e95777f-c5fa-4714-8d2c-7f6034b2ce85",
          "headers": {
            "content-length": "0",
            "authorization": 'Basic ' + _base2.default.encode(_this.API_KEY + ':')
          }
        };

        var req = _https2.default.request(options, function (res) {
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

          res.on('error', function (err) {
            console.log(err);
            reject(err);
          });
        });

        req.end();
      });
    }
  }, {
    key: 'getFields',
    value: function getFields(document_id) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var method = 'GET';
        var headers = new Headers();

        headers.append('Authorization', 'Basic ' + _base2.default.encode('' + _this2.API_KEY));
        headers.append('Content-Type', 'application/json');

        fetch('https://api.digisigner.com/v1/documents/' + document_id + '/fields', {
          method: method,
          headers: headers
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          resolve({
            success: true,
            response: json
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: 'getSignatureRequestStatus',
    value: function getSignatureRequestStatus(signature_request_id) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var method = 'GET';
        var headers = new Headers();

        headers.append('Authorization', 'Basic ' + _base2.default.encode('' + _this3.API_KEY));
        headers.append('Content-Type', 'application/json');

        fetch('https://api.digisigner.com/v1/signature_requests/' + signature_request_id, {
          method: method,
          headers: headers
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          resolve({
            success: true,
            response: json
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }, {
    key: 'sendSignatureRequest',
    value: function sendSignatureRequest(document_id, signers) {
      var _this4 = this;

      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      return new Promise(function (resolve, reject) {
        var method = 'POST';
        var headers = new Headers();
        var body = {
          embedded: true,
          send_emails: false,
          documents: [{
            document_id: document_id,
            title: title,
            signers: signers
          }]
        };

        headers.append('Authorization', 'Basic ' + _base2.default.encode('' + _this4.API_KEY));
        headers.append('Content-Type', 'application/json');

        fetch('https://api.digisigner.com/v1/signature_requests', {
          method: method,
          headers: headers,
          body: JSON.stringify(body)
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          resolve({
            success: true,
            response: json
          });
        }).catch(function (err) {
          reject(err);
        });
      });
    }
  }]);

  return Digisigner;
}();

exports.default = Digisigner;
module.exports = exports['default'];