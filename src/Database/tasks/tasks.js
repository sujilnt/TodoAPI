/**
 *
 *const todoData = [
 {
		id: "1",
		name: "Jogging Time",
		description: "Its time to Jog",
		created: "Mon May 13 2019 15:00:54",
		completed:true
	},{
		id: "2",
		name: "Cooking",
		description: "Cooking sdvsv",
		archived: true
	}
 ];
 
 
 * */
const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
	uid:{
		type:String,
		required : true,
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

const ModelTasks = ()=> mongoose.model("taskName",taskSchema);
module.exports= ModelTasks;
