import { mount } from '@vue/test-utils'
import CurrentWeatherCard from '../components/layout/CurrentWeatherCard';
import WeatherResponse from '../test/fixtures/WeatherResponse.json';
import celcius from '../plugins/celcius';

describe('CurrentWeatherCard', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(CurrentWeatherCard, {
            propsData: {
                result: WeatherResponse,
            },
        });
    });

    describe('When the `result` prop is provided', () => {
        test('renders the icon of the current weather', () => {
            expect(wrapper.find('img').attributes('src')).toEqual('http://openweathermap.org/img/wn/02d@2x.png');
            expect(wrapper.find('img').attributes('alt')).toEqual(WeatherResponse.weather[0].description);
        });

        test('the h2 is rendered with the current temperature', () => {
            expect(wrapper.find('h2').text()).toEqual(celcius(WeatherResponse.main.temp));
        });

        test('The name of the city is shown', () => {
            expect(wrapper.find('.name').text()).toEqual(WeatherResponse.name);
        });

        test('other weather details are rendered', () => {
            const listItems = wrapper.findAll('li').wrappers;

            expect(listItems[0].text()).toContain(celcius(WeatherResponse.main.feels_like));
            expect(listItems[1].text()).toContain(`${ WeatherResponse.main.humidity }%`);
            expect(listItems[2].text()).toContain(celcius(WeatherResponse.main.temp_min));
            expect(listItems[3].text()).toContain(celcius(WeatherResponse.main.temp_max));
            expect(listItems[4].text()).toContain(`${ WeatherResponse.wind.speed }mph`);
            expect(listItems[5].text()).toContain(`${ WeatherResponse.rain['1h'] }mm`);
        });
    });
});
