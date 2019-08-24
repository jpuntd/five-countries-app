INSERT INTO weather (country_code, date, weather_description, temp, temp_min, temp_max, windspeed)
                VALUES ('AUS', NOW(), 'qwerty', 25, 18.1, 28.4, 0) 
ON CONFLICT (country_code) WHERE 'AUS' DO NOTHING

https://www.postgresql.org/docs/9.5/sql-insert.html
