const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
	uid:{
		type:String,
		trim: true,
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
	},
	createdBy:{
		type: mongoose.SchemaTypes.ObjectId,
		ref: "user",
		required: true
	}
},{timestamp: true});
taskSchema.index({ user: 1, name: 1 },{unique: true} );
export const Task = mongoose.model("taskName", taskSchema);
