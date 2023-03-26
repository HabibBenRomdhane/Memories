* npm init -y : to initilize an empty package json and to install all the necessary dependencies.

* npm i body-parser cors express mongoose nodemon
dependencies: 
body-parser: enable us to send post requests.
cors: enable cross origin requests.
express: we are gonna use it as a framework for creating the routing of the application.
mongoose: to create models for our posts.
nodemon: we use it so that we don't have to manually reset the server everytime we gonna make a change instead nodemon gonna do it.

"test": "echo \"Error: no test specified\" && exit 1" delete this test script and add a start script
"start": "nodemon index.js"

const express = require('express'); this is the usual syntax but in the newest versions of node we can use the import syntax
and to enable it you have to add type : "module" in the package.json below the "main" line.
"type": "module", 


setup the backend :
connect to the database, create a mongoDB cluster, setup the models and create some documents.

URL encoding is a method of encoding special characters in a URL (Uniform Resource Locator) so that they can be safely transmitted 
over the internet as part of a GET or POST request. In URL encoding, special characters like spaces, question marks, slashes, 
etc. are replaced with a percent symbol (%) followed by a two-digit hexadecimal value that represents the character in ASCII. 
This allows the transmission of URLs containing non-ASCII characters, such as foreign language characters, as well as 
characters that have special meanings in the URL context.

body-parser is a middleware module in the Express.js framework for Node.js that helps to parse incoming request bodies 
and make the data available in the request object. It provides the following parsing functions:
json(): parses the request body as JSON and makes the result available in req.body.
urlencoded(): parses the request body as URL-encoded data (x-www-form-urlencoded) and makes the result available in req.body.
Using body-parser makes it easy to extract information from the request body and use it in your application logic. 
For example, you might use it to extract form data sent by a client, or to extract data sent in a JSON format as part of a REST API request.

MongoDB:
- build a cluster / shared cluster free / create cluster : start the deployment of the cluster
- database access / add new db user (username :memoriesapp, password: memoriesapp123) / read an dwrite to any db 
- network access / add ip address / add current ip address
- cluster / connect / connect your application ( to connect it to our server side express and node app) / copy the link / paste it in index.js

process.env.PORT is an environment variable in Node.js that specifies the port number for the application to listen on. 
This is commonly used for web servers or other network-based applications. The value of process.env.PORT is usually determined 
by the hosting environment, such as the cloud provider or hosting service, and is used to specify the network port that 
the application should bind to for incoming requests. If the environment variable is not set, a default value of 3000 is often used.

useNewUrlParser and useUnifiedTopology they are not required but if we don't set them up 
we're gonna get somme errors in the console or rather warnings.