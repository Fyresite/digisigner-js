const Signer = require('./Signer');
const Field = require('./Field');
const Existing_Field = require('./Existing_Field');

describe('Signer class', () => {
    it('creates a new Signer instance', () => {
        let signer = new Signer();
    
        expect(signer instanceof Signer).toBe(true);
        expect(signer.email).toBe(null);
        expect(signer.order).toBe(null);
        expect(signer.role).toBe(null);
        expect(Array.isArray(signer.fields)).toBe(true);
        expect(Array.isArray(signer.existing_fields)).toBe(true);
    });

    it('create and fill a new Signer instance with all it\'s fields', () => {
        let field = new Field();
        let existing_field = new Existing_Field();

        let signer = new Signer({
            email: 'tester@email.com',
            order: 2,
            role: 'person',
            fields: [field],
            existing_fields: [existing_field]
        });
    
        expect(signer instanceof Signer).toBe(true);
        expect(signer.email).toBe('tester@email.com');
        expect(signer.order).toBe(2);
        expect(signer.role).toBe('person');
        expect(signer.fields[0] instanceof Field).toBe(true);
        expect(signer.existing_fields[0] instanceof Existing_Field).toBe(true);

        let json = {
            email: 'tester@email.com',
            order: 2,
            role: 'person',
            fields: [
                {
                    type: null,
                    page: null,
                    rectangle: [],
                    api_id: null,
                    label: null,
                    content: null,
                    group_id: null,
                    required: true,
                    read_only: false
                }
            ],
            existing_fields: [
                {
                    api_id: null,
                    label: null,
                    content: null,
                    group_id: null,
                    required: true,
                    read_only: false
                }
            ]
        };

        expect(signer.toJSON()).toEqual(json);
    });
});