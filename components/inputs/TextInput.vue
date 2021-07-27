<template>
    <b-form-group
        :id="`${ id }-group`"
        :label="label"
        :label-for="id"
        :invalid-feedback="error"
        :state="error ? false : null"
        class="text-input"
    >
        <b-form-input
            :id="id"
            v-model="inputValue"
            :placeholder="placeholder"
            :required="required"
            :state="error ? false : null"
        />
    </b-form-group>
</template>

<script>
    export default {
        name: 'text-input',

        props: {
            value: {
                type: String,
                default: '',
            },

            error: {
                type: String,
                default: '',
            },

            placeholder: {
                type: String,
                default: '',
            },

            id: {
                type: String,
                default: '',
                required: true,
            },

            label: {
                type: String,
                default: '',
            },

            required: {
                type: Boolean,
                default: false,
            }
        },

        computed: {
            inputValue: {
                get() {
                    return this.value;
                },

                set(val) {
                    this.$emit('input', val);
                },
            },
        },
    }
</script>
