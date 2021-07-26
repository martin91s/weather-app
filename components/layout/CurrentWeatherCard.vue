<template>
    <div class="current-weather-card">
        <div class="weather-details">
            <div class="current-location">
                <img src="../../assets/images/icon.png">
                <div class="temperature">
                    <h2>
                        {{ 25 | celcius }}
                    </h2>
                </div>
                <div class="name">
                    York
                </div>
            </div>
        </div>

        <div class="weather-details">
            <ul>
                <li>Feels like: {{ 26 | celcius }}</li>
                <li>Humidity: 67%</li>
                <li>Minimum temperature: {{ 15| celcius }}</li>
                <li>Maximum temperature: {{ 27 | celcius }}</li>
                <li>Wind Speed: 4mph</li>
                <li>Rain volume in past hour: 0mm</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'current-weather-card',

        props: {
            result: {
                type: Object,
                default: () => ({}),
            },
        },

        filters: {
            /**
             * A filter to change the value to celcius.
             *
             * @param {number} val
             *
             * @returns {string}
             */
            celcius(val) {
                return `${ Math.round(val) }\u2103`;
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
