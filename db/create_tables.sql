CREATE TABLE IF NOT EXISTS
    countries(
        id SERIAL PRIMARY KEY,
        code VARCHAR(4) NOT NULL,
        name VARCHAR(128) NOT NULL,
        calling_code VARCHAR(16) NOT NULL,
		capital VARCHAR(128) NOT NULL,
		population INT4 NOT NULL,
		currency VARCHAR(128) NOT NULL,
		flag VARCHAR(128) NOT NULL,
        unique(code)
    );
CREATE TABLE IF NOT EXISTS
    weather(
        id SERIAL PRIMARY KEY,
        country_code VARCHAR(4) NOT NULL,
        date DATE NOT NULL,
        weather_description VARCHAR(256) NOT NULL,
        temp REAL,                       
        temp_min REAL,            
        temp_max REAL,            
        windspeed REAL,
        unique(country_code, date)
    );  
CREATE TABLE IF NOT EXISTS
    exchangerates(
        id SERIAL PRIMARY KEY,
        date DATE NOT NULL,
        aud REAL,
        brl REAL,
        cny REAL,
        gbp REAL,
        usd REAL,
        unique(date) 
 );   