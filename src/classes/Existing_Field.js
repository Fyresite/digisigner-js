class Existing_Field {
    constructor(params = {}) {
        this.api_id = null;
        this.label = null;
        this.content = null;
        this.group_id = null;
        this.required = true;   // default in API
        this.read_only = false; // default in API

        this.setParams(params);
    }

    setParams(params) {
        Object.keys(params).forEach(key => {
            this[key] = params[key];
        });
    }

    update(params) {
        this.setParams(params);
    }

    toJSON() {
        return Object.assign({}, this);
    }
}

export default Existing_Field;