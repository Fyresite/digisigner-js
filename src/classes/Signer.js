class Signer {
    constructor(params = {}) {
        this.email = null;
        this.order = null;
        this.role = null;
        this.fields = [];
        this.existing_fields = [];

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
        let { email, order, role } = this;
        let fields = this.fields.map(field => field.toJSON());
        let existing_fields = this.existing_fields.map(existing_field => existing_field.toJSON());

        let signer = {
            email,
            order,
            role,
            fields,
            existing_fields
        };

        return signer;
    }
}

export default Signer;