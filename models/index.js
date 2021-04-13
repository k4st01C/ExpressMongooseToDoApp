const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb+srv://kemalaydik:qivQZXSCP5aufm2M@cluster0.zdlp6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports.Todo=require('./todo')
