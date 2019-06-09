
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const mongoDB_URL= "mongodb://localhost:27017/todos";
const connect = ()=>{
	return mongoose.connect(mongoDB_URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify:false
	});
};

module.exports =connect;
