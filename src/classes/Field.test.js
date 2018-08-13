const Field = require('./Field');

describe('Field class', () => {
    it('creates a new Field instance', () => {
        let field = new Field();
    
        expect(field instanceof Field).toBe(true);
        expect(field.type).toBe(null);
        expect(field.page).toBe(null);
        expect(Array.isArray(field.rectangle)).toBe(true);
        expect(field.api_id).toBe(null);
        expect(field.label).toBe(null);
        expect(field.content).toBe(null);
        expect(field.group_id).toBe(null);
        expect(field.required).toBe(true);
        expect(field.read_only).toBe(false);
    });

    it('create and fill a new Field instance with all it\'s fields', () => {
        let field = new Field({
            type: 'SIGNATURE',
            page: 3,
            rectangle: [0, 0, 200, 100],
            api_id: 'fkdlas',
            label: 'This is the label',
            content: 'This is the content',
            group_id: 'groupid',
            required: false,
            read_only: true
        });
    
        expect(field instanceof Field).toBe(true);
        expect(field.type).toBe('SIGNATURE');
        expect(field.page).toBe(3);
        expect(Array.isArray(field.rectangle)).toBe(true);
        expect(field.api_id).toBe('fkdlas');
        expect(field.label).toBe('This is the label');
        expect(field.content).toBe('This is the content');
        expect(field.group_id).toBe('groupid');
        expect(field.required).toBe(false);
        expect(field.read_only).toBe(true);

        let json = {
            type: 'SIGNATURE',
            page: 3,
            rectangle: [0, 0, 200, 100],
            api_id: 'fkdlas',
            label: 'This is the label',
            content: 'This is the content',
            group_id: 'groupid',
            required: false,
            read_only: true
        };

        expect(field.toJSON()).toEqual(json);
    });

    it('creates a new Field instance with an invalid type', () => {
        expect(() => {
            let field = new Field({
                type: 'NOT_A_VALID_TYPE'
            });
        }).toThrow(TypeError);
    });
});