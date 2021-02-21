## Inspiration
We were inspired by websites such as backyard.co which allow users to have video chats and play various games together. However one of the main issues with websites such as these or any video chat rooms such as zoom is that people are reluctant to put on their video. So to combat this issue, we wanted to create a similar website which encouraged people to turn on their video cameras, by making games that heavily relied on or used videos to function. 

## What it does
Right now, the website only allows for the creation of multiple rooms, each room allowing up to 200 participants to join and share screen, use the chat box, and of course, share video and audio. 

## How we built it
We used a combination of javascript api, react frontend, and node express backend. We connected to the cockroachDB in hopes of storing active user sessions. We also used heroku to deploy the site. To get the videos to work we used the Daily.co API. 

## Challenges we ran into
One of the earliest challenges we ran into was learning how to use the Daily.co API. Connecting it to the express server we created and connecting the server to the front end took a good portion of our time. The biggest challenge we ran into however was using cockroachDB. We had many issues just connecting to the database and seeing as neither of us had any prior knowledge or experience with cockroachDB were we unable to get more use out of the database in the time given. 

## Accomplishments that we're proud of
Setting up the video call and chat system using the Daily.co API. We also set up the infrastructure to expand our app with games. 

## What we learned
As this was our first time using cockroachDB, react, and express we learned a lot about developing a full stack project and using APIs. We learned how to connect a backend server to the front end and how to connect to the database as well as heroku deployment. 

## What's next for bestdomaingetsfree.tech
Our next steps would be configuring the database to store active sessions and to implement the games we have created. 
We purchased the domain name but domain.com had a review process we have to wait for so at the time of submission the domain is not working. 
