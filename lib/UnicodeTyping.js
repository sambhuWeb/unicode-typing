'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function UnicodeTyping(keyEvent) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, UnicodeTyping);

        Object.assign(this, {
            keyMapping: {
                'K5_65_A': {
                    n: 'normal',
                    c: 'ctrl',
                    s: 'shift',
                    c_a: 'ctrl_alt',
                    c_a_s: 'ctrl_alt_shift'
                }
            }
        }, options);

        this.keyEvent = keyEvent;
    }

    _createClass(UnicodeTyping, [{
        key: 'getUnicodeKey',
        value: function getUnicodeKey() {
            // console.log(keyEvent.keyShortName);
            // console.log(this.keyMapping[keyEvent.keyShortName]);                                

            var keyObject = this.keyMapping[keyEvent.keyShortName];

            if (keyObject) {
                if (this.isCtrlAltShift()) {
                    return keyObject['c_a_s'];
                }

                if (this.isCtrlAlt()) {
                    return keyObject['c_a'];
                }

                if (this.isShift()) {
                    return keyObject['s'];
                }

                /**
                 * In case, if it is ctrl combo key, for e.g. ctrl + A, ctrl + c, it will
                 * return false which will bypass e.prevent default and hence will use
                 * default action. For e.g. Ctrl + A will select; ctrl + c will copy
                 * and so on
                 */
                if (this.isSpecialCtrlComboKey()) {
                    return false;
                }

                /*
                 * In Case of ctrl return normal key.
                 */
                if (this.isCtrl()) {
                    return keyObject['n'];
                }

                if (this.keyEvent.ctrlKey === false && this.keyEvent.shiftKey === false) {
                    return keyObject['n'];
                }
            }

            return false;
        }

        /**
         * Checks if it is Special Ctrl Combo Key. For e.g.,
         * Ctrl + A, Ctrl + S
         *
         * @TODO: Check ctrl + uppercase combination
         */

    }, {
        key: 'isSpecialCtrlComboKey',
        value: function isSpecialCtrlComboKey() {
            return this.isSelectAll() || this.isCopy() || this.isCut() || this.isPaste() || this.isFind() || this.isFindNext() || this.isRefresh() || this.isHistory() || this.isOpen() || this.isSave() || this.isPrint() || this.isNewBrowser() || this.isBookmark() || this.isSelectSearchBox();
        }
    }, {
        key: 'isSelectAll',
        value: function isSelectAll() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'a';
        }
    }, {
        key: 'isCopy',
        value: function isCopy() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'c';
        }
    }, {
        key: 'isCut',
        value: function isCut() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'x';
        }
    }, {
        key: 'isPaste',
        value: function isPaste() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'v';
        }
    }, {
        key: 'isFind',
        value: function isFind() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'f';
        }
    }, {
        key: 'isFindNext',
        value: function isFindNext() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'g';
        }
    }, {
        key: 'isRefresh',
        value: function isRefresh() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'r';
        }
    }, {
        key: 'isHistory',
        value: function isHistory() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'h';
        }
    }, {
        key: 'isOpen',
        value: function isOpen() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'o';
        }
    }, {
        key: 'isSave',
        value: function isSave() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 's';
        }
    }, {
        key: 'isPrint',
        value: function isPrint() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'p';
        }
    }, {
        key: 'isNewBrowser',
        value: function isNewBrowser() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'n';
        }
    }, {
        key: 'isBookmark',
        value: function isBookmark() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'd';
        }
    }, {
        key: 'isSelectSearchBox',
        value: function isSelectSearchBox() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'e';
        }
    }, {
        key: 'isCtrlAltShift',
        value: function isCtrlAltShift() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.altKey === true && this.keyEvent.shiftKey === true;
        }
    }, {
        key: 'isCtrlAlt',
        value: function isCtrlAlt() {
            return this.keyEvent.ctrlKey === true && this.keyEvent.altKey === true;
        }
    }, {
        key: 'isShift',
        value: function isShift() {
            return this.keyEvent.shiftKey === true;
        }
    }, {
        key: 'isCtrl',
        value: function isCtrl() {
            return this.keyEvent.ctrlKey === true;
        }
    }]);

    return UnicodeTyping;
}();
//# sourceMappingURL=UnicodeTyping.js.map