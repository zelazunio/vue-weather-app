export default {
    methods: {
        dailyWeather(weather, index = 0) {
            if (!weather) return undefined;
            
            let result = { daily: {}, daily_units: {} };
            result.daily.weathercode = weather.daily.weathercode[index];
            result.daily.temperature_2m_max = weather.daily.temperature_2m_max[index];
            result.daily.temperature_2m_min = weather.daily.temperature_2m_min[index];
            result.daily.precipitation_sum = weather.daily.precipitation_sum ? weather.daily.precipitation_sum[index] : undefined;
            result.daily.windspeed_10m_max = weather.daily.windspeed_10m_max ? weather.daily.windspeed_10m_max[index] : undefined;
            result.daily.time = weather.daily.time ? weather.daily.time[index] : undefined;

            result.daily_units.weathercode = weather.daily.weathercode[index];
            result.daily_units.temperature_2m_max = weather.daily_units.temperature_2m_max;
            result.daily_units.temperature_2m_min = weather.daily_units.temperature_2m_min;
            result.daily_units.precipitation_sum = weather.daily_units.precipitation_sum || undefined;
            result.daily_units.windspeed_10m_max = weather.daily_units.windspeed_10m_max || undefined;
            return result;
        }
    }
}