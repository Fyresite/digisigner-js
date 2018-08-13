"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Existing_Field = function () {
    function Existing_Field() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Existing_Field);

        this.api_id = null;
        this.label = null;
        this.content = null;
        this.group_id = null;
        this.required = true; // default in API
        this.read_only = false; // default in API

        this.setParams(params);
    }

    _createClass(Existing_Field, [{
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
            return Object.assign({}, this);
        }
    }]);

    return Existing_Field;
}();

exports.default = Existing_Field;
module.exports = exports["default"];