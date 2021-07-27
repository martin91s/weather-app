import { mount } from '@vue/test-utils';
import CitySearch from '../components/layout/CitySearch';
import { BFormGroup, BFormInput, BButton } from 'bootstrap-vue';
import Vuex from 'vuex';
import Vue from 'vue';
import WeatherResponse from './fixtures/WeatherResponse.json';

Vue.use(Vuex);

describe('CitySearch', () => {
    let wrapper;
    let spy;
    let store;
    let weatherModule;

    beforeEach(() => {
        weatherModule = {
            namespaced: true,
            actions: {
                getCurrentWeather: jest.fn().mockImplementation(() => {
                    return WeatherResponse;
                }),
            },
        };

        store = new Vuex.Store({
            modules: {
                weather: weatherModule,
            },
        });

        wrapper = mount(CitySearch, {
            stubs: {
                'b-form-group': BFormGroup,
                'b-form-input': BFormInput,
                'b-button': BButton,
            },
            store,
        });

        spy = jest.spyOn(wrapper.vm, 'search');
    });

    describe('When the input has a value', () => {
        test('The `city` data updates', () => {
            wrapper.find('input').setValue('York');

            expect(wrapper.vm.city).toEqual('York');
        });
    });

    describe('When the form is submitted', () => {
        beforeEach( async () => {
            wrapper.find('input').setValue('York');
            await wrapper.find('form').trigger('submit');
        });

        test('The `search` method is called', async  () => {
            expect(spy).toHaveBeenCalledTimes(1);
        });

        test('The `getCurrentWeather` action is called passing in the city', async () => {
            expect(weatherModule.actions.getCurrentWeather).toHaveBeenCalledWith(expect.any(Object), 'York');
        });

        test('The `currentWeather` data variable is updated with the response', () => {
            expect(wrapper.vm.currentWeather).toEqual(WeatherResponse);
        });

        test('The value is then emitted', () => {
            expect(wrapper.emitted('input')[1][0]).toEqual(WeatherResponse);
        });

        describe('If there is an error from the response', () => {
            beforeEach( async () => {
                weatherModule = {
                    namespaced: true,
                    actions: {
                        getCurrentWeather: jest.fn().mockImplementation(() => {
                            const error = new Error;
                            error.response = {
                                cod: 404,
                                data: {
                                    message: 'city not found',
                                },
                            };

                            throw error;
                        }),
                    },
                };

                store = new Vuex.Store({
                    modules: {
                        weather: weatherModule,
                    },
                });

                wrapper = mount(CitySearch, {
                    stubs: {
                        'b-form-group': BFormGroup,
                        'b-form-input': BFormInput,
                        'b-button': BButton,
                    },
                    store,
                });

                wrapper.find('input').setValue('Not a city');
                await wrapper.find('form').trigger('submit');
            });

            test('The `error` variable is updated', () => {
                expect(wrapper.vm.error).toEqual('city not found');
            });

            test('The text input component has the error prop populated with the error', () => {
                expect(wrapper.findComponent({ name: 'text-input' }).props('error')).toEqual('city not found');
            });
        });
    });
})
