export default {
    /**
     * Gets the current weather of the city provided.
     *
     * @param {object} context
     * @param {string} data
     *
     * @returns {Promise<any>}
     */
    getCurrentWeather(context, data) {
        return this.$axios.$post(`https:///api.openweathermap.org/data/2.5/weather?q=${ data },uk&appid=${ this.$config.WEATHER_API_KEY }&units=metric`);
    },
};
