<template>
    <v-container >
        <v-skeleton-loader class="mx-auto" type="card" v-if="!weather" />
        <v-container v-if="weather" class="rounded-lg teal lighten-5">
            <v-row class="d-flex flex-nowrap">
                <v-col class="d-flex align-center justify-center" style="width:64px">
                    <v-icon x-large>{{ $store.state.weatherIcons[weather.daily.weathercode] }}</v-icon>
                </v-col>
                <v-col>
                    <v-row class="d-flex flex-nowrap">
                        <v-col class="align-center">
                            Max.
                        </v-col>
                        <v-col class="align-center">
                            {{ weather.daily.temperature_2m_max }}&nbsp;{{ weather.daily_units.temperature_2m_max }}
                        </v-col>
                    </v-row>
                    <v-row class="d-flex flex-nowrap">
                        <v-col>
                            Min.
                        </v-col>
                        <v-col>
                            {{ weather.daily.temperature_2m_min }}&nbsp;{{ weather.daily_units.temperature_2m_min }}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="d-flex flex-nowrap" v-if="typeof weather.daily.precipitation_sum !== 'undefined'">
                <v-col>
                    Precipitation
                </v-col>
                <v-col>
                    {{ weather.daily.precipitation_sum }}&nbsp;{{ weather.daily_units.precipitation_sum }}
                </v-col>
            </v-row>
            <v-row class="d-flex flex-nowrap" v-if="typeof weather.daily.windspeed_10m_max !== 'undefined'">
                <v-col>
                    Wind
                </v-col>
                <v-col>
                    {{ weather.daily.windspeed_10m_max }}&nbsp;{{ weather.daily_units.windspeed_10m_max }}
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
export default {
    name: 'WeatherCard',
    props: {
        weather: { required: true }
    }
}
</script>