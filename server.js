const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://Sam:Njo6IjLxT15ThNz6@cluster0.vzyb6vs.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MogoDB connection secceed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3073;
        server.listen(PORT, function() {
            console.log(
                `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
            );
        });
    }
  }
);