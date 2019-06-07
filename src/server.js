import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
//import { connect } from './utils/db';

const todoData = [
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
		created: "Mon May 13 2019 15:00:54",
		completed:false
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
		//await connect()
		app.listen(3000, () => {
			console.log(`REST API on http://localhost:3000/api`)
		})
	} catch (e) {
		console.error(e)
	}
};
