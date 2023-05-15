<template>
    <v-container class="pa-4">
        <v-container class="teal lighten-5 rounded-lg">
            <v-container class="text-h4">
                {{ cityName }}
            </v-container>
            <weather-card :weather="dailyWeather(todayWeather)" />
        </v-container>
    </v-container>
</template>

<script>
import WeatherCard from './WeatherCard.vue';
import dailyWeather from '../mixins/dailyWeather';

export default {
    name: 'TodayWeatherCard',
    components: {
        WeatherCard
    },
    props: {
        cityName: { type: String, required: true },
    },
    mixins: [dailyWeather],
    data() {
        return {
            todayWeather: null
        }
    },
    created() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.cityCoordinates.lat}&longitude=${this.cityCoordinates.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto&forecast_days=1`)
            .then(res => res.json())
            .then(data => {
                this.todayWeather = data;
            })
            .catch(() => {
                this.$store.commit('SET_ERROR_MSG', `Couldn't fetch data`);
            })
    },
    computed: {
        cityCoordinates() {
            return {
                lat: this.$store.state.locations[this.cityName].lat,
                lon: this.$store.state.locations[this.cityName].lon
            }
        }
    },

}
</script>
