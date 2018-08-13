const Document = require('./Document');
const Signer = require('./Signer');

describe('Document class', () => {
    it('creates a new Document instance', () => {
        let document = new Document();
    
        expect(document instanceof Document).toBe(true);
        expect(document.document_id).toBe(null);
        expect(document.title).toBe(null);
        expect(document.message).toBe(null);
        expect(Array.isArray(document.signers)).toBe(true);
    });

    it('create and fill a new Document instance with all it\'s fields', () => {
        let signer = new Signer({
            email: 'person@test.com',
        });

        let document = new Document({
            document_id: '12345',
            title: 'This is the title',
            message: 'This is the message',
            subject: 'This is the subject',
            signers: [ signer ]
        });
    
        expect(document instanceof Document).toBe(true);
        expect(document.document_id).toBe('12345');
        expect(document.title).toBe('This is the title');
        expect(document.message).toBe('This is the message');
        expect(document.signers[0] instanceof Signer).toBe(true);
        expect(document.signers[0].email).toBe('person@test.com');

        let json = {
            document_id: '12345',
            title: 'This is the title',
            message: 'This is the message',
            subject: 'This is the subject',
            signers: [
                {
                    email: 'person@test.com',
                    order: null,
                    role: null,
                    fields: [],
                    existing_fields: []
                }
            ]
        };

        expect(document.toJSON()).toEqual(json);
    });
});