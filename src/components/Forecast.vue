<template>
    <v-container>
        <forecast-filters @getForecast="getForecast"/>
        <v-container class="d-flex flex-wrap" v-if="forecast">
            <forecast-weather-card v-for="(day, index) in this.forecast.daily.time" :key="index"
                :weather="dailyWeather(forecast, index)" class="col-auto" />
        </v-container>
    </v-container>
</template>
<script>
import ForecastWeatherCard from './ForecastWeatherCard.vue';
import dailyWeather from '../mixins/dailyWeather';
import ForecastFilters from './ForecastFilters.vue';
export default {
    name: "Forecast",
    mixins: [dailyWeather],
    data() {
        return {
            forecast: undefined
        };
    },
    mounted() {
        this.getForecast();
    },
    methods: {
        getForecast() {
            let parametersString = "";
            parametersString += `latitude=${this.$store.state.locations[this.$store.state.forecastFilters.city].lat}`;
            parametersString += `&longitude=${this.$store.state.locations[this.$store.state.forecastFilters.city].lon}`;
            parametersString += `&daily=weathercode,temperature_2m_max,temperature_2m_min`;
            if (this.$store.state.forecastFilters.precipitation) {
                parametersString += `,precipitation_sum`;
            }
            if (this.$store.state.forecastFilters.windSpeed) {
                parametersString += `,windspeed_10m_max`;
            }
            parametersString += `&timezone=auto`;
            parametersString += `&forecast_days=${this.$store.state.forecastFilters.length}`;
            fetch(`https://api.open-meteo.com/v1/forecast?${parametersString}`)
                .then(res => res.json())
                .then(data => {
                    this.forecast = data;
                })
                .catch(() => {
                    this.$store.commit("SET_ERROR_MSG", `Couldn't fetch data`);
                });
        },
    },
    components: { ForecastWeatherCard, ForecastFilters }
}
</script>