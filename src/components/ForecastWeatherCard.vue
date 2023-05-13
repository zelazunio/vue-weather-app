<template>
    <v-container class="pa-4">
        <v-container class="teal lighten-5 rounded-lg">
            <v-container class="text-h4">
                 {{ date }}
            </v-container>
            <weather-card :weather="weather" />
        </v-container>
    </v-container>
</template>

<script>
import WeatherCard from './WeatherCard.vue';

export default {
    name: 'ForecastWeatherCard',
    components: {
        WeatherCard
    },
    props: {
        weather: { type: Object, required: true },
    },
    computed: {
        date() {
            if (typeof this.weather.daily.time === 'undefined') return '';
            return new Date(this.weather.daily.time).toLocaleDateString();
        }
    }

}
</script>
