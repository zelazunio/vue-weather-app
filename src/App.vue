<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div>
      <v-spacer></v-spacer>
      <v-container class="mr-2 text-h5 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4 col-auto">
        Check the weather...
      </v-container>
    </v-app-bar>
    <v-main class="blue-grey lighten-4">
      <error-message />
      <v-container class="text-h4 text-sm-h2 text-md-h1 text-lg-h1 text-xl-h1">
        Today's weather:
      </v-container>
      <v-container class="d-flex flex-wrap">
        <today-weather-card city-name="Warsaw" class="col-auto" key="TodayInWarsaw" />
        <today-weather-card city-name="Krakow" class="col-auto" key="TodayInKrakow" />
        <today-weather-card city-name="Stockholm" class="col-auto" key="TodayInStockholm" />
      </v-container>
      <v-container>
        <v-container class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-xl-h2">
          Forecast for next {{ $store.state.forecastFilters.length }} days in {{ $store.state.forecastFilters.city }}:
        </v-container>
        <forecast />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TodayWeatherCard from './components/TodayWeatherCard.vue';
import Forecast from './components/Forecast.vue';
import ErrorMessage from './components/ErrorMessage.vue';

export default {
  name: 'App',

  components: {
    TodayWeatherCard,
    Forecast,
    ErrorMessage
  },
};
</script>
