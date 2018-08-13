"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Signer = function () {
    function Signer() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Signer);

        this.email = null;
        this.order = null;
        this.role = null;
        this.fields = [];
        this.existing_fields = [];

        this.setParams(params);
    }

    _createClass(Signer, [{
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
            var email = this.email,
                order = this.order,
                role = this.role;

            var fields = this.fields.map(function (field) {
                return field.toJSON();
            });
            var existing_fields = this.existing_fields.map(function (existing_field) {
                return existing_field.toJSON();
            });

            var signer = {
                email: email,
                order: order,
                role: role,
                fields: fields,
                existing_fields: existing_fields
            };

            return signer;
        }
    }]);

    return Signer;
}();

exports.default = Signer;
module.exports = exports["default"];