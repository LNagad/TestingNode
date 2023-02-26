const http = require("http")
const requestHandler = require("./routes/route")

const server = http.createServer(requestHandler)

server.listen(3000)