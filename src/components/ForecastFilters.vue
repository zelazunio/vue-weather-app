<template>
    <v-expansion-panels>
        <v-expansion-panel class="blue-grey lighten-3">
            <v-expansion-panel-header>
                Filters
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-select label="City" :items="cities" :value="cities[0]" @change="updateCity"/>
                <v-select label="Forecast length" :items="forecastLengthOptions" :value="forecastLengthOptions[1]" @change="updateForecastLength" />
                <v-container class="d-flex flex-wrap">
                    <v-checkbox label="Precipitation" :value="$store.state.forecastFilters.precipitation" @change="updateFilterPrecipitationValue" class="col-auto"/>
                    <v-checkbox label="Wind speed" :value="$store.state.forecastFilters.windSpeed" @change="updateFilterWindSpeedValue" class="col-auto"/>
                    <v-btn @click="$emit('getForecast')" class="mt-5 ml-5 green accent-3">Get forecast</v-btn>
                </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    name: 'ForecastFilters',
    created() {
        this.updateCity(this.cities[0]);
        this.updateForecastLength(this.forecastLengthOptions[1].value)
    },
    computed: {
        cities() {
            return Object.keys(this.$store.state.locations)
        },
        forecastLengthOptions() {
            return Object.entries(this.$store.state.forecastLengthOptions).map((entry) => ({ text: entry[1], value: entry[0] }))
        }
    },
    methods: {
        updateCity(cityName) {
            this.$store.commit('SET_FORECAST_FILTER_VALUES', {key: 'city', value: cityName})
        },
        updateForecastLength(forecastLegnth) {
            this.$store.commit('SET_FORECAST_FILTER_VALUES', {key: 'length', value: forecastLegnth})
        },
        updateFilterPrecipitationValue(precipitation) {
            this.$store.commit('SET_FORECAST_FILTER_VALUES',{key: 'precipitation', value: !precipitation ? false : true})
        },
        updateFilterWindSpeedValue(windSpeed) {
            this.$store.commit('SET_FORECAST_FILTER_VALUES',{key: 'windSpeed', value: !windSpeed ? false : true})
        },
    }
}
</script>