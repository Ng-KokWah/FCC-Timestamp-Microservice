# FCC-Timestamp-Microservice
This project was coded as part of the FreeCodeCamp Apis and Microservices Projects - Timestamp Microservice

## To use this:
1. Ensure you have node.js installed. If not install from https://nodejs.org/en/
2. Clone/download this repo
3. (Skip this if you used git clone) Unzip the downloaded file. 
4. Open command prompt (for windows, win + r -> cmd -> enter)
5. Change directory into the FCC-Timestamp-Microservice folder
6. If you do not have express and cors, run the following commands: npm install express, npm install cors
7. Run the command Node server.js, you should get a reply of "Your app is listening on port 50023" (50023 is the port i specified to listen on, NOTE: if you want to dynamically assign ports, change the codes in the server.js file from app.listen(50023... to app.listen(process.env.PORT... )
8. Now go your localhost with the assigned port, 127.0.0.1:50023 and refer to that for usages

If you like to try this project:
1. Clone this base Repo from FCC: https://github.com/freeCodeCamp/boilerplate-project-timestamp/
2. Ensure that you meet all the User Stories below:

# User Stories :
1. The API endpoint is GET [project_url]/api/timestamp/:date_string?
2. A date string is valid if can be successfully parsed by new Date(date_string).
   Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
   In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
4. If the date string is valid the api returns a JSON having the structure 
   {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
   e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
5. If the date string is invalid the api returns a JSON having the structure 
   {"unix": null, "utc" : "Invalid Date" }. It is what you get from the date manipulation functions used above.
