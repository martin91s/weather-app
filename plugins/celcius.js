/**
 * Returns rounded number and displays it as celcius.
 *
 * @param {number} val
 *
 * @returns {string}
 */
export const celcius = (val) => {
    if (!val) {
        return '';
    }

    return `${ Math.round(val) }\u2103`;
};

export default celcius;
