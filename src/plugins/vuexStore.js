import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    locations: {
        Warsaw: {lat: '52.23', lon: '21.01'},
        Krakow: {lat: '50.06', lon: '19.94'},
        Stockholm: {lat: '59.33', lon: '18.07'}
    },
    weatherIcons: {
      0: 'mdi-weather-sunny',
      1: 'mdi-weather-cloudy',
      2: 'mdi-weather-cloudy',
      3: 'mdi-weather-cloudy',
      45: 'mdi-weather-fog',
      48: 'mdi-weather-fog',
      51: 'mdi-weather-pouring',
      53: 'mdi-weather-pouring',
      55: 'mdi-weather-pouring',
      56: 'mdi-weather-pouring',
      57: 'mdi-weather-pouring',
      61: 'mdi-weather-pouring',
      63: 'mdi-weather-pouring',
      65: 'mdi-weather-pouring',
      66: 'mdi-weather-pouring',
      67: 'mdi-weather-pouring',
      71: 'mdi-snowflake',
      73: 'mdi-snowflake',
      75: 'mdi-snowflake',
      77: 'mdi-snowflake',
      80: 'mdi-weather-pouring',
      81: 'mdi-weather-pouring',
      82: 'mdi-weather-pouring',
      83: 'mdi-weather-pouring',
      85: 'mdi-snowflake',
      86: 'mdi-snowflake',
      95: 'mdi-weather-lightning',
      96: 'mdi-weather-lightning',
      99: 'mdi-weather-lightning',
    },
    forecastFilters: {
      city: '',
      length: '',
      temperatures: true,
      precipitation: false,
      windSpeed: false
    },
    forecastLengthOptions: {
      3: '3 days',
      7: '7 days',
      14: '14 days',
      16: '16 days'
    },
    errorMsg: undefined,
  },
  mutations: {
    SET_FORECAST_FILTER_VALUES(state, payload) {
      state.forecastFilters[payload.key] = payload.value;
    },
    SET_ERROR_MSG(state, payload) {
      if (state.errorMsg) {
        state.errorMsg += `<br>${payload}`;
      }
      else {
        state.errorMsg = payload;
      }
    },
    CLEAR_ERROR_MSG(state) {
      state.errorMsg = undefined;
    }
  }
});