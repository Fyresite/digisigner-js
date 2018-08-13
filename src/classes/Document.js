class Document {
    constructor(params = {}) {
        this.document_id = null;
        this.title = null;
        this.subject = null;
        this.message = null;
        this.signers = [];

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
        let signers = this.signers.map(signer => signer.toJSON());

        return Object.assign({}, this, { signers });
    }
}

export default Document;