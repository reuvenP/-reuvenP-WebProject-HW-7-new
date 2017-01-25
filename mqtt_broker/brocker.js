/**
 * Created by reuvenp on 1/25/2017.
 */
var mosca = require('mosca');

var pubsubsettings = { // define mqtt server backend at MongoDB mqtt DB
    type: 'mongo',
    url: 'mongodb://localhost:27017/ex7mqtt_brocker?auto_reconnect=true',
    pubsubCollection: 'ex7mqtt_brocker_collection',
    mongo: {}
};

var settings = {
    port: 1883,
    backend: pubsubsettings,
    persistence: {
        factory: mosca.persistence.Mongo,
        url: 'mongodb://localhost:27017/ex7mqtt_brocker'
    },
    http: {
        port: 3000,
        bundle: true,
        static: './'
    }
};

var server = new mosca.Server(settings);

