/**
 * Created by reuvenp on 1/26/2017.
 */
var mongo = require('mongoose');
var Schema = mongo.Schema;

var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    isConnected: Boolean,
    groups: [String]
});

var User = mongo.model('User', userSchema);
module.exports = User;