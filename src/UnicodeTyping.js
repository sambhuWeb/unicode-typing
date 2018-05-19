module.exports = class UnicodeTyping {

    constructor(keyEvent, options = {}) {                
        Object.assign(this, {                    
            keyMapping: {
                'K5_65_A': {
                    n: 'normal',
                    c: 'ctrl',
                    s: 'shift',
                    c_a: 'ctrl_alt',
                    c_a_s: 'ctrl_alt_shift',
                }
            }
        }, options);
        
        this.keyEvent = keyEvent;
    }

    getUnicodeKey() {
        // console.log(keyEvent.keyShortName);
        // console.log(this.keyMapping[keyEvent.keyShortName]);                                
        
        let keyObject = this.keyMapping[keyEvent.keyShortName];                

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
    isSpecialCtrlComboKey() {
        return this.isSelectAll() ||
                this.isCopy() ||
                this.isCut() ||
                this.isPaste() ||
                this.isFind() ||
                this.isFindNext() ||
                this.isRefresh() ||
                this.isHistory() ||
                this.isOpen() ||
                this.isSave() ||
                this.isPrint() ||
                this.isNewBrowser() ||
                this.isBookmark() ||
                this.isSelectSearchBox();
    }

    isSelectAll() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'a';
    }

    isCopy() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'c';
    }

    isCut() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'x';
    }

    isPaste() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'v';
    }

    isFind() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'f';
    }

    isFindNext() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'g';
    }

    isRefresh() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'r';
    }

    isHistory() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'h';
    }

    isOpen() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'o';
    }

    isSave() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 's';
    }

    isPrint() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'p';
    }

    isNewBrowser() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'n';
    }

    isBookmark() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'd';
    }

    isSelectSearchBox() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.key.toLowerCase() === 'e';
    }

    isCtrlAltShift() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.altKey === true && this.keyEvent.shiftKey === true;
    }

    isCtrlAlt() {
        return this.keyEvent.ctrlKey === true && this.keyEvent.altKey === true;
    }

    isShift() {
        return this.keyEvent.shiftKey === true;
    }

    isCtrl() {
        return this.keyEvent.ctrlKey === true;
    }
}
