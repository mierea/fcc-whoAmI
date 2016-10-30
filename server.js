var express = require("express")
var app = express()

app.get("/api/whoami", function(req,res) {
    var obj = new Object()
    
    obj.ipaddress = req.headers['x-forwarded-for']
    obj.language = req.headers['accept-language'].substring(0, req.headers['accept-language'].indexOf(','))
    obj.software = /\(([^)]+)\)/g.exec(req.headers["user-agent"])[1]
    
    
    res.json(obj)
})

app.listen(8080)