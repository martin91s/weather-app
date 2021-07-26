<template>
    <div class="page-content">
        <b-container>
            <city-search v-model="result" />
            <current-weather-card :result="result" />
        </b-container>
    </div>
</template>

<script>
    import CitySearch from '../components/layout/CitySearch';
    import CurrentWeatherCard from '../components/layout/CurrentWeatherCard';

    export default {
        components: { CurrentWeatherCard, CitySearch },

        data() {
            return {
                result: {},
            };
        },
    }
</script>

<style lang="scss" scoped>
    .page-content {
        margin: 50px auto;
        max-width: 720px;
    }

    .current-weather-card {
        margin-top: 50px;
    }
</style>
