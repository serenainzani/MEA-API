# MEA-API
 API made in Day 3 of MEA Bootcamp

## Install
 - npm
 - express
 - nedb
 - body-parser

 ## run from terminal

 npm start

 ## run curl

POST
$ curl -s -X POST -H 'Content-type:application/json' -d '{"name":<name>}' http://localhost:8080/create

GET all users
$ curl -s -X GET  http://localhost:8080/read  

GET particular user
$ curl -s -X GET  http://localhost:8080/read/<id>

DELETE a user
$ curl -s -X DELETE  http://localhost:8080/delete/<id>
