/**
 * Created by reuvenp on 1/25/2017.
 */







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
