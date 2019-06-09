const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
	uid:{
		type:String,
		required : true,
		trim: true,
		unique: true
	},
	name:{
		type:String,
		required:true
	},
	description:{
		type:String,
	},
	archived:{
		type: Boolean,
		default: false
	}
},{timestamp: true});

export const Task = mongoose.model("taskName", taskSchema);
