"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Document = function () {
    function Document() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Document);

        this.document_id = null;
        this.title = null;
        this.subject = null;
        this.message = null;
        this.signers = [];

        this.setParams(params);
    }

    _createClass(Document, [{
        key: "setParams",
        value: function setParams(params) {
            var _this = this;

            Object.keys(params).forEach(function (key) {
                _this[key] = params[key];
            });
        }
    }, {
        key: "update",
        value: function update(params) {
            this.setParams(params);
        }
    }, {
        key: "toJSON",
        value: function toJSON() {
            var signers = this.signers.map(function (signer) {
                return signer.toJSON();
            });

            return Object.assign({}, this, { signers: signers });
        }
    }]);

    return Document;
}();

exports.default = Document;
module.exports = exports["default"];