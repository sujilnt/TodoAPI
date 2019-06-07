import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import  ModelTasks  from "./Database/tasks/tasks";
import connect from "./Database/connect";

const todoData = [
	{
		uid: "1",
		name: "Jogging Time",
		description: "Its time to Jog",
		archived:true
	},{
		uid: "2",
		name: "Cooking",
		description: "Cooking sdvsv",
		archived:false
	}
];

export const app = express();

app.disable('x-powered-by');
app.get("/api",(req,res)=>{
	res.send(todoData);
});
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

export const start = async () => {
	try {
		await connect().then(async ()=>{
			const tasksList = await ModelTasks().create({
				uid: "1",
				name: "Jogging Time",
				description: "Its time to Jog",
				archived:true
			});
			console.log(tasksList);
			app.listen(3000, () => {
				console.log(`REST API on http://localhost:3000/api`)
			});
			
		});
		/*
		*
		* */
		
	} catch (e) {
		console.error(e)
	}
};
