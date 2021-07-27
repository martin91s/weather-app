<template>
    <div class="city-search">
        <text-input
            id="city"
            v-model="city"
            :error="error"
            placeholder="Enter UK city name..."
        />
        <b-button
            block
            @click.prevent="search"
            variant="primary"
        >
            Search
        </b-button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import TextInput from '../inputs/TextInput';

    export default {
        name: 'city-search',

        components: { TextInput },

        props: {
            value: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                currentWeather: {},
                city: '',
                error: '',
            };
        },

        methods: {
            ...mapActions('weather', [
                'getCurrentWeather',
            ]),

            /**
             * Search a city for the current weather conditions.
             *
             * @returns {Promise<void>}
             */
            async search() {
                this.error = '';
                this.$emit('input', {});

                try {
                    this.currentWeather = await this.getCurrentWeather(this.city);
                    this.$emit('input', this.currentWeather);
                } catch ({ response }) {
                    this.error = response.data.message;
                }
            }
        },
    };
</script>

