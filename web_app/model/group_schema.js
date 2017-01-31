/**
 * Created by reuvenp on 1/31/2017.
 */
var mongo = require('mongoose');
var Schema = mongo.Schema;

var groupSchema = new Schema({
    groupname: { type: String, required: true, unique: true },
    initiator: String,
    subscribers: [String],
    date: Date
});

var Group = mongo.model('Group', groupSchema);
module.exports = Group;