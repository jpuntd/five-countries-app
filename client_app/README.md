## Design

As the goal was to reach out to 3 web services, store the data and combine the data in a report, it seemed natural to me to have the following design:

A client app with a webserver. When the webserver receives a request from the client app, it checks if the information is available in the db. If not, it gets the data from the external webservice and caches it in the db. External webservice is only called when the information is not yet stored in the db.

There was however no way to get historical data from openweathermap.org. So we would need to call that webservice periodically to make sure we have weather info for everyday. 

That's why I decided to use a cronjob responsible for accessing the webservices on a daily basis and storing the necessary data in the db. 

The cron script can be run in the project directory: `npm run cron`

The webserver is a small express webserver with different async routes responsible for getting the results from the database and serving it to the client app.
The webserver can be started by running: `npm run server`

The client app was bootstrapped with Create React App.
In the project directory, you can run:
`cd ./client_app && npm start` to run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.