<template>
    <div class="city-search">
        <text-input
            id="city"
            v-model="city"
            :error="error"
            placeholder="Enter city name..."
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
            search() {
                // TODO
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>
