/**
 * Created by reuvenp on 1/25/2017.
 */
var express = require('express');
var app = express();
var mongo = require('mongoose');
var mqtt = require('mqtt');
mongo.Promise = global.Promise;
var Schema = mongo.Schema;
var path = require('path');
var cookieParser = require('cookie-parser');
var db = mongo.connect('mongodb://localhost:27017/ex7_web_app');
var User = require('./model/user_schema');
var Group = require('./model/group_schema');
var port = 3001;


app.use(cookieParser());
var client = mqtt.connect('mqtt://localhost:1883',
    {
        clientId: 'server_' + port.toString(),
        clean: false
    });
client.on('connect', function () {
    client.subscribe('control');
});


app.get('/', function (req, res) {
    var userID = req.cookies['userID'];
    if (userID)
    {
        globalUserName = userID;
        res.sendFile(__dirname + '/public/index.html');
    }
    else
    {
        res.redirect('/login');
    }
});

app.get('/login', function (req, res) {
    var userID = req.cookies['userID'];
    if (userID)
    {
        res.redirect('/');
    }
    else
    {
        res.sendFile(__dirname + '/public/login.html');
    }
});

app.get('/loginRest', function (req, res) {
    var username = req.query.username;
    User.findOne({username: username}, function (err, user) {
        if (err) throw err;
        if (user == null)
        {
            var newUser = new User({
               username: username,
                isConnected: false,
                groups: []
            });
            newUser.save(function (err) {
                if (err) throw err;
                res.cookie('userID', username);
                res.send();
            });
        }
        else
        {
            res.cookie('userID', username);
            res.send();
        }
    });
});

app.listen(port);


//for debugging mqtt broker
/*var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883',
    { // keepalive: 10 set to 0 to disable
        clientId: 'username',
        // protocolId: 'MQTT'
        // protocolVersion: 4
        clean: false
        // clean: true, set to false to receive QoS 1 and 2 messages while offline
        // reconnectPeriod: 1000 milliseconds, interval between two reconnections
        // connectTimeout: 30 * 1000 milliseconds, time to wait before a CONNACK is received
        // username: the username required by your broker, if any
        // password: the password required by your broker, if any
        // incomingStore: a Store for the incoming packets
        // outgoingStore: a Store for the outgoing packets
        // will: a message that will sent by the broker automatically when the client disconnect badly. The format is:
    });
client.subscribe("mqtt/demo");

client.on("message", function(topic, payload) {
    console.log(([topic, payload].join(": ")));
    //client.end();
});


client.publish("mqtt/demo", "hello world!");*/
