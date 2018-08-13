const Signature_Request = require('./Signature_Request');
const Document = require('./Document');

describe('Signature_Request class', () => {
    it('creates a new Signature_Request instance', () => {
        let signature_request = new Signature_Request();
    
        expect(signature_request instanceof Signature_Request).toBe(true);
        expect(signature_request.embedded).toBe(false);
        expect(signature_request.redirect_for_signing_to_url).toBe(null);
        expect(signature_request.redirect_after_signing_to_url).toBe(null);
        expect(signature_request.send_emails).toBe(true);
        expect(signature_request.use_text_tags).toBe(false);
        expect(signature_request.hide_text_tags).toBe(false);
        expect(signature_request.send_documents_as_bundle).toBe(false);
        expect(signature_request.bundle_title).toBe(null);
        expect(signature_request.bundle_subject).toBe(null);
        expect(signature_request.bundle_message).toBe(null);
        expect(Array.isArray(signature_request.documents)).toBe(true);
    });

    it('create and fill a new Signature_Request instance with all it\'s fields', () => {
        let signature_request = new Signature_Request({
            embedded: true,
            redirect_for_signing_to_url: 'http://signingurl.com',
            redirect_after_signing_to_url: 'http://aftersigningurl.com',
            send_emails: false,
            use_text_tags: true,
            hide_text_tags: true,
            send_documents_as_bundle: true,
            bundle_title: 'Bundle Title',
            bundle_subject: 'Bundle Subject',
            bundle_message: 'Bundle Message'
        });

        signature_request.addDocument(new Document({
            document_id: '5'
        }));

        signature_request.addDocument(new Document({
            document_id: '1'
        }));

        signature_request.removeDocument('1');
    
        expect(signature_request instanceof Signature_Request).toBe(true);
        expect(signature_request.embedded).toBe(true);
        expect(signature_request.redirect_for_signing_to_url).toBe('http://signingurl.com');
        expect(signature_request.redirect_after_signing_to_url).toBe('http://aftersigningurl.com');
        expect(signature_request.send_emails).toBe(false);
        expect(signature_request.use_text_tags).toBe(true);
        expect(signature_request.hide_text_tags).toBe(true);
        expect(signature_request.send_documents_as_bundle).toBe(true);
        expect(signature_request.bundle_title).toBe('Bundle Title');
        expect(signature_request.bundle_subject).toBe('Bundle Subject');
        expect(signature_request.bundle_message).toBe('Bundle Message');
        expect(Array.isArray(signature_request.documents)).toBe(true);
        expect(signature_request.documents.length).toBe(1);
        expect(signature_request.documents[0].document_id).toBe('5');

        let json = {
            embedded: true,
            redirect_for_signing_to_url: 'http://signingurl.com',
            redirect_after_signing_to_url: 'http://aftersigningurl.com',
            send_emails: false,
            use_text_tags: true,
            hide_text_tags: true,
            send_documents_as_bundle: true,
            bundle_title: 'Bundle Title',
            bundle_subject: 'Bundle Subject',
            bundle_message: 'Bundle Message',
            documents: [
                {
                    document_id: '5',
                    message: null,
                    signers: [],
                    subject: null,
                    title: null
                }
            ]
        };

        expect(signature_request.toJSON()).toEqual(json);
    });
});