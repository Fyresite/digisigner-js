const Existing_Field = require('./Existing_Field');

describe('Existing_Field class', () => {
    it('creates a new Existing_Field instance', () => {
        let existing_field = new Existing_Field();
    
        expect(existing_field instanceof Existing_Field).toBe(true);
        expect(existing_field.api_id).toBe(null);
        expect(existing_field.label).toBe(null);
        expect(existing_field.content).toBe(null);
        expect(existing_field.group_id).toBe(null);
        expect(existing_field.required).toBe(true);
        expect(existing_field.read_only).toBe(false);
    });

    it('create and fill a new Existing_Field instance with all it\'s fields', () => {
        let existing_field = new Existing_Field({
            api_id: 'fkdlas',
            label: 'This is the label',
            content: 'This is the content',
            group_id: 'groupid',
            required: false,
            read_only: true
        });
    
        expect(existing_field instanceof Existing_Field).toBe(true);
        expect(existing_field.api_id).toBe('fkdlas');
        expect(existing_field.label).toBe('This is the label');
        expect(existing_field.content).toBe('This is the content');
        expect(existing_field.group_id).toBe('groupid');
        expect(existing_field.required).toBe(false);
        expect(existing_field.read_only).toBe(true);

        let json = {
            api_id: 'fkdlas',
            label: 'This is the label',
            content: 'This is the content',
            group_id: 'groupid',
            required: false,
            read_only: true
        };

        expect(existing_field.toJSON()).toEqual(json);
    });
});