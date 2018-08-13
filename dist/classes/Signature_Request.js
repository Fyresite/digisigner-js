'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Signature_Request = function () {
    function Signature_Request() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Signature_Request);

        this.embedded = false; // default
        this.redirect_for_signing_to_url = null;
        this.redirect_after_signing_to_url = null;
        this.send_emails = true; // default
        this.use_text_tags = false; // default
        this.hide_text_tags = false; // default
        this.send_documents_as_bundle = false; // default
        this.bundle_title = null;
        this.bundle_subject = null;
        this.bundle_message = null;
        this.documents = [];

        this.setParams(params);
    }

    _createClass(Signature_Request, [{
        key: 'setParams',
        value: function setParams(params) {
            var _this = this;

            Object.keys(params).forEach(function (key) {
                var error = null;

                switch (key) {
                    case 'documents':
                        error = 'Cannot modify \'documents\' via the setParams method, use addDocument or removeDocument methods instead.';
                        break;
                    default:
                        error = null;
                        break;
                }

                if (error) {
                    throw new Error(error);
                } else {
                    _this[key] = params[key];
                }
            });
        }
    }, {
        key: 'update',
        value: function update(params) {
            this.setParams(params);
        }
    }, {
        key: 'addDocument',
        value: function addDocument(document) {
            this.documents.push(document);
        }
    }, {
        key: 'removeDocument',
        value: function removeDocument(document_id) {
            console.log(this.documents);
            this.documents = this.documents.filter(function (document) {
                console.log(document.document_id + ' !== ' + document_id);
                return document.document_id !== document_id;
            });
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var documents = this.documents.map(function (document) {
                return document.toJSON();
            });

            return Object.assign({}, this, { documents: documents });
        }
    }]);

    return Signature_Request;
}();

exports.default = Signature_Request;
module.exports = exports['default'];