const { connect, connection } = require('mongoose');

connect('mongodb+srv://acuspikecris:MOL628826@clustercris.shb0f7p.mongodb.net/cdj-social');

module.exports = connection;
