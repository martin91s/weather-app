import { mount } from '@vue/test-utils'
import TextInput from '../components/inputs/TextInput';
import { BFormGroup, BFormInput } from 'bootstrap-vue';

describe('TextInput', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TextInput, {
            stubs: {
                'b-form-group': BFormGroup,
                'b-form-input': BFormInput,
            },
            propsData: {
                label: 'This is a label',
                id: 'testing',
                placeholder: 'placeholder text',
                error: 'some error',
            },
        });
    });

    describe('When the `label` prop is provided', () => {
        test('It is passed in to the form group to display the label', () => {
            expect(wrapper.findComponent({ name: 'b-form-group' }).props('label')).toEqual('This is a label');
        });
    });

    describe('When the `id` prop is provided', () => {
        test('The form group and input ids are populated', () => {
            expect(wrapper.findComponent({ name: 'b-form-group' }).props('id')).toEqual('testing-group');
            expect(wrapper.findComponent({ name: 'b-form-input' }).props('id')).toEqual('testing');
        });
    });

    describe('When the placeholder prop is provided', () => {
        test('The input placeholder prop is populated', () => {
            expect(wrapper.findComponent({ name: 'b-form-input' }).props('placeholder')).toEqual('placeholder text');
        });
    });

    describe('When the error prop is provided and has a value', () => {
        test('The state props on the form group and input is set to false', () => {
            expect(wrapper.findComponent({ name: 'b-form-input' }).props('state')).toBeFalsy();
            expect(wrapper.findComponent({ name: 'b-form-group' }).props('state')).toBeFalsy();
        });
    });


    describe('When the input has a value', () => {
        test('It emits the value', () => {
            wrapper.find('input').setValue('York');

            expect(wrapper.emitted('input')[0][0]).toEqual('York');
        });
    });
})
