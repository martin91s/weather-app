<template>
    <div class="current-weather-card">
        <div class="weather-details">
            <div class="current-location">
                <img
                    :src="`http://openweathermap.org/img/wn/${ result.weather[0].icon }@2x.png`"
                    :alt="result.weather[0].description"
                >
                <div class="temperature">
                    <h2>
                        {{ result.main.temp | celcius }}
                    </h2>
                </div>
                <div class="name">
                    {{ result.name }}
                </div>
            </div>
        </div>

        <div class="weather-details">
            <ul>
                <li>Feels like: {{ result.main.feels_like | celcius }}</li>
                <li>Humidity: {{ result.main.humidity }}%</li>
                <li>Minimum temperature: {{ result.main.temp_min | celcius }}</li>
                <li>Maximum temperature: {{ result.main.temp_max | celcius }}</li>
                <li>Wind Speed: {{ result.wind.speed }}mph</li>
                <li>
                    Rain volume in past hour:
                    {{ result.rain ? result.rain['1h'] : 0}}mm
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import celcius from '../../plugins/celcius';

    export default {
        name: 'current-weather-card',

        filters: { celcius },

        props: {
            result: {
                type: Object,
                default: () => ({}),
            },
        },
    };
</script>

<style lang="scss" scoped>
    .current-weather-card {
        border-radius: $border-radius;
        text-align: center;
        color: #ffffff;
    }

    .current-location {
        width: 100%;
        padding: 25px;
    }

    .weather-details {
        display: flex;
        background: darken($secondary, 15%);
        box-shadow: 0 0 5px 2px darken($secondary, 15%);
        margin-bottom: 25px;
    }

    .name {
        font-size: 20px;
        margin-bottom: 25px;
    }

    img {
        width: 120px;
        margin-bottom: 15px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 25px;
        color: #ffffff;
        border-bottom-left-radius: $border-radius;
        display: flex;
        flex-wrap: wrap;
        font-size: 0.75rem;
    }

    li {
        margin: 10px 15px;
        padding: 5px 15px;
        background: rgba(72, 84, 97, 0.7);
        border-radius: $border-radius;
    }
</style>
