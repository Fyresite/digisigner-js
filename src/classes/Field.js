class Field {
    constructor(params = {}) {
        this.type = null;
        this.page = null;
        this.rectangle = [];
        this.api_id = null;
        this.label = null;
        this.content = null;
        this.group_id = null;
        this.required = true;   // defualt in API
        this.read_only = false; // default in API

        this.setParams(params);
    }

    setParams(params) {
        Object.keys(params).forEach(key => {
            let valid = true;
            let error = '';

            switch (key) {
                case 'type':
                    valid = ['SIGNATURE', 'TEXT', 'INITIALS', 'DATE', 'CHECKBOX'].includes(params[key]);
                    error = `Invalid type '${params[key]}' for class Field.`;
                    break;
                default:
                    valid = true;
                    break;
            }

            if (!valid) {
                throw new TypeError(error);
            } else {
                this[key] = params[key];
            }
        });
    }

    update(params) {
        this.setParams(params);
    }

    toJSON() {
        return Object.assign({}, this);
    }
}

export default Field;