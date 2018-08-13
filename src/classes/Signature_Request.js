class Signature_Request {
    constructor(params = {}) {
        this.embedded = false // default
        this.redirect_for_signing_to_url = null;
        this.redirect_after_signing_to_url = null;
        this.send_emails = true; // default
        this.use_text_tags = false; // default
        this.hide_text_tags = false; // default
        this.send_documents_as_bundle = false; // default
        this.bundle_title = null;
        this.bundle_subject = null;
        this.bundle_message = null;
        this.documents = [];

        this.setParams(params);
    }

    setParams(params) {
        Object.keys(params).forEach(key => {
            let error = null;

            switch (key) {
                case 'documents':
                    error = 'Cannot modify \'documents\' via the setParams method, use addDocument or removeDocument methods instead.';
                    break;
                default:
                    error = null;
                    break;
            }

            if (error) {
                throw new Error(error);
            } else {
                this[key] = params[key];
            }
        });
    }

    update(params) {
        this.setParams(params);
    }

    addDocument(document) {
        this.documents.push(document);
    }

    removeDocument(document_id) {
        console.log(this.documents);
        this.documents = this.documents.filter(document => {
            console.log(`${document.document_id} !== ${document_id}`);
            return document.document_id !== document_id;
        });
    }

    toJSON() {
        let documents = this.documents.map(document => document.toJSON());

        return Object.assign({}, this, { documents });
    }
}

export default Signature_Request;