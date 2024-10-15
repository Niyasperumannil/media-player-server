// import json server
const jsonserver = require('json-server')
//create server
const mediaplayerServer = jsonserver.create()
//create middleware to convert the json format
const middleware = jsonserver.defaults()
//import db,json file
const router = jsonserver.router("db.json")

//set port for the server
const PORT =3000 || process.env.PORT
//server use middleware
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)

//listen()
mediaplayerServer.listen(PORT,()=>{
    console.log(`server running succesfuly at port number ${PORT}`);
    
})