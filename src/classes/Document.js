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
        let { document_id, title, subject, message } = this;

        // console.log(this.signers);

        let signers = this.signers.map(signer => signer.toJSON());

        // console.log(signers);

        let document = {
            document_id,
            title,
            subject,
            message,
            signers
        };

        // console.log(document);

        return document;
    }
}

export default Document;